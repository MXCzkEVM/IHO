import type { PropWithHtmlProps } from '@hairy/react-lib'

import type { PropsWithChildren } from 'react'
import clsx from 'clsx'
import { Footer } from './components/footer'
import { Head } from './components/head'
import { Navbar } from './components/navbar'

export default function HomeLayout({ children, className }: PropWithHtmlProps<PropsWithChildren>) {
  return (
    <div
      className={clsx('relative flex flex-col h-screen font-barlow', className)}
    >
      <Head />
      <Navbar className="absolute bg-transparent backdrop-filter-none" />
      {/* TODO transition with linear-gradient */}
      <div className="relative">
        <div className="bg-light dark:bg-dark h-[100vh] w-full absolute top-0" />
        <main className="container mx-auto max-w-7xl px-6">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}
