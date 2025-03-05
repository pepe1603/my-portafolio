<template>
  <div class="py-4 px-8">

    <div class="h-1/2 ">
      <!-- Título de la sección -->
      <h1 class="text-3xl font-bold my-14">Sobre Mí</h1>

      <div class="w-full m-4 mt-8 p-4 gap-8 flex">
        <v-avatar
          class="rounded-none"
          
          rounded="0"
          size="305"
        >
          <v-img src="/myAvatar.png" cover></v-img>
        </v-avatar>

        <div class="mt-4 flex-1">
          <div class="mb-8">
            <span>Hola, mi nombre es</span>
            <h1 class="text-5xl font-semibold">Jose Colombio</h1>
            <p class="w-7/12 text-lg font-semibold text-gray-500 border-b-[thin] border-gray-600 pb-4 mt-4">
              Ing. en Desarrollo y Tecnologías de Software
            </p>
          </div>

          <p class="text-md text-gray-600 max-w-3xl mb-6">
            Soy un apasionado del desarrollo de software con especial interés en la creación de APIs y aplicaciones robustas. Mi trayectoria comenzó cuando descubrí el mundo de la programación en la universidad, y desde entonces he trabajado con diversas tecnologías como Spring Framework, Vue.js, y muchas otras. Busco siempre aprender y mejorar mis habilidades. Estoy en constante búsqueda de nuevos retos y oportunidades para colaborar con equipos de trabajo dinámicos y profesionales.
          </p>
          

          <a :href="cvLink" download>
            <v-btn variant="outlined" color="primary" v-ripple class="text-gray-800 hover:bg-blue-800 hover:text-white transition duration-300">
              Descargar CV
            </v-btn>
          </a>
        </div>
      </div>
    </div>

    <!-- Sección de habilidades -->
    <div class="mt-28">
      <h2 class="text-3xl font-bold my-8">Habilidades</h2>

      <!-- Aquí aplicamos el grid al ul -->
      <ul class="grid grid-cols-2 xl:grid-cols-3 mt-8 p-8">
        <!-- Iteración sobre habilidades -->
        <li v-for="(skill, index) in skills" :key="index" class="relativeflex flex-col  items-center justify-between gap-8 backdrop-blur-sm text-gray-800 hover:font-medium scale-95 hover:scale-100 p-4 min-w-[335px] min-h-28">
          <div class="max-w-max flex gap-2 mb-2">
            <v-icon size="40" class="mr-4">{{ skill.icon }}</v-icon>
            <span class="text-lg text-gray-600">{{ skill.name }}</span>
          </div>
          
          <!-- Barra de progreso -->
          <v-progress-linear
            :model-value="skill.level"
            rounded
            color="indigo"
            height="15"
            class="flex-1"
            :indeterminate="false"
            transition="slide-y-transition"
          >
            <template #default>
              <span class="text-xs text-gray-200">{{ skill.level }}%</span>
            </template>
          </v-progress-linear>

        </li>
      </ul>
    </div>

    <div class="w-max mx-auto my-16 rounded-full text-md text-rose-600 bg-red-100 px-8 py-4 transition hover:shadow-md">
      <p>¿Puedes enviarme un mensaje? <router-link class="hover:underline hover:text-rose-400" to="/contact">¡Haz clic aquí!</router-link></p>
    </div>
  </div>
</template>



<script lang="ts">
import { defineComponent, ref } from 'vue';
import { VBtn, VIcon, VProgressLinear, VAvatar, VImg, VCard } from 'vuetify/components';

export default defineComponent({
  name: 'AboutView',
  components: {
    VBtn,
    VIcon,
    VProgressLinear
  },
  setup() {
    // Datos de la persona
    const name = ref('Tu Nombre');
    const cvLink = ref('/cv/CV.pdf');

    
    // Lista de habilidades
    const skills = ref([
      { name: 'Vue.js 3', level: 80, icon: 'mdi-vuejs' },
      { name: 'TailwindCSS', level: 80, icon: 'mdi-cogs' },
      { name: 'Java', level: 75, icon: 'mdi-language-java' },
      { name: 'Git y GitHub', level: 70, icon: 'mdi-github' },
      { name: 'Spring Framework', level: 80, icon: 'mdi-language-java' },
      { name: 'PostgreSQL', level: 70, icon: 'mdi-database' }
    ]);

    return {
      name,
      cvLink,
      skills
    };
  }
});
</script>
<style scoped>
/* Añadir estilos personalizados si es necesario */
</style>
