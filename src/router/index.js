import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        style: {
          top: '100vh',
        },
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        style: {
          top: '0',
        },
      },
    },
    {
      path: '/works',
      name: 'works',
      component: () => import('../views/WorksView.vue'),
      meta: {
        style: {
          top: '0',
        },
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta: {
        style: {
          top: '0',
        },
      },
    }
  ]
});

export default router
