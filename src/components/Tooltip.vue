<template>
    <div ref="tooltipTarget" class="tooltip-element">
      <slot></slot> <!-- El contenido del Tooltip estará aquí -->
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted, onBeforeUnmount, defineProps } from 'vue';
  import Tippy from 'tippy.js';
  import 'tippy.js/dist/tippy.css';  // Importamos los estilos de Tippy.js
  
  // Definimos las props que se van a pasar al componente
  const props = defineProps({
    content: {
      type: String,
      required: true, // El contenido es obligatorio
    },
    placement: {
      type: String,
      default: 'top',  // Posición por defecto
    },
    animation: {
      type: String,
      default: 'fade',  // Animación por defecto
    },
    theme: {
      type: String,
      default: 'light',  // Tema por defecto
    },
    delay: {
      type: Array,
      default: () => [500, 0],  // Retraso de aparición y desaparición
    },
    maxWidth: {
      type: String,
      default: '200px',  // Ancho máximo por defecto
    },
    hideOnClick: {
      type: Boolean,
      default: true,  // Cierra el tooltip al hacer clic si está en true
    },
    trigger: {
      type: String,
      default: 'mouseenter',  // Evento que activa el tooltip
    },
  });
  
  const tooltipTarget = ref(null);
  
  // Inicializamos el tooltip cuando el componente sea montado
  onMounted(() => {
    if (tooltipTarget.value) {
      Tippy(tooltipTarget.value, {
        content: props.content,    // Contenido del tooltip
        placement: props.placement, // Posicionamiento
        animation: props.animation, // Animación
        theme: props.theme,         // Tema
        delay: props.delay,         // Retrasos de aparición y desaparición
        arrow: true,                // Mostrar la flecha del tooltip
        interactive: true,          // Permite que el tooltip permanezca visible cuando se pasa el mouse por encima
        maxWidth: props.maxWidth,   // Ancho máximo del tooltip
        hideOnClick: props.hideOnClick, // Si se cierra al hacer clic
        trigger: props.trigger,     // Evento que activa el tooltip (mouseenter, click, etc.)
      });
    }
  });
  
  // Limpiar Tippy cuando el componente sea destruido
  onBeforeUnmount(() => {
    if (tooltipTarget.value) {
      Tippy(tooltipTarget.value).destroy();
    }
  });
  </script>
  
  <style scoped>
  .tooltip-element {
    cursor: pointer;  /* Cambia el cursor cuando el usuario pasa sobre el tooltip */
  }
  
  /* Estilos adicionales si los necesitas */
  </style>
  