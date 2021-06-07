import { wrapFunctional } from './utils'

export { default as HeaderConfig } from '../..\\components\\header\\config.js'
export { default as Header } from '../..\\components\\header\\index.vue'
export { default as BackTop } from '../..\\components\\backTop\\index.vue'
export { default as Footer } from '../..\\components\\footer\\index.vue'
export { default as Banner } from '../..\\components\\banner\\index.vue'
export { default as Sider } from '../..\\components\\sider\\index.vue'
export { default as Pagination } from '../..\\components\\pagination\\index.vue'
export { default as MainList } from '../..\\components\\mainList\\index.vue'
export { default as Sidebar } from '../..\\components\\sidebar\\index.vue'
export { default as HeaderTopNav } from '../..\\components\\header\\topNav\\index.vue'
export { default as SidebarCommentList } from '../..\\components\\sidebar\\commentList\\index.vue'
export { default as SidebarLinkList } from '../..\\components\\sidebar\\linkList\\index.vue'
export { default as SidebarNewArticleList } from '../..\\components\\sidebar\\newArticleList\\index.vue'

export const LazyHeaderConfig = import('../..\\components\\header\\config.js' /* webpackChunkName: "components/header-config" */).then(c => wrapFunctional(c.default || c))
export const LazyHeader = import('../..\\components\\header\\index.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const LazyBackTop = import('../..\\components\\backTop\\index.vue' /* webpackChunkName: "components/back-top" */).then(c => wrapFunctional(c.default || c))
export const LazyFooter = import('../..\\components\\footer\\index.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyBanner = import('../..\\components\\banner\\index.vue' /* webpackChunkName: "components/banner" */).then(c => wrapFunctional(c.default || c))
export const LazySider = import('../..\\components\\sider\\index.vue' /* webpackChunkName: "components/sider" */).then(c => wrapFunctional(c.default || c))
export const LazyPagination = import('../..\\components\\pagination\\index.vue' /* webpackChunkName: "components/pagination" */).then(c => wrapFunctional(c.default || c))
export const LazyMainList = import('../..\\components\\mainList\\index.vue' /* webpackChunkName: "components/main-list" */).then(c => wrapFunctional(c.default || c))
export const LazySidebar = import('../..\\components\\sidebar\\index.vue' /* webpackChunkName: "components/sidebar" */).then(c => wrapFunctional(c.default || c))
export const LazyHeaderTopNav = import('../..\\components\\header\\topNav\\index.vue' /* webpackChunkName: "components/header-top-nav" */).then(c => wrapFunctional(c.default || c))
export const LazySidebarCommentList = import('../..\\components\\sidebar\\commentList\\index.vue' /* webpackChunkName: "components/sidebar-comment-list" */).then(c => wrapFunctional(c.default || c))
export const LazySidebarLinkList = import('../..\\components\\sidebar\\linkList\\index.vue' /* webpackChunkName: "components/sidebar-link-list" */).then(c => wrapFunctional(c.default || c))
export const LazySidebarNewArticleList = import('../..\\components\\sidebar\\newArticleList\\index.vue' /* webpackChunkName: "components/sidebar-new-article-list" */).then(c => wrapFunctional(c.default || c))
