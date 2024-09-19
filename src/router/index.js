import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NotFound from '@/views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
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
      path: '/:pathMatch(.*)*',
      name: 'not-found', 
      component: () => import('../views/NotFound.vue'),
    },
  ]
});

export default router