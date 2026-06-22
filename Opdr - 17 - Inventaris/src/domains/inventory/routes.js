import Overview from './pages/Overview.vue'
import Create from './pages/Create.vue'
import Edit from './pages/Edit.vue'
import OrderList from './pages/OrderList.vue'

const inventoryRoutes = [
  { path: '/', name: 'inventory-overview', component: Overview },
  { path: '/create', name: 'inventory-create', component: Create },
  { path: '/edit/:id', name: 'inventory-edit', component: Edit },
  { path: '/order-list', name: 'inventory-order-list', component: OrderList }
]

export default inventoryRoutes
