<template>
  <main class="app">
    <header class="header">
      <h1>Opdracht 13 - Vue Router</h1>
      <p>Met router-link navigeer je tussen pagina's. Router-view toont de huidige pagina.</p>
    </header>

    <nav class="nav">
      <RouterLink to="/">Overzicht</RouterLink>
      <RouterLink to="/create">Product toevoegen</RouterLink>
    </nav>

    <RouterView />
  </main>
</template>
