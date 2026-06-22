<script setup>
import { ref } from 'vue'
import ThrownDice from './components/ThrownDice.vue'
import ScoreTable from './components/ScoreTable.vue'

const dice = ref([1, 1, 1, 1, 1])
</script>

<template>
  <main>
    <h1>Yahtzee!</h1>

    <ThrownDice v-model="dice" />
    <ScoreTable v-model="dice" />
  </main>
</template>

<style scoped>
main {
  max-width: 900px;
  margin: 40px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
}
</style>