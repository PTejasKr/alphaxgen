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
  { id: "reg_01", slug: "polyester-80-gsm", name: "Polyster - 80 GSM", category: "Regular Collection", price: 65, currency: "INR", images: ["/placeholder.jpg"], description: "80 GSM Polyster Fabric", colors: ["White", "Black", "Grey"], sizes: ["S", "M", "L", "XL"], availability: "in-stock", featured: false, collection: "regular" },
  { id: "reg_02", slug: "polyester-100-gsm", name: "Polyster - 100 GSM", category: "Regular Collection", price: 75, currency: "INR", images: ["/placeholder.jpg"], description: "100 GSM Polyster Fabric", colors: ["White", "Black", "Grey"], sizes: ["S", "M", "L", "XL"], availability: "in-stock", featured: false, collection: "regular" },
  { id: "reg_03", slug: "serina-120-gsm", name: "Serina - 120 GSM", category: "Regular Collection", price: 85, currency: "INR", images: ["/placeholder.jpg"], description: "120 GSM Serina Fabric", colors: ["White", "Black", "Grey"], sizes: ["S", "M", "L", "XL"], availability: "in-stock", featured: false, collection: "regular" },
  { id: "reg_04", slug: "dri-fit-130-gsm", name: "Dri Fit - 130 GSM", category: "Regular Collection", price: 99, currency: "INR", images: ["/placeholder.jpg"], description: "130 GSM Dri Fit Fabric", colors: ["White", "Black", "Grey"], sizes: ["S", "M", "L", "XL"], availability: "in-stock", featured: false, collection: "regular" },
  { id: "reg_05", slug: "dot-knit-160-gsm", name: "Dot Knit - 160 GSM", category: "Regular Collection", price: 109, currency: "INR", images: ["/placeholder.jpg"], description: "160 GSM Dot Knit Fabric", colors: ["White", "Black", "Grey"], sizes: ["S", "M", "L", "XL"], availability: "in-stock", featured: false, collection: "regular" },
  { id: "reg_06", slug: "nirmal-polo-160-gsm", name: "Nirmal Polo - 160 GSM", category: "Regular Collection", price: 124, currency: "INR", images: ["/placeholder.jpg"], description: "160 GSM Nirmal Polo Fabric", colors: ["White", "Black", "Grey"], sizes: ["S", "M", "L", "XL"], availability: "in-stock", featured: false, collection: "regular" },
  { id: "reg_07", slug: "pc-160-gsm-129", name: "PC - 160 GSM", category: "Regular Collection", price: 129, currency: "INR", images: ["/placeholder.jpg"], description: "160 GSM PC Fabric", colors: ["White", "Black", "Grey"], sizes: ["S", "M", "L", "XL"], availability: "in-stock", featured: false, collection: "regular" },
  { id: "reg_08", slug: "pc-160-gsm-139", name: "PC Premium - 160 GSM", category: "Regular Collection", price: 139, currency: "INR", images: ["/placeholder.jpg"], description: "160 GSM Premium PC Fabric", colors: ["White", "Black", "Grey"], sizes: ["S", "M", "L", "XL"], availability: "in-stock", featured: false, collection: "regular" },
  { id: "reg_09", slug: "pc-200-gsm", name: "PC - 200 GSM", category: "Regular Collection", price: 149, currency: "INR", images: ["/placeholder.jpg"], description: "200 GSM PC Fabric", colors: ["White", "Black", "Grey"], sizes: ["S", "M", "L", "XL"], availability: "in-stock", featured: true, collection: "regular" },
  { id: "reg_10", slug: "pure-cotton-180-gsm", name: "100% Pure Cotton - 180 GSM", category: "Regular Collection", price: 179, currency: "INR", images: ["/placeholder.jpg"], description: "180 GSM 100% Pure Cotton", colors: ["White", "Black", "Grey"], sizes: ["S", "M", "L", "XL"], availability: "in-stock", featured: true, collection: "regular" },
  { id: "reg_11", slug: "pure-cotton-biowash-180-gsm", name: "100% Pure Cotton Biowash - 180 GSM", category: "Regular Collection", price: 189, currency: "INR", images: ["/placeholder.jpg"], description: "180 GSM 100% Pure Cotton Biowash", colors: ["White", "Black", "Grey"], sizes: ["S", "M", "L", "XL"], availability: "in-stock", featured: true, collection: "regular" },
  { id: "reg_12", slug: "pure-cotton-biowash-200-gsm", name: "100% Pure Cotton Biowash - 200 GSM", category: "Regular Collection", price: 209, currency: "INR", images: ["/placeholder.jpg"], description: "200 GSM 100% Pure Cotton Biowash", colors: ["White", "Black", "Grey"], sizes: ["S", "M", "L", "XL"], availability: "in-stock", featured: true, collection: "regular" },
  
  // Oversized Collection
  { id: "os_01", slug: "os-pure-cotton-200", name: "100% Pure Cotton - 200 GSM", category: "Oversized Collection", price: 206.40, currency: "INR", images: ["/placeholder.jpg"], description: "Oversized 200 GSM 100% Pure Cotton", colors: ["White", "Black", "Grey"], sizes: ["S", "M", "L", "XL"], availability: "in-stock", featured: false, collection: "oversized" },
  { id: "os_02", slug: "os-french-terry-red-220", name: "100% French Terry Red Label - 220 GSM", category: "Oversized Collection", price: 236.40, currency: "INR", images: ["/placeholder.jpg"], description: "Oversized 220 GSM French Terry Red Label", colors: ["White", "Black", "Grey"], sizes: ["S", "M", "L", "XL"], availability: "in-stock", featured: true, collection: "oversized" },
  { id: "os_03", slug: "os-french-terry-cotton-240", name: "100% French Terry Cotton - 240 GSM", category: "Oversized Collection", price: 242.40, currency: "INR", images: ["/placeholder.jpg"], description: "Oversized 240 GSM French Terry Cotton", colors: ["White", "Black", "Grey"], sizes: ["S", "M", "L", "XL"], availability: "in-stock", featured: true, collection: "oversized" },
  { id: "os_04", slug: "os-french-terry-cotton-260", name: "100% French Terry Cotton - 260 GSM", category: "Oversized Collection", price: 290.40, currency: "INR", images: ["/placeholder.jpg"], description: "Oversized 260 GSM French Terry Cotton", colors: ["White", "Black", "Grey"], sizes: ["S", "M", "L", "XL"], availability: "in-stock", featured: false, collection: "oversized" },
  { id: "os_05", slug: "os-acid-wash-french-terry-240", name: "Acid Wash French Terry - 240 GSM", category: "Oversized Collection", price: 296.40, currency: "INR", images: ["/placeholder.jpg"], description: "Oversized 240 GSM Acid Wash French Terry", colors: ["Vintage Black", "Vintage Grey"], sizes: ["S", "M", "L", "XL"], availability: "in-stock", featured: true, collection: "oversized" },

  // Polo Collection
  { id: "polo_01", slug: "polo-dri-fit-130", name: "Dri Fit - 130 GSM", category: "Polo Collection", price: 119, currency: "INR", images: ["/placeholder.jpg"], description: "130 GSM Dri Fit Polo", colors: ["White", "Black", "Navy"], sizes: ["S", "M", "L", "XL"], availability: "in-stock", featured: false, collection: "polo" },
  { id: "polo_02", slug: "polo-dot-knit-160", name: "Dot Knit - 160 GSM", category: "Polo Collection", price: 139, currency: "INR", images: ["/placeholder.jpg"], description: "160 GSM Dot Knit Polo", colors: ["White", "Black", "Navy"], sizes: ["S", "M", "L", "XL"], availability: "in-stock", featured: false, collection: "polo" },
  { id: "polo_03", slug: "polo-collar-matty-220", name: "COLLAR MATTY (60% COTTON) - 220 GSM", category: "Polo Collection", price: 170, currency: "INR", images: ["/placeholder.jpg"], description: "220 GSM Collar Matty (60% Cotton)", colors: ["White", "Black", "Navy"], sizes: ["S", "M", "L", "XL"], availability: "in-stock", featured: true, collection: "polo" },
  { id: "polo_04", slug: "polo-collar-matty-cotton-220", name: "COLLAR MATTY POLO (COTTON) - 220 GSM", category: "Polo Collection", price: 234, currency: "INR", images: ["/placeholder.jpg"], description: "220 GSM Collar Matty Polo (Cotton)", colors: ["White", "Black", "Navy"], sizes: ["S", "M", "L", "XL"], availability: "in-stock", featured: false, collection: "polo" },
  { id: "polo_05", slug: "polo-pc-matty-250", name: "PC MATTY POLO (90% COTTON) - 250 GSM", category: "Polo Collection", price: 282, currency: "INR", images: ["/placeholder.jpg"], description: "250 GSM PC Matty Polo (90% Cotton)", colors: ["White", "Black", "Navy"], sizes: ["S", "M", "L", "XL"], availability: "in-stock", featured: true, collection: "polo" },
  { id: "polo_06", slug: "polo-premium-cotton-biowash-220", name: "PREMIUM COTTON BIOWASH (100% COTTON) - 220 GSM", category: "Polo Collection", price: 324, currency: "INR", images: ["/placeholder.jpg"], description: "220 GSM Premium Cotton Biowash (100% Cotton)", colors: ["White", "Black", "Navy"], sizes: ["S", "M", "L", "XL"], availability: "in-stock", featured: true, collection: "polo" },

  // Women's Collection
  { id: "w_01", slug: "women-pure-cotton-180", name: "women's 100% pure cotton crop top-180gsm", category: "Women's Collection", price: 179, currency: "INR", images: ["/placeholder.jpg"], description: "180 GSM 100% Pure Cotton Tee tailored for women.", colors: ["White", "Black", "Pink", "Lavender"], sizes: ["XS", "S", "M", "L", "XL"], availability: "in-stock", featured: true, collection: "women" },
  { id: "w_02", slug: "women-french-terry-crop-240", name: "womens french terry - 240 gsm", category: "Women's Collection", price: 242.40, currency: "INR", images: ["/placeholder.jpg"], description: "240 GSM French Terry Crop Top for women.", colors: ["White", "Black", "Grey"], sizes: ["XS", "S", "M", "L", "XL"], availability: "in-stock", featured: true, collection: "women" },
  { id: "w_03", slug: "women-acid-wash-tee", name: "Women's Acid Wash Tee - 240 GSM", category: "Women's Collection", price: 296.40, currency: "INR", images: ["/placeholder.jpg"], description: "240 GSM Acid Wash French Terry tailored for women.", colors: ["Vintage Black", "Vintage Blue"], sizes: ["XS", "S", "M", "L", "XL"], availability: "in-stock", featured: false, collection: "women" },
];
