import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Singup from '../views/Singup.vue'
import Login from '../views/Login.vue'
import profile from '../views/profile.vue'
// import auth from '../views/auth.vue'





Vue.use(VueRouter)


const routes = [
  // {
  //   path: '/',
  //   name: 'auth',
  //   component: auth,
  // },
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
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
