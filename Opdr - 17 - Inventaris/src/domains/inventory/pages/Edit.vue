<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ProductForm from '../components/ProductForm.vue'
import { getProductById, updateProduct } from '../store'

const route = useRoute()
const router = useRouter()

const product = getProductById(route.params.id)

const fallbackProduct = computed(() => {
  return product.value ?? {
    id: route.params.id,
    name: '',
    category: '',
    stock: 0,
    minStock: 0,
    price: 0,
    supplier: ''
  }
})

function saveProduct(updatedProduct) {
  updateProduct(updatedProduct)
  router.push('/')
}
</script>

<template>
  <section>
    <h2>Product aanpassen</h2>
    <ProductForm :product="fallbackProduct" @submit="saveProduct" />
  </section>
</template>
