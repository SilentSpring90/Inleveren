<script setup>
import { ref, computed } from 'vue'

// Opdracht 11:
// Alle code staat bewust in App.vue.
// Zo kun je oefenen met ref, v-for, v-model en computed.
const products = ref([
  { id: 1, name: 'Brood', price: 2.19, amount: 1 },
  { id: 2, name: 'Melk', price: 1.29, amount: 2 },
  { id: 3, name: 'Eieren', price: 3.49, amount: 1 },
  { id: 4, name: 'Kaas', price: 4.25, amount: 1 },
  { id: 5, name: 'Appels', price: 2.99, amount: 1 }
])

// Computed wordt automatisch opnieuw berekend als een aantal verandert.
const totalPrice = computed(() => {
  return products.value.reduce((total, product) => {
    return total + product.price * product.amount
  }, 0)
})

function formatPrice(price) {
  return '€ ' + price.toFixed(2)
}
</script>

<template>
  <main class="app">
    <header class="header">
      <h1>Opdracht 11 - Vue3 Boodschappenlijst</h1>
      <p>Alles staat in App.vue. De hoeveelheden werken met v-model.</p>
    </header>

    <section class="card">
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Prijs</th>
            <th>Aantal</th>
            <th>Subtotaal</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.name }}</td>
            <td>{{ formatPrice(product.price) }}</td>
            <td>
              <input v-model.number="product.amount" type="number" min="0" />
            </td>
            <td>{{ formatPrice(product.price * product.amount) }}</td>
          </tr>
        </tbody>
      </table>

      <p class="total">Totaal: {{ formatPrice(totalPrice) }}</p>
    </section>
  </main>
</template>
