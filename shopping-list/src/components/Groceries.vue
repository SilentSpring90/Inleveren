<template>
  <ul v-if="items.length" class="shopping-list">
    <li v-for="item in items" :key="item.id">
      <label>
        <input
          :checked="item.done"
          type="checkbox"
          @change="$emit('toggle-item', item.id)"
        />

        <span :class="{ done: item.done }">
          {{ item.name }}
        </span>
      </label>

      <button
        class="remove-button"
        type="button"
        @click="$emit('remove-item', item.id)"
      >
        X
      </button>
    </li>
  </ul>

  <p v-else class="empty-message">
    Je shopping list is nog leeg.
  </p>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
})

defineEmits(['remove-item', 'toggle-item'])
</script>