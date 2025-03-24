import type { PropsWithChildren } from 'react'
import type { WagmiProviderProps } from 'wagmi'
import { authenticationAdapter } from '@/config'
import { SubscribeWagmiConfig } from '@harsta/client/wagmi'
import { RainbowKitAuthenticationProvider } from '@rainbow-me/rainbowkit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useSnapshot } from 'valtio'
import { WagmiProvider } from 'wagmi'

export function WagmiConfigProvider(props: PropsWithChildren<WagmiProviderProps>) {
  const client = new QueryClient()
  const store = useSnapshot(authenticationAdapter.cache)
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
