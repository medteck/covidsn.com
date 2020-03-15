
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:200,300,500,600&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/less/main.less'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/proxy'
  ],
  /*
  ** Server Middlewares
  ** API to use as a proxy
  */
  proxy: {
    '/api': {
      target: 'http://localhost:3221',
      pathRewrite: {
        '^/api': '/api'
      }
    }
  },
  serverMiddleware: [
    '~/api/index.js'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** PWA configuration
  */
  pwa: {
    manifest: {
      name: 'COVID-19 Sénégal',
      lang: 'fr'
    },
    icon: {
      iconSrc: 'https://covidsn.com/img/senegal-emergent.png',
      iconFileName: 'COVID-19 Senegal'
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  /*
  ** Router
  */
  router: {
    extendRoutes (routes, resolve) {
      [
        '/communications',
        '/donnees',
        '/multimedias',
        '/a-propos',
        '/contacts'
      ].forEach((path) => {
        routes.push({
          name: `section-${path.substring(1, path.length - 1)}`,
          path,
          component: resolve(__dirname, 'pages/index.vue')
        })
      })
    }
  },
  /*
  ** Server Configuration
  */
  server: {
    port: 3221,
    host: '127.0.0.1'
  }
}
