/*
 * @Author: your name
 * @Date: 2021-05-28 20:17:49
 * @LastEditTime: 2021-06-05 16:18:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myblog\plugins\route.js
 */
import stroe from '@/store/index'
export default ({ app }) => {
    app.router.afterEach((to, from) => {
    })
    app.router.beforeEach((to, from, next) => {
      next()
    })
  }