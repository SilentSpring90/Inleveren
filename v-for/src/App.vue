<template>
  <div>
    <h2>Todo-lijst met v-for</h2>

    <ul>
      <li v-for="(task, index) in tasks" :key="index">
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
  { name: 'Boodschappen doen', completed: false },
  { name: 'Vaatwasser', completed: true },
  { name: 'Kat eten geven', completed: false },
  { name: 'Was doen', completed: false },
  { name: 'Koken', completed: false },
  { name: 'Gamen', completed: false },
  { name: 'Stofzuigen', completed: false },
])

const toggleTask = (task) => {
  task.completed = !task.completed
}
</script>
