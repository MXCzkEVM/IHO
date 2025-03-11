import type { AttributifyAttributes } from 'unocss/preset-attributify'

interface CustomAttributifyAttributes extends AttributifyAttributes {
  xxl?: string
}

declare module 'react' {
  interface HTMLAttributes<T> extends CustomAttributifyAttributes {}
}
