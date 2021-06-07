import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _20e44a9e = () => interopDefault(import('..\\pages\\collection\\index.vue' /* webpackChunkName: "pages/collection/index" */))
const _35567293 = () => interopDefault(import('..\\pages\\index\\index.vue' /* webpackChunkName: "pages/index/index" */))
const _44898104 = () => interopDefault(import('..\\pages\\interview\\index.vue' /* webpackChunkName: "pages/interview/index" */))
const _098c5801 = () => interopDefault(import('..\\pages\\moodQuotes\\index.vue' /* webpackChunkName: "pages/moodQuotes/index" */))
const _2320dd78 = () => interopDefault(import('..\\pages\\notes\\index.vue' /* webpackChunkName: "pages/notes/index" */))
const _22fa0326 = () => interopDefault(import('..\\pages\\notes\\css\\index.vue' /* webpackChunkName: "pages/notes/css/index" */))
const _4d330c8e = () => interopDefault(import('..\\pages\\notes\\html\\index.vue' /* webpackChunkName: "pages/notes/html/index" */))
const _3855a1d2 = () => interopDefault(import('..\\pages\\notes\\javaScript\\index.vue' /* webpackChunkName: "pages/notes/javaScript/index" */))
const _0f419ff1 = () => interopDefault(import('..\\pages\\notes\\react\\index.vue' /* webpackChunkName: "pages/notes/react/index" */))
const _59441cff = () => interopDefault(import('..\\pages\\notes\\typeScript\\index.vue' /* webpackChunkName: "pages/notes/typeScript/index" */))
const _2347f70a = () => interopDefault(import('..\\pages\\notes\\vue\\index.vue' /* webpackChunkName: "pages/notes/vue/index" */))

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
    component: _20e44a9e,
    name: "collection"
  }, {
    path: "/index",
    component: _35567293,
    name: "index"
  }, {
    path: "/interview",
    component: _44898104,
    name: "interview"
  }, {
    path: "/moodQuotes",
    component: _098c5801,
    name: "moodQuotes"
  }, {
    path: "/notes",
    component: _2320dd78,
    name: "notes"
  }, {
    path: "/notes/css",
    component: _22fa0326,
    name: "notes-css"
  }, {
    path: "/notes/html",
    component: _4d330c8e,
    name: "notes-html"
  }, {
    path: "/notes/javaScript",
    component: _3855a1d2,
    name: "notes-javaScript"
  }, {
    path: "/notes/react",
    component: _0f419ff1,
    name: "notes-react"
  }, {
    path: "/notes/typeScript",
    component: _59441cff,
    name: "notes-typeScript"
  }, {
    path: "/notes/vue",
    component: _2347f70a,
    name: "notes-vue"
  }, {
    path: "/",
    component: _35567293,
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
