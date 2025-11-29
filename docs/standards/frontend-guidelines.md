# フロントエンド実装ガイドライン

## Vue 3 Composition API

### 基本原則
- `<script setup>` 構文を優先使用
- Composition API（`ref`, `computed`, `watch`等）を活用
- Options API は使用しない

### DOM操作タイミング管理

#### nextTick() の使用

Vue 3では、リアクティブな値の変更後、DOMは即座には更新されません。DOM操作を行う場合は必ず`nextTick()`を使用してください。

**❌ BAD: DOM未更新の可能性**
```javascript
import { ref } from 'vue';

const activeFilter = ref('all');

const handleChange = (category) => {
  activeFilter.value = category;

  // v-ifによるレンダリング前に要素を取得しようとする
  const section = document.getElementById(category);  // null になる可能性
  if (section) {
    section.scrollIntoView();
  }
};
```

**✅ GOOD: DOM更新後に確実に取得**
```javascript
import { ref, nextTick } from 'vue';

const activeFilter = ref('all');

const handleChange = (category) => {
  activeFilter.value = category;

  // DOM更新完了を待機
  nextTick(() => {
    const section = document.getElementById(category);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
};
```

#### 使用が必要なケース

以下の場合は必ず`nextTick()`を使用：

1. **v-if による条件付きレンダリング後の要素取得**
   ```vue
   <section v-if="activeFilter === 'development'" id="development">
     <!-- content -->
   </section>
   ```
   上記のようなセクションへのDOM操作は`nextTick()`内で実行

2. **リアクティブな値変更後のDOM計測**
   ```javascript
   const isOpen = ref(false);

   const toggle = () => {
     isOpen.value = !isOpen.value;

     nextTick(() => {
       // DOM更新後にサイズを計測
       const height = element.offsetHeight;
     });
   };
   ```

3. **動的に生成された要素へのフォーカス**
   ```javascript
   const showInput = ref(false);

   const openInput = () => {
     showInput.value = true;

     nextTick(() => {
       document.getElementById('dynamic-input').focus();
     });
   };
   ```

### スムーズスクロールの実装

#### scrollIntoView() の推奨パターン

要素へのスクロールには`scrollIntoView()`を使用：

```javascript
const scrollToSection = (sectionId) => {
  nextTick(() => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',  // スムーズスクロール
        block: 'start'       // セクション上端を表示エリア上端に配置
      });
    }
  });
};
```

#### scrollIntoView() vs window.scrollTo()

| メソッド | 使用ケース | メリット |
|---------|----------|---------|
| `scrollIntoView()` | 要素ベースのスクロール | 位置を自動計算、相対的なスクロール位置を保証 |
| `window.scrollTo()` | 絶対座標指定 | 細かい制御が可能 |

**推奨**: 要素へのスクロールは`scrollIntoView()`を優先

### 実装例

**Creativesページのフィルタリング機能**（`src/views/Creatives.vue`）

```javascript
import { ref, nextTick } from 'vue';

const activeFilter = ref('all');

const handleFilterChange = (category) => {
  activeFilter.value = category;

  // DOM更新完了後にスクロール実行
  nextTick(() => {
    if (category === 'all') {
      // 'All'の場合はページトップにスクロール
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // 特定カテゴリーの場合は該当セクションにスクロール
      const section = document.getElementById(category);
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
};
```

## コンポーネント設計

### Props と Emit

#### Props定義

```javascript
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
    required: false,
    default: () => []
  }
});
```

#### Emit定義

```javascript
const emit = defineEmits(['filter-change', 'item-click']);

const handleClick = (data) => {
  emit('filter-change', data);
};
```

## ルーティング

### Vue Router の基本

- ルート定義は`src/router/index.js`
- 遅延ロードを活用：`component: () => import('../views/About.vue')`
- ナビゲーションガードで進行状況を表示

## 国際化 (i18n)

### 翻訳キーの命名規則

```
{category}.{subcategory}.{item}.(title|description)
```

例：
```json
{
  "creatives": {
    "dev": {
      "manapuraza": {
        "title": "MANAPURAZA.COM",
        "description": "Vue.js製のポートフォリオサイト"
      }
    }
  }
}
```

### 使用方法

```vue
<template>
  <h1>{{ $t('creatives.dev.manapuraza.title') }}</h1>
  <p>{{ t('creatives.dev.manapuraza.description') }}</p>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>
```

## パフォーマンス最適化

### 遅延ロード

- コンポーネント：`defineAsyncComponent()`
- ルート：`() => import()`
- 画像：`loading="lazy"`

### リアクティブシステムの最適化

- 大きなオブジェクトは`shallowRef()`を検討
- 頻繁に変更されないデータは`computed()`でキャッシュ

## 関連ドキュメント

- `docs/standards/design-system.md`: デザインシステム
- `docs/standards/coding-standards.md`: コーディング規約
- `CLAUDE.md`: プロジェクト概要と開発コマンド
