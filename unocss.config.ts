import { defineConfig, presetAttributify, presetUno, presetWebFonts } from 'unocss'
import transformerDirective from '@unocss/transformer-directives'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetWebFonts({
      provider: 'google', // default provider
      fonts: {
        // these will extend the default theme
        sans: 'Roboto',
        mono: ['Fira Code', 'Fira Mono:400,700'],
        // custom ones
        lobster: 'Lobster',
        lato: [
          {
            name: 'Lato',
            weights: ['400', '700'],
            italic: true
          },
          {
            name: 'sans-serif',
            provider: 'none'
          }
        ]
      }
    })
  ],
  transformers: [transformerDirective()],
  shortcuts: [
    ['w-h-full', 'w-full h-full'],
    ['flex-center-center', 'flex justify-center items-center'],
    ['flex-col', 'flex flex-col']
  ],
  rules: [],
  theme: {
    colors: {
      primary: '#00B1FF',
      title: '#9ECDFB',
      normal: '#B9E4FE'
    }
  }
})
