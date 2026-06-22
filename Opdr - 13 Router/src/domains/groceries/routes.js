import Overview from './pages/Overview.vue'
import Create from './pages/Create.vue'
import Edit from './pages/Edit.vue'

// Routes voor het groceries-domein.
const groceriesRoutes = [
  { path: '/', name: 'overview', component: Overview },
  { path: '/create', name: 'create', component: Create },
  { path: '/edit/:id', name: 'edit', component: Edit }
]

export default groceriesRoutes
