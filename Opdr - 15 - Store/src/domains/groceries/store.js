import { ref, computed } from 'vue'

// STATE
// Dit is de centrale lijst met boodschappen.
const groceries = ref([
  { id: 1, name: 'Brood', price: 2.19, amount: 1 },
  { id: 2, name: 'Melk', price: 1.29, amount: 2 },
  { id: 3, name: 'Eieren', price: 3.49, amount: 1 },
  { id: 4, name: 'Kaas', price: 4.25, amount: 1 },
  { id: 5, name: 'Appels', price: 2.99, amount: 1 }
])

// GETTERS
export const getAllGroceries = computed(() => groceries.value)

export function getGroceryById(id) {
  return computed(() => groceries.value.find(grocery => grocery.id == id))
}

// ACTIONS
export function addGrocery(grocery) {
  groceries.value.push({
    ...grocery,
    id: Date.now()
  })
}

export function updateGrocery(updatedGrocery) {
  const index = groceries.value.findIndex(grocery => grocery.id == updatedGrocery.id)

  if (index !== -1) {
    groceries.value[index] = updatedGrocery
  }
}

export function removeGrocery(id) {
  groceries.value = groceries.value.filter(grocery => grocery.id != id)
}
