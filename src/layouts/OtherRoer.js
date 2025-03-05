import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import Projects from '../views/Projects.vue';
import ErrorLayout from '@/layouts/ErrorLayout.vue';
import NotFound from '../views/NotFound.vue';
import OtherError from '../views/OtherError.vue';

const routes = [
  {
    path: '/',
    component: MainLayout, // Layout principal para el portafolio
    children: [
      {
        path: '/home',
        component: HomeView, // Vista de la página principal
      },
      {
        path: '/projects',
        component: Projects, // Vista de proyectos
      },
      // Agregar más rutas aquí
    ],
  },
  // Ruta para el error 404 - Página no encontrada
  {
    path: '/not-found',
    component: ErrorLayout,
    children: [
      {
        path: '', // Error 404
        component: NotFound,
      },
    ],
  },
  // Ruta para otro tipo de error, por ejemplo, error en una funcionalidad
  {
    path: '/other-error',
    component: ErrorLayout,
    children: [
      {
        path: '', // Otro tipo de error
        component: OtherError,
      },
    ],
  },
  // Ruta comodín para manejar cualquier ruta no definida
  {
    path: '/:pathMatch(.*)*', 
    component: ErrorLayout,
    children: [
      {
        path: '', // Página de error 404 por defecto
        component: NotFound,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
