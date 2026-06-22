<script setup>
import { useRouter } from 'vue-router'
import GroceryForm from '../components/GroceryForm.vue'
import { addGrocery } from '../store'

const router = useRouter()

const grocery = {
  name: '',
  price: 0,
  amount: 0
}

function saveGrocery(newGrocery) {
  addGrocery(newGrocery)
  router.push('/')
}
</script>

<template>
  <section>
    <h2>Product toevoegen</h2>
    <GroceryForm :grocery="grocery" @submit="saveGrocery" />
  </section>
</template>
