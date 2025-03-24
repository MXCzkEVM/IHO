import type { PropsWithChildren } from 'react'
import { authenticationAdapter } from '@/config'
import { parseTryJson } from '@/utils'
import { useFetchRequestIntercept, useFetchResponseIntercept, useWhenever } from '@hairy/react-lib'
import { useSnapshot } from 'valtio'
import { useStoreUser } from '@/store'

export function BootstrapProvider(props: PropsWithChildren) {
  const authentication = useSnapshot(authenticationAdapter.cache)
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

  useWhenever(authentication.token, fetchUser, {immediate: true})

  return props.children
}
