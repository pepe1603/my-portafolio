import ProjectsContainer from '@/components/ProjectsContainer.vue';
import WelcomeVue from '@/components/Welcome.vue';
import { createRouter, createWebHistory } from 'vue-router'

// Lazy loading para mejorar el rendimiento
const MainLayout = () => import('../layouts/MainLayout.vue');
const HomeView = () => import('../views/HomeView.vue');
const Projects = () => import('../views/ProjectsView.vue');
const About = () => import('../views/AboutView.vue'); // Nueva vista "Sobre Mí"
const Contact = () => import('../views/ContactView.vue'); // Nueva vista "Contacto"

// Layout y páginas de error
const ErrorLayout = () => import('../layouts/ErrorLayout.vue');
const NotFound = () => import('../views/NotFound.vue');

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'welcome',
        component: WelcomeVue,
      },
      {
        path: '/home',
        name: 'home',
        component: HomeView,
      },
      {
        path: 'about',
        name: 'about',
        component: About, // Nueva sección "Sobre Mí"
      },
      {
        path: 'projects',
        name: 'projects',
        component: Projects,
      },
      {
        path: 'contact',
        name: 'contact',
        component: Contact, // Nueva sección "Contacto"
      },
    ],
  },
  // Página de error 404
  {
    path: '/:pathMatch(.*)*',
    component: ErrorLayout,
    children: [
      {
        path: '',
        name: 'not-found',
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
