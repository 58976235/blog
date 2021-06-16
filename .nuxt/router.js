import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _60fcebde = () => interopDefault(import('../pages/collection/index.vue' /* webpackChunkName: "pages/collection/index" */))
const _017ebaa8 = () => interopDefault(import('../pages/index/index.vue' /* webpackChunkName: "pages/index/index" */))
const _ba1101d2 = () => interopDefault(import('../pages/interview/index.vue' /* webpackChunkName: "pages/interview/index" */))
const _5991848e = () => interopDefault(import('../pages/moodQuotes/index.vue' /* webpackChunkName: "pages/moodQuotes/index" */))
const _b742fc52 = () => interopDefault(import('../pages/notes/index.vue' /* webpackChunkName: "pages/notes/index" */))
const _bb703b6a = () => interopDefault(import('../pages/notes/css/index.vue' /* webpackChunkName: "pages/notes/css/index" */))
const _6b5a5c8e = () => interopDefault(import('../pages/notes/html/index.vue' /* webpackChunkName: "pages/notes/html/index" */))
const _55468adb = () => interopDefault(import('../pages/notes/javaScript/index.vue' /* webpackChunkName: "pages/notes/javaScript/index" */))
const _1764f0f2 = () => interopDefault(import('../pages/notes/react/index.vue' /* webpackChunkName: "pages/notes/react/index" */))
const _50ce3ff3 = () => interopDefault(import('../pages/notes/typeScript/index.vue' /* webpackChunkName: "pages/notes/typeScript/index" */))
const _40e2e20e = () => interopDefault(import('../pages/notes/vue/index.vue' /* webpackChunkName: "pages/notes/vue/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/collection",
    component: _60fcebde,
    name: "collection"
  }, {
    path: "/index",
    component: _017ebaa8,
    name: "index"
  }, {
    path: "/interview",
    component: _ba1101d2,
    name: "interview"
  }, {
    path: "/moodQuotes",
    component: _5991848e,
    name: "moodQuotes"
  }, {
    path: "/notes",
    component: _b742fc52,
    name: "notes"
  }, {
    path: "/notes/css",
    component: _bb703b6a,
    name: "notes-css"
  }, {
    path: "/notes/html",
    component: _6b5a5c8e,
    name: "notes-html"
  }, {
    path: "/notes/javaScript",
    component: _55468adb,
    name: "notes-javaScript"
  }, {
    path: "/notes/react",
    component: _1764f0f2,
    name: "notes-react"
  }, {
    path: "/notes/typeScript",
    component: _50ce3ff3,
    name: "notes-typeScript"
  }, {
    path: "/notes/vue",
    component: _40e2e20e,
    name: "notes-vue"
  }, {
    path: "/",
    component: _017ebaa8,
    redirect: "/index",
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
