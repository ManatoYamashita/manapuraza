/**
 * microCMS API type definitions
 */

// microCMS共通メタデータ
export interface MicroCMSMeta {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  revisedAt?: string;
}

// カテゴリ種別（複数選択可のためstring[]型になる可能性あり）
export type CategoryType = 'major' | 'minor';

// カテゴリデータ
export interface CategoryData extends MicroCMSMeta {
  name: string;              // 日本語表示名
  nameEn?: string;           // 英語表示名（オプショナル）
  type: CategoryType[];      // 複数選択可能（multipleSelect: true）
  description?: string;      // カテゴリの説明（日本語）
  descriptionEn?: string;    // カテゴリの説明（英語）
}

// 作品データ
export interface CreativeData extends MicroCMSMeta {
  majorCategory: CategoryData;                              // 大カテゴリ（単一参照）
  minorCategory?: CategoryData[];                           // 小カテゴリ（複数参照、タグ）
  title: string;                                            // 日本語タイトル
  titleEn?: string;                                         // 英語タイトル
  description?: string;                                     // SEO用概要（日本語）
  descriptionEn?: string;                                   // SEO用概要（英語）
  detail?: string;                                          // 詳細説明（日本語、richEditorV2 HTML）
  detailEn?: string;                                        // 詳細説明（英語、richEditorV2 HTML）
  thumbnail: { url: string; width?: number; height?: number };  // サムネイル
  images?: Array<{ url: string; width?: number; height?: number }>;  // 詳細画像
  youtubeUrl?: string;                                      // YouTube URL（単一）
  year?: string;                                            // 制作年
  url?: string;                                             // 外部URL
}

// microCMS APIリストレスポンス
export interface MicroCMSListResponse<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}
