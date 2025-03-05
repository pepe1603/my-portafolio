<template>
    <footer class="bg-gray-900 text-white py-4">
      <div class="container mx-auto text-center">
        <small>&copy; 2025 JoseC-GP | Todos los derechos reservados.</small>
       
        <!--
        <div class="mt-2">
          <router-link to="/privacy-policy" class="text-gray-400 hover:text-white mx-2">Política de privacidad</router-link>
          <router-link to="/terms" class="text-gray-400 hover:text-white mx-2">Términos y condiciones</router-link>
        </div>

        -->
      </div>
    </footer>
  </template>
  
  <script lang="ts" setup>
  // No necesitamos ninguna lógica adicional en este componente, solo el diseño.
  </script>
  
  <style scoped>
  footer {
    position: relative;
    bottom: 0;
    width: 100%;
    text-align: center;
  }
  
  footer a {
    transition: color 0.3s ease;
  }
  </style>
  