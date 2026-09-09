import { NextResponse } from 'next/server';
import { siteConfig } from '@/data/site';

export async function GET() {
  return NextResponse.json(siteConfig, {
    headers: {
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
    },
  });
}
