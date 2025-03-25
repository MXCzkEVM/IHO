import { motion } from 'motion/react'
import { useRouter } from 'next/router'
import { variants } from './config'

export function PageHero() {
  const router = useRouter()
  return (
    <motion.div variants={variants.opacity} initial="hidden" whileInView="visible" className="relative z1 mx-37.5em text-auto" md="mt-30px" lg="mt-62.5em">
      <div className="text-8em mb-10em font-800 text-shadow-white">
        Initial Hardware Offering (IHO)
      </div>
      <div className="text-12em font-400 text-shadow-white max-w-50em leading-4em mb-4.5em">
        The Future of Hardware Mining is Free!
      </div>
      <div className="text-6em font-400 text-shadow-white underline mb-10em">
        Select. Set. Succeed!
      </div>
      <div className="relative w-100% lg:w-55.5em">
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.2 }}
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
    </motion.div>
  )
}
