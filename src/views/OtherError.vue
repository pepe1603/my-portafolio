<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 text-center">
    <div class="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
      <h1 class="text-5xl font-bold text-yellow-600">Error</h1>
      <p class="mt-4 text-xl">Algo salió mal</p>
      <p class="mt-2 text-lg">Parece que hubo un problema con la ruta o el servicio.</p>
      <router-link 
        to="/home" 
        class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all mt-6"
      >
        Volver al inicio
      </router-link>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* Puedes agregar algunos estilos personalizados aquí */
</style>
