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
