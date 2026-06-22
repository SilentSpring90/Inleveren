<template>
  <div class="child-box">
    <h3>Kindcomponent</h3>

    <p>Notificatie via defineProps:</p>
    <strong>{{ message }}</strong>

    <br />
    <br />

    <button @click="sendMessageToParent">
      Verzend bericht
    </button>

    <hr />

    <label for="message-input">Typ bericht:</label>

    <input
      id="message-input"
      v-model="modelMessage"
      placeholder="Typ een bericht..."
      aria-label="Typ een bericht voor de oudercomponent"
    />
  </div>
</template>

<script setup>
defineProps({
  message: {
    type: String,
    default: 'Geen bericht ontvangen',
  },
})

const emit = defineEmits(['updateMessage'])

const modelMessage = defineModel({
  type: String,
  default: '',
})

const sendMessageToParent = () => {
  emit('updateMessage', 'Reply ontvangen')
}
</script>

<style scoped>
.child-box {
  margin-top: 20px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

label {
  display: block;
  margin-bottom: 6px;
  font-weight: bold;
}

input {
  padding: 8px;
  margin-top: 8px;
}
</style>