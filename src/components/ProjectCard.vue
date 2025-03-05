<template >
    <v-card variant="outlined" class="mx-auto rounded-lg border shadow-sm hover:shadow-gray-500 scale-95 hover:scale-100 bg-opacity-50"  max-width="360">
      <!-- Imagen del proyecto -->
      <v-img :src="project.imageUrl || placeholderImage" height="200px" cover></v-img>
  
      <!-- Título del proyecto -->
      <v-card-title>{{ project.title }}</v-card-title>
  
      <!-- Subtítulo / Descripción corta -->
      <v-card-subtitle v-if="project.description">{{ project.description }}</v-card-subtitle>
  
      <!-- Acciones -->
      <v-card-actions>
        <v-btn v-if="project.githubUrl" :href="project.githubUrl" target="_blank" color="primary" variant="outlined">
          GitHub
        </v-btn>
        <v-btn v-if="project.demoUrl" :href="project.demoUrl" target="_blank" color="secondary" variant="outlined">
          Demo
        </v-btn>
  
        <v-spacer></v-spacer>
  
        <!-- Botón para expandir detalles -->
        <v-btn variant="plain"
         @click="toggleShow">
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>

      </v-card-actions>
  
      <!-- Contenido expandible -->
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
          <v-card-text>
            {{ project.description || 'No hay descripción disponible.' }}
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </template>
  
  <script lang="ts" setup>
  import { defineProps, ref } from 'vue'
  import type { ProjectModel } from '@/models/ProjectModel'
  import { VIcon,VDivider, VExpandTransition,VBtn,VCardText, VCard } from 'vuetify/components';
  
  // Props tipadas con TypeScript
  const props = defineProps<{ project: ProjectModel }>()
  
  // Estado para controlar la expansión del contenido
  const show = ref(false)
  
  // Placeholder para la imagen si no hay URL
  const placeholderImage = 'https://via.placeholder.com/344x200?text=No+Image'
  
  // Función para alternar el estado de `show`
  const toggleShow = () => {
    show.value = !show.value
  }
  </script>
  