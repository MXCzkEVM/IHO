import { proxy, snapshot, subscribe, useSnapshot } from 'valtio'
import { proxyWithPersistant } from './proxyWithPersistant'
import { useMount } from 'react-use'

export interface DefineAsyncStoreOptions<T> {
  persistent?: string
  immediate?: boolean
  initial?: T
}
export interface DefineAsyncStore<T> {
  (): [state: T, fetch: () => Promise<void>]
  store: ReturnType<typeof proxy>
  subscribe: (fn: (state: T) => void) => () => void
  packer: () => () => Promise<void>
  snapshot: () => T
}

export function defineAsyncStore<T>(
  use: () => () => Promise<T>,
  options: DefineAsyncStoreOptions<T> = {},
) {
  const base = {
    value: options.initial as T,
    initialized: false,
    loading: false,
  }

  const store = options.persistent ? proxyWithPersistant(options.persistent, base) : proxy(base)
  function packer() {
    const fn = use()
    async function fetch() {
      store.loading = true
      return fn()
        .then(value => store.value = value)
        .finally(() => store.loading = false)
    }
    return fetch
  }
  function useAsyncState() {
    const state = useSnapshot(store)
    const fetch = packer()
    useMount(() => {
      if (!state.initialized && options.immediate) {
        store.initialized = true
        fetch()
      }
    })
    function reset(value: T) {
      store.value = value
    }
    return [state, fetch, reset] as const
  }
  useAsyncState.store = store
  useAsyncState.subscribe = (fn: (state: T) => void) => subscribe(store, () => fn(store.value))
  useAsyncState.snapshot = () => snapshot(store)
  useAsyncState.packer = packer
  return useAsyncState
}


