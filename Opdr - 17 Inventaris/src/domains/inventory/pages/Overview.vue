<script setup>
import { ref, computed } from 'vue'
import ProductTable from '../components/ProductTable.vue'
import { getAllProducts } from '../store'

const search = ref('')

const filteredProducts = computed(() => {
  return getAllProducts.value.filter(product => {
    const searchText = search.value.toLowerCase()
    return product.name.toLowerCase().includes(searchText)
      || product.category.toLowerCase().includes(searchText)
      || product.supplier.toLowerCase().includes(searchText)
  })
})
</script>

<template>
  <section>
    <h2>Productoverzicht</h2>

    <section class="card">
      <label>
        Zoeken
        <input v-model="search" type="text" placeholder="Zoek op naam, categorie of leverancier..." />
      </label>
    </section>

    <ProductTable :products="filteredProducts" />
  </section>
</template>
