import type { AppProps } from 'next/app'
import { ProviderBootstrap } from '@/components/provider-bootstrap'
import { ProviderInjects } from '@/components/provider-injects'
import { Injector } from '@hairy/react-lib'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Injector install={[
      NextThemesProvider,
      ProviderInjects,
      ProviderBootstrap,
    ]}
    >
      <Component {...pageProps} />
    </Injector>
  )
}
