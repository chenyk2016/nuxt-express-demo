const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
// const jwt = require('express-jwt')
// const jsonwebtoken = require('jsonwebtoken')
// const session = require('express-session')

// Create app
const app = express()

// Install middleware
app.use(cookieParser())
app.use(bodyParser.json())

// JWT middleware
// app.use(
//   jwt({
//     secret: 'dummy'
//   }).unless({
//     path: '/api/auth/login'
//   })
// )

// 设置cookie
// 使用 session 中间件
// let sess = {
//   secret: 'secret', // 对session id 相关的cookie 进行签名
//   resave: true,
//   saveUninitialized: false, // 是否保存未初始化的会话
//   cookie: {
//     maxAge: 1000 * 60 * 3 // 设置 session 的有效时间，单位毫秒
//   }
// }

// if (app.get('env') === 'production') {
//   app.set('trust proxy', 1) // trust first proxy
//   sess.cookie.secure = true // serve secure cookies
// }

// app.use(session(sess))

// -- Routes --
app.use((req, res, next) => {
  console.log(req.originalUrl) // eslint-disable-line no-console
  console.log(req.session) // eslint-disable-line no-console
  console.log(req.cookies) // eslint-disable-line no-console

  next()
  // if (req.session.userName) {
  //   console.log(req.session) // eslint-disable-line no-console
  //   next()
  // } else {
  //   throw new Error('未登陆')
  // }
})

// [POST] /login
// app.post('/login', (req, res, next) => {
//   const { username, password } = req.body
//   const valid = username.length && password === '123'
//
//   if (!valid) {
//     throw new Error('Invalid username or password')
//   }
//
//   const accessToken = jsonwebtoken.sign(
//     {
//       username,
//       picture: 'https://github.com/nuxt.png',
//       name: 'User ' + username,
//       scope: ['test', 'user']
//     },
//     'dummy'
//   )
//   // res.cookie('vavava', 'aaaaa', {})
//   res.json({
//     token: {
//       accessToken
//     }
//   })
//   // res.json({ status: 'OK' })
// })
app.post('/login', (req, res, next) => {
  const { username, password } = req.body
  const valid = username.length && password === '123'

  if (!valid) {
    throw new Error('Invalid username or password')
  }
  // 写入cookie
  res.cookie('username', username)
  app.locals = username
  // req.session.userName = username // 登录成功，设置 session

  res.json({ status: 'OK' })
})

// [GET] /user
app.get('/user', (req, res, next) => {
  res.json({ user: req.user })
})

// [POST] /logout
app.post('/logout', (req, res, next) => {
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
