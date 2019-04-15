import Vue from 'vue'
import Vuex from 'vuex'
// import app from './modules/app'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
  },
  state: {
    app: {
    }
  },
  getters: {

  },
  mutations: {
    SET_ISAUTH(state, value) {
      state.app.isAuth = value
    },
    SET_USERNAME(state, value) {
      state.app.userName = value
    }
  },
  actions: {
    // 只会在页面刷新时运行一次，需要刷新下页面才行
    // 所以登陆之后不会再次运行，储存数据不生效
    // nuxtServerInit({ commit }, { req }) {
    //   console.log(`----------------store nuxtServerInit 运行`) // eslint-disable-line no-console
    //   console.log(`page-session数据:`) // eslint-disable-line no-console
    //   console.log(req.session) // eslint-disable-line no-console
    //   if (req.session && req.session.userName) {
    //     commit('SET_ISAUTH', true)
    //     commit('SET_USERNAME', req.session.userName)
    //   } else {
    //     commit('SET_ISAUTH', false)
    //     commit('SET_USERNAME', '')
    //   }
    // },
    setIsAuth({ commit }, value) {
      commit('SET_ISAUTH', value)
    },
    setUserName({ commit }, value) {
      commit('SET_USERNAME', value)
    }
  }
})

export default store
