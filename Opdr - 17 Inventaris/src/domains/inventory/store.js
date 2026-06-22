import { ref, computed, watch } from 'vue'

const STORAGE_KEY = 'student-inventory-products'

function loadProducts() {
  const savedProducts = localStorage.getItem(STORAGE_KEY)

  if (savedProducts) {
    return JSON.parse(savedProducts)
  }

  return [
    { id: 1, name: 'Laptop', category: 'Elektronica', stock: 4, minStock: 2, price: 699.00, supplier: 'Coolblue' },
    { id: 2, name: 'Muismat', category: 'Accessoires', stock: 1, minStock: 5, price: 8.99, supplier: 'Bol.com' },
    { id: 3, name: 'USB-C kabel', category: 'Kabels', stock: 3, minStock: 4, price: 12.50, supplier: 'Amazon' },
    { id: 4, name: 'Monitor', category: 'Elektronica', stock: 2, minStock: 1, price: 159.00, supplier: 'MediaMarkt' }
  ]
}

// STATE
// Dit is de centrale data-opslag voor de inventory.
const products = ref(loadProducts())

// De data wordt automatisch opgeslagen in localStorage.
watch(products, () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products.value))
}, { deep: true })

// GETTERS
export const getAllProducts = computed(() => products.value)

export const getProductsToOrder = computed(() => {
  return products.value.filter(product => product.stock < product.minStock)
})

export function getProductById(id) {
  return computed(() => products.value.find(product => product.id == id))
}

// ACTIONS
export function addProduct(product) {
  products.value.push({
    ...product,
    id: Date.now()
  })
}

export function updateProduct(updatedProduct) {
  const index = products.value.findIndex(product => product.id == updatedProduct.id)

  if (index !== -1) {
    products.value[index] = updatedProduct
  }
}

export function removeProduct(id) {
  products.value = products.value.filter(product => product.id != id)
}

export function increaseStock(id) {
  const product = products.value.find(product => product.id == id)
  if (product) product.stock++
}

export function decreaseStock(id) {
  const product = products.value.find(product => product.id == id)
  if (product && product.stock > 0) product.stock--
}
