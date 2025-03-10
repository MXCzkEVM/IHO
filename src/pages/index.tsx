import type { PropsWithChildren, ReactNode } from 'react'
import Footer from '@/components/layout/components/Footer'
import Header from '@/components/layout/components/Header'
import { motion } from 'motion/react'

function Page() {
  return (
    <div>
      <section className="h-100vh relative">
        <Header />
        <div className="mt-12px relative z1 mx-24px lg:mt-130px lg:mx-150px">
          <div className="text-32px font-800 text-shadow-white mb-70px lg:mb-95px">
            Initial Hardware Offering (IHO)
          </div>
          <div className="text-48px font-400 text-shadow-white mb-55px max-w-560px leading-55px">
            The Future of Hardware Mining is Free!
          </div>
          <div className="text-24px font-400 text-shadow-white underline mb-120px lg:mb-64px">
            Select. Set. Succeed!
          </div>
          <button className="w-100% h-72px flex-center border-2px border-solid border-white lg:w-222px">
            <span className="text-24px font-700">Get Started</span>
          </button>
        </div>
        <div className="absolute-lt w-full h-full flex justify-end lg:pr-100px md:pr-0px">
          <motion.svg width="663" height="100%" viewBox="0 0 663 1091" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.filter id="filter0" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feGaussianBlur stdDeviation="36.25" />
            </motion.filter>
            <g filter="url(#filter0)">
              <rect x="385" y="280" width="230" height="520" transform="rotate(19 289.76 166)" fill="white" />
            </g>
            <motion.g
              variants={{
                visible: { transition: { staggerChildren: 0.5 } },
              }}
              initial="hidden"
              animate="visible"
            >
              <motion.path
                variants={{
                  hidden: { pathLength: 0.001 },
                  visible: { pathLength: 1 },
                }}
                transition={{ ease: 'linear' }}
                opacity="0.5"
                d="M298.491 0C288.657 54.1773 288.59 168.992 366.997 194.833C445.404 220.674 487.008 276.014 498.009 300.453"
                stroke="white"
                strokeWidth="12"
              />
              <motion.path
                variants={{
                  hidden: { pathLength: 0.001 },
                  visible: { pathLength: 1 },
                }}
                transition={{ ease: 'linear' }}
                opacity="0.5"
                d="M541.638 333.198C603.235 397.188 706.681 552.572 627.686 662.187C548.691 771.803 423.146 781.603 370.248 772.802"
                stroke="white"
                strokeWidth="12"
              />
              <motion.path
                variants={{
                  hidden: { pathLength: 0.001 },
                  visible: { pathLength: 1 },
                }}
                transition={{ ease: 'linear' }}
                opacity="0.3"
                d="M481 653.006C436.833 686.558 318.6 751.842 199 744.558C79.3999 737.274 43.4999 789.744 16.4999 854.32C-5.66673 906.756 -6.10007 1002.62 169.5 966.611C345.1 930.597 462.667 1032.2 499.5 1087.5"
                stroke="white"
                stroke-width="12"
              />
              <motion.path
                variants={{
                  hidden: { pathLength: 0.001 },
                  visible: { pathLength: 1 },
                }}
                transition={{ ease: 'linear' }}
                opacity="0.3"
                d="M481 653.006C436.833 686.558 318.6 751.842 199 744.558C79.3999 737.274 43.4999 789.744 16.4999 854.32C-5.66673 906.756 -6.10007 1002.62 169.5 966.611C345.1 930.597 462.667 1032.2 499.5 1087.5"
                stroke="white"
                stroke-width="12"
              />
            </motion.g>

            <motion.image
              href="/images/home.phone.png"
              width="490"
              height="690"
              y="235"
              x="135"
            />
            <motion.image
              href="/images/home.device.camera.png"
              width="209"
              height="209"
              transition={{
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 1,
              }}
              initial={{ y: -3 }}
              animate={{ y: 4 }}
              y="260"
              x="110"
            />
            <motion.image
              transition={{
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 1,
                delay: 0.2,
              }}
              initial={{ y: -2 }}
              animate={{ y: 3 }}
              href="/images/home.device.watch.png"
              width="176"
              height="176"
              y="200"
              x="460"
            />
            <motion.image
              transition={{
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 1,
                delay: 0.6,
              }}
              initial={{ y: -3 }}
              animate={{ y: 7 }}
              href="/images/home.device.speaker.png"
              width="175.693"
              height="175.693"
              y="610"
              x="80"
            />
            <motion.image
              transition={{
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 1,
                delay: 0.1,
              }}
              initial={{ y: -3 }}
              animate={{ y: 3 }}
              href="/images/home.device.ring.png"
              width="320"
              height="320"
              y="450"
              x="415"
            />
            <motion.image
              transition={{
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 1,
                delay: 0.4,
              }}
              initial={{ y: -3 }}
              animate={{ y: 3 }}
              href="/images/home.device.projection.png"
              width="211"
              height="211"
              y="800"
              x="330"
            />

          </motion.svg>
        </div>
      </section>

      <section className="h-115vh relative">
        <div className="absolute -top-20px left-0 z-1 w-full flex-col items-end lg:pr-100px">
          <motion.svg className="relative z1" width="422" height="522" viewBox="0 0 422 522" fill="none" xmlns="http://www.w3.org/2000/svg">
            <image
              href="/images/home.astronaut.png"
              width="422"
              height="522"
              x="10"
              y="-25"
            />
          </motion.svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="541" height="207" viewBox="0 0 541 207" fill="none">
            <path opacity="0.3" d="M539.5 200.956C513 198.122 437.5 179.956 347.5 129.956C235 67.4556 84 9.5 1 6" stroke="white" stroke-width="12" />
          </svg>
        </div>
      </section>
    </div>
  )
}

Page.layout = (node: ReactNode) => node

function ShadowText(props: PropsWithChildren<{ className?: string }>) {
  return <span></span>
}
export default Page
