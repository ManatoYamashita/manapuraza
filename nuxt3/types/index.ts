/**
 * Type definitions for MANAPURAZA.COM
 * Nuxt 3 + TypeScript migration
 */

/**
 * Creative作品の基本型定義
 */
export interface Creative {
  id: string;
  title: string;              // i18n key
  description: string;        // i18n key
  url: string;
  thumbnail: string;
  tags: string[];
  detail?: CreativeDetail;
}

/**
 * 作品詳細ページのデータ型
 */
export interface CreativeDetail {
  images: string[];
  descriptionMarkdown: string;  // i18n key
  youtube?: {
    mobile: string;
    desktop: string;
  };
  productionYear?: string;
  credits?: string[];           // i18n key array
  cta?: CtaButton[];
}

/**
 * CTAボタンの型定義
 */
export interface CtaButton {
  href: string;
  target?: '_blank' | '_self';
  icon?: [string, string];      // Font Awesome icon tuple
  text: string;                 // i18n key
  subText?: string;             // i18n key
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
