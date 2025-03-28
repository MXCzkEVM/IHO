import { Link } from '@heroui/link'

export function Footer() {
  return (
    <footer className="w-full flex items-center justify-center py-3">
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
