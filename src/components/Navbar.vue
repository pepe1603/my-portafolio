<template>
  <nav class="navbar fixed top-0 left-0 w-full p-4 h-20 flex flex-row-reverse items-center justify-between">
    <ul class="h-full flex space-x-4 items-center">
      <li v-for="(link, index) in navLinks" :key="index">
        <router-link 
        :to="link.href" 
        class="hover:text-gray-500" 
        active-class="border-b-2 border-indigo-600">
          {{ link.name }}
        </router-link>
      </li>
    </ul>

    <div>
<ThemeToggleButton />
      </div>

    <!--
    <div class="logo text-1xl hover:text-gray-300">
      <h1>mi portafolio</h1>
    </div>
  -->
  </nav>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ThemeToggleButton from './ThemeToggleButton.vue';

const navLinks = ref([
  { name: 'Home', href: '/home' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
  { name: 'About', href: '/about' },
])
</script>

<style scoped>
.navbar {
  transition: background-color 0.3s ease;
}
.a:hover {
  border-bottom: 2px solid blue;
   /* Puedes cambiar el color y grosor según tu preferencia */
}

</style>
