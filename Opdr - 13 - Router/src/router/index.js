import { createRouter, createWebHistory } from 'vue-router'
import groceriesRoutes from '../domains/groceries/routes'

// Hier maken we de router aan.
// De routes komen uit het groceries-domein.
const router = createRouter({
  history: createWebHistory(),
  routes: groceriesRoutes
})

export default router
