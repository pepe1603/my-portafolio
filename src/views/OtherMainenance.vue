<template>
  <div class="min-h-screen flex items-center justify-center bg-yellow-100 text-center">
    <div class="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
      <!-- Icono de mantenimiento -->
      <div class="mb-6">
        <x-icon name="cog" class="w-24 h-24 text-yellow-500 mx-auto"/>
      </div>
      <h1 class="text-5xl font-bold text-yellow-600">Mantenimiento</h1>
      <p class="mt-4 text-xl">Estamos realizando algunas actualizaciones.</p>
      <p class="mt-2 text-lg">La página estará disponible pronto. ¡Gracias por tu paciencia!</p>
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
