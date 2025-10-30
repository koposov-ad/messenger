// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true, timeline: { enabled: true } },

  modules: [
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/test-utils',
  ],

  // https://nuxt.com/modules/color-mode
  // https://color-mode.nuxtjs.org/#configuration
  colorMode: {
    classSuffix: '',
    preference: 'light',
  },

  // https://vueuse.org/
  vueuse: {
    ssrHandlers: true,
  },

  // https://unocss.dev/integrations/nuxt
  unocss: {
    preflight: false,
    nuxtLayers: false,
    attributify: false,
    icons: false,
    components: false,
    // wind4: true,
  },

  // https://eslint.nuxt.com/packages/module
  eslint: {
    config: {
      standalone: false,
    },
  },

  devServer: {
    port: 3050,
  },
  nitro: {
    routeRules: {
      '/api/**': {
        // eslint-disable-next-line node/prefer-global/process
        proxy: `${process?.env?.DEV_PROXY_BACKEND}/**`,
      },
    },
  },
})
