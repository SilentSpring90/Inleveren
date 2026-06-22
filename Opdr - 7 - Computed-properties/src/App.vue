<template>
  <div>
    <h2>People manager with computed properties</h2>

    <div>
      <div>
        <label for="name">Name</label>
        <input
          id="name"
          v-model="newName"
          placeholder="Name"
          :class="{
            invalid: shouldShowValidationMessage && !newName.trim(),
            valid: newName.trim()
          }"
        />
      </div>

      <div>
        <label for="age">Age</label>
        <input
          id="age"
          v-model.number="newAge"
          placeholder="Age"
          type="number"
          :class="{
            invalid:
              shouldShowValidationMessage &&
              (newAge === null || newAge === '' || newAge < 0),
            valid: newAge !== null && newAge !== '' && newAge >= 0
          }"
        />
      </div>

      <button @click="addPerson">Add person</button>

      <p v-if="shouldShowValidationMessage" class="error">
        {{ validationMessage }}
      </p>
    </div>

    <h3>All people</h3>
    <ul>
      <li v-for="person in people" :key="person.id">
        {{ person.name }} - {{ person.age }} years old
      </li>
    </ul>

    <h3>Children</h3>
    <ul>
      <li v-for="child in children" :key="child.id">
        {{ child.name }} - {{ child.age }} years old
      </li>
    </ul>

    <h3>Adults</h3>
    <ul>
      <li v-for="adult in adults" :key="adult.id">
        {{ adult.name }} - {{ adult.age }} years old
      </li>
    </ul>

    <h3>Statistics</h3>
    <p>Total people: {{ totalPeople }}</p>
    <p>Number of children: {{ numberOfChildren }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const people = ref([
  { id: 1, name: 'Jefry', age: 36 },
  { id: 2, name: 'Lucas', age: 4 },
])

const newName = ref('')
const newAge = ref(null)
const nextId = ref(3)
const hasTriedSubmit = ref(false)

const children = computed(() => {
  return people.value.filter((person) => person.age < 18)
})

const adults = computed(() => {
  return people.value.filter((person) => person.age >= 18)
})

const totalPeople = computed(() => {
  return people.value.length
})

const numberOfChildren = computed(() => {
  return children.value.length
})

const validationMessage = computed(() => {
  if (!newName.value.trim()) {
    return 'Please enter a name.'
  }

  if (newAge.value === null || newAge.value === '') {
    return 'Please enter an age.'
  }

  if (newAge.value < 0) {
    return 'Age cannot be negative.'
  }

  return ''
})

const hasStartedTyping = computed(() => {
  return newName.value.trim() || newAge.value !== null
})

const shouldShowValidationMessage = computed(() => {
  return validationMessage.value && (hasTriedSubmit.value || hasStartedTyping.value)
})

const addPerson = () => {
  hasTriedSubmit.value = true

  if (validationMessage.value) {
    return
  }

  people.value.push({
    id: nextId.value,
    name: newName.value.trim(),
    age: newAge.value,
  })

  nextId.value++
  newName.value = ''
  newAge.value = null
  hasTriedSubmit.value = false
}
</script>

<style scoped>
label {
  display: block;
  margin-bottom: 4px;
  font-weight: bold;
}

input {
  display: block;
  margin-bottom: 12px;
  padding: 6px;
  border: 2px solid #ccc;
  border-radius: 4px;
}

input.valid {
  border-color: green;
}

input.invalid {
  border-color: red;
}

.error {
  color: red;
  font-weight: bold;
}
</style>