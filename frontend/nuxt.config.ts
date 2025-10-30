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
    '@nuxt/test-utils/module',
    '@pinia/nuxt',
  ],

  ssr: false,

  // vite: {
  //   resolve: {
  //     alias: {
  //       '@': fileURLToPath(new URL('./', import.meta.url)),
  //     },
  //   },
  // },

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

  runtimeConfig: {
    public: {
      apiBase: '/api',
    },
  },

  css: ['@/app/assets/styles/main.scss'],
  app: {
    head: {
      title: 'Messenger',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
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
