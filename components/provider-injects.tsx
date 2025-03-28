import type { PropsWithChildren } from 'react'
import { wagmiConfig } from '@/config/wagmi'
import store from '@/store'
import { Injector, useStore } from '@hairy/react-lib'

import { HeroUIProvider } from '@heroui/system'
import { OverlaysProvider } from '@overlastic/react'

import {
  createAuthenticationAdapter,
  darkTheme as rainbowDarkTheme,
  RainbowKitAuthenticationProvider,
  RainbowKitProvider,
  lightTheme as rainbowLightTheme,
} from '@rainbow-me/rainbowkit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { theme as antdTheme, ConfigProvider as AntdUIProvider } from 'antd'

import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import React from 'react'
import { WagmiProvider } from 'wagmi'

const antdDarkTheme = {
  algorithm: antdTheme.darkAlgorithm,
  token: { colorPrimary: '#234F9B' },
}
const antdLightTheme = {
  algorithm: antdTheme.defaultAlgorithm,
  token: { colorPrimary: '#234F9B' },
}

const adapter = createAuthenticationAdapter(store.authentication.$actions)

export function ProviderInjects(props: PropsWithChildren) {
  const authentication = useStore(store.authentication)
  const client = new QueryClient()
  const router = useRouter()
  const theme = useTheme().resolvedTheme

  return (
    <Injector
      install={[
        { component: WagmiProvider, props: { config: wagmiConfig } },
        { component: QueryClientProvider, props: { client } },
        { component: RainbowKitAuthenticationProvider, props: { adapter, status: authentication.status } },
        { component: RainbowKitProvider, props: { theme: theme === 'dark' ? rainbowDarkTheme() : rainbowLightTheme() } },
        { component: AntdUIProvider, props: { theme: theme === 'dark' ? antdDarkTheme : antdLightTheme } },
        { component: HeroUIProvider, props: { navigate: router.push } },
        { component: OverlaysProvider },
      ]}
    >
      {props.children}
    </Injector>
  )
}
