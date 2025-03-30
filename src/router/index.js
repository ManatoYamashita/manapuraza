import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue'),
    },
    {
      path: '/creatives',
      name: 'creatives',
      component: () => import('../views/Creatives.vue'),
      meta: {
        style: {
          top: '0',
        },
      },
    },
    { 
      path: '/:pathMatch(.*)*',
      name: '404', 
      component: () => import('../views/404.vue'),
    },
  ]
});

export default router