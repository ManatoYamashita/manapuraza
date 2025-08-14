import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

// コンポーネント高速プリロードシステム（ユーザー体験改善）
const AboutComponent = () => import('../views/About.vue');
const CreativesComponent = () => import('../views/Creatives.vue');
const NotFoundComponent = () => import('../views/404.vue');

// 初期化時にコンポーネントをプリロード（遅延軽減）
const preloadComponents = () => {
  // requestIdleCallbackを使用してブラウザアイドル時に事前読み込み
  const schedule = window.requestIdleCallback || ((cb) => setTimeout(cb, 100));
  
  schedule(() => {
    AboutComponent();
    CreativesComponent();
    NotFoundComponent();
    console.log('Router: Components preloaded for instant navigation');
  });
};

// プリロード実行
preloadComponents();

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
      component: AboutComponent,
    },
    {
      path: '/creatives',
      name: 'creatives',
      component: CreativesComponent,
      meta: {
        style: {
          top: '0',
        },
      },
    },
    { 
      path: '/:pathMatch(.*)*',
      name: '404', 
      component: NotFoundComponent,
    },
  ]
});

// 完璧ナビゲーション視覚フィードバックシステム
router.beforeEach((to, from, next) => {
  // lazy loading開始時の瞬時視覚フィードバック
  if (to.name !== 'home') {
    // 即座にローディング状態を適用
    document.body.style.cursor = 'wait';
    document.body.classList.add('navigation-loading');
    
    // プログレスバーを素早く表示
    const progressBar = document.getElementById('navigation-progress');
    const progressFill = progressBar?.querySelector('.progress-fill');
    if (progressBar && progressFill) {
      progressBar.style.display = 'block';
      progressFill.style.width = '25%';
      
      // 段階的プログレス表示でUX向上
      setTimeout(() => {
        if (progressFill.style.width === '25%') {
          progressFill.style.width = '60%';
        }
      }, 100);
      
      setTimeout(() => {
        if (progressFill.style.width === '60%') {
          progressFill.style.width = '85%';
        }
      }, 200);
    }
    
    console.log(`Navigation: Instant feedback activated for ${to.name}`);
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