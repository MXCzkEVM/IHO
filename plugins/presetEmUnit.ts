import type { Preset } from 'unocss'

// 创建自定义预设，将尺寸单位转换为 em
export function presetEmUnit(): Preset {
  return {
    name: 'preset-em-units',
    rules: [
      // 文本大小
      [/^text-(\d+(?:\.\d+)?)em$/, ([_, num]) => ({ 'font-size': `${+num / 4}em` })],

      // 宽度
      [/^w-(\d+(?:\.\d+)?)em$/, ([_, num]) => ({ width: `${+num / 4}em` })],

      // 高度
      [/^h-(\d+(?:\.\d+)?)em$/, ([_, num]) => ({ height: `${+num / 4}em` })],

      // 边距
      [/^m[trblxy]?-(\d+(?:\.\d+)?)em$/, ([m, num]) => {
        const prop = {
          m: 'margin',
          mt: 'margin-top',
          mr: 'margin-right',
          mb: 'margin-bottom',
          ml: 'margin-left',
          mx: ['margin-left', 'margin-right'],
          my: ['margin-top', 'margin-bottom'],
        }[m.split('-')[0]] || 'margin'

        const val = `${+num / 4}em`
        return Array.isArray(prop)
          ? Object.fromEntries(prop.map(p => [p, val]))
          : { [prop]: val }
      }],

      // 内边距
      [/^p[trblxy]?-(\d+(?:\.\d+)?)em$/, ([p, num]) => {
        const prop = {
          p: 'padding',
          pt: 'padding-top',
          pr: 'padding-right',
          pb: 'padding-bottom',
          pl: 'padding-left',
          px: ['padding-left', 'padding-right'],
          py: ['padding-top', 'padding-bottom'],
        }[p.split('-')[0]] || 'padding'

        const val = `${+num / 4}em`
        return Array.isArray(prop)
          ? Object.fromEntries(prop.map(p => [p, val]))
          : { [prop]: val }
      }],

      // 边框
      [/^border-(\d+(?:\.\d+)?)em$/, ([_, num]) => ({ 'border-width': `${+num / 4}em` })],

      // 行高
      [/^leading-(\d+(?:\.\d+)?)em$/, ([_, num]) => ({ 'line-height': `${+num / 4}em` })],

      // 最大宽度
      [/^max-w-(\d+(?:\.\d+)?)em$/, ([_, num]) => ({ 'max-width': `${+num / 4}em` })],

      // 最大高度
      [/^max-h-(\d+(?:\.\d+)?)em$/, ([_, num]) => ({ 'max-height': `${+num / 4}em` })],

      // 最小宽度
      [/^min-w-(\d+(?:\.\d+)?)em$/, ([_, num]) => ({ 'min-width': `${+num / 4}em` })],

      // 最小高度
      [/^min-h-(\d+(?:\.\d+)?)em$/, ([_, num]) => ({ 'min-height': `${+num / 4}em` })],

      // 间距
      [/^gap-(\d+(?:\.\d+)?)em$/, ([_, num]) => ({ gap: `${+num / 4}em` })],

      // 圆角
      [/^rounded(?:-(\d+(?:\.\d+)?))?em$/, ([_, num]) => {
        if (num === undefined)
          return { 'border-radius': '0.25em' }
        return { 'border-radius': `${+num / 4}em` }
      }],
    ],
  }
}
