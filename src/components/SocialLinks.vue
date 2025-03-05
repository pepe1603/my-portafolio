<template>
    <div class="flex justify-center gap-6 mt-6">
      <!-- Recorremos las redes sociales con v-for -->
      <v-btn
        v-for="(social, index) in socialLinks"
        :key="index"
        :href="social.url"
        target="_blank"
        :aria-label="social.name"
        rounded
        class="social-btn"
        :color="social.color"
        elevation="2"
      >
        <v-icon>{{ social.icon }}</v-icon>
      </v-btn>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  
  // Lista de redes sociales, incluyendo WhatsApp, Facebook y Messenger
  const socialLinks = ref([
  { name: 'WhatsApp', url: import.meta.env.VITE_WHATSAPP_URL, icon: 'mdi-whatsapp', color: 'green' },
  { name: 'Facebook', url: import.meta.env.VITE_FACEBOOK_URL, icon: 'mdi-facebook', color: 'blue' },
  { name: 'Messenger', url: import.meta.env.VITE_MESSENGER_URL, icon: 'mdi-facebook-messenger', color: 'blue darken-4' }
    ]);
  </script>
  
  <style scoped>
  .social-btn {
    transition: transform 0.3s;
  }
  
  .social-btn:hover {
    transform: scale(1.1);
  }
  </style>
  