import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

  //Users route
  {
    path: '/',
    name: 'Home',
    component: function () {
      return import('../views/client/Home')
    },
    meta: {
      layouts: 'Client'
    }
  },


  // Admin route
  {
    path: '/admin',
    name: 'Shop',
    component: function () {
      return import( '../views/admin/Shop.vue')
    },
    meta: {
      layouts: 'Admin'
    }
  },
  {
    path: '/systems',
    name: 'Systems',
    component: function () {
      return import( '../views/admin/Systems.vue')
    },
    meta: {
      layouts: 'Admin'
    }
  },
  {
    path: '/contents',
    name: 'Contents',
    component: function () {
      return import( '../views/admin/Contents.vue')
    },
    meta: {
      layouts: 'Admin'
    }
  },
  {
    path: '/users',
    name: 'Users',
    component: function () {
      return import( '../views/admin/Users.vue')
    },
    meta: {
      layouts: 'Admin'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
