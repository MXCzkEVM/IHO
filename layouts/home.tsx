import { Navbar } from '@/components/navbar'

import { fonts } from '@/config/fonts'
import clsx from 'clsx'

import { Footer } from './components/footer'
import { Head } from './components/head'

export default function HomeLayout({
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
      <Navbar className="absolute bg-transparent backdrop-filter-none" />

      <main className="h-full">{children}</main>
      <Footer />
    </div>
  )
}
