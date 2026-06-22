<script setup>
import GroceriesTable from '../components/GroceriesTable.vue'
import { groceries } from '../store'
</script>

<template>
  <section>
    <h2>Overzicht boodschappen</h2>
    <GroceriesTable :products="groceries" />
  </section>
</template>
