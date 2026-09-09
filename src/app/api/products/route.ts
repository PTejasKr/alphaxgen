import { NextResponse } from 'next/server';
import { products } from '@/data/products';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const limit = searchParams.get('limit');

  let filteredProducts = products;

  if (category && category !== 'All') {
    filteredProducts = filteredProducts.filter(p => p.category === category);
  }

  const featured = searchParams.get('featured');
  if (featured === 'true') {
    filteredProducts = filteredProducts.filter(p => p.featured);
  }

  if (limit) {
    filteredProducts = filteredProducts.slice(0, parseInt(limit));
  }

  return NextResponse.json(filteredProducts, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
