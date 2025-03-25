import { motion } from 'motion/react'
import { useRouter } from 'next/router'

export function PageMobileHero() {
  const router = useRouter()

  return (
    <div className="mx-13.75em">
      <div mb="6em" text="8em shadow-white" font="800">
        Initial Hardware Offering (IHO)
      </div>
      <div mb="6em" text="12em shadow-white" font="400">
        The Future of Hardware Mining is Free!
      </div>
      <div className="underline tracking-1.5" mb="21em" text="6em shadow-white" font="400">
        Select. Set. Succeed!
      </div>
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: {
            type: 'spring',
            visualDuration: 0.4,
            bounce: 0.5,
          },
        }}
        className="w-100% h-18em flex-center border-2px border-solid border-white relative z-1"
        onClick={() => router.push('products')}
      >
        <span className="text-6em font-700">Get Started</span>
      </motion.button>
    </div>
  )
}
