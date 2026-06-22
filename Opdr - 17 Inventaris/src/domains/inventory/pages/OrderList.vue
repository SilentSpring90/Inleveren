<script setup>
import { getProductsToOrder } from '../store'

function orderAmount(product) {
  return product.minStock - product.stock
}
</script>

<template>
  <section>
    <h2>Bestellijst</h2>

    <section class="card" v-if="getProductsToOrder.length === 0">
      <p>Er hoeven op dit moment geen producten besteld te worden.</p>
    </section>

    <section class="card" v-else>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Voorraad</th>
            <th>Minimum</th>
            <th>Te bestellen</th>
            <th>Leverancier</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in getProductsToOrder" :key="product.id">
            <td>{{ product.name }}</td>
            <td>{{ product.stock }}</td>
            <td>{{ product.minStock }}</td>
            <td class="low-stock">{{ orderAmount(product) }}</td>
            <td>{{ product.supplier }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </section>
</template>
