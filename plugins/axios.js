import Vue from 'vue'
import axios from 'axios'

let option = {
  timeout: 5000
}
// option.baseURL = ''

const instance = axios.create(option)

export default () => {
  Vue.prototype.$axios = instance
  return instance
}
