import type { AppProps } from 'next/app'
import { BootstrapProvider } from '@/components/bootstrap'
import { InjectsProvider } from '@/components/injects-provider'
import { Injector } from '@hairy/react-lib'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Injector install={[
      NextThemesProvider,
      InjectsProvider,
      BootstrapProvider,
    ]}
    >
      <Component {...pageProps} />
    </Injector>
  )
}
