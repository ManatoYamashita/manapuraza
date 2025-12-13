# TypeScript Strict Mode 導入ガイド

最終更新日: 2025/12/14

---

## 目次

1. [概要](#概要)
2. [TypeScript導入の目的](#typescript導入の目的)
3. [Strict Mode とは](#strict-mode-とは)
4. [型定義設計の原則](#型定義設計の原則)
5. [段階的な型付け戦略](#段階的な型付け戦略)
6. [プロジェクト固有の型定義](#プロジェクト固有の型定義)
7. [よくあるパターンと解決策](#よくあるパターンと解決策)
8. [ベストプラクティス](#ベストプラクティス)
9. [型チェックとCI/CD統合](#型チェックとcicd統合)
10. [参考資料](#参考資料)

---

## 概要

本ドキュメントは、manapurazaプロジェクトにおけるTypeScript Strict Modeの導入ガイドです。JavaScriptからTypeScriptへの移行において、完全な型安全性を確保するための実践的な手法を提供します。

### 対象読者

- プロジェクト開発者（初級〜中級）
- TypeScript基礎知識を持つ方
- Vue 3 / Nuxt 3の経験がある方

### 前提知識

- TypeScript基本構文（interface, type, Union Types等）
- Vue 3 Composition APIの理解
- Nuxt 3のファイル構造への理解

---

## TypeScript導入の目的

### 1. 型安全性の確保

**Before (JavaScript)**:
```javascript
// ランタイムエラーのリスク
function getCreativeTitle(creative) {
  return creative.title; // creativeがnullの場合、エラー
}
```

**After (TypeScript)**:
```typescript
function getCreativeTitle(creative: Creative | null): string {
  return creative?.title ?? 'Untitled'; // Null-safe
}
```

### 2. エディタサポートの強化

- **自動補完**: プロパティ名の候補表示
- **リファクタリング**: 型に基づく安全なリネーム
- **インラインドキュメント**: JSDocコメントの表示

### 3. バグの早期発見

- コンパイル時に型エラーを検出
- ランタイムエラーの削減（特にnull/undefined関連）
- リグレッションの防止

### 4. チーム開発の効率化

- APIインターフェースの明確化
- コードレビュー時の認知負荷軽減
- ドキュメント不要な自己記述的コード

---

## Strict Mode とは

### tsconfig.json の strict オプション

**`strict: true`** は、以下のオプションをすべて有効化します:

```json
{
  "compilerOptions": {
    "strict": true,

    // 以下が自動的に有効化される
    "noImplicitAny": true,               // 暗黙的なany型を禁止
    "strictNullChecks": true,            // null/undefinedの厳格チェック
    "strictFunctionTypes": true,         // 関数型の厳格チェック
    "strictBindCallApply": true,         // bind/call/applyの厳格チェック
    "strictPropertyInitialization": true, // クラスプロパティ初期化チェック
    "noImplicitThis": true,              // 暗黙的なthis型を禁止
    "alwaysStrict": true                 // 'use strict'を自動挿入
  }
}
```

### 推奨する追加オプション

```json
{
  "compilerOptions": {
    "strict": true,

    // 追加の厳格オプション
    "noUnusedLocals": true,              // 未使用のローカル変数を禁止
    "noUnusedParameters": true,          // 未使用のパラメータを禁止
    "noImplicitReturns": true,           // 暗黙的なreturnを禁止
    "noFallthroughCasesInSwitch": true,  // switch文のfallthrough禁止
    "noUncheckedIndexedAccess": true     // インデックスアクセスのnullチェック強制
  }
}
```

---

## 型定義設計の原則

### 1. Single Source of Truth

型定義は一箇所に集約し、複数ファイルで再利用:

```typescript
// types/index.ts（唯一のソース）
export interface Creative {
  id: string;
  title: string;
  // ...
}

// components/CreativeItem.vue
import type { Creative } from '~/types';

const props = defineProps<{
  creative: Creative;
}>();
```

### 2. 明示的な型定義

`any`型の使用を最小限に抑え、可能な限り具体的な型を定義:

```typescript
// ❌ 悪い例
const data: any = await fetchData();

// ✅ 良い例
const data: Creative[] = await fetchData<Creative[]>();
```

### 3. Union Types の活用

複数の可能性がある場合は、Union Typesで表現:

```typescript
// カテゴリーは4種類のみ
export type CreativeCategory = 'animation' | 'development' | 'illustration' | 'video';

// 関数の引数は限定
function filterByCategory(category: CreativeCategory) {
  // ...
}
```

### 4. Optional vs Required の明確化

必須プロパティとオプショナルプロパティを明確に区別:

```typescript
export interface CreativeDetail {
  images: string[];                // 必須
  descriptionMarkdown: string;     // 必須
  youtube?: YoutubeEmbed;          // オプショナル（?付き）
  productionYear?: string;         // オプショナル
}
```

---

## 段階的な型付け戦略

### Phase 1: 主要データモデルの型定義（最優先）

**対象**: ビジネスロジックの中核となるデータ

```typescript
// types/index.ts
export interface Creative { /* ... */ }
export interface CreativeDetail { /* ... */ }
export interface CtaButton { /* ... */ }
export type CreativeCategory = /* ... */;
```

**理由**: これらの型は全体で最も頻繁に使用されるため、最初に定義すべき。

---

### Phase 2: Props/Emitsの型定義

**対象**: コンポーネント間のインターフェース

```vue
<!-- components/CreativeItem.vue -->
<script setup lang="ts">
import type { Creative, CreativeCategory } from '~/types';

// Props型定義（推奨: 型引数構文）
const props = defineProps<{
  creative: Creative;
  category: CreativeCategory;
  index: number;
}>();

// Emits型定義
const emit = defineEmits<{
  (e: 'click', id: string): void;
  (e: 'favorite', creative: Creative): void;
}>();
</script>
```

---

### Phase 3: Composables/Utilities の型定義

**対象**: 再利用可能なロジック

```typescript
// composables/useCreatives.ts
import type { CreativesData, Creative, CreativeCategory } from '~/types';

export const useCreatives = () => {
  const getCreativeById = (
    category: CreativeCategory,
    id: string
  ): Creative | null => {
    // ...
  };

  const getAllCreatives = (category: CreativeCategory): Creative[] => {
    // ...
  };

  return {
    getCreativeById,
    getAllCreatives
  };
};
```

---

### Phase 4: イベントハンドラ・Refs の型定義

**対象**: DOM操作やリアクティブ変数

```vue
<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Ref } from 'vue';

// Ref型定義
const isMenuOpen: Ref<boolean> = ref(false);
const selectedCategory: Ref<CreativeCategory | null> = ref(null);

// イベントハンドラ型定義
const handleClick = (event: MouseEvent): void => {
  console.log(event.target);
};

// Computed型定義
const filteredCreatives = computed<Creative[]>(() => {
  // ...
});
</script>
```

---

## プロジェクト固有の型定義

### 1. Creative型定義（完全版）

**`types/index.ts`**:

```typescript
/**
 * Creative作品の基本型定義
 *
 * @example
 * const creative: Creative = {
 *   id: 'my-project',
 *   title: 'creatives.dev.myProject.title',
 *   description: 'creatives.dev.myProject.description',
 *   url: 'https://example.com',
 *   thumbnail: myProjectImg,
 *   tags: ['Web', 'Vue.js', 'TypeScript']
 * };
 */
export interface Creative {
  /** ユニークID（kebab-case推奨） */
  id: string;

  /** i18nキー（形式: creatives.[category].[id].title） */
  title: string;

  /** i18nキー（形式: creatives.[category].[id].description） */
  description: string;

  /** 作品のURL（外部リンク） */
  url: string;

  /** サムネイル画像パス（静的インポート必須） */
  thumbnail: string;

  /** タグ配列（i18n不要、直接表示） */
  tags: string[];

  /** 詳細ページデータ（オプショナル） */
  detail?: CreativeDetail;
}

/**
 * 作品詳細ページのデータ型
 */
export interface CreativeDetail {
  /** 画像ギャラリー（1枚以上必須） */
  images: string[];

  /** Markdown形式の説明文（i18nキー） */
  descriptionMarkdown: string;

  /** YouTube埋め込み（Animationカテゴリ専用） */
  youtube?: YoutubeEmbed;

  /** 制作年（例: "2024~2025"） */
  productionYear?: string;

  /** クレジット情報（i18nキー配列） */
  credits?: string[];

  /** CTAボタン（1個以上推奨） */
  cta?: CtaButton[];
}

/**
 * YouTube埋め込み情報
 */
export interface YoutubeEmbed {
  /** モバイル用URL（縦動画推奨） */
  mobile: string;

  /** デスクトップ用URL（横動画推奨） */
  desktop: string;
}

/**
 * CTAボタンの型定義
 */
export interface CtaButton {
  /** リンク先URL */
  href: string;

  /** ターゲット属性 */
  target?: '_blank' | '_self';

  /** Font Awesomeアイコン（例: ['fas', 'play']） */
  icon?: [string, string];

  /** ボタンテキスト（i18nキー） */
  text: string;

  /** ツールチップテキスト（i18nキー） */
  subText?: string;

  /** スタイルバリアント */
  variant?: 'primary' | 'secondary' | 'simple';
}

/**
 * Creatives全体のデータ構造
 */
export interface CreativesData {
  animation: Creative[];
  development: Creative[];
  illustration: Creative[];
  video: Creative[];
}

/**
 * カテゴリー型（Union Type）
 */
export type CreativeCategory = 'animation' | 'development' | 'illustration' | 'video';
```

### 2. Router型定義

**`types/router.ts`**:

```typescript
import type { CreativeCategory } from './index';

/**
 * /creatives/:category/:id のパラメータ型
 */
export interface CreativeDetailParams {
  category: CreativeCategory;
  id: string;
}

/**
 * ルートメタデータ型
 */
export interface RouteMeta {
  requiresAuth?: boolean;
  title?: string;
  description?: string;
}
```

### 3. i18n型定義（オプション）

**`types/i18n.ts`**:

```typescript
/**
 * i18n翻訳キーの型定義（型安全な$t()）
 */
export interface I18nMessages {
  navbar: {
    menu: {
      home: string;
      about: string;
      creatives: string;
      contact: string;
    };
    selectLanguage: string;
  };
  creatives: {
    common: {
      viewProject: string;
      github: string;
      backToList: string;
      // ...
    };
    // ...
  };
}

/**
 * 型安全なi18nキー
 */
export type I18nKey = keyof I18nMessages;
```

---

## よくあるパターンと解決策

### Pattern 1: Route Params の型アサーション

**問題**: `useRoute().params`は`string | string[]`型

**解決策**:

```typescript
import type { CreativeDetailParams } from '~/types/router';

const route = useRoute();
const params = route.params as CreativeDetailParams; // 型アサーション

const category: CreativeCategory = params.category;
const id: string = params.id;
```

### Pattern 2: Null/Undefined チェック

**問題**: `strictNullChecks`有効時、nullableな値の扱い

**解決策**:

```typescript
// ❌ 悪い例
const title = creative.title; // creativeがnullの可能性

// ✅ 良い例1: Optional Chaining
const title = creative?.title ?? 'Untitled';

// ✅ 良い例2: Type Guard
if (creative && creative.title) {
  const title = creative.title; // この時点でnon-null
}

// ✅ 良い例3: Non-null assertion (確実にnullでない場合のみ)
const title = creative!.title;
```

### Pattern 3: Dynamic Import の型付け

**問題**: 動的インポートの戻り値型

**解決策**:

```typescript
// ❌ 悪い例
const THREE = await import('three');

// ✅ 良い例
import type * as THREETypes from 'three';
const THREE: typeof THREETypes = await import('three');
```

### Pattern 4: Array.find() の戻り値

**問題**: `find()`は`T | undefined`を返す

**解決策**:

```typescript
const creative = creativesData[category]?.find(item => item.id === id);

// ❌ 悪い例
const title = creative.title; // エラー: creativeがundefinedの可能性

// ✅ 良い例
if (creative) {
  const title = creative.title; // Type Guard
}

// または
const title = creative?.title ?? 'Default Title';
```

### Pattern 5: Computed の型推論

**問題**: Computedの型が自動推論されない

**解決策**:

```typescript
// ❌ 悪い例
const filteredCreatives = computed(() => {
  // 型推論できない複雑なロジック
});

// ✅ 良い例
const filteredCreatives = computed<Creative[]>(() => {
  return creativesData[selectedCategory.value] || [];
});
```

---

## ベストプラクティス

### 1. `any`型の使用を避ける

**代替案**:
- `unknown`型を使用（後で型アサーション）
- ジェネリクスを使用
- 具体的な型を定義

```typescript
// ❌ 悪い例
function processData(data: any) { /* ... */ }

// ✅ 良い例1: unknown
function processData(data: unknown) {
  if (typeof data === 'string') {
    // ここでdataはstring型
  }
}

// ✅ 良い例2: ジェネリクス
function processData<T>(data: T): T {
  return data;
}
```

### 2. Type vs Interface の使い分け

**Interface**: オブジェクト型、拡張可能

```typescript
export interface Creative {
  id: string;
  title: string;
}

// 拡張可能
export interface AnimationCreative extends Creative {
  youtubeUrl: string;
}
```

**Type**: Union Types, Primitive Types

```typescript
export type CreativeCategory = 'animation' | 'development' | 'illustration' | 'video';
export type Status = 'draft' | 'published' | 'archived';
```

### 3. JSDoc コメントの活用

型定義にドキュメントを追加:

```typescript
/**
 * Creative作品を取得
 *
 * @param category - カテゴリー名
 * @param id - 作品ID
 * @returns 作品データ、見つからない場合はnull
 *
 * @example
 * const creative = getCreativeById('animation', 'tcu-animation');
 * if (creative) {
 *   console.log(creative.title);
 * }
 */
export function getCreativeById(
  category: CreativeCategory,
  id: string
): Creative | null {
  // ...
}
```

### 4. Utility Types の活用

TypeScript組み込みのUtility Typesを積極利用:

```typescript
// Partial: 全プロパティをオプショナル化
type PartialCreative = Partial<Creative>;

// Pick: 一部プロパティのみ抽出
type CreativePreview = Pick<Creative, 'id' | 'title' | 'thumbnail'>;

// Omit: 一部プロパティを除外
type CreativeWithoutDetail = Omit<Creative, 'detail'>;

// Required: 全プロパティを必須化
type RequiredDetail = Required<CreativeDetail>;

// Readonly: 全プロパティを読み取り専用化
type ImmutableCreative = Readonly<Creative>;
```

### 5. Discriminated Union の活用

型の判別:

```typescript
type LoadingState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: Creative[] }
  | { status: 'error'; error: Error };

function handleState(state: LoadingState) {
  switch (state.status) {
    case 'idle':
      // state.status は 'idle'
      break;
    case 'success':
      // state.data は Creative[]
      console.log(state.data);
      break;
    case 'error':
      // state.error は Error
      console.error(state.error);
      break;
  }
}
```

---

## 型チェックとCI/CD統合

### 1. package.json スクリプト追加

```json
{
  "scripts": {
    "dev": "nuxt dev",
    "build": "nuxt build",
    "typecheck": "nuxt typecheck",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### 2. GitHub Actions 統合

**`.github/workflows/type-check.yml`**:

```yaml
name: Type Check

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  typecheck:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '22.13.1'

      - name: Install dependencies
        run: npm ci

      - name: Run type check
        run: npm run typecheck

      - name: Run lint
        run: npm run lint
```

### 3. Pre-commit Hook（Husky）

```bash
npm install --save-dev husky lint-staged

npx husky install
npx husky add .husky/pre-commit "npx lint-staged"
```

**`package.json`**:

```json
{
  "lint-staged": {
    "*.{ts,vue}": [
      "eslint --fix",
      "vue-tsc --noEmit"
    ]
  }
}
```

---

## 参考資料

### 公式ドキュメント

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TypeScript Deep Dive (日本語)](https://typescript-jp.gitbook.io/deep-dive/)
- [Vue 3 TypeScript Support](https://vuejs.org/guide/typescript/overview.html)
- [Nuxt 3 TypeScript](https://nuxt.com/docs/guide/concepts/typescript)

### 推奨記事

- [TypeScript Deep Dive - Strict Mode](https://typescript-jp.gitbook.io/deep-dive/intro/strictmode)
- [Vue 3 + TypeScript Best Practices](https://vuejs.org/guide/typescript/composition-api.html)

### 内部ドキュメント

- [Nuxt 3移行ガイド](./nuxt3-migration.md)
- [CLAUDE.md](../../CLAUDE.md)

---

**最終更新**: 2025/12/14
**執筆者**: Claude AI (フリーザ様モード)
**レビュー**: 未実施
