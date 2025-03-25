import store from '@/store'
import { createAuthenticationAdapter } from '@rainbow-me/rainbowkit'

export const authenticationAdapter = createAuthenticationAdapter({
  getNonce: () => store.authentication.createNonce(),
  createMessage: ({ nonce, address, chainId }) => store.authentication.createMessage(address, nonce, chainId),
  verify: async ({ message, signature }) => store.authentication.verify(message, signature),
  signOut: async () => store.authentication.signOut(),
})
