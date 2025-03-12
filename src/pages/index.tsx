import type { ReactNode } from 'react'

import { PageDesktop } from '@/ui/home/Page'

function Page() {
  return (<PageDesktop />)
}

Page.layout = (node: ReactNode) => node

export default Page
