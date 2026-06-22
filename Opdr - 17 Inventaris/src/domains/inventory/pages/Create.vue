<script setup>
import { useRouter } from 'vue-router'
import ProductForm from '../components/ProductForm.vue'
import { addProduct } from '../store'

const router = useRouter()

const product = {
  name: '',
  category: '',
  stock: 0,
  minStock: 0,
  price: 0,
  supplier: ''
}

function saveProduct(newProduct) {
  addProduct(newProduct)
  router.push('/')
}
</script>

<template>
  <section>
    <h2>Product toevoegen</h2>
    <ProductForm :product="product" @submit="saveProduct" />
  </section>
</template>
