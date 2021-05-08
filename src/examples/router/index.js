import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { title: '表格打印', icon: 'home' },
    component: () => import('../views/home.vue')
  },
  {
    path: '/introduce',
    name: 'introduce',
    component:r => require.ensure([], () => r(require('../docs/introduce.md')))
  },
  {
    path: '/icon',
    name: 'icon',
    meta: { title: '字体图标', icon: 'icon' },
    component: () => import('../docs/icon.md')
  },
  {
    path: '/tab',
    name: 'tab',
    component:r => require.ensure([], () => r(require('../docs/tabs.md')))
  },
  {
    path: '/checkbox',
    name: 'checkbox',
    component:r => require.ensure([], () => r(require('../docs/checkbox.md')))
  }
]

//解决路由报错
const originalPush = VueRouter.prototype.push
  VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
  routes
})

export default router
