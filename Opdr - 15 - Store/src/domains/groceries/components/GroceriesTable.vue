<script setup>
import { computed } from 'vue'
import { removeGrocery } from '../store'

const props = defineProps({
  products: {
    type: Array,
    required: true
  }
})

const totalPrice = computed(() => {
  return props.products.reduce((total, product) => total + product.price * product.amount, 0)
})

function formatPrice(price) {
  return '€ ' + price.toFixed(2)
}
</script>

<template>
  <section class="card">
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Prijs</th>
          <th>Aantal</th>
          <th>Subtotaal</th>
          <th>Acties</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ formatPrice(product.price) }}</td>
          <td>{{ product.amount }}</td>
          <td>{{ formatPrice(product.price * product.amount) }}</td>
          <td>
            <RouterLink :to="`/edit/${product.id}`">Edit</RouterLink>
            |
            <button class="danger" @click="removeGrocery(product.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <p class="total">Totaal: {{ formatPrice(totalPrice) }}</p>
  </section>
</template>
