import type { CreativeCategory } from './index';

/**
 * CreativeDetail ページのルートパラメータ型定義
 */
export interface CreativeDetailParams {
  category: CreativeCategory;
  id: string;
}
