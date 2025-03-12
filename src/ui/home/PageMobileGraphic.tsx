import { motion } from 'motion/react'
import { variants } from './config'
import { merge } from './utils'

export function PageMobileGraphic() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%"
      className="h-fit -mb-190em"
      lt-sm="-mb-220em"
      viewBox="0 0 800 2800"
      fill="none"
    >
      <motion.g
        variants={{ visible: { transition: { staggerChildren: 0.5 } } }}
        initial="hidden"
        animate="visible"
        clip-path="url(#clip0_4075_27)"
      >

        <motion.g opacity="0.7">
          {/* line 1 */}
          <motion.path variants={variants.line} opacity="0.3" d="M741 0C743 27.1667 729.5 81.5 659.5 81.5C589.5 81.5 577.333 124.167 580 145.5C578.167 167.5 588.8 211.5 646 211.5C703.2 211.5 752.5 294.167 770 335.5C784.333 388 772.9 493 612.5 493C452.1 493 192.667 673 83 763" stroke="white" stroke-width="12" />
          <motion.g variants={variants.opacity} initial="hidden" animate="visible">
            {/* phone mark */}
            <g filter="url(#filter0_f_4075_27)">
              <rect x="426.761" y="166" width="195.984" height="499.923" transform="rotate(19 426.761 166)" fill="white" />
            </g>
            {/* image phone */}
            <motion.rect variants={variants.randoms.float([-5, 5])} animate="animate" x="204.002" y="83" width="490" height="690" fill="url(#pattern0_4075_27)" />
            {/* image watch */}
            <motion.rect variants={variants.randoms.float()} animate="animate" x="488.002" y="124.451" width="176" height="176" transform="rotate(-45 488.002 124.451)" fill="url(#pattern1_4075_27)" />
            {/* image camera */}
            <motion.rect variants={variants.randoms.float()} animate="animate" x="186.002" y="102" width="209" height="209" fill="url(#pattern2_4075_27)" />
            {/* image ring */}
            <motion.rect variants={variants.randoms.float()} animate="animate" x="467.002" y="433.894" width="236.304" height="236.304" transform="rotate(-40 467.002 433.894)" fill="url(#pattern3_4075_27)" />
            {/* image projection */}
            <motion.rect variants={variants.randoms.float()} animate="animate" x="422.002" y="639" width="211" height="211" fill="url(#pattern4_4075_27)" />
            {/* image speak */}
            <motion.rect variants={variants.randoms.float()} animate="animate" x="171.024" y="438.499" width="175.693" height="175.693" transform="rotate(11 171.024 438.499)" fill="url(#pattern5_4075_27)" />
          </motion.g>
        </motion.g>

        {/* image astronaut */}
        <motion.g
          variants={merge(variants.opacity, { visible: { opacity: '0.3' } })}
          initial="hidden"
          animate="visible"
        >
          <g>
            <rect width="378.487" height="708.657" transform="matrix(-0.906308 -0.422618 -0.422618 0.906308 376.517 887.956)" fill="url(#pattern8_4075_27)" />
          </g>
          <rect width="366.166" height="685.587" transform="matrix(-0.906308 -0.422618 -0.422618 0.906308 366.517 895.956)" fill="url(#pattern9_4075_27)" />
        </motion.g>

        {/* line 2 */}
        <motion.path variants={variants.line} opacity="0.3" d="M238 1032.5C275.167 1031.83 358 1036.2 392 1059C426 1081.8 431.5 1138.83 430 1164.5" stroke="white" stroke-width="12" />

        {/* box 1 */}
        <motion.g variants={variants.opacity} initial="hidden" whileInView="visible">
          <g filter="url(#filter6_f_4075_27)">
            <rect x="55" y="1163" width="690" height="180" rx="20" fill="white" fill-opacity="0.15" />
            <rect x="56" y="1164" width="688" height="178" rx="19" stroke="white" stroke-width="2" />
          </g>

          <rect x="56" y="1164" width="688" height="178" rx="19" fill="white" fill-opacity="0.15" />
          <rect x="56" y="1164" width="688" height="178" rx="19" stroke="white" stroke-width="2" />

          <foreignObject x="110" y="1193" width="556" height="120">
            <span className="text-20px font-600 tracking-4px">
              Simply Lock Moonchain: Your wallet, your keys. Moonchain uses a fully transparent Ethereum Smart contract, meaning your tokens stay on your wallet, ensuring decentralized security
            </span>
          </foreignObject>

        </motion.g>

        {/* line 3 */}
        <motion.path variants={variants.line} opacity="0.3" d="M456.034 1343C455.197 1369.33 469.692 1422 534.367 1422C599.042 1422 739.07 1422 801 1422" stroke="white" stroke-width="12" />

        {/* line 4 */}
        <motion.path variants={variants.line} opacity="0.3" d="M744 1571H800" stroke="white" stroke-width="12" />

        {/* box 2 */}
        <motion.g variants={variants.opacity} initial="hidden" whileInView="visible">
          <g filter="url(#filter8_f_4075_27)">
            <rect x="55" y="1493" width="690" height="156" rx="20" fill="white" fill-opacity="0.15" />
            <rect x="56" y="1494" width="688" height="154" rx="19" stroke="white" stroke-width="2" />
          </g>
          <rect x="56" y="1494" width="688" height="154" rx="19" fill="white" fill-opacity="0.15" />
          <rect x="56" y="1494" width="688" height="154" rx="19" stroke="white" stroke-width="2" />
          <foreignObject x="110" y="1513" width="566" height="120">
            <span className="text-20px font-600 tracking-4px">
              Select Your Miner: Moonchain will be rolling out an entire catalogue of Hardware miners. Choose the Hardware that suits your needs.
            </span>
          </foreignObject>
        </motion.g>

        {/* line 5 */}
        <motion.path variants={variants.line} opacity="0.3" d="M443 1649C443.167 1671.9 457.047 1717.69 511.229 1717.69C578.956 1717.69 592 1737.38 592 1799" stroke="white" stroke-width="12" />

        {/* box 3 */}
        <motion.g variants={variants.opacity} initial="hidden" whileInView="visible">
          <g filter="url(#filter9_f_4075_27)">
            <rect x="55" y="1799" width="690" height="108" rx="20" fill="white" fill-opacity="0.15" />
            <rect x="56" y="1800" width="688" height="106" rx="19" stroke="white" stroke-width="2" />
          </g>
          <rect x="56" y="1800" width="688" height="106" rx="19" fill="white" fill-opacity="0.15" />
          <rect x="56" y="1800" width="688" height="106" rx="19" stroke="white" stroke-width="2" />
          <foreignObject x="110" y="1825" width="566" height="120">
            <span className="text-20px font-600 tracking-4px">
              Receive Your Hardware: Free Hardware, Delivered Free to your door!
            </span>
          </foreignObject>
        </motion.g>

        {/* line 6 */}
        <motion.path variants={variants.line} opacity="0.3" d="M593.333 1906.33C593.333 1933 613.1 1969 657.5 1969C713 1969 745 1982 745 2056.5C745 2116.1 745 2523 745 2719C745.499 2737.67 757.399 2775 800.999 2775" stroke="white" stroke-width="12" />

      </motion.g>
      <defs>
        <filter id="filter0_f_4075_27" x="-57.5979" y="-155.6" width="991.265" height="1179.69" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="160.8" result="effect1_foregroundBlur_4075_27" />
        </filter>
        <pattern id="pattern0_4075_27" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_4075_27" transform="matrix(0.00253807 0 0 0.0018018 -0.763959 0)" />
        </pattern>
        <pattern id="pattern1_4075_27" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image1_4075_27" transform="scale(0.00277778)" />
        </pattern>
        <pattern id="pattern2_4075_27" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image2_4075_27" transform="scale(0.002)" />
        </pattern>
        <pattern id="pattern3_4075_27" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image3_4075_27" transform="scale(0.00200401)" />
        </pattern>
        <pattern id="pattern4_4075_27" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image4_4075_27" transform="scale(0.00200401)" />
        </pattern>
        <pattern id="pattern5_4075_27" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image5_4075_27" transform="scale(0.002)" />
        </pattern>
        <pattern id="pattern6_4075_27" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image6_4075_27" transform="scale(0.000730994 0.00549451)" />
        </pattern>

        <filter id="filter2_f_4075_27" x="413.5" y="453.5" width="1504" height="1504" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="309.75" result="effect1_foregroundBlur_4075_27" />
        </filter>
        <filter id="filter3_f_4075_27" x="53.3182" y="244.455" width="542.026" height="112.909" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_4075_27" />
        </filter>
        <filter id="filter4_f_4075_27" x="52.7614" y="131.034" width="484.122" height="40.875" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_4075_27" />
        </filter>
        <filter id="filter5_f_4075_27" x="49.1" y="424.407" width="377.621" height="35.9023" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="2.95" result="effect1_foregroundBlur_4075_27" />
        </filter>
        <pattern id="pattern7_4075_27" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image7_4075_27" transform="scale(0.00301205 0.00280899)" />
        </pattern>
        <filter id="filter6_f_4075_27" x="45" y="1153" width="710" height="200" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_4075_27" />
        </filter>
        <filter id="filter7_f_4075_27" x="-279.3" y="714.7" width="669.117" height="828.817" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="6.65" result="effect1_foregroundBlur_4075_27" />
        </filter>
        <pattern id="pattern8_4075_27" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image8_4075_27" transform="matrix(0.0068419 0 0 0.0036542 -1.22362 -0.84109)" />
        </pattern>
        <pattern id="pattern9_4075_27" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image8_4075_27" transform="matrix(0.0068419 0 0 0.0036542 -1.22362 -0.84109)" />
        </pattern>
        <filter id="filter8_f_4075_27" x="45" y="1483" width="710" height="176" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_4075_27" />
        </filter>
        <filter id="filter9_f_4075_27" x="45" y="1789" width="710" height="128" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_4075_27" />
        </filter>
        <clipPath id="clip0_4075_27">
          <rect width="800" height="3614" fill="white" />
        </clipPath>
        <image id="image0_4075_27" width="986" height="555" preserveAspectRatio="none" xlinkHref="/images/home.phone.png" />
        <image id="image1_4075_27" width="360" height="360" preserveAspectRatio="none" xlinkHref="/images/home.device.watch.png" />
        <image id="image2_4075_27" width="500" height="500" preserveAspectRatio="none" xlinkHref="/images/home.device.camera.png" />
        <image id="image3_4075_27" width="499" height="499" preserveAspectRatio="none" xlinkHref="/images/home.device.ring.png" />
        <image id="image4_4075_27" width="499" height="499" preserveAspectRatio="none" xlinkHref="/images/home.device.projection.png" />
        <image id="image5_4075_27" width="500" height="500" preserveAspectRatio="none" xlinkHref="/images/home.device.speaker.png" />

        <image id="image7_4075_27" width="332" height="356" preserveAspectRatio="none" xlinkHref="/images/home.space.png" />
        <image id="image8_4075_27" width="499" height="499" preserveAspectRatio="none" xlinkHref="/images/home.astronaut.png" />
      </defs>
    </motion.svg>
  )
}
