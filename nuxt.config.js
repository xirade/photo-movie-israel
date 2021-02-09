export default {
  env: {
    strapiBaseUri: process.env.API_URL || "http://localhost:1337"
  },
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  webfontloader: {
    google: {
      families: ["Oswald"]
    }
  },
  /*
   ** Global CSS
   */
  css: [
    "aos/dist/aos.css",
    "mdbvue/lib/css/mdb.min.css",
    "vue-cool-lightbox/dist/vue-cool-lightbox.min.css",
    "@/assets/css/main.css",
    "animate.css/animate.min.css"
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: "~/plugins/aos", ssr: false },
    { src: "~/plugins/CoolLightBox", ssr: false },
    { src: "~/plugins/jarallax", ssr: false },
    { src: "~/plugins/crisp", ssr: false },
    { src: "~/plugins/Vuelidate" },
    { src: "~/plugins/Masonry", ssr: false },
    { src: "~/plugins/LazyImage.js", ssr: false }
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],

  build: {
    extractCSS: true
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "@nuxtjs/apollo",
    "@nuxtjs/axios",
    "bootstrap-vue/nuxt",
    "mdbvue/nuxt",
    "nuxt-webfontloader",
    "@bazzite/nuxt-optimized-images",
    "@nuxtjs/markdownit"
  ],
  publicRuntimeConfig: {
    axios: {
      baseURL: "http://localhost:1337"
    }
  },
  optimizedImages: {
    inlineImageLimit: -1,
    handleImages: ["jpeg", "png", "svg", "webp", "gif"],
    optimizeImages: true,
    optimizeImagesInDev: false,
    defaultImageLoader: "img-loader",
    mozjpeg: {
      quality: 85
    },
    optipng: false,
    pngquant: {
      speed: 7,
      quality: [0.65, 0.8]
    },
    webp: {
      quality: 85
    }
  },

  markdownit: {
    preset: "default",
    linkify: true,
    breaks: true,
    injected: true
  },

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: "http://localhost:1337/graphql"
      }
    }
  },
  mdbvue: {
    css: true, // MDB CSS
    bootstrap: true // Bootstrap CSS
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  loading: "~/components/Loading.vue",
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 });
      }, 500);
    });
  },
};
