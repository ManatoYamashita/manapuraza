/**
 * microCMS API integration composable
 *
 * Provides centralized data fetching, caching, and transformation
 * for creative portfolio items from microCMS headless CMS.
 */

import { ref, computed, type Ref, type ComputedRef } from 'vue';
import type { CategoryData, CreativeData, MicroCMSListResponse, CMSCreative } from '@/types';

// 環境変数からAPIエンドポイントとキーを取得
const API_ENDPOINT = import.meta.env.VITE_MICROCMS_API_ENDPOINT;
const API_KEY = import.meta.env.VITE_MICROCMS_API_KEY;

// キャッシュ有効期限（30分）
const CACHE_DURATION = 30 * 60 * 1000;

// キャッシュキー定義
const CACHE_KEYS = {
  CATEGORIES: 'microcms_categories',
  CREATIVES: 'microcms_creatives',
  TIMESTAMP: '_timestamp',
} as const;

// State（シングルトンパターン）
const creatives = ref<CreativeData[]>([]);
const categories = ref<CategoryData[]>([]);
const isLoading = ref(false);
const error = ref<Error | null>(null);

/**
 * microCMS API共通クライアント
 */
async function fetchMicroCMS<T>(
  endpoint: string,
  params?: Record<string, string | number>
): Promise<T> {
  const url = new URL(`${API_ENDPOINT}/${endpoint}`);

  // クエリパラメータを追加
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, String(value));
    });
  }

  const response = await fetch(url.toString(), {
    headers: {
      'X-MICROCMS-API-KEY': API_KEY,
    },
  });

  if (!response.ok) {
    throw new Error(`microCMS API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

/**
 * LocalStorageキャッシュ管理
 */
function getCachedData<T>(key: string): T | null {
  try {
    const cached = localStorage.getItem(key);
    const timestamp = localStorage.getItem(`${key}${CACHE_KEYS.TIMESTAMP}`);

    if (!cached || !timestamp) {
      return null;
    }

    const age = Date.now() - parseInt(timestamp, 10);
    if (age > CACHE_DURATION) {
      // キャッシュ有効期限切れ
      localStorage.removeItem(key);
      localStorage.removeItem(`${key}${CACHE_KEYS.TIMESTAMP}`);
      return null;
    }

    return JSON.parse(cached) as T;
  } catch (err) {
    console.error('Cache read error:', err);
    return null;
  }
}

function setCachedData<T>(key: string, data: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    localStorage.setItem(`${key}${CACHE_KEYS.TIMESTAMP}`, Date.now().toString());
  } catch (err) {
    console.error('Cache write error:', err);
  }
}

/**
 * データ変換アダプター: CreativeData → CMSCreative
 */
function adaptCreativeData(data: CreativeData, locale: 'ja' | 'en'): CMSCreative {
  // 多言語フィールドの選択
  const title = locale === 'ja' ? data.title : (data.titleEn || data.title);
  const description = locale === 'ja'
    ? (data.description || '')
    : (data.descriptionEn || data.description || '');

  // 小カテゴリをタグに変換
  const tags = data.minorCategory?.map((cat) =>
    locale === 'ja' ? cat.name : (cat.nameEn || cat.name)
  ) || [];

  // detailオブジェクトの構築
  // richEditorV2のHTMLをMarkdownとして扱う（必要に応じてHTML→Markdown変換処理追加）
  const detail = data.detail || data.images ? {
    images: data.images?.map(img => img.url) || [data.thumbnail.url],
    descriptionMarkdown: locale === 'ja'
      ? (data.detail || data.description || '')
      : (data.detailEn || data.descriptionEn || data.description || ''),
    youtube: data.youtubeUrl ? {
      mobile: data.youtubeUrl,  // 単一URLを両方に設定
      desktop: data.youtubeUrl
    } : undefined,
    productionYear: data.year,
    // credits と cta は detail（richEditorV2）内で管理
    credits: undefined,
    cta: undefined
  } : undefined;

  return {
    id: data.id,  // microCMS自動生成IDを使用
    title,
    description,
    url: data.url || '',
    thumbnail: data.thumbnail.url,
    tags,
    detail,
    _isCMS: true
  } as CMSCreative;
}

/**
 * カテゴリ一覧を取得
 */
async function fetchCategories(): Promise<void> {
  try {
    isLoading.value = true;
    error.value = null;

    // キャッシュ確認
    const cached = getCachedData<CategoryData[]>(CACHE_KEYS.CATEGORIES);
    if (cached) {
      categories.value = cached;
      return;
    }

    // API呼び出し
    const response = await fetchMicroCMS<MicroCMSListResponse<CategoryData>>('categories', {
      limit: 100,  // カテゴリ数は少ないため全件取得
    });

    categories.value = response.contents;
    setCachedData(CACHE_KEYS.CATEGORIES, response.contents);
  } catch (err) {
    error.value = err instanceof Error ? err : new Error('Failed to fetch categories');
    throw error.value;
  } finally {
    isLoading.value = false;
  }
}

/**
 * 作品一覧を取得
 */
async function fetchCreatives(categoryFilter?: string): Promise<void> {
  try {
    isLoading.value = true;
    error.value = null;

    // キャッシュ確認
    const cacheKey = categoryFilter
      ? `${CACHE_KEYS.CREATIVES}_${categoryFilter}`
      : CACHE_KEYS.CREATIVES;
    const cached = getCachedData<CreativeData[]>(cacheKey);
    if (cached) {
      creatives.value = cached;
      return;
    }

    // API呼び出しパラメータ
    const params: Record<string, string | number> = {
      limit: 100,  // 作品数に応じて調整
      depth: 2,    // カテゴリ参照を含める
    };

    // カテゴリフィルタリング
    if (categoryFilter) {
      params.filters = `majorCategory[equals]${categoryFilter}`;
    }

    // API呼び出し
    const response = await fetchMicroCMS<MicroCMSListResponse<CreativeData>>('creatives', params);

    creatives.value = response.contents;
    setCachedData(cacheKey, response.contents);
  } catch (err) {
    error.value = err instanceof Error ? err : new Error('Failed to fetch creatives');
    throw error.value;
  } finally {
    isLoading.value = false;
  }
}

/**
 * useCreativesAPI Composable
 */
export function useCreativesAPI() {
  /**
   * カテゴリ別の作品一覧を取得（ロケール対応）
   */
  const getCreativesByCategory = (
    category: string,
    locale: 'ja' | 'en'
  ): ComputedRef<CMSCreative[]> => {
    return computed(() => {
      return creatives.value
        .filter((creative) => {
          const majorCategoryType = creative.majorCategory.type;
          // typeは配列なので、'major'を含むかチェック
          // カテゴリIDで比較（name/nameEnではなくIDを使用）
          return majorCategoryType.includes('major') &&
                 creative.majorCategory.id === category;
        })
        .map((creative) => adaptCreativeData(creative, locale));
    });
  };

  /**
   * IDから作品を取得（ロケール対応）
   */
  const getCreativeById = (
    id: string,
    locale: 'ja' | 'en'
  ): ComputedRef<CMSCreative | null> => {
    return computed(() => {
      const creative = creatives.value.find((c) => c.id === id);
      return creative ? adaptCreativeData(creative, locale) : null;
    });
  };

  /**
   * 大カテゴリ一覧を取得
   */
  const getMajorCategories: ComputedRef<CategoryData[]> = computed(() => {
    return categories.value.filter((cat) => cat.type.includes('major'));
  });

  /**
   * 小カテゴリ一覧を取得
   * NOTE: 実際のスキーマではparentCategoryが削除されたため、フラット構造で全小カテゴリを返す
   */
  const getMinorCategories = (): ComputedRef<CategoryData[]> => {
    return computed(() => {
      return categories.value.filter((cat) => cat.type.includes('minor'));
    });
  };

  return {
    // State
    creatives: creatives as Ref<CreativeData[]>,
    categories: categories as Ref<CategoryData[]>,
    isLoading: isLoading as Ref<boolean>,
    error: error as Ref<Error | null>,

    // Actions
    fetchCategories,
    fetchCreatives,

    // Getters
    getCreativesByCategory,
    getCreativeById,
    getMajorCategories,
    getMinorCategories,
  };
}
