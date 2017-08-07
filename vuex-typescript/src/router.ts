import Vue from 'vue'
import Router from 'vue-router'
import App from './Views/App'

Vue.use(Router)

const routes = [
  { path: '/', component: App, }
]

export default new Router({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})