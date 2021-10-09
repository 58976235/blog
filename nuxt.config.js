/*
 * @Author: your name
 * @Date: 2021-05-25 15:34:03
 * @LastEditTime: 2021-10-09 14:25:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myblog\nuxt.config.js
 */
export default {
  components: true,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '洛寒前端博客',
    htmlAttrs: {
      lang: 'zh-cn'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '洛寒博客' },
      { hid: 'description', name: 'description', content: '洛寒前端博客' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '/js/flexible.js', type: 'text/javascript', charset: 'utf-8' }
    ]
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: "index",
        path: "/",
        redirect: '/index',
        component: resolve(__dirname, 'pages/index/index.vue')
      })
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ant-design-vue/dist/antd.css',
    'assets/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui',
    '~/plugins/route',
    '~/plugins/axios'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor:['axios'],
    postcss: [
      require("postcss-px2rem")({
        remUnit: 54
      })
      // require('autoprefixer')
    ]
  }
}
