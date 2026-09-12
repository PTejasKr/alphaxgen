import { NextResponse } from 'next/server';
import { ProductService } from '@/services/productService';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category') || undefined;
  const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit') as string) : undefined;
  const featured = searchParams.get('featured');

  let result;
  if (featured === 'true') {
    result = await ProductService.getFeaturedProducts(limit);
  } else {
    result = await ProductService.getProducts(category, limit);
  }

  return NextResponse.json(result, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
