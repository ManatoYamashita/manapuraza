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

// ナビゲーション視覚フィードバックシステム
router.beforeEach((to, from, next) => {
  // lazy loading開始時の視覚フィードバック
  if (to.name !== 'home') {
    // body全体にローディングカーソルを適用
    document.body.style.cursor = 'wait';
    document.body.classList.add('navigation-loading');
    
    // プログレスバーを表示（存在する場合）
    const progressBar = document.getElementById('navigation-progress');
    const progressFill = progressBar?.querySelector('.progress-fill');
    if (progressBar && progressFill) {
      progressBar.style.display = 'block';
      progressFill.style.width = '30%';
    }
    
    console.log(`Navigation: Loading started for ${to.name}`);
  }
  next();
});

router.afterEach((to, from) => {
  // lazy loading完了時の視覚フィードバック解除
  if (to.name !== 'home') {
    // ローディング状態を短時間で段階的に解除（滑らかな体験）
    setTimeout(() => {
      const progressBar = document.getElementById('navigation-progress');
      const progressFill = progressBar?.querySelector('.progress-fill');
      if (progressBar && progressFill) {
        progressFill.style.width = '100%';
        // プログレスバー完了後の非表示化
        setTimeout(() => {
          progressBar.style.display = 'none';
          progressFill.style.width = '0%';
        }, 200);
      }
      
      // ローディングカーソル解除
      document.body.style.cursor = '';
      document.body.classList.remove('navigation-loading');
      
      console.log(`Navigation: Loading completed for ${to.name}`);
    }, 100);
  }
});

export default router