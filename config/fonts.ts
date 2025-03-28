import {
  Barlow_Semi_Condensed as Barlow,
  Merriweather,
  Fira_Code as Mono,
  Inter as Sans,

} from 'next/font/google'

const sans = Sans({
  subsets: ['latin'],
  variable: '--font-sans',
})

const mono = Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

const merriweather = Merriweather({
  subsets: ['latin'],
  variable: '--font-merriweather',
  weight: ['300', '400', '700', '900'],
})

const barlow = Barlow({
  subsets: ['latin'],
  variable: '--font-barlow',
  weight: ['100', '200', '300', '400', '600', '700', '900'],
})

export const fonts = {
  sans,
  mono,
  merriweather,
  barlow,
}
