<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 text-center">
    <div class="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
      <router-view></router-view> <!-- Aquí se inyecta el contenido de cada tipo de error -->
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* Estilos personalizados si lo necesitas */
</style>
