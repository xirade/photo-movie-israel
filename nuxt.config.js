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
      { rel: 'icon', type: 'image/x-icon', href: '/camera-shutter.ico' },
      { href:"https://db.onlinewebfonts.com/c/ee0b916b2e7c8fef46ce318b6f5e8d65?family=DINNeuzeitGroteskW01-BdCn", rel:"stylesheet", type:"text/css"}
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    'aos/dist/aos.css',
    '~/assets/css/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    {src: "~/plugins/aos", ssr: false},
    { src: '~/plugins/jarallax.js', ssr: false }
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
    'bootstrap-vue/nuxt',
    'mdbvue/nuxt'
  ],
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
    vendor: 'aos'
  },

}
