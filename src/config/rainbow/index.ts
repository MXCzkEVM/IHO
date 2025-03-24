import type { AuthenticationAdapter } from 'node_modules/@rainbow-me/rainbowkit/dist/components/RainbowKitProvider/AuthenticationContext'
import { getUserLogout, getUserNonce, postUserVerify } from '@/api'
import { proxyWithPersistant } from '@/hooks'
import { createAuthenticationAdapter } from '@rainbow-me/rainbowkit'
import { createSiweMessage } from 'viem/siwe'

const cache = proxyWithPersistant('authentication', {
  address: '',
  status: 'unauthenticated' as 'unauthenticated' | 'loading' | 'authenticated',
  token: '',
})

export const authenticationAdapter = createAuthenticationAdapter({
  getNonce: () => getUserNonce(),

  createMessage: ({ nonce, address, chainId }) => {
    const siwe = createSiweMessage({
      domain: window.location.host,
      address,
      statement: 'Sign in with Ethereum to the app.',
      uri: window.location.origin,
      version: '1',
      chainId,
      nonce,
    })

    cache.address = address

    return siwe
  },

  verify: async ({ message, signature }) => {
    cache.status = 'loading'
    try {
      const token = await postUserVerify({ message, signature })
      cache.token = token
      cache.status = 'authenticated'
      return true
    }
    catch {
      cache.status = 'unauthenticated'
      return false
    }
  },

  signOut: async () => {
    await getUserLogout()
    cache.status = 'unauthenticated'
    cache.address = ''
  },
}) as AuthenticationAdapter<string> & { cache: typeof cache }

authenticationAdapter.cache = cache
