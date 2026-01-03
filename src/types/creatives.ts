/**
 * Portfolio creative item data structures
 */

// Creative categories (literal type for type safety)
export type CreativeCategory = 'animation' | 'development' | 'illustration' | 'video';

// CTA button interface
export interface CtaButton {
  href: string;
  target: string;
  icon?: string[];
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
  productionYear?: string;       // e.g., "2023", "2024~2025"
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
}

// Type guard for category validation
export function isValidCategory(category: string): category is CreativeCategory {
  return ['animation', 'development', 'illustration', 'video'].includes(category);
}

// Helper type for category keys
export type CreativeCategoryKey = keyof CreativesData;
