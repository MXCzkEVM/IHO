import type { ReactNode } from 'react'
import { BootstrapProvider, Layout, WagmiConfigProvider } from '@/components'
import { config } from '@/config'

import { Injector, useMounted } from '@hairy/react-lib'
import { OverlaysProvider } from '@overlastic/react'
import { darkTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { Button, ConfigProvider, theme } from 'antd'
import Head from 'next/head'
import '@unocss/reset/tailwind.css'

import '@rainbow-me/rainbowkit/styles.css'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: any) {
  const layout = Component.layout || defaultLayout
  const mounted = useMounted()

  return (
    <>
      <Head>
        <title>Moonchain IHO</title>
        <meta name="description" content="The mining revolution begins with Moonchain’s Initial Hardware Offering (IHO), delivering the world’s first free, cutting-edge physical hardware miners to holders of Moonchain tokens via an Ethereum-based smart contract." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://explorer.moonchain.com/assets/favicon/favicon.ico" />
      </Head>
      <Injector
        install={[
          { component: WagmiConfigProvider, props: { config } },
          { component: RainbowKitProvider, props: { theme: darkTheme({ accentColor: '#234F9B' }) } },
          { component: ConfigProvider, props: { theme: { algorithm: theme.darkAlgorithm, token: { colorPrimary: '#234F9B' } } } },
          { component: BootstrapProvider },
          { component: OverlaysProvider },
        ]}
      >
        {mounted && layout(<Component {...pageProps} />)}
      </Injector>
    </>
  )
}

function defaultLayout(page: ReactNode) {
  return <Layout>{page}</Layout>
}
