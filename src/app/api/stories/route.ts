import { NextResponse } from 'next/server';
import { StoryService } from '@/services/storyService';

export async function GET() {
  const brandValues = await StoryService.getBrandValues();
  return NextResponse.json(brandValues, {
    headers: {
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
    },
  });
}
