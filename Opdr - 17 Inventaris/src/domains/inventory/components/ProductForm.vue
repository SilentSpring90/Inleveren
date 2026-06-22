<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['submit'])

const form = ref({ ...props.product })

watch(() => props.product, (newProduct) => {
  form.value = { ...newProduct }
})

function submitForm() {
  emit('submit', { ...form.value })
}
</script>

<template>
  <form class="card" @submit.prevent="submitForm">
    <div class="form-grid">
      <label>
        Productnaam
        <input v-model="form.name" type="text" required />
      </label>

      <label>
        Categorie
        <input v-model="form.category" type="text" required />
      </label>

      <label>
        Leverancier
        <input v-model="form.supplier" type="text" required />
      </label>

      <label>
        Voorraad
        <input v-model.number="form.stock" type="number" min="0" required />
      </label>

      <label>
        Minimale voorraad
        <input v-model.number="form.minStock" type="number" min="0" required />
      </label>

      <label>
        Prijs
        <input v-model.number="form.price" type="number" min="0" step="0.01" required />
      </label>
    </div>

    <div class="form-actions">
      <button type="submit">Opslaan</button>
      <RouterLink class="button secondary" to="/">Annuleren</RouterLink>
    </div>
  </form>
</template>
