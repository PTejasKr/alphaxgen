import { brandValues } from '@/data/stories';

export class StoryService {
  /**
   * Fetch all brand values/stories
   */
  static async getBrandValues() {
    return brandValues;
  }
}
