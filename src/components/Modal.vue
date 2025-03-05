<template>
    <Teleport to="#teleport-target">
      <Transition name="fade">
        <!-- Modal con fondo oscuro -->
        <div v-if="isVisible" class="fixed inset-0 z-50 overflow-hidden bg-[#212121] bg-opacity-50">
          <div class="flex items-start justify-center min-h-screen mt-24 text-center">
            <div
              ref="target"
              class="bg-white relative text-black rounded-lg text-center shadow-xl p-8"
              role="dialog"
              aria-modal="true"
            >
              <!-- Botón para cerrar el modal -->
              <XMarkIcon
                class="size-6 absolute left-2 top-2 text-gray-600  rounded-md hover:bg-gray-200"
                @click="closeModal"
              />

              <!-- mostyrrar props solo si se passan por parametro-->
              <h1  v-if="title !== ''" class="font-bold text-xl xl:text-3xl text-black my-2">{{ title }}</h1>
              <p v-if="message !== ''" class="text-base">{{ message }}</p>
                
              <!-- Contenido del modal -->
              <slot />
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </template>
  
  <script lang="ts" setup>
  import { XMarkIcon } from '@heroicons/vue/24/outline';
  import { onClickOutside } from '@vueuse/core';
  import { ref, watchEffect } from 'vue';
  import { useModal } from '@/composables/useModal';
  
  // Usamos el composable para manejar la visibilidad del modal
  const { showModalState, closeModal } = useModal();
  const target = ref(null);

  // Recibir las propiedades title y message
const props = defineProps({
  title: String,
  message: String,
});
  
  // Cerrar el modal cuando se haga clic fuera de él
  onClickOutside(target, closeModal);
  
  // Referencia para controlar la visibilidad
  const isVisible = ref(false);
  
  // Sincronizar la visibilidad del modal con el estado del composable
  watchEffect(() => {
    isVisible.value = showModalState.value;
  });
  </script>
  
  <style scoped>
  /* Transición de desvanecimiento */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  
  .fade-enter, .fade-leave-to /* .fade-leave-active en <2.1.8 */ {
    opacity: 0;
  }
  </style>
  