import type { DetailedHTMLProps } from '@hairy/react-lib'
import Header from '@/components/layout/components/Header'
import { cn } from '@/utils'
import { Accordions } from './components/Accordions'

export function PageMobile(props: DetailedHTMLProps) {
  return (
    <div className={cn('text-auto flex-col', props.className)}>
      <div className="absolute w-full">
        <Header />
      </div>

      <Accordions />

    </div>
  )
}
