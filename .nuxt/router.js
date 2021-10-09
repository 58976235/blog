import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _9210460c = () => interopDefault(import('../pages/collection/index.vue' /* webpackChunkName: "pages/collection/index" */))
const _3840880c = () => interopDefault(import('../pages/index/index.vue' /* webpackChunkName: "pages/index/index" */))
const _40e80b0a = () => interopDefault(import('../pages/interview/index.vue' /* webpackChunkName: "pages/interview/index" */))
const _a0e714ac = () => interopDefault(import('../pages/moodQuotes/index.vue' /* webpackChunkName: "pages/moodQuotes/index" */))
const _49bf618a = () => interopDefault(import('../pages/notes/index.vue' /* webpackChunkName: "pages/notes/index" */))
const _424744a2 = () => interopDefault(import('../pages/notes/css/index.vue' /* webpackChunkName: "pages/notes/css/index" */))
const _204dc2d5 = () => interopDefault(import('../pages/notes/html/index.vue' /* webpackChunkName: "pages/notes/html/index" */))
const _4eb736f7 = () => interopDefault(import('../pages/notes/javaScript/index.vue' /* webpackChunkName: "pages/notes/javaScript/index" */))
const _5db0b9eb = () => interopDefault(import('../pages/notes/react/index.vue' /* webpackChunkName: "pages/notes/react/index" */))
const _4a3eec0f = () => interopDefault(import('../pages/notes/typeScript/index.vue' /* webpackChunkName: "pages/notes/typeScript/index" */))
const _7d775d72 = () => interopDefault(import('../pages/notes/vue/index.vue' /* webpackChunkName: "pages/notes/vue/index" */))

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
    component: _9210460c,
    name: "collection"
  }, {
    path: "/index",
    component: _3840880c,
    name: "index"
  }, {
    path: "/interview",
    component: _40e80b0a,
    name: "interview"
  }, {
    path: "/moodQuotes",
    component: _a0e714ac,
    name: "moodQuotes"
  }, {
    path: "/notes",
    component: _49bf618a,
    name: "notes"
  }, {
    path: "/notes/css",
    component: _424744a2,
    name: "notes-css"
  }, {
    path: "/notes/html",
    component: _204dc2d5,
    name: "notes-html"
  }, {
    path: "/notes/javaScript",
    component: _4eb736f7,
    name: "notes-javaScript"
  }, {
    path: "/notes/react",
    component: _5db0b9eb,
    name: "notes-react"
  }, {
    path: "/notes/typeScript",
    component: _4a3eec0f,
    name: "notes-typeScript"
  }, {
    path: "/notes/vue",
    component: _7d775d72,
    name: "notes-vue"
  }, {
    path: "/",
    component: _3840880c,
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
