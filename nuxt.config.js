const ampify = "~/plugins/ampify";
export default {
  target: "static",
  head: {
    titleTemplate: "Photo-Movie-Israel | %s",
    htmlAttrs: {
      lang: "en",
      lang: "ru",
      amp: true
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "%s"
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
    { src: "~/plugins/router" },
    { src: "~/plugins/vue-parallax-js", ssr: false },
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
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: "styles",
            test: /\.(css|vue)$/,
            chunks: "all",
            enforce: true
          }
        }
      }
    },
    babel: {
      compact: true
    }
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "@nuxtjs/apollo",
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "mdbvue/nuxt",
    "nuxt-webfontloader",
    "@bazzite/nuxt-optimized-images",
    "@nuxtjs/markdownit",
    "nuxt-i18n",
    '@nuxtjs/sitemap'
  ],
  i18n: {
    defaultLocale: "en",
    locales: [
      { code: "ru", iso: "ru-RU", name: "Russian" },
      { code: "en", iso: "en-US", name: "English" }
    ],
    seo: true,
    skipSettingLocaleOnNavigate: true
  },
  sitemap: {
    hostname: "https://photo-movie-israel.com/",
    gzip: true,
    i18n: {
      locales: [
        { code: "ru", iso: "ru-RU", name: "Russian" },
        { code: "en", iso: "en-US", name: "English" }
      ],
      routesNameSeparator: '___'
    },
    routes: [
      '/portfolio/5',
      '/portfolio/6',
      '/portfolio/7',
      '/portfolio/8',
      '/portfolio/10',
      '/portfolio/11',
      '/portfolio/12',
      '/portfolio/13',
    ]
  },
  optimizedImages: {
    inlineImageLimit: -1,
    handleImages: ["jpeg", "png", "webp", "gif"],
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
    runtime: true,
    preset: "default",
    linkify: true,
    breaks: true,
    injected: true
  },
  publicRuntimeConfig: {
    axios: {
      baseURL: "https://serene-chamber-66689.herokuapp.com"
    }
  },

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: "https://serene-chamber-66689.herokuapp.com/graphql"
      }
    },
    errorHandler: "~/plugins/apollo-error-handler.js"
  },
  mdbvue: {
    css: true // MDB CSS
  },
  hooks: {
    // This hook is called before saving the html to flat file
    "generate:page": page => {
      if (/^\/amp\//gi.test(page.route)) {
        page.html = ampify(page.html);
      }
    },
    // This hook is called before serving the html to the browser
    "render:route": (url, page, { req, res }) => {
      if (/^\/amp\//gi.test(url)) {
        page.html = ampify(page.html);
      }
    }
  }
};
