import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/login.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    alias: '/login',
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
