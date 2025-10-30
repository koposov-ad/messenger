import antfu from '@antfu/eslint-config'
// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // https://github.com/antfu/eslint-config
  antfu({
    // https://eslint.style/guide/getting-started
    stylistic: {
      indent: 2,
      quotes: 'single',
    },

    typescript: true,
    vue: true,
  }),
)
