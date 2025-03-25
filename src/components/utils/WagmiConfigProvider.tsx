import type { PropsWithChildren } from 'react'
import type { WagmiProviderProps } from 'wagmi'
import store from '@/store'
import { useStore } from '@hairy/react-lib'
import { SubscribeWagmiConfig } from '@harsta/client/wagmi'
import { createAuthenticationAdapter, RainbowKitAuthenticationProvider } from '@rainbow-me/rainbowkit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'

const authenticationAdapter = createAuthenticationAdapter(store.authentication.$actions)

export function WagmiConfigProvider(props: PropsWithChildren<WagmiProviderProps>) {
  const client = new QueryClient()
  const state = useStore(store.authentication)
  return (
    <WagmiProvider {...props}>
      <QueryClientProvider client={client}>
        <RainbowKitAuthenticationProvider
          adapter={authenticationAdapter}
          status={state.status}
        >
          <SubscribeWagmiConfig />
          {props.children}
        </RainbowKitAuthenticationProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
