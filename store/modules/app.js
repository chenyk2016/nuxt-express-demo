import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  namespaced: true,
  state: {
    isAuth: false, // 判断登陆状态
    userName: ''
  },
  getters: {
  },
  mutations: {
    SET_ISAUTH(state, value) {
      state.isAuth = value
    },
    SET_USERNAME(state, value) {
      state.userName = value
    }
  },
  actions: {
    setIsAuth({ commit }, value) {
      commit('SET_ISAUTH', value)
    },
    setUserName({ commit }, value) {
      commit('SET_ISAUTH', value)
    }
  }
})

export default store
