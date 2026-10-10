export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  currency: string;
  images: string[];
  description: string;
  colors: string[];
  sizes: string[];
  availability: 'in-stock' | 'out-of-stock' | 'pre-order';
  featured: boolean;
  collection: string;
}

export const products: Product[] = [
  // Regular Collection
  { id: "reg_01", slug: "polyester-80-gsm", name: "Polyster - 80 GSM", category: "Regular Collection", price: 65, currency: "INR", images: ["/images/men/regular black.webp", "/images/men/regular blue.webp", "/images/men/regular brown.webp", "/images/men/regular red.webp", "/images/men/regular white.webp"], description: "80 GSM Polyster Fabric", colors: ["White", "Black", "Grey"], sizes: ["S", "M", "L", "XL"], availability: "in-stock", featured: false, collection: "regular" },
  { id: "reg_02", slug: "polyester-100-gsm", name: "Polyster - 100 GSM", category: "Regular Collection", price: 75, currency: "INR", images: ["/images/men/regular black.webp", "/images/men/regular blue.webp", "/images/men/regular brown.webp", "/images/men/regular red.webp", "/images/men/regular white.webp"], description: "100 GSM Polyster Fabric", colors: ["White"], sizes: ["S", "M", "L", "XL"], availability: "in-stock", featured: false, collection: "regular" },
  { id: "reg_03", slug: "serina-120-gsm", name: "Serina - 120 GSM", category: "Regular Collection", price: 85, currency: "INR", images: ["/images/men/regular black.webp", "/images/men/regular blue.webp", "/images/men/regular brown.webp", "/images/men/regular red.webp", "/images/men/regular white.webp"], description: "120 GSM Serina Fabric", colors: ["White", "Black", "Grey"], sizes: ["S", "M", "L", "XL"], availability: "in-stock", featured: false, collection: "regular" },
  { id: "reg_04", slug: "dri-fit-130-gsm", name: "Dri Fit - 130 GSM", category: "Regular Collection", price: 99, currency: "INR", images: ["/images/men/regular black.webp", "/images/men/regular blue.webp", "/images/men/regular brown.webp", "/images/men/regular red.webp", "/images/men/regular white.webp"], description: "130 GSM Dri Fit Fabric", colors: ["Yellow","Pink","Beige","Sky blue","White","Red","Grey","Maroon","Black","Navy blue"], sizes: ["S", "M", "L", "XL"], availability: "in-stock", featured: false, collection: "regular" },
  { id: "reg_05", slug: "dot-knit-160-gsm", name: "Dot Knit - 160 GSM", category: "Regular Collection", price: 109, currency: "INR", images: ["/images/men/regular black.webp", "/images/men/regular blue.webp", "/images/men/regular brown.webp", "/images/men/regular red.webp", "/images/men/regular white.webp"], description: "160 GSM Dot Knit Fabric", colors: ["Orange","Light Green","White","Black","Yellow","Sky blue"], sizes: ["S", "M", "L", "XL"], availability: "in-stock", featured: false, collection: "regular" },
  { id: "reg_06", slug: "nirmal-polo-160-gsm", name: "Nirmal Polo - 160 GSM", category: "Regular Collection", price: 124, currency: "INR", images: ["/images/men/regular black.webp", "/images/men/regular blue.webp", "/images/men/regular brown.webp", "/images/men/regular red.webp", "/images/men/regular white.webp"], description: "160 GSM Nirmal Polo Fabric", colors: ["White", "Black", "Grey"], sizes: ["S", "M", "L", "XL"], availability: "in-stock", featured: false, collection: "regular" },
  { id: "reg_07", slug: "pc-160-gsm-129", name: "PC - 160 GSM", category: "Regular Collection", price: 129, currency: "INR", images: ["/images/men/regular black.webp", "/images/men/regular blue.webp", "/images/men/regular brown.webp", "/images/men/regular red.webp", "/images/men/regular white.webp"], description: "160 GSM PC Fabric", colors: ["Red","Royal Blue","Green","White","Grey","Black","Yellow"], sizes: ["S", "M", "L", "XL"], availability: "in-stock", featured: false, collection: "regular" },
  { id: "reg_08", slug: "pc-160-gsm-139", name: "PC Premium - 160 GSM", category: "Regular Collection", price: 139, currency: "INR", images: ["/images/men/regular black.webp", "/images/men/regular blue.webp", "/images/men/regular brown.webp", "/images/men/regular red.webp", "/images/men/regular white.webp"], description: "160 GSM Premium PC Fabric", colors: ["Red","Royal Blue","Green","White","Grey","Black","Yellow"], sizes: ["S", "M", "L", "XL"], availability: "in-stock", featured: false, collection: "regular" },
  { id: "reg_09", slug: "pc-200-gsm", name: "PC - 200 GSM", category: "Regular Collection", price: 149, currency: "INR", images: ["/images/men/200 gsm poly cotton black.jpeg", "/images/men/regular black.webp", "/images/men/regular blue.webp", "/images/men/regular brown.webp", "/images/men/regular red.webp", "/images/men/regular white.webp"], description: "200 GSM PC Fabric", colors: ["White","Red","Grey","Black","Yellow","Light Green","Pink","Lavender","Sky blue","Orange","Navy blue","Beige"], sizes: ["S", "M", "L", "XL"], availability: "in-stock", featured: true, collection: "regular" },
  { id: "reg_10", slug: "pure-cotton-180-gsm", name: "100% Pure Cotton - 180 GSM", category: "Regular Collection", price: 179, currency: "INR", images: ["/images/men/regular black.webp", "/images/men/regular blue.webp", "/images/men/regular brown.webp", "/images/men/regular red.webp", "/images/men/regular white.webp"], description: "180 GSM 100% Pure Cotton", colors: ["White","Red","Grey","Black","Yellow","Light Green","Pink","Lavender","Sky blue","Orange","Navy blue","Beige"], sizes: ["S", "M", "L", "XL"], availability: "in-stock", featured: true, collection: "regular" },
  { id: "reg_11", slug: "pure-cotton-biowash-180-gsm", name: "100% Pure Cotton Biowash - 180 GSM", category: "Regular Collection", price: 189, currency: "INR", images: ["/images/men/regular black.webp", "/images/men/regular blue.webp", "/images/men/regular brown.webp", "/images/men/regular red.webp", "/images/men/regular white.webp"], description: "180 GSM 100% Pure Cotton Biowash", colors: ["Black","White","Beige","Red","Lavender","Sage green","Brown","Off-White","Orange","Navy blue"], sizes: ["S", "M", "L", "XL"], availability: "in-stock", featured: true, collection: "regular" },
  { id: "reg_12", slug: "pure-cotton-biowash-200-gsm", name: "100% Pure Cotton Biowash - 200 GSM", category: "Regular Collection", price: 209, currency: "INR", images: ["/images/men/regular black.webp", "/images/men/regular blue.webp", "/images/men/regular brown.webp", "/images/men/regular red.webp", "/images/men/regular white.webp"], description: "200 GSM 100% Pure Cotton Biowash", colors: ["Black","White","Pink","Grey","Sky blue","Beige","Red","Lavender","Light Green","Maroon"], sizes: ["S", "M", "L", "XL"], availability: "in-stock", featured: true, collection: "regular" },
  
  // Oversized Collection
  { id: "os_01", slug: "os-pure-cotton-200", name: "100% Pure Cotton - 200 GSM", category: "Oversized Collection", price: 206.40, currency: "INR", images: ["/images/men/oversize acid wash.webp", "/images/men/oversize bblue.webp", "/images/men/oversize black.webp", "/images/men/oversize white.webp"], description: "Oversized 200 GSM 100% Pure Cotton", colors: ["White","Red","Grey","Black","Yellow","Light Green","Pink","Lavender","Sky blue","Orange","Navy blue","Beige"], sizes: ["S", "M", "L", "XL"], availability: "in-stock", featured: false, collection: "oversized" },
  { id: "os_02", slug: "os-french-terry-red-220", name: "100% French Terry Red Label - 220 GSM", category: "Oversized Collection", price: 236.40, currency: "INR", images: ["/images/men/oversize acid wash.webp", "/images/men/oversize bblue.webp", "/images/men/oversize black.webp", "/images/men/oversize white.webp"], description: "Oversized 220 GSM French Terry Red Label", colors: ["Black","White","Beige","Red","Lavender","Sage green","Brown","Off-White","Orange","Navy blue"], sizes: ["S", "M", "L", "XL"], availability: "in-stock", featured: true, collection: "oversized" },
  { id: "os_03", slug: "os-french-terry-cotton-240", name: "100% French Terry Cotton - 240 GSM", category: "Oversized Collection", price: 242.40, currency: "INR", images: ["/images/men/240gsm oversized black.jpeg", "/images/men/oversize acid wash.webp", "/images/men/oversize black.webp", "/images/men/oversize blue.webp", "/images/men/oversize white.webp"], description: "Oversized 240 GSM French Terry Cotton", colors: ["Black","White","Sky blue","Beige","Red","Lavender","Maroon","Rose gold","Dark Green","Off-White","Brown"], sizes: ["S", "M", "L", "XL"], availability: "in-stock", featured: true, collection: "oversized" },
  { id: "os_04", slug: "os-french-terry-cotton-260", name: "100% French Terry Cotton - 260 GSM", category: "Oversized Collection", price: 290.40, currency: "INR", images: ["/images/men/oversize acid wash.webp", "/images/men/oversize bblue.webp", "/images/men/oversize black.webp", "/images/men/oversize white.webp"], description: "Oversized 260 GSM French Terry Cotton", colors: ["Black","White","Pink","Grey","Sky blue","Beige","Red","Lavender","Light Green","Maroon"], sizes: ["S", "M", "L", "XL"], availability: "in-stock", featured: false, collection: "oversized" },
  { id: "os_05", slug: "os-acid-wash-french-terry-240", name: "Acid Wash French Terry - 240 GSM", category: "Oversized Collection", price: 296.40, currency: "INR", images: ["/images/men/oversize acid wash.webp", "/images/men/oversize bblue.webp", "/images/men/oversize black.webp", "/images/men/oversize white.webp"], description: "Oversized 240 GSM Acid Wash French Terry", colors: ["Black","Blue","Red"], sizes: ["S", "M", "L", "XL"], availability: "in-stock", featured: true, collection: "oversized" },

  // Polo Collection
  { id: "polo_01", slug: "polo-dri-fit-130", name: "Dri Fit - 130 GSM", category: "Polo Collection", price: 119, currency: "INR", images: ["/images/men/polo black.webp", "/images/men/polo blue.webp", "/images/men/polo brown.webp", "/images/men/polo l_blue.webp", "/images/men/polo white.webp"], description: "130 GSM Dri Fit Polo", colors: ["White","Red","Grey","Black","Yellow","Light Green","Pink","Lavender","Sky blue","Orange","Navy blue","Beige"], sizes: ["S", "M", "L", "XL"], availability: "in-stock", featured: false, collection: "polo" },
  { id: "polo_02", slug: "polo-dot-knit-160", name: "Dot Knit - 160 GSM", category: "Polo Collection", price: 139, currency: "INR", images: ["/images/men/160 gsm dot knit polo black.jpeg", "/images/men/160 gsm dot knit polo grey.jpeg", "/images/men/160 gsm dot knit polo sky blue.jpeg"], description: "160 GSM Dot Knit Polo", colors: ["Black","Yellow","Orange","White","Light Green","Sky blue","Red","Grey","Navy blue"], sizes: ["S", "M", "L", "XL"], availability: "in-stock", featured: false, collection: "polo" },
  { id: "polo_03", slug: "polo-collar-matty-220", name: "COLLAR MATTY (60% COTTON) - 220 GSM", category: "Polo Collection", price: 170, currency: "INR", images: ["/images/men/220 gsm natty polo 60-40 black.jpeg", "/images/men/220 gsm natty polo 60-40 grey.jpeg", "/images/men/220 gsm natty polo 60-40 olive.jpeg", "/images/men/220 gsm natty polo 60-40 sky blue.jpeg", "/images/men/220 gsm natty polo 60-40 yellow.jpeg"], description: "220 GSM Collar Matty (60% Cotton)", colors: ["Black","White","Orange","Maroon","Dark Green","Navy blue","Beige","Pink","Grey","Light Green","Red","Yellow","Sky blue","Royal Blue"], sizes: ["S", "M", "L", "XL"], availability: "in-stock", featured: true, collection: "polo" },
  { id: "polo_04", slug: "polo-collar-matty-cotton-220", name: "COLLAR MATTY POLO (COTTON) - 220 GSM", category: "Polo Collection", price: 234, currency: "INR", images: ["/images/men/polo black.webp", "/images/men/polo blue.webp", "/images/men/polo brown.webp", "/images/men/polo l_blue.webp", "/images/men/polo white.webp"], description: "220 GSM Collar Matty Polo (Cotton)", colors: ["Black","White","Orange","Maroon","Dark Green","Navy blue","Beige","Pink","Grey","Light Green","Red","Yellow","Sky blue","Royal Blue"], sizes: ["S", "M", "L", "XL"], availability: "in-stock", featured: false, collection: "polo" },
  { id: "polo_05", slug: "polo-pc-matty-250", name: "PC MATTY POLO (90% COTTON) - 250 GSM", category: "Polo Collection", price: 282, currency: "INR", images: ["/images/men/250 gsm natty polo 90-10 grey.jpeg"], description: "250 GSM PC Matty Polo (90% Cotton)", colors: ["Black","White","Maroon","Dark Green","Navy blue","Grey","Red","Yellow","Sky blue","Royal Blue"], sizes: ["S", "M", "L", "XL"], availability: "in-stock", featured: true, collection: "polo" },
  { id: "polo_06", slug: "polo-premium-cotton-biowash-220", name: "PREMIUM COTTON BIOWASH (100% COTTON) - 220 GSM", category: "Polo Collection", price: 324, currency: "INR", images: ["/images/men/polo black.webp", "/images/men/polo blue.webp", "/images/men/polo brown.webp", "/images/men/polo l_blue.webp", "/images/men/polo white.webp"], description: "220 GSM Premium Cotton Biowash (100% Cotton)", colors: ["Black","White","Maroon","Dark Green","Navy blue","Grey","Red","Yellow","Sky blue","Royal Blue"], sizes: ["S", "M", "L", "XL"], availability: "in-stock", featured: true, collection: "polo" },

  // Women's Collection
  { id: "w_01", slug: "women-pure-cotton-180", name: "women's 100% pure cotton crop top-180gsm", category: "Women's Collection", price: 179, currency: "INR", images: ["/images/womens-collection.png"], description: "180 GSM 100% Pure Cotton Tee tailored for women.", colors: ["White", "Black", "Pink", "Lavender"], sizes: ["XS", "S", "M", "L", "XL"], availability: "in-stock", featured: true, collection: "women" },
  { id: "w_02", slug: "women-french-terry-crop-240", name: "womens french terry - 240 gsm", category: "Women's Collection", price: 242.40, currency: "INR", images: ["/images/womens-collection.png"], description: "240 GSM French Terry Crop Top for women.", colors: ["White", "Black", "Grey"], sizes: ["XS", "S", "M", "L", "XL"], availability: "in-stock", featured: true, collection: "women" },
  { id: "w_03", slug: "women-acid-wash-tee", name: "Women's Acid Wash Tee - 240 GSM", category: "Women's Collection", price: 296.40, currency: "INR", images: ["/images/womens-collection.png"], description: "240 GSM Acid Wash French Terry tailored for women.", colors: ["Black","Blue","Red"], sizes: ["XS", "S", "M", "L", "XL"], availability: "in-stock", featured: false, collection: "women" },
];

/**
 * Dynamically resolves the banner image and stock status for a collection/category.
 * - Pulls the latest in-stock product image in the subsection.
 * - Out-of-stock products are NEVER pulled as banner images.
 * - If and only if the entire category is out of stock, flags isOutOfStock = true.
 */
export function getCategoryBannerInfo(collectionOrCategory: string, fallbackImage: string) {
  const normalizedKey = collectionOrCategory.toLowerCase();
  
  const matchingProducts = products.filter(p => 
    (p.collection && p.collection.toLowerCase() === normalizedKey) ||
    (p.category && p.category.toLowerCase().includes(normalizedKey)) ||
    (normalizedKey.includes(p.collection?.toLowerCase() || ''))
  );

  const inStockProducts = matchingProducts.filter(p => 
    p.availability === 'in-stock' && 
    Array.isArray(p.images) && 
    p.images.length > 0 && 
    p.images.some(img => img && img.trim() !== '')
  );

  if (inStockProducts.length > 0) {
    const latestProduct = inStockProducts[inStockProducts.length - 1];
    const validImages = latestProduct.images.filter(img => img && img.trim() !== '');
    const bannerImage = validImages[validImages.length - 1] || validImages[0] || fallbackImage;

    return {
      image: bannerImage,
      isOutOfStock: false,
      productCount: inStockProducts.length
    };
  }

  const anyProductWithImage = matchingProducts.find(p => 
    Array.isArray(p.images) && p.images.some(img => img && img.trim() !== '')
  );
  const bgImage = anyProductWithImage?.images?.find(img => img && img.trim() !== '') || fallbackImage;

  return {
    image: bgImage,
    isOutOfStock: true,
    productCount: 0
  };
}

