<template>
    <div class="flex flex-col min-h-screen">
      <!-- Navbar fijo y transparente -->
      <Navbar class="navbar" />
  
      <!-- Contenido principal con fondo más oscuro -->
      <main class="flex-1 pt-16 main-content">
        <router-view v-slot="{ Component }">
          <Transition name="fade" mode="out-in">
            <component :is="Component" />
          </Transition>
        </router-view>
      </main>
  
      <!-- Footer con fondo oscuro -->
      <Footer />
    </div>
  </template>
  
  <script lang="ts" setup>
  import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
  </script>
