<template>
  <section class="py-20">

    <div class="mt-">
      <projects-container />
    </div>
  </section>
</template>

<script>
import ProjectsContainer from '@/components/ProjectsContainer.vue';
export default {
  components: {
    ProjectsContainer
  },
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          title: 'Proyecto 1',
          description: 'Descripción del Proyecto 1',
          kits: 'https://github.com/pepecolobio/proyecto1',
          urlGitHub: 'https://github.com/pepecolobio/proyecto1',
          urlDemo: 'https://netlify.com/ID/4564/proyecto1',

        },
        {
          title: 'Proyecto 2',
          description: 'Descripción del Proyecto 2',
          url: 'https://github.com/pepecolobio/proyecto2',
        },
        // Agrega más proyectos según lo desees
      ],
    };
  },
};
</script>

<style scoped>
/* Personaliza si es necesario */
</style>
