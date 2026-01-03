import type { RouteLocationNormalizedLoaded } from 'vue-router';
import type { CreativeCategory } from './creatives';

/**
 * Vue Router dynamic route parameters
 */

// Route params for /creatives/:category/:id
export interface CreativeDetailParams {
  category: CreativeCategory;
  id: string;
}

// Type-safe route param extraction
export function getCreativeParams(
  route: RouteLocationNormalizedLoaded
): CreativeDetailParams | null {
  const { category, id } = route.params;

  if (typeof category !== 'string' || typeof id !== 'string') {
    return null;
  }

  // Validate category
  const validCategories: CreativeCategory[] = ['animation', 'development', 'illustration', 'video'];
  if (!validCategories.includes(category as CreativeCategory)) {
    return null;
  }

  return {
    category: category as CreativeCategory,
    id
  };
}
