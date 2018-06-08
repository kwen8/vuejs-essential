import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/auth/register',
    name: 'Register',
    component: () => import('@/views/Register')
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})
