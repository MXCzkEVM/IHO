import type { DetailedHTMLProps } from '@hairy/react-lib'
import Footer from '@/components/layout/components/Footer'
import Header from '@/components/layout/components/Header'
import { cn } from '@/utils'
import { Accordions } from './components/Accordions'
import { PageGraphic } from './PageGraphic'
import { PageHero } from './PageHero'

export function PageDesktop(props: DetailedHTMLProps) {
  return (
    <div className={cn('text-auto flex-col', props.className)}>
      <div className="absolute w-full ">
        <Header />
        <PageHero />
      </div>

      <PageGraphic />

      <Accordions />

      <Footer />
    </div>
  )
}
