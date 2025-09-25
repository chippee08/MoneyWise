import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/login.vue'
import Register from '../pages/register.vue'

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
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
