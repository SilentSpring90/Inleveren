<template>
  <main class="app">
    <header class="header">
      <h1>Opdracht 15 - Store deel 2</h1>
      <p>Producten toevoegen, bewerken en verwijderen via een centrale store.</p>
    </header>

    <nav class="nav">
      <RouterLink to="/">Overzicht</RouterLink>
      <RouterLink to="/create">Product toevoegen</RouterLink>
    </nav>

    <RouterView />
  </main>
</template>
