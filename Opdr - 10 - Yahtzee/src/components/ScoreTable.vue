<script setup>
import { computed } from 'vue'

const BONUS_LIMIT = 63
const BONUS_POINTS = 35
const FULL_HOUSE_POINTS = 25
const SMALL_STRAIGHT_POINTS = 30
const LARGE_STRAIGHT_POINTS = 40
const YAHTZEE_POINTS = 50

const dice = defineModel({
  type: Array,
  default: () => [1, 1, 1, 1, 1],
})

const total = computed(() => {
  return dice.value.reduce((sum, die) => sum + die, 0)
})

const counts = computed(() => {
  const result = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  }

  for (const die of dice.value) {
    result[die]++
  }

  return result
})

const scoreNumber = (number) => {
  return counts.value[number] * number
}

const hasAmountOfSameDice = (amount) => {
  return Object.values(counts.value).some((count) => count >= amount)
}

const ones = computed(() => scoreNumber(1))
const twos = computed(() => scoreNumber(2))
const threes = computed(() => scoreNumber(3))
const fours = computed(() => scoreNumber(4))
const fives = computed(() => scoreNumber(5))
const sixes = computed(() => scoreNumber(6))

const upperTotal = computed(() => {
  return ones.value + twos.value + threes.value + fours.value + fives.value + sixes.value
})

const bonus = computed(() => {
  return upperTotal.value >= BONUS_LIMIT ? BONUS_POINTS : 0
})

const upperTotalWithBonus = computed(() => {
  return upperTotal.value + bonus.value
})

const threeOfAKind = computed(() => {
  return hasAmountOfSameDice(3) ? total.value : 0
})

const fourOfAKind = computed(() => {
  return hasAmountOfSameDice(4) ? total.value : 0
})

const fullHouse = computed(() => {
  const values = Object.values(counts.value)

  return values.includes(3) && values.includes(2)
    ? FULL_HOUSE_POINTS
    : 0
})

const smallStraight = computed(() => {
  const uniqueDice = [...new Set(dice.value)]

  const possibleStraights = [
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6],
  ]

  const hasSmallStraight = possibleStraights.some((straight) => {
    return straight.every((number) => uniqueDice.includes(number))
  })

  return hasSmallStraight ? SMALL_STRAIGHT_POINTS : 0
})

const largeStraight = computed(() => {
  const sortedDice = [...dice.value].sort().join('')

  return sortedDice === '12345' || sortedDice === '23456'
    ? LARGE_STRAIGHT_POINTS
    : 0
})

const yahtzee = computed(() => {
  return hasAmountOfSameDice(5) ? YAHTZEE_POINTS : 0
})

const chance = computed(() => total.value)

const lowerTotal = computed(() => {
  return threeOfAKind.value +
    fourOfAKind.value +
    fullHouse.value +
    smallStraight.value +
    largeStraight.value +
    yahtzee.value +
    chance.value
})

const grandTotal = computed(() => {
  return upperTotalWithBonus.value + lowerTotal.value
})
</script>

<template>
  <section>
    <h2>Scoreblok</h2>

    <table>
      <thead>
        <tr>
          <th>Combinatie</th>
          <th>Uitleg</th>
          <th>Score</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Enen</td>
          <td>Tel alle enen</td>
          <td>{{ ones }}</td>
        </tr>

        <tr>
          <td>Tweeën</td>
          <td>Tel alle tweeën</td>
          <td>{{ twos }}</td>
        </tr>

        <tr>
          <td>Drieën</td>
          <td>Tel alle drieën</td>
          <td>{{ threes }}</td>
        </tr>

        <tr>
          <td>Vieren</td>
          <td>Tel alle vieren</td>
          <td>{{ fours }}</td>
        </tr>

        <tr>
          <td>Vijven</td>
          <td>Tel alle vijven</td>
          <td>{{ fives }}</td>
        </tr>

        <tr>
          <td>Zessen</td>
          <td>Tel alle zessen</td>
          <td>{{ sixes }}</td>
        </tr>

        <tr class="total-row">
          <td>Totaal bovenste helft</td>
          <td></td>
          <td>{{ upperTotal }}</td>
        </tr>

        <tr>
          <td>Bonus</td>
          <td>Als puntentotaal 63 of meer is</td>
          <td>{{ bonus }}</td>
        </tr>

        <tr class="total-row">
          <td>Totaal met bonus</td>
          <td></td>
          <td>{{ upperTotalWithBonus }}</td>
        </tr>

        <tr>
          <td colspan="3" class="part-title">Deel 2</td>
        </tr>

        <tr>
          <td>Three of a kind</td>
          <td>3 dezelfde</td>
          <td>{{ threeOfAKind }}</td>
        </tr>

        <tr>
          <td>Carré</td>
          <td>4 dezelfde</td>
          <td>{{ fourOfAKind }}</td>
        </tr>

        <tr>
          <td>Full House</td>
          <td>3 + 2 dezelfde</td>
          <td>{{ fullHouse }}</td>
        </tr>

        <tr>
          <td>Kleine straat</td>
          <td>4 opeenvolgende nummers</td>
          <td>{{ smallStraight }}</td>
        </tr>

        <tr>
          <td>Grote straat</td>
          <td>5 opeenvolgende nummers</td>
          <td>{{ largeStraight }}</td>
        </tr>

        <tr>
          <td>Yahtzee</td>
          <td>5 dezelfde</td>
          <td>{{ yahtzee }}</td>
        </tr>

        <tr>
          <td>Chance</td>
          <td>Vrije keuze</td>
          <td>{{ chance }}</td>
        </tr>

        <tr class="total-row">
          <td>Totaal onderste helft</td>
          <td></td>
          <td>{{ lowerTotal }}</td>
        </tr>

        <tr class="grand-total">
          <td>Totaal generaal</td>
          <td></td>
          <td>{{ grandTotal }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped>
h2 {
  background-color: #2fa3f7;
  color: white;
  padding: 16px;
  margin-bottom: 0;
  text-transform: uppercase;
}

table {
  width: 100%;
  border-collapse: collapse;
  background-color: white;
}

th,
td {
  border-bottom: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}

th {
  font-weight: bold;
}

td:last-child,
th:last-child {
  text-align: center;
  font-weight: bold;
}

.part-title {
  font-weight: bold;
  padding-top: 30px;
  border-bottom: 2px solid black;
}

.total-row {
  font-weight: bold;
}

.grand-total {
  font-weight: bold;
  background-color: #f3f4f6;
}
</style>