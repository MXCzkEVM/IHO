import { useDark } from 'jotai-dark/react'

export function AppearanceSwitch({ className = '' }: { className?: string }) {
  const { toggleDark } = useDark({
    disableTransition: true,
    disableTransitionExclude: ['.i-lucide-sun', '.i-lucide-moon'],
  })

  return (
    <button type="button" disabled onClick={toggleDark} className={`flex ${className} text-gray-5`}>
      <div className="i-lucide-sun scale-100 dark:scale-0 transition-transform duration-500 rotate-0 dark:-rotate-90" />
      <div className="i-lucide-moon absolute scale-0 dark:scale-100 transition-transform duration-500 rotate-90 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
