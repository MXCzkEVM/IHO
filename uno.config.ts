import FileSystemSvgoLoader from 'iconify-svgo-loader'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTagify,
  presetUno,
  transformerAttributifyJsx,
} from 'unocss'
import presetAnimations from 'unocss-preset-animations'
import { presetShadcn } from 'unocss-preset-shadcn'
import { presetEmUnit } from './plugins/presetEmUnit'

const localIconfontLoader = FileSystemSvgoLoader('./assets/iconfonts')

const config = defineConfig({
  presets: [
    presetUno({ dark: 'class' }),
    presetAttributify(),
    presetIcons({
      collections: { custom: localIconfontLoader },
    }),
    presetAnimations(),
    presetShadcn({
      color: { base: 'gray' },
    }),
    presetTagify(),
    presetEmUnit(),
  ],
  transformers: [
    transformerAttributifyJsx(),
  ],
  shortcuts: {
    'text-auto': 'text-[0.8333vw]',
    'text-auto-clamp': 'text-[clamp(12px,0.8333vw,24px)]',
    'safe-area': 'pb-[constant(safe-area-inset-bottom)] pb-[env(safe-area-inset-bottom)]',
    'wh-full': 'w-full h-full',
    'text-shadow-white': 'text-shadow-[#fff_0px_0_5px]',
    'flex-center': 'flex justify-center items-center',
    'flex-col-center': 'flex-center flex-col',
    'flex-x-center': 'flex justify-center',
    'flex-y-center': 'flex items-center',
    'i-flex-center': 'inline-flex justify-center items-center',
    'i-flex-x-center': 'inline-flex justify-center',
    'i-flex-y-center': 'inline-flex items-center',
    'flex-col': 'flex flex-col',
    'flex-col-stretch': 'flex-col items-stretch',
    'i-flex-col': 'inline-flex flex-col',
    'i-flex-col-stretch': 'i-flex-col items-stretch',
    'flex-1-hidden': 'flex-1 overflow-hidden',
    'absolute-lt': 'absolute left-0 top-0',
    'absolute-lb': 'absolute left-0 bottom-0',
    'absolute-rt': 'absolute right-0 top-0',
    'absolute-rb': 'absolute right-0 bottom-0',
    'absolute-tl': 'absolute-lt',
    'absolute-tr': 'absolute-rt',
    'absolute-bl': 'absolute-lb',
    'absolute-br': 'absolute-rb',
    'absolute-center': 'absolute-lt flex-center wh-full',
    'fixed-lt': 'fixed left-0 top-0',
    'fixed-lb': 'fixed left-0 bottom-0',
    'fixed-rt': 'fixed right-0 top-0',
    'fixed-rb': 'fixed right-0 bottom-0',
    'fixed-tl': 'fixed-lt',
    'fixed-tr': 'fixed-rt',
    'fixed-bl': 'fixed-lb',
    'fixed-br': 'fixed-rb',
    'fixed-center': 'fixed-lt flex-center wh-full',
    'nowrap-hidden': 'whitespace-nowrap overflow-hidden',
    'ellipsis-text': 'nowrap-hidden overflow-ellipsis',
    'transition-base': 'transition-all duration-300 ease-in-out',
  },
  theme: {
    breakpoints: {
      xs: '0',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1920px',
    },
  },
  rules: [

    [/^wh-([.\d]+)$/, ([_, num]) => ({ width: `${+num / 4}rem`, height: `${+num / 4}rem` })],
    [/^size-([.\d]+)$/, ([_, num]) => ({ width: `${+num / 4}rem`, height: `${+num / 4}rem` })],
  ],
})

export default config
