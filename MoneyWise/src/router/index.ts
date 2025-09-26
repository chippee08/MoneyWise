import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/login.vue'
import Register from '../pages/register.vue'
import Home from '../pages/home.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    alias: '/login',
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    alias: '/register',
  },

  {
    path: '/home',
    name: 'Home',
    component: Home,
    alias: '/home',
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
