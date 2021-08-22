import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Singup from '../views/Singup.vue'
import Login from '../views/Login.vue'
import profile from '../views/profile.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Singup',
    name: 'Singup',
    component: Singup
  }, 
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
