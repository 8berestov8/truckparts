import Vue from 'vue'
import VueRouter from 'vue-router'
import Client from "../layouts/Client";
import Admin from "../layouts/Admin";
import Home from '../views/client/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    layouts: Client
  },
  {
    path: '/admin',
    name: 'Admin',
    component: function () {
      return import( '../views/admin/Home.vue')
    },
    layouts: Admin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
