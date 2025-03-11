import type { ReactNode } from 'react'
import Header from '@/components/layout/components/Header'
import { motion } from 'motion/react'

function Page() {
  return (
    <div>
      <section className="h-272.5 relative">
        <Header />
        <div className="relative z1 mt-3 lg:mt-62.5 mx-6 lg:mx-37.5">
          <div className="text-8 font-800 text-shadow-white mb-17.5 lg:mb-23.75">
            Initial Hardware Offering (IHO)
          </div>
          <div className="text-12 font-400 text-shadow-white mb-13.75 max-w-140 leading-13.75">
            The Future of Hardware Mining is Free!
          </div>
          <div className="text-6 font-400 text-shadow-white underline mb-30 lg:mb-16">
            Select. Set. Succeed!
          </div>
          <button className="w-100% h-18 flex-center border-2px border-solid border-white lg:w-55.5">
            <span className="text-6 font-700">Get Started</span>
          </button>
        </div>
        <div className="absolute-lt w-full h-full flex justify-end lg:pr-25 md:pr-0">
          <motion.svg width="663" viewBox="0 0 663 1091" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      <section className="h-115vh relative -top-5 overflow-hidden m-0 lg:ml-37.5 lg:mr-35 md:mr-10">
        <div className="flex justify-end w-full">
          <div className="w-33.25 flex-shrink-0 mt-17.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="534" height="421" viewBox="0 0 534 421" fill="none">
              <path opacity="0.3" d="M132 6.07716C90 4.57716 6 24.3772 6 115.577C6 162.5 29.2 195.5 132 195.5C234.8 195.5 383.5 195.5 445 195.5C472.5 196.167 527.5 213.6 527.5 278C527.5 342.4 501 362.5 413 362.5C367.5 361.833 308.5 371.7 308.5 420.5" stroke="white" stroke-width="12" />
            </svg>
          </div>
          <div className="relative inline-block h-fit flex-shrink-0 flex-1">
            <div className="rounded-5 p-6 lg:p-7.5 bg-white bg-op-5 relative z1" border="2px white">
              <div className="text-4 font-600 tracking-4px min-w-137.5">
                Simply Lock Moonchain: Your wallet, your keys. Moonchain uses a fully transparent Ethereum Smart contract, meaning your tokens stay on your wallet, ensuring decentralized security
              </div>
            </div>
            <div className="absolute-lt w-full h-full" blur="5" rounded="5" border="2px white"></div>
          </div>
          <motion.svg className="mt-20 flex-1 hidden lg:block" xmlns="http://www.w3.org/2000/svg" width="541" height="207" viewBox="0 0 541 207" fill="none" preserveAspectRatio="none">
            <path opacity="0.3" d="M539.5 200.956C513 198.122 437.5 179.956 347.5 129.956C235 67.4556 84 9.5 1 6" stroke="white" stroke-width="12" />
          </motion.svg>
          <div className="w-65 -ml-17.5 flex-shrink-0">
            <motion.svg className="relative z1 -left-20" width="422" height="522" viewBox="0 0 422 522" fill="none" xmlns="http://www.w3.org/2000/svg">
              <image
                href="/images/home.astronaut.png"
                width="422"
                height="522"
                x="10"
                y="-25"
              />
            </motion.svg>
          </div>
        </div>
        <div className="relative inline-block h-fit -mt-8">
          <div className="rounded-5 p-6 lg:p-7.5 bg-white bg-op-5 relative z1" border="2px white">
            <div className="text-4 font-600 tracking-4px max-w-137.5">
              Select Your Miner: Moonchain will be rolling out an entire catalogue of Hardware miners. Choose the Hardware that suits your needs.
            </div>
          </div>
          <div className="absolute-lt w-full h-full" blur="5" rounded="5" border="2px white"></div>
        </div>
        <div className="ml-75 flex">
          <svg className="flex-1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" width="755" height="251" viewBox="0 0 755 251" fill="none">
            <path opacity="0.3" d="M6.5 1C6.66667 43.3333 32.3 128 133.5 128C260 128 342.5 70.5 342.5 181.5C342.5 292.5 458.5 224 754.5 224" stroke="white" stroke-width="12" />
          </svg>
          <div className="relative inline-block h-fit mt-41.25">
            <div className="rounded-5 p-6 lg:p-7.5 bg-white bg-op-5 relative z1" border="2px white">
              <div className="text-4 font-600 tracking-4px max-w-137.5">
                Receive Your Hardware: Free Hardware, Delivered Free to your door!
              </div>
            </div>
            <div className="absolute-lt w-full h-full" blur="5" rounded="5" border="2px white"></div>
          </div>
        </div>
      </section>
    </div>
  )
}

Page.layout = (node: ReactNode) => node

export default Page
