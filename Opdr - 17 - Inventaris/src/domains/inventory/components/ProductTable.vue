<script setup>
import { removeProduct, increaseStock, decreaseStock } from '../store'

const props = defineProps({
  products: {
    type: Array,
    required: true
  }
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
          <th>Categorie</th>
          <th>Voorraad</th>
          <th>Minimum</th>
          <th>Prijs</th>
          <th>Leverancier</th>
          <th>Acties</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.category }}</td>
          <td :class="{ 'low-stock': product.stock < product.minStock }">
            {{ product.stock }}
          </td>
          <td>{{ product.minStock }}</td>
          <td>{{ formatPrice(product.price) }}</td>
          <td>{{ product.supplier }}</td>
          <td>
            <button class="secondary" @click="decreaseStock(product.id)">-</button>
            <button class="secondary" @click="increaseStock(product.id)">+</button>
            <RouterLink :to="`/edit/${product.id}`">Edit</RouterLink>
            <button class="danger" @click="removeProduct(product.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
