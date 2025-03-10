import type { PropsWithChildren } from 'react'
import { cn } from '@/utils/util'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function Container({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <div className={cn('flex-col min-h-screen', inter.className, className)}>{children}</div>
}

export default Container
