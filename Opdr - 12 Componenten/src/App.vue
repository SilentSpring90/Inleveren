<script setup>
import { ref } from 'vue'
import GroceriesTable from './components/GroceriesTable.vue'

// Opdracht 12:
// De data staat in App.vue.
// De tabel staat in een apart component.
const products = ref([
  { id: 1, name: 'Brood', price: 2.19, amount: 1 },
  { id: 2, name: 'Melk', price: 1.29, amount: 2 },
  { id: 3, name: 'Eieren', price: 3.49, amount: 1 },
  { id: 4, name: 'Kaas', price: 4.25, amount: 1 },
  { id: 5, name: 'Appels', price: 2.99, amount: 1 }
])
</script>

<template>
  <main class="app">
    <header class="header">
      <h1>Opdracht 12 - Componenten</h1>
      <p>App.vue beheert de data en geeft die door aan GroceriesTable.vue via props.</p>
    </header>

    <GroceriesTable :products="products" />
  </main>
</template>
