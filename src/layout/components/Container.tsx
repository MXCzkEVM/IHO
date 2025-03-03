import type { PropsWithChildren } from 'react'
import { cn } from '@shadcn/utils'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function Container({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <div className={cn('flex-col h-screen', inter.className, className)}>{children}</div>
}

export default Container
