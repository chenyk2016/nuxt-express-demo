# nuxt-express1

> My impressive Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## 笔记

nuxt 仍有单页面组件的思维。

### 相关知识

#### express-session
session 会话控制

Session 对象存储特定用户会话所需的属性及配置信息，当用户在应用程序的 Web 页之间跳转时，存储在 Session 对象中的变量将不会丢失，而是在整个用户会话中一直存在下去。注意 会话状态仅在支持 cookie 的浏览器中保留。

#### connect-redis
connect-redis是一个由 node_redis 支持的Redis会话存储 。

#### vuex在跟组件触发模块的commit 和actions 不生效

#### nuxtServerInit 和 middleware 运行次数
**nuxtServerInit**

nuxtServerInit 只会在服务初始时， 和刷新页面时 运行一次

在登陆接口之后，服务端不会再次运行这个方法，需要刷新页面之后才行。

所以在这里储存数据会有问题

**middleware**
