<script setup>
import { computed } from 'vue'

// Met defineProps ontvangt dit component de producten uit App.vue.
const props = defineProps({
  products: {
    type: Array,
    required: true
  }
})

const totalPrice = computed(() => {
  return props.products.reduce((total, product) => {
    return total + product.price * product.amount
  }, 0)
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
</template>
