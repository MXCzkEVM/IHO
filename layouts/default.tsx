import { Navbar } from '@/components/navbar'

import { fonts } from '@/config/fonts'
import clsx from 'clsx'

import { Footer } from './components/footer'
import { Head } from './components/head'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className={clsx(
        'relative flex flex-col h-screen',
        fonts.merriweather.className,
      )}
    >
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  )
}
