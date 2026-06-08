<script setup>
import { ref } from 'vue'

const rolls = ref([])

const count = ref({
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0
})

function rollDice() {
  rolls.value = []

  count.value = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
  }

  for (let i = 0; i < 8; i++) {
    const number = Math.floor(Math.random() * 6) + 1

    rolls.value.push(number)
    count.value[number]++
  }

  console.log('Gegooide dobbelstenen:', rolls.value)
  console.table(count.value)
}
</script>

<template>
  <main>
    <h1>JavaScript dobbelstenen</h1>

    <button @click="rollDice">
      Gooi!
    </button>

    <h2>Gegooide dobbelstenen</h2>

    <p v-if="rolls.length === 0">
      Klik op de knop om te gooien.
    </p>

    <p v-else>
      {{ rolls.join(', ') }}
    </p>

    <h2>Resultaten</h2>

    <table>
      <thead>
        <tr>
          <th>Getal</th>
          <th>Aantal</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(amount, number) in count" :key="number">
          <td>{{ number }}</td>
          <td>{{ amount }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<style scoped>
main {
  font-family: Arial, sans-serif;
  max-width: 500px;
  margin: 40px auto;
}

button {
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
}

table {
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}

th {
  background-color: #f2f2f2;
}
</style>