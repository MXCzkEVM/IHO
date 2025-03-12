import type { DetailedHTMLProps } from '@hairy/react-lib'
import Footer from '@/components/layout/components/Footer'
import Header from '@/components/layout/components/Header'
import { cn } from '@/utils'
import { Accordions } from './components/Accordions'
import { PageMobileGraphic } from './PageMobileGraphic'
import { PageMobileHero } from './PageMobileHero'

export function PageMobile(props: DetailedHTMLProps) {
  return (
    <div className={cn('text-2.1vw flex-col', props.className)}>
      <div className="absolute w-full">
        <Header />
        <PageMobileHero />
      </div>

      <PageMobileGraphic />

      <Accordions />

      <Footer />
    </div>
  )
}
