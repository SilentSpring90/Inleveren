<template>
  <main class="app">
    <header class="header">
      <h1>Opdracht 17 - Inventaris systeem</h1>
      <p>Een eenvoudige inventaris-app op basis van het Scrum-bord.</p>
    </header>

    <nav class="nav">
      <RouterLink to="/">Productoverzicht</RouterLink>
      <RouterLink to="/create">Product toevoegen</RouterLink>
      <RouterLink to="/order-list">Bestellijst</RouterLink>
    </nav>

    <RouterView />
  </main>
</template>
