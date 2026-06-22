<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import GroceryForm from '../components/GroceryForm.vue'
import { getGroceryById, updateGrocery } from '../store'

const route = useRoute()
const router = useRouter()

const grocery = getGroceryById(route.params.id)

const fallbackGrocery = computed(() => {
  return grocery.value ?? { id: route.params.id, name: '', price: 0, amount: 0 }
})

function saveGrocery(updatedGrocery) {
  updateGrocery(updatedGrocery)
  router.push('/')
}
</script>

<template>
  <section>
    <h2>Product bewerken</h2>

    <GroceryForm
      v-if="grocery"
      :grocery="fallbackGrocery"
      @submit="saveGrocery"
    />
  </section>
</template>
