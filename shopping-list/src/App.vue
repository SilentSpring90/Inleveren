<template>
  <main class="app">
    <section class="card">
      <h1>Mijn shopping list</h1>

      <form class="add-form" @submit.prevent="addItem">
        <input v-model="newItem" type="text" placeholder="Nieuw item..." />
        <button type="submit">Toevoegen</button>
      </form>

      <GroceriesTable
        :items="items"
        @remove-item="removeItem"
        @toggle-item="toggleItem"
      />
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import GroceriesTable from './components/Groceries.vue'

const newItem = ref('')

const items = ref([
  { id: 1, name: 'Brood', done: false },
  { id: 2, name: 'Melk', done: false },
  { id: 3, name: 'Bananen', done: true }
])

function addItem() {
  const name = newItem.value.trim()

  if (!name) return

  items.value.push({
    id: Date.now(),
    name,
    done: false
  })

  newItem.value = ''
}

function removeItem(id) {
  items.value = items.value.filter((item) => item.id !== id)
}

function toggleItem(id) {
  const item = items.value.find((item) => item.id === id)

  if (item) {
    item.done = !item.done
  }
}
</script>