import { defineConfig, presetAttributify, presetUno } from 'unocss'
import transformerDirective from '@unocss/transformer-directives'

export default defineConfig({
  presets: [presetUno(), presetAttributify()],
  transformers: [transformerDirective()],
  shortcuts: [
    ['w-h-full', 'w-full h-full'],
    ['flex-center-center', 'flex justify-center items-center'],
    ['flex-col', 'flex flex-col']
  ],
  rules: [],
  theme: {}
})
