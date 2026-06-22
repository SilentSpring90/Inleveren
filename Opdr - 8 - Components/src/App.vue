<template>
  <div class="app">
    <h2>Vue componenten:</h2>

    <h3>Oudercomponent</h3>

    <p>
      Bericht van BigBrother (algemeen):
      <strong>{{ parentMessage }}</strong>
    </p>

    <p>
      Bericht ontvangen via emit (notificatie):
      <strong>{{ receivedMessage }}</strong>
    </p>

    <p>
      Bericht via defineModel (bericht van component 1):
      <strong>{{ sharedMessage }}</strong>
    </p>

    <ChildComponent
      :message="parentMessage"
      @updateMessage="handleUpdateMessage"
      v-model="sharedMessage"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ChildComponent from './components/ChildComponent.vue'

const parentMessage = ref('Big Brother is watching you')
const receivedMessage = ref('Geen reply ontvangen')
const sharedMessage = ref('Thuis zijn voor 18:00!')

const handleUpdateMessage = (newMessage) => {
  receivedMessage.value = newMessage
}
</script>

<style scoped>
.app {
  max-width: 700px;
  margin: 40px auto;
  font-family: Arial, sans-serif;
}

p {
  margin: 10px 0;
}
</style>