// import axios from '~/plugins/axios'
// import { hasAuth } from '~/units/auth'

export default function (context) {
  console.log('-----------------路由中间件:') // eslint-disable-line no-console
  console.log(`store数据:`) // eslint-disable-line no-console
  console.log(context.store.state) // eslint-disable-line no-console
  // 服务器环境 只会在服务初始时运行
  if (process.server) {
    console.log(`page-session ID:`) // eslint-disable-line no-console
    console.log(context.req.sessionID) // eslint-disable-line no-console
    console.log(`page-session数据:`) // eslint-disable-line no-console
    console.log(context.req.session) // eslint-disable-line no-console
    if (context.req.session.userName) {
      console.log('有权限') // eslint-disable-line no-console
      // 有权限但是跳转登陆页面， 定向到主页
      if (context.req.originalUrl === '/login') {
        context.redirect(302, '/')
        return
      }
      // console.log(context) // eslint-disable-line no-console
    } else {
      console.log('跳转登陆1') // eslint-disable-line no-console
      context.redirect(302, '/login')
    }
  } else {
    console.log(context.store) // eslint-disable-line no-console
    // if (context.store.state.app.isAuth) {
    //   console.log('有权限') // eslint-disable-line no-console
    //   console.log(context) // eslint-disable-line no-console
    //   // 有权限但是跳转登陆页面， 定向到主页
    //   // if (context.req.originalUrl === '/login') {
    //   //   // context.redirect(302, '/')
    //   //   return
    //   // }
    // } else {
    //   console.log('跳转登陆2') // eslint-disable-line no-console
    //   context.redirect(302, '/login')
    // }
  }

  console.log('----------------中间件结束') // eslint-disable-line no-console
}
