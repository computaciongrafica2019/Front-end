import Vue from 'vue'
import Router from 'vue-router'

// Views
import Home from './views/Home.vue'
import Register from './views/Register.vue'
import Catalog from './views/Catalog.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: Catalog
    }
  ]
})
