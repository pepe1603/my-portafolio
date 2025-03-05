<template>
  <div class="container mx-auto text-center mt-28">
        <h2 class="text-4xl font-bold mb-4">
          <HomeIcon class="h-6 w-6 text-blue-500" />
          Bienvenido
        </h2>
        <p class="text-lg">Gracias por visitar mi portafolio</p>

          <router-link to="/home">
            <v-btn variant="outlined" color="indigo" v-ripple class="mt-8">
              comenzar
            </v-btn>
          </router-link>

        </div>
</template>

<script lang="ts" setup>
import { VBtn } from 'vuetify/components';
</script>

<style>

</style>