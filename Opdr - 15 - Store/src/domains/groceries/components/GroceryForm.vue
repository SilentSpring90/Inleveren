<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  grocery: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['submit'])

// We maken een kopie van de prop.
// Zo passen we de store niet direct aan tijdens het typen.
const form = ref({ ...props.grocery })

watch(() => props.grocery, (newGrocery) => {
  form.value = { ...newGrocery }
})

function submitForm() {
  emit('submit', { ...form.value })
}
</script>

<template>
  <form class="card" @submit.prevent="submitForm">
    <div class="form-grid">
      <label>
        Naam
        <input v-model="form.name" type="text" required />
      </label>

      <label>
        Prijs
        <input v-model.number="form.price" type="number" min="0" step="0.01" required />
      </label>

      <label>
        Aantal
        <input v-model.number="form.amount" type="number" min="0" required />
      </label>
    </div>

    <div class="form-actions">
      <button type="submit">Opslaan</button>
      <RouterLink class="button secondary" to="/">Annuleren</RouterLink>
    </div>
  </form>
</template>
