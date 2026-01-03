import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
  type NavigationGuardNext,
  type RouteLocationNormalized
} from 'vue-router';
import { isValidCategory } from '@/types';
import Home from '@/views/Home.vue';

// コンポーネント高速プリロードシステム（ユーザー体験改善）
const AboutComponent = () => import('../views/About.vue');
const CreativesComponent = () => import('../views/Creatives.vue');
const CreativeDetailComponent = () => import('../views/CreativeDetail.vue');
const ContactComponent = () => import('../views/Contact.vue');
const UnderConstractionComponent = () => import('../views/UnderConstraction.vue');
const NotFoundComponent = () => import('../views/404.vue');

// 初期化時にコンポーネントをプリロード（遅延軽減）
const preloadComponents = () => {
  // requestIdleCallbackを使用してブラウザアイドル時に事前読み込み
  const schedule = window.requestIdleCallback || ((cb) => setTimeout(cb, 100));
  
  schedule(() => {
    AboutComponent();
    CreativesComponent();
    CreativeDetailComponent();
    ContactComponent();
    UnderConstractionComponent();
    NotFoundComponent();
  });
};

// プリロード実行
preloadComponents();

const routes: RouteRecordRaw[] = [
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
      path: '/creatives/:category/:id',
      name: 'creative-detail',
      component: CreativeDetailComponent,
      props: true,
      beforeEnter: (
        to: RouteLocationNormalized,
        _from: RouteLocationNormalized,
        next: NavigationGuardNext
      ) => {
        const { category } = to.params;

        if (typeof category === 'string' && isValidCategory(category)) {
          next();
        } else {
          next('/404');
        }
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactComponent,
    },
    {
      path: '/underconstraction',
      name: 'underconstraction',
      component: UnderConstractionComponent,
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: NotFoundComponent,
    },
  ];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(_to, _from, savedPosition) {
    // ブラウザの戻る/進む時は保存位置を復元
    if (savedPosition) {
      return savedPosition;
    }
    // それ以外はページ上部へスクロール
    return { top: 0 };
  },
  routes
});

// 完璧ナビゲーション視覚フィードバックシステム
router.beforeEach((
  to: RouteLocationNormalized,
  _from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  // lazy loading開始時の瞬時視覚フィードバック
  if (to.name !== 'home') {
    // 即座にローディング状態を適用
    document.body.style.cursor = 'wait';
    document.body.classList.add('navigation-loading');

    // プログレスバーを素早く表示
    const progressBar = document.getElementById('navigation-progress');
    const progressFill = progressBar?.querySelector<HTMLElement>('.progress-fill');
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

  }
  next();
});

router.afterEach((
  to: RouteLocationNormalized,
  _from: RouteLocationNormalized
) => {
  // lazy loading完了時の視覚フィードバック解除
  if (to.name !== 'home') {
    // ローディング状態を短時間で段階的に解除（滑らかな体験）
    setTimeout(() => {
      const progressBar = document.getElementById('navigation-progress');
      const progressFill = progressBar?.querySelector<HTMLElement>('.progress-fill');
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

    }, 100);
  }
});

// ナビゲーションエラーハンドリング強化
router.onError((error: Error) => {

  // エラー時のクリーンアップ
  const progressBar = document.getElementById('navigation-progress');
  if (progressBar) {
    progressBar.style.display = 'none';
    const progressFill = progressBar.querySelector<HTMLElement>('.progress-fill');
    if (progressFill) {
      progressFill.style.width = '0%';
    }
  }

  // ローディング状態の強制解除
  document.body.style.cursor = '';
  document.body.classList.remove('navigation-loading');

  // 重要: DOM操作エラーの場合は強制的にホームに戻す
  if (error.message.includes('nextSibling') || error.message.includes('Cannot read properties of null')) {
    window.location.href = '/';
  }
});

// Note: Additional error handling is already implemented in router.onError()
// beforeEach hooks are automatically wrapped by Vue Router's error handling

export default router;
