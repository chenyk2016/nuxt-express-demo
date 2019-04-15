// import axios from '~/plugins/axios'
// import { hasAuth } from '~/units/auth'

// function canGo (store, route, redirect) {
//   if (store.state.app.isAuth === true) {
//     console.log('有权限') // eslint-disable-line no-console
//     if (route.path === '/login') {
//       // 有权限但是跳转登陆页面, 定向到主页
//       redirect(302, '/')
//     }
//   } else {
//     console.log('无权限') // eslint-disable-line no-console
//     if (route.path !== '/login') {
//       console.log('跳转登陆') // eslint-disable-line no-console
//       redirect(302, '/login')
//     }
//   }
// }

export default function ({ store, req, redirect, route }) {
  console.log('---------------路由中间件:') // eslint-disable-line no-console
  // 有权限
  if (process.server) {
    console.log('server端运行') // eslint-disable-line no-console
    if (store.state.app.isAuth === false && req.session.userName) {
      console.log('有权限') // eslint-disable-line no-console
      // 更新store数据
      // 更新数据后， store并不会立即更新
      store.commit('SET_ISAUTH', true)
      store.commit('SET_USERNAME', req.session.userName)
      // canGo(store, route, redirect)
      if (route.path === '/login') {
        // 有权限但是跳转登陆页面, 定向到主页
        redirect(302, '/')
      }
    } else {
      console.log('无权限') // eslint-disable-line no-console
      store.commit('SET_ISAUTH', false)
      store.commit('SET_USERNAME', '')
      redirect(302, '/login')
    }
  } else {
    // 初次打开服务页面，客户端中间件并不会运行
    console.log('客户端运行') // eslint-disable-line no-console
    console.log(store.state.app.isAuth) // eslint-disable-line no-console
  }
  console.log('----------------中间件结束') // eslint-disable-line no-console
}
