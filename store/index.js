/*
 * @Author: your name
 * @Date: 2021-05-28 20:21:24
 * @LastEditTime: 2021-06-05 16:02:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myblog\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state:()=>({
    menuActive: false,
    spinning:false
  }),
  getters:{
    menuActive(state){
      return state.menuActive
    },
    spinning(state){
      return state.spinning
    }
  },
  mutations: {
    SET_MENUACTIVE (state) {
      state.menuActive=!state.menuActive
    },
    CLOSE_SPINNING(state){
      state.spinning=false
    },
    OPEN_SPINNING(state){
      state.spinning=true
    }
  }
})

export default store