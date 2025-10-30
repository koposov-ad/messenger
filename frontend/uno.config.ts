import { defineConfig, presetWind4, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  // https://unocss.dev/config/#content
  content: {
    pipeline: {
      include: [
        /\.(vue|tsx|mdx?|html)($|\?)/,
        './**/*.stories.ts',
      ],
    },
  },
  // https://unocss.dev/transformers/directives
  transformers: [
    // https://unocss.dev/transformers/variant-group
    transformerVariantGroup(),
    // https://unocss.dev/transformers/directives
    transformerDirectives(),
  ],

  // https://unocss.dev/presets/
  presets: [
    // https://unocss.dev/presets/wind4
    presetWind4({
      dark: 'class',
      preflights: {
        reset: true,
      },
    }),
  ],

  theme: {
    spacing: {
      DEFAULT: '4px',
    },
  },
})
