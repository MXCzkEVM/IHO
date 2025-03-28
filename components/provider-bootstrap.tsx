import type { PropsWithChildren } from 'react'
import { useStoreUser } from '@/hooks/use-store-user'

import store from '@/store'

import {
  useFetchRequestIntercept,
  useFetchResponseIntercept,
  useStore,
  useWhenever,
} from '@hairy/react-lib'
import { jsonTryParse } from '@hairy/utils'

export function ProviderBootstrap(props: PropsWithChildren) {
  const authentication = useStore(store.authentication)
  const fetchUser = useStoreUser()[1]

  useFetchRequestIntercept((fetch, input, init) => {
    const headers = Object.assign({ token: authentication.token }, init?.headers)
    return fetch(input, { ...init, headers })
  })

  useFetchResponseIntercept(async (response) => {
    const text = await response.clone().text()
    const data = jsonTryParse(text)
    if (data?.statusCode)
      throw data

    return response
  })

  useWhenever(authentication.token, fetchUser, { immediate: true })

  return (
    props.children
  )
}
