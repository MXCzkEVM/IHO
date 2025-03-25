import type { PropWithHtmlProps } from '@hairy/react-lib'
import { cn } from '@/utils'

function Footer(props: PropWithHtmlProps) {
  return (
    <footer className={cn('py-5 border-t mt-20 relative z1', props.className)}>
      <span className="text-3.5 px-7.5 lg:px-15">
        © 2025
        {' '}
        <a href="https://moonchain.com/" className="text-blue-4">Moonchain</a>
        . All rights reserved.
      </span>
    </footer>
  )
}

export default Footer
