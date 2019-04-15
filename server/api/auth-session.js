import express from 'express'
import bodyParser from 'body-parser'
// import session from 'express-session'
// const cookieParser = require('cookie-parser')

// Create app
const app = express()

// Install middleware
app.use(bodyParser.json())

// 会话数据不会保存在cookie本身中，只会保存在会话ID中。会话数据存储在服务器端。
// app.use(session({
//   name: 'page-session', // 对session id 对应的cookie key值
//   secret: 'secret', // 对session id 相关的cookie 进行签名
//   resave: false, // 每次请求是否重新保存会话信息
//   rolling: true, // 请求之后刷新浏览器对应cookie的过期时间
//   saveUninitialized: false, // 是否保存未初始化的会话
//   cookie: {
//     maxAge: 1000 * 60 * 5 // 设置 session 的有效时间，单位毫秒
//   }
// }))

// 全局过滤
// 设置cookie
// 使用 session 中间件
app.use((req, res, next) => {
  console.log('api服务sessionID: ') // eslint-disable-line no-console
  console.log(req.sessionID) // eslint-disable-line no-console
  // console.log(app.locals) // eslint-disable-line no-console
  if (req.originalUrl === '/api/auth/login') {
    next()
  } else if (req.session.userName) { //判断session 状态，如果有效，则返回主页，否则转到登录页面
    // console.log(`登陆sessionID: ${req.sessionID}`) // eslint-disable-line no-console
    console.log(req.session) // eslint-disable-line no-console
    // res.json({ status: 'OK' })
    next()
  } else {
    throw new Error('用户未登陆')
  }
})

// -- Routes --
// [POST] /login
app.post('/login', (req, res, next) => {
  const { userName, password } = req.body
  const valid = userName.length && password === '123'

  if (!valid) {
    throw new Error('Invalid userName or password')
  }
  // 写入session
  req.session.userName = userName // 登录成功，设置 session
  // res.cookie('userName', userName)

  res.json({ status: 'OK' })
})

// [GET] /user
app.get('/user', (req, res, next) => {
  res.json({ user: req.user })
})

// [POST] /logout
app.post('/logout', (req, res, next) => {
  // res.clearCookie('userName')
  req.session.destroy() // 销毁
  res.json({ status: 'OK' })
})

// Error handler
app.use((err, req, res, next) => {
  console.error(err) // eslint-disable-line no-console
  res.status(401).send(err + '')
})

// -- export app --
module.exports = {
  path: '/api/auth',
  handler: app
}
