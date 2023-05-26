<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1><span>Vue</span>Movies</h1>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header, footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 16px;
  background-color: #2C3D4E;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
}

h1 {
  color: whitesmoke;
  font-size: 3rem;
}

span {
  color: #42B883;
}

</style>
