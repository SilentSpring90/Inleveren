<script setup>
const DICE_AMOUNT = 5
const DICE_SIDES = 6

const dice = defineModel({
  type: Array,
  default: () => [1, 1, 1, 1, 1],
})

const diceIcons = {
  1: '⚀',
  2: '⚁',
  3: '⚂',
  4: '⚃',
  5: '⚄',
  6: '⚅',
}

const rollDie = () => {
  return Math.floor(Math.random() * DICE_SIDES) + 1
}

const rollDice = () => {
  dice.value = Array.from({ length: DICE_AMOUNT }, rollDie)
}
</script>

<template>
  <section class="dice-section">
    <div class="dice-row">
      <span
        v-for="(die, index) in dice"
        :key="index"
        class="die"
        :aria-label="`Dobbelsteen ${index + 1}: ${die}`"
      >
        {{ diceIcons[die] }}
      </span>
    </div>

    <button @click="rollDice" aria-label="Gooi de dobbelstenen">
      Gooien
    </button>
  </section>
</template>

<style scoped>
.dice-section {
  text-align: center;
  margin-bottom: 30px;
}

.dice-row {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}

.die {
  font-size: 48px;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background-color: #4b5563;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #374151;
}
</style>