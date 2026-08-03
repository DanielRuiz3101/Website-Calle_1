<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Inicio</RouterLink> |
      <RouterLink to="/about">Nosotros</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>
