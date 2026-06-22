import { createRouter, createWebHistory } from 'vue-router'
import groceriesRoutes from '../domains/groceries/routes'

const router = createRouter({
  history: createWebHistory(),
  routes: groceriesRoutes
})

export default router
