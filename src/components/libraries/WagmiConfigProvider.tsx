import type { PropsWithChildren } from 'react'
import type { WagmiProviderProps } from 'wagmi'
import { authenticationAdapter, cache } from '@/config'
import { parseTryJson } from '@/utils'
import { useFetchRequestIntercept, useFetchResponseIntercept } from '@hairy/react-lib'
import { SubscribeWagmiConfig } from '@harsta/client/wagmi'
import { RainbowKitAuthenticationProvider } from '@rainbow-me/rainbowkit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useSnapshot } from 'valtio'
import { WagmiProvider } from 'wagmi'

export function WagmiConfigProvider(props: PropsWithChildren<WagmiProviderProps>) {
  const client = new QueryClient()
  const store = useSnapshot(cache)

  useFetchRequestIntercept((fetch, input, init) => {
    return fetch(input, {
      headers: Object.assign({ token: store.token }, init?.headers),
      ...init,
    })
  })

  useFetchResponseIntercept(async (response) => {
    const text = await response.clone().text()
    const data = parseTryJson(text)

    if (data?.statusCode)
      throw data

    return response
  })

  return (
    <WagmiProvider {...props}>
      <QueryClientProvider client={client}>
        <RainbowKitAuthenticationProvider
          adapter={authenticationAdapter}
          status={store.status}
        >
          <SubscribeWagmiConfig />
          {props.children}
        </RainbowKitAuthenticationProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
