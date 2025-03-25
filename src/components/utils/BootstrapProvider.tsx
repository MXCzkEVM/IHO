import type { PropsWithChildren } from 'react'
import store, { useStoreUser } from '@/store'
import { parseTryJson } from '@/utils'
import { useFetchRequestIntercept, useFetchResponseIntercept, useStore, useWhenever } from '@hairy/react-lib'

export function BootstrapProvider(props: PropsWithChildren) {
  const authentication = useStore(store.authentication)
  const fetchUser = useStoreUser()[1]

  useFetchRequestIntercept((fetch, input, init) => {
    const headers = Object.assign({ token: authentication.token }, init?.headers)
    return fetch(input, { ...init, headers })
  })

  useFetchResponseIntercept(async (response) => {
    const text = await response.clone().text()
    const data = parseTryJson(text)

    if (data?.statusCode)
      throw data

    return response
  })

  useWhenever(authentication.token, fetchUser, { immediate: true })

  return props.children
}
