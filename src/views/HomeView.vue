<template>
    <section class="mt-28 w-full px-8  p-4">
      <div class="container mx-auto  flex items-center justify-evenly">
        <section class="font-bold mb-4 w-3/5 ">
          <h1 class="logo-home text-white stroke-black font-black ">BACKEND</h1>
          <h1 class="logo-home stroke-white font-black">DEVELOPER</h1>
          <p class="text-lg mt-4">En camino a desarrollador Full Stack</p>
        </section>
        
      

      <section class="p-4 flex-1 flex flex-col items-center">
        <v-avatar
          class="rounded-none"
          
          rounded="0"
          size="325"
        >
          <v-img src="/myAvatar.png" cover></v-img>
        </v-avatar>

     

      </section>
    </div>


  
     
    </section>
  </template>
  
  <script setup>


  import Tooltip from '@/components/Tooltip.vue';  // Importamos el componente Tooltip
import { VAvatar, VImg } from 'vuetify/lib/components/index.mjs';

  </script>
  
  <style scoped>
  /* Aquí ya no necesitamos las transiciones, ya que se manejan dentro del Modal.vue */
  </style>
  