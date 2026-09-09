import { NextResponse } from 'next/server';
import { brandValues } from '@/data/stories';

export async function GET() {
  return NextResponse.json(brandValues, {
    headers: {
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
    },
  });
}
