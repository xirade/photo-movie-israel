export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/icon', href: '/shutter.ico' },
      { rel:'stylesheet', href:'assets/css/main.css', as:'font', type:'font', crossorigin:'anonymous'},
    ],
  },
  /*
  ** Global CSS
  */
  css: [
    'aos/dist/aos.css',
    'mdbvue/lib/css/mdb.min.css',
    'vue-cool-lightbox/dist/vue-cool-lightbox.min.css',
    '@/assets/css/main.css',
    'animate.css/animate.min.css',
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    {src: "~/plugins/aos", ssr: false},
    { src: '~/plugins/CoolLightBox.js', ssr: false },
    { src: '~/plugins/jarallax.js', ssr: false },
    { src: '~/nuxt.config.js', ssr: false },
    { src: '~/plugins/iso.js', ssr: false },
    { src: '~/plugins/crisp.js', ssr: false },

  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    '@nuxtjs/apollo',
    'bootstrap-vue/nuxt',
    'mdbvue/nuxt'
  ],
  // apollo: {  
  //   clientConfigs: {
  //     default: {
  //       httpEndpoint: process.env.BACKEND_URL || "https://arcane-harbor-45982.herokuapp.com/graphql"
  //     }
  //   }
  // },
  // env: {
  //   strapiBaseUri: process.env.API_URL || "https://arcane-harbor-45982.herokuapp.com/"
  // },
  mdbvue: {
    icons: true, // FA5
    roboto: true, // font Roboto
    css: true, // MDB CSS
    bootstrap: true // Bootstrap CSS
    },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  loading:'~/components/Loading.vue',
  router: {
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    }
  }
}
