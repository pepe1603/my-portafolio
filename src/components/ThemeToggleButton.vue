<template>
    <button
      @click="toggleTheme"
      class="relative flex items-center gap-x-2 py-1 px-3 rounded-full text-sm transition-all duration-300"
      :class="{
        'ring-1 ring-gray-400 text-black': theme === 'light',  // Fondo gris claro y texto negro para el tema claro
        'ring-1 ring-green-500 text-white': theme === 'dark', // Fondo verde y texto blanco para el tema oscuro
      }"
      :aria-label="theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'"
    >
      <!-- Icono para Dark -->
      <svg
        v-if="theme === 'dark'"
        class="shrink-0 size-4"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
      </svg>
  
      <!-- Icono para Light -->
      <svg
        v-else
        class="shrink-0 size-4"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M12 2v2"></path>
        <path d="M12 20v2"></path>
        <path d="m4.93 4.93 1.41 1.41"></path>
        <path d="m17.66 17.66 1.41 1.41"></path>
        <path d="M2 12h2"></path>
        <path d="M20 12h2"></path>
        <path d="m6.34 17.66-1.41 1.41"></path>
        <path d="m19.07 4.93-1.41 1.41"></path>
      </svg>
  
      <span v-if="theme === 'dark'">Dark</span>
      <span v-else>Light</span>
    </button>
  </template>
  
  <script lang="ts" setup>
  import { useTheme } from '@/composables/useTheme'
  
  const { theme, toggleTheme } = useTheme()
  </script>
  
  <style scoped>
  /* Aseguramos que el botón tiene una transición suave para el cambio de fondo y color */
  button {
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  /* Opcionales: Puedes añadir sombras o bordes para mayor visibilidad */
  button:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transform: scale(1.05); /* Le da un pequeño efecto de aumento cuando se pasa el cursor */
  }
  </style>
  