import type { CreativeCategory } from './creatives';

/**
 * Common component props type definitions
 */

// CreativeItem.vue props
export interface CreativeItemProps {
  mode: string;                 // Display mode (e.g., "Animation", "Development")
  category: CreativeCategory;   // Category for routing
  id: string;                   // Creative ID
  title: string;                // Translated title
  description: string;          // Translated description
  thumbnail: string;            // Thumbnail image path
  index: number;                // Item index (for animation delays)
  tags: string[];               // Tag labels
}

// About関連コンポーネント型定義

export interface AboutHeroProps {
  // Propsなし（i18nのみ使用）
}

export interface AboutProfileProps {
  // Propsなし
}

export interface AboutHistoryProps {
  // Propsなし
}

export interface ProfileItem {
  label: string;
  content: string;
  hasLink: boolean;
  linkHref?: string;
}

export interface HistoryItem {
  year: string;
  titleKey: string;
  descriptionKey: string;
}
