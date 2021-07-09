import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  BackTop: () => import('../../components/backTop/index.vue' /* webpackChunkName: "components/back-top" */).then(c => wrapFunctional(c.default || c)),
  MainList: () => import('../../components/mainList/index.vue' /* webpackChunkName: "components/main-list" */).then(c => wrapFunctional(c.default || c)),
  Pagination: () => import('../../components/pagination/index.vue' /* webpackChunkName: "components/pagination" */).then(c => wrapFunctional(c.default || c)),
  Sidebar: () => import('../../components/sidebar/index.vue' /* webpackChunkName: "components/sidebar" */).then(c => wrapFunctional(c.default || c)),
  HeaderConfig: () => import('../../components/header/config.js' /* webpackChunkName: "components/header-config" */).then(c => wrapFunctional(c.default || c)),
  Header: () => import('../../components/header/index.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c)),
  Banner: () => import('../../components/banner/index.vue' /* webpackChunkName: "components/banner" */).then(c => wrapFunctional(c.default || c)),
  Footer: () => import('../../components/footer/index.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  Sider: () => import('../../components/sider/index.vue' /* webpackChunkName: "components/sider" */).then(c => wrapFunctional(c.default || c)),
  SidebarCommentList: () => import('../../components/sidebar/commentList/index.vue' /* webpackChunkName: "components/sidebar-comment-list" */).then(c => wrapFunctional(c.default || c)),
  SidebarNewArticleList: () => import('../../components/sidebar/newArticleList/index.vue' /* webpackChunkName: "components/sidebar-new-article-list" */).then(c => wrapFunctional(c.default || c)),
  SidebarLinkList: () => import('../../components/sidebar/linkList/index.vue' /* webpackChunkName: "components/sidebar-link-list" */).then(c => wrapFunctional(c.default || c)),
  HeaderTopNav: () => import('../../components/header/topNav/index.vue' /* webpackChunkName: "components/header-top-nav" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
