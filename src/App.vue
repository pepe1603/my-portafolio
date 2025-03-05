<template>
  <div class="app-container">
    <!-- Contenido visible solo en dispositivos de escritorio -->
    <div class="desktop-content">
      <router-view v-slot="{ Component }">
        <Transition name="fade">
          <component :is="Component" />
        </Transition>
      </router-view>
    </div>

    <!-- Contenido visible solo en dispositivos móviles -->
    <div class="mobile-message">
      <div class="flex items-center justify-center h-screen">
        <div class="text-center p-6 bg-gray-900 shadow-lg rounded-lg text-white">
          <h1 class="text-xl font-semibold mb-4">
            <span class="text-red-500">¡Ups!</span> Página no disponible en móviles
          </h1>
          <p>
            Por razones de accesibilidad, te recomendamos acceder a esta página desde una computadora de escritorio o laptop.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* Aplicar el fondo oscuro principal */
.app-container {
  background-color: var(--color-background);
  color: var(--color-text);
  min-height: 100vh;
  width: 100%;
}

/* Contenido para escritorio */
.desktop-content {
  display: block;
  font-family: "Montserrat", serif;
}

/* Mensaje para móviles */
.mobile-message {
  display: none;
  padding: 1.254em;
}

/* Media query para pantallas grandes (escritorio) */
@media (min-width: 768px) {
  .mobile-message {
    display: none;
  }
  .desktop-content {
    display: block;
  }
}

/* Media query para pantallas pequeñas (móviles) */
@media (max-width: 767px) {
  .mobile-message {
    display: block;
  }
  .desktop-content {
    display: none;
  }
}

/* Transición de desvanecimiento */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
