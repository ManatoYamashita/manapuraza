/**
 * Portfolio creative item data structures
 */

import type { Component } from 'vue';

// Creative categories (literal type for type safety)
export type CreativeCategory = 'animation' | 'development' | 'illustration' | 'video' | 'design';

// CTA button interface
export interface CtaButton {
  href: string;
  target: string;
  icon?: Component;
  text: string;        // i18n key (e.g., "creatives.cta.viewSite")
  subText: string;     // i18n key (e.g., "creatives.cta.viewSiteSub")
  variant: '' | 'primary' | 'secondary' | 'simple';
}

// Creative detail page data
export interface CreativeDetail {
  images: string[];              // Image paths (static imports)
  descriptionMarkdown: string;   // i18n key for Markdown content
  youtube?: {
    mobile: string;              // YouTube embed URL for mobile
    desktop: string;             // YouTube embed URL for desktop
  };
  productionYear?: string;       // e.g., "2023", "2024~2026"
  credits?: string[];            // i18n keys (e.g., "creatives.credits.director")
  cta?: CtaButton[];             // Call-to-action buttons
}

// Main creative item interface
export interface Creative {
  id: string;                   // Unique identifier
  title: string;                // i18n key (e.g., "creatives.animation.item1.title")
  description: string;          // i18n key (e.g., "creatives.animation.item1.description")
  url: string;                  // External link or detail page path
  thumbnail: string;            // Thumbnail image path (static import)
  tags: string[];               // Tag labels (e.g., ["3DCG", "Animation"])
  detail?: CreativeDetail;      // Optional detail page data
}

// Creatives data collection structure
export interface CreativesData {
  animation: Creative[];
  development: Creative[];
  illustration: Creative[];
  video: Creative[];
  design: Creative[];
}

// Type guard for category validation
export function isValidCategory(category: string): category is CreativeCategory {
  return ['animation', 'development', 'illustration', 'video', 'design'].includes(category);
}

// Helper type for category keys
export type CreativeCategoryKey = keyof CreativesData;

// CMS版 Creative型（microCMSから取得したデータ）
export interface CMSCreative extends Omit<Creative, 'title' | 'description' | 'thumbnail'> {
  title: string;           // 直接の文字列（i18nキーではない）
  description: string;     // 直接の文字列（i18nキーではない）
  thumbnail: string;       // CMS URL
  _isCMS: true;            // CMS版であることを示すフラグ
}

// CMS版Creative型の型ガード関数
export function isCMSCreative(creative: Creative | CMSCreative): creative is CMSCreative {
  return '_isCMS' in creative && creative._isCMS === true;
}
