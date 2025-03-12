import { motion } from 'motion/react'
import { variants } from './config'

export function PageGraphic() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%"
      viewBox="0 0 2053 2600"
      fill="none"
    >

      <motion.g
        variants={{ visible: { transition: { staggerChildren: 0.5 } } }}
        initial="hidden"
        animate="visible"
        clip-path="url(#clip0_3994_80)"
      >
        {/* left top mark */}
        <motion.g xmlns="http://www.w3.org/2000/svg" filter="url(#filter9_f_3994_80)">
          <ellipse cx="-607.5" cy="-493.5" rx="564.5" ry="694.5" fill="white" />
        </motion.g>
        {/* line 1 */}
        <motion.path variants={variants.line} opacity="0.3" d="M1384.49 0C1374.66 54.1773 1374.59 168.992 1453 194.833C1531.4 220.674 1573.01 276.014 1584.01 300.453" stroke="white" stroke-width="12" />

        {/* line 2 */}
        <motion.path variants={variants.line} opacity="0.3" d="M1627.64 333.198C1689.24 397.188 1792.68 552.572 1713.69 662.187C1634.69 771.803 1509.15 781.603 1456.25 772.802" stroke="white" stroke-width="12" />
        {/* line 3 */}
        <motion.path variants={variants.line} opacity="0.3" d="M1567 653.006C1522.83 686.558 1404.6 751.842 1285 744.558C1165.4 737.274 1129.5 789.744 1102.5 854.32C1080.33 906.756 1079.9 1002.62 1255.5 966.611C1431.1 930.597 1548.67 1032.2 1585.5 1087.5" stroke="white" stroke-width="12" />

        <motion.g
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.5 } },
          }}
        >
          {/* filter blur(phone) */}
          <g filter="url(#filter2_f_3994_80)">
            <rect x="1455.76" y="319" width="195.984" height="499.923" transform="rotate(19 1455.76 319)" fill="white" />
          </g>
          {/* image phone */}
          <motion.rect variants={variants.randoms.float([-5, 5])} animate="animate" x="1233" y="236" width="490" height="690" fill="url(#pattern10_3994_80)" />
          {/* image watch */}
          <motion.rect variants={variants.randoms.float()} animate="animate" x="1517" y="277.451" width="176" height="176" transform="rotate(-45 1517 277.451)" fill="url(#pattern11_3994_80)" />
          {/* image camera */}
          <motion.rect variants={variants.randoms.float()} animate="animate" x="1215" y="255" width="209" height="209" fill="url(#pattern12_3994_80)" />
          {/* image ring */}
          <motion.rect variants={variants.randoms.float()} animate="animate" x="1496" y="586.894" width="236.304" height="236.304" transform="rotate(-40 1496 586.894)" fill="url(#pattern13_3994_80)" />
          {/* image speak */}
          <motion.rect variants={variants.randoms.float()} animate="animate" x="1200.02" y="591.499" width="175.693" height="175.693" transform="rotate(11 1200.02 591.499)" fill="url(#pattern15_3994_80)" />
          {/* image projection */}
          <motion.rect variants={variants.randoms.float()} animate="animate" x="1451" y="792" width="211" height="211" fill="url(#pattern14_3994_80)" />
        </motion.g>
        {/* image astronaut */}
        <motion.g variants={variants.opacity} initial="hidden" whileInView="visible">
          <motion.g opacity="0.5">
            <g filter="url(#filter4_f_3994_80)">
              <rect x="1273.5" y="1194.96" width="378.487" height="708.657" transform="rotate(-25 1273.5 1194.96)" fill="url(#pattern16_3994_80)" />
            </g>
            <rect x="1283.5" y="1202.96" width="366.166" height="685.587" transform="rotate(-25 1283.5 1202.96)" fill="url(#pattern17_3994_80)" />
          </motion.g>
        </motion.g>

        {/* line 4 */}
        <motion.path variants={variants.line} opacity="0.3" d="M1516.5 1535.96C1490 1533.12 1414.5 1514.96 1324.5 1464.96C1212 1402.46 1061 1344.5 978 1341" stroke="white" stroke-width="12" />

        {/* box 1 */}
        <motion.g variants={variants.opacity} initial="hidden" whileInView="visible">
          <g filter="url(#filter5_f_3994_80)">
            <rect x="315" y="1250" width="664" height="178" rx="19" stroke="white" stroke-width="2" />
          </g>
          <rect x="315" y="1250" width="664" height="178" rx="19" fill="white" fill-opacity="0.05" />
          <rect x="315" y="1250" width="664" height="178" rx="19" stroke="white" stroke-width="2" />

          <text x="380" y="1295" fill="white" fontSize="20" letterSpacing="4px">
            Simply Lock Moonchain: Your wallet, your
          </text>
          <text x="380" y="1320" fill="white" fontSize="20" letterSpacing="4px">
            keys. Moonchain uses a fully transparent
          </text>
          <text x="380" y="1345" fill="white" fontSize="20" letterSpacing="4px">
            Ethereum Smart contract, meaning your
          </text>
          <text x="380" y="1370" fill="white" fontSize="20" letterSpacing="4px">
            tokens stay on your wallet, ensuring
          </text>
          <text x="380" y="1395" fill="white" fontSize="20" letterSpacing="4px">
            decentralized security
          </text>
        </motion.g>

        {/* line 5 */}
        <motion.path variants={variants.line} opacity="0.3" d="M313 1345.08C271 1343.58 187 1363.38 187 1454.58C187 1501.5 210.2 1534.5 313 1534.5C415.8 1534.5 564.5 1534.5 626 1534.5C653.5 1535.17 708.5 1552.6 708.5 1617C708.5 1681.4 682 1701.5 594 1701.5C548.5 1700.83 489.5 1710.7 489.5 1759.5" stroke="white" stroke-width="12" />

        {/* box 2 */}
        <motion.g variants={variants.opacity} initial="hidden" whileInView="visible">
          <g filter="url(#filter7_f_3994_80)">
            <rect x="314" y="1760" width="664" height="154" rx="19" stroke="white" stroke-width="2" />
          </g>
          <rect x="314" y="1760" width="664" height="154" rx="19" fill="white" fill-opacity="0.05" />
          <rect x="314" y="1760" width="664" height="154" rx="19" stroke="white" stroke-width="2" />
          <text x="390" y="1810" fill="white" fontSize="20" letterSpacing="4px">
            rolling out an entire catalogue of
          </text>
          <text x="390" y="1840" fill="white" fontSize="20" letterSpacing="4px">
            Hardware miners. Choose the Hardware
          </text>
          <text x="390" y="1870" fill="white" fontSize="20" letterSpacing="4px">
            that suits your needs.
          </text>
        </motion.g>

        {/* line 6 */}
        <motion.path variants={variants.line} opacity="0.3" d="M489.5 1916C489.667 1958.33 515.3 2043 616.5 2043C743 2043 825.5 1985.5 825.5 2096.5C825.5 2207.5 941.5 2139 1237.5 2139" stroke="white" stroke-width="12" />

        {/* box 3 */}
        <motion.g variants={variants.opacity} initial="hidden" whileInView="visible">
          <g filter="url(#filter6_f_3994_80)">
            <rect x="1239" y="2084" width="664" height="106" rx="19" stroke="white" stroke-width="2" />
          </g>
          <rect x="1239" y="2084" width="664" height="106" rx="19" fill="white" fill-opacity="0.05" />
          <rect x="1239" y="2084" width="664" height="106" rx="19" stroke="white" stroke-width="2" />
          <text x="1300" y="2130" fill="white" fontSize="20" letterSpacing="4px">
            Receive Your Hardware: Free Hardware,
          </text>
          <text x="1300" y="2155" fill="white" fontSize="20" letterSpacing="4px">
            Delivered Free to your door!
          </text>
        </motion.g>

        {/* line 7 */}
        <motion.path variants={variants.line} opacity="0.3" d="M1584 2190C1585.17 2220 1604.8 2280 1674 2280C1743.2 2280 1762.17 2339.33 1763 2369C1761.83 2397.67 1777.4 2455 1849 2455C1920.6 2455 2032.5 2538 2079.5 2579.5" stroke="white" stroke-width="12" />
        <motion.path variants={variants.line} opacity="0.3" d="M2053 3233.5C2000.33 3233.5 1895 3259.4 1895 3363C1895 3466.6 1812.67 3488.5 1771.5 3486.5H1582.5" stroke="white" stroke-width="12" />

        <motion.g
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 0.3 } }}
          initial="hidden"
          whileInView="visible"
        >
          <rect x="755.051" y="3121" width="1038.9" height="1114" fill="url(#pattern18_3994_80)" />
        </motion.g>
      </motion.g>
      <defs>
        <motion.pattern id="pattern2_3994_80" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image2_3994_80" transform="matrix(0.00253807 0 0 0.0018018 -0.763959 0)" />
        </motion.pattern>
        <motion.pattern id="pattern3_3994_80" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image3_3994_80" transform="scale(0.00277778)" />
        </motion.pattern>
        <motion.pattern id="pattern4_3994_80" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image4_3994_80" transform="scale(0.002)" />
        </motion.pattern>
        <motion.pattern id="pattern5_3994_80" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image5_3994_80" transform="scale(0.00200401)" />
        </motion.pattern>
        <motion.pattern id="pattern6_3994_80" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image6_3994_80" transform="scale(0.00200401)" />
        </motion.pattern>
        <motion.pattern id="pattern7_3994_80" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image7_3994_80" transform="scale(0.002)" />
        </motion.pattern>

        <motion.filter id="filter1_f_3994_80" x="390.061" y="327.334" width="485.522" height="42.275" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="2.35" result="effect1_foregroundBlur_3994_80" />
        </motion.filter>

        <motion.filter id="filter2_f_3994_80" x="1220.5" y="246.5" width="493.065" height="681.492" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="36.25" result="effect1_foregroundBlur_3994_80" />
        </motion.filter>

        <motion.pattern id="pattern10_3994_80" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image2_3994_80" transform="matrix(0.00253807 0 0 0.0018018 -0.763959 0)" />
        </motion.pattern>
        <motion.pattern id="pattern11_3994_80" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image3_3994_80" transform="scale(0.00277778)" />
        </motion.pattern>
        <motion.pattern id="pattern12_3994_80" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image4_3994_80" transform="scale(0.002)" />
        </motion.pattern>
        <motion.pattern id="pattern13_3994_80" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image5_3994_80" transform="scale(0.00200401)" />
        </motion.pattern>
        <motion.pattern id="pattern14_3994_80" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image6_3994_80" transform="scale(0.00200401)" />
        </motion.pattern>
        <motion.pattern id="pattern15_3994_80" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image7_3994_80" transform="scale(0.002)" />
        </motion.pattern>
        <motion.filter id="filter3_f_3994_80" x="387.1" y="631.407" width="377.621" height="35.9023" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="2.95" result="effect1_foregroundBlur_3994_80" />
        </motion.filter>
        <motion.filter id="filter4_f_3994_80" x="1260.2" y="1021.7" width="669.117" height="828.816" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="6.65" result="effect1_foregroundBlur_3994_80" />
        </motion.filter>
        <motion.pattern id="pattern16_3994_80" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image8_3994_80" transform="matrix(0.0068419 0 0 0.0036542 -1.22362 -0.84109)" />
        </motion.pattern>
        <motion.pattern id="pattern17_3994_80" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image8_3994_80" transform="matrix(0.0068419 0 0 0.0036542 -1.22362 -0.84109)" />
        </motion.pattern>
        <motion.filter id="filter5_f_3994_80" x="303" y="1240" width="686" height="200" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_3994_80" />
        </motion.filter>
        <motion.filter id="filter6_f_3994_80" x="1228" y="2073" width="686" height="128" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_3994_80" />
        </motion.filter>
        <motion.filter id="filter7_f_3994_80" x="303" y="1749" width="686" height="176" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_3994_80" />
        </motion.filter>
        <motion.filter id="filter8_f_3994_80" x="391.318" y="466.455" width="542.026" height="112.909" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_3994_80" />
        </motion.filter>
        <motion.pattern id="pattern18_3994_80" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image9_3994_80" transform="scale(0.00301205 0.00280899)" />
        </motion.pattern>
        <motion.filter id="filter9_f_3994_80" x="-2172" y="-2188" width="3129" height="3389" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="500" result="effect1_foregroundBlur_3994_80" />
        </motion.filter>
        <motion.filter id="filter10_f_3994_80" x="-391" y="2994" width="3129" height="3389" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="500" result="effect1_foregroundBlur_3994_80" />
        </motion.filter>
        <clipPath id="clip0_3994_80">
          <rect width="2053" height="3614" fill="white" />
        </clipPath>

        <image id="image2_3994_80" width="986" height="555" preserveAspectRatio="none" xlinkHref="/images/home.phone.png" />
        <image id="image3_3994_80" width="360" height="360" preserveAspectRatio="none" xlinkHref="/images/home.device.watch.png" />
        <image id="image4_3994_80" width="500" height="500" preserveAspectRatio="none" xlinkHref="/images/home.device.camera.png" />
        <image id="image5_3994_80" width="499" height="499" preserveAspectRatio="none" xlinkHref="/images/home.device.ring.png" />
        <image id="image6_3994_80" width="499" height="499" preserveAspectRatio="none" xlinkHref="/images/home.device.projection.png" />
        <image id="image7_3994_80" width="500" height="500" preserveAspectRatio="none" xlinkHref="/images/home.device.speaker.png" />
        <image id="image8_3994_80" width="499" height="499" preserveAspectRatio="none" xlinkHref="/images/home.astronaut.png" />
        <image id="image9_3994_80" width="332" height="356" preserveAspectRatio="none" xlinkHref="/images/home.space.png" />
      </defs>
    </motion.svg>
  )
}
