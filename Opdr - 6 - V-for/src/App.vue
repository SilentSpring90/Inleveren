<template>
  <div>
    <h2>Todo-lijst met v-for</h2>

    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.name }}
        ({{ task.completed ? 'voltooid' : 'niet voltooid' }})

        <button @click="toggleTask(task)">Toggle</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tasks = ref([
  { id: 1, name: 'Boodschappen doen', completed: false },
  { id: 2, name: 'Vaatwasser', completed: false },
  { id: 3, name: 'Kat eten geven', completed: false },
  { id: 4, name: 'Was doen', completed: false },
  { id: 5, name: 'Koken', completed: false },
  { id: 6, name: 'Gamen', completed: false },
  { id: 7, name: 'Stofzuigen', completed: false },
])

const toggleTask = (task) => {
  task.completed = !task.completed
}
</script>