import type { ReactNode } from 'react'

import { PageDesktop } from '@/ui/home/PageDesktop'
import { PageMobile } from '@/ui/home/PageMobile'

function Page() {
  return (
    <>
      <PageDesktop className="lt-lg:hidden" />
      <PageMobile className="lg:hidden" />
    </>
  )
}

Page.layout = (node: ReactNode) => node

export default Page
