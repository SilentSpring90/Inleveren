<template>
  <div>
    <h2>Werken met ref en reactive</h2>

    <p>Aantal clicks: {{ clicks }}</p>
    <p>Naam: {{ person.firstName }}</p>
    <p>Land: {{ person.country }}</p>

    <button @click="incrementClicks">Klik mij!</button>
    <button @click="changeCountry('Nederland')">Nederland</button>
    <button @click="changeCountry('België')">België</button>

    <input v-model="person.firstName" placeholder="Voornaam" />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const clicks = ref(0);

const person = reactive({
  firstName: '',
  country: 'Nederland'
});

const incrementClicks = () => {
  clicks.value++;
};

const changeCountry = (newCountry) => {
  person.country = newCountry;
};
</script>