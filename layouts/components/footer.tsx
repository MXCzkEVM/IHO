import type { PropWithHtmlProps } from '@hairy/react-lib'
import { Link } from '@heroui/link'
import clsx from 'clsx'

export function Footer(props: PropWithHtmlProps) {
  return (
    <footer {...props} className={clsx('w-full flex items-center justify-center py-3', props.className)}>
      <Link
        isExternal
        className="flex items-center gap-1 text-current"
        href="https://moonchain.com"
      >
        <span className="text-default-600">© 2025 </span>
        <p className="text-primary">Moonchain</p>
        <span>. All rights reserved.</span>
      </Link>
    </footer>
  )
}
