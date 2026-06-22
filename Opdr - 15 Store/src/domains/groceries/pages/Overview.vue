<script setup>
import GroceriesTable from '../components/GroceriesTable.vue'
import { getAllGroceries } from '../store'
</script>

<template>
  <section>
    <h2>Overzicht boodschappen</h2>
    <GroceriesTable :products="getAllGroceries" />
  </section>
</template>
