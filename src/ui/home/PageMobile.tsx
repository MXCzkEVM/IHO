import type { PropWithHtmlProps } from '@hairy/react-lib'
import Footer from '@/components/layout/components/Footer'
import Header from '@/components/layout/components/Header'
import { cn } from '@/utils'
import { Accordions } from './components/Accordions'
import { PageMobileGraphic } from './PageMobileGraphic'
import { PageMobileHero } from './PageMobileHero'

export function PageMobile(props: PropWithHtmlProps) {
  return (
    <div className={cn('flex-col', props.className)}>
      <div className="absolute w-full">
        <Header />
        <div className="text-2.1vw">
          <PageMobileHero />

        </div>
      </div>

      <div className="text-2.1vw">
        <PageMobileGraphic />
        <Accordions />
      </div>

      <Footer className="mx-8" />
    </div>
  )
}
