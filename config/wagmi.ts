/* eslint-disable ts/ban-ts-comment */
import { chains } from '@harsta/client'
import { connectorsForWallets, getDefaultWallets } from '@rainbow-me/rainbowkit'

import { createConfig } from 'wagmi'

export const rainbowWallets = getDefaultWallets().wallets
export const wagmiConnectors = connectorsForWallets(rainbowWallets, { appName: 'Starter', projectId: ' ' })

export const wagmiConfig = createConfig({
  // @ts-expect-error
  chains: Object.values(chains),
  connectors: wagmiConnectors,
  ssr: true,
})
