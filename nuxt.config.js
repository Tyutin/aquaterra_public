export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Акватерра - бурение скважин на воду в Ижевске | Обустройство скважин',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Бурение и обустройство скважин на воду. Монтаж систем водопровода и канализации. Обустройство систем отопления и тёплых полов. Гарантия качества!' },
      { name: 'keywords', content: 'акватера, акватерра ижевск, акватерра, акватерра18, бурение скважин ижевск, монтаж водопровода, монтаж канализации бурение, скважина, бурение скважин, обустройство скважин, автоматизация скважин, отопление, система отопления, теплый пол, водопровод, канализация' },
      { name: 'yandex-verification', content: 'acc04ad192ac3e00' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '//code.jivo.ru/widget/CH3AMXtgq9', body: true, async: true, defer: true }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles/main.scss',
    '@/assets/styles/fonts.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/v-scroll-lock',
    '@/plugins/v-mask'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    [
      '@nuxtjs/yandex-metrika',
      {
        webvisor: true,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
      }
    ]
  ],
  styleResources: {
    scss: ['./assets/styles/variables.scss']
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
