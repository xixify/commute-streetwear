export interface Product {
  id: string;
  name: string;
  slug: string;
  category: 'Heavyweight Tees' | 'Oversized Hoodies' | 'Cargo & Bottoms' | 'Outerwear' | 'Accessories';
  price: number;
  originalPrice?: number;
  badge?: 'NEW DROP' | 'BESTSELLER' | 'LIMITED EDITION' | 'SOLD OUT' | 'BACK IN STOCK';
  rating: number;
  reviewsCount: number;
  colors: { name: string; hex: string }[];
  sizes: ('S' | 'M' | 'L' | 'XL' | 'XXL')[];
  images: string[];
  description: string;
  gsm: string;
  fabric: string;
  fit: string;
  careInstructions: string[];
  inStock: boolean;
  featured?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 'commute-drop04-tee-01',
    name: 'COMMUTE // Heavyweight Graphic Boxy Tee',
    slug: 'heavyweight-graphic-boxy-tee',
    category: 'Heavyweight Tees',
    price: 2490,
    originalPrice: 2990,
    badge: 'NEW DROP',
    rating: 4.9,
    reviewsCount: 42,
    colors: [
      { name: 'Pitch Black', hex: '#0a0a0a' },
      { name: 'Washed Charcoal', hex: '#262626' },
      { name: 'Off White', hex: '#f5f4f0' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [
      '/Images/700740227_18046266803785194_68359887164937934_n.jpg',
      '/Images/688021048_18045594275785194_5710366581933748412_n.jpg',
      '/Images/636009027_18034757891785194_6131245554875701596_n.jpg'
    ],
    description: 'Engineered for daily urban movement. Features custom COMMUTE rear typographic print, dropped shoulder silhouette, and reinforced ribbed collar. Pre-shrunk custom weave.',
    gsm: '280 GSM Combed Organic Cotton',
    fabric: '100% Ring-Spun Combed Cotton',
    fit: 'Boxy Oversized Fit (Order true to size for signature drape)',
    careInstructions: [
      'Machine wash cold inside out',
      'Do not tumble dry',
      'Iron low inside out, avoid graphic'
    ],
    inStock: true,
    featured: true
  },
  {
    id: 'commute-terry-hoodie-02',
    name: 'COMMUTE // French Terry Oversized Hoodie',
    slug: 'french-terry-oversized-hoodie',
    category: 'Oversized Hoodies',
    price: 4850,
    originalPrice: 5400,
    badge: 'BESTSELLER',
    rating: 5.0,
    reviewsCount: 88,
    colors: [
      { name: 'Deep Onyx', hex: '#121212' },
      { name: 'Industrial Sage', hex: '#3d443a' }
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    images: [
      '/Images/636009027_18034757891785194_6131245554875701596_n.jpg',
      '/Images/686606255_18045436628785194_6293734523224567022_n.jpg',
      '/Images/701495763_18046518320785194_4400771909126757418_n.jpg'
    ],
    description: 'Ultra-heavy 450 GSM French Terry cotton hoodie with double-layer structured hood and subtle tonal silicone branding on front chest.',
    gsm: '450 GSM Ultra-Heavyweight French Terry',
    fabric: '85% Organic Cotton / 15% Recycled Polyester',
    fit: 'Relaxed Drop-Shoulder Silhouette',
    careInstructions: [
      'Cold gentle wash',
      'Flat dry in shade to preserve fleece loft',
      'Do not bleach'
    ],
    inStock: true,
    featured: true
  },
  {
    id: 'commute-crewneck-03',
    name: 'COMMUTE // Monogram Heavyweight Crewneck',
    slug: 'monogram-heavyweight-crewneck',
    category: 'Oversized Hoodies',
    price: 3950,
    originalPrice: 4500,
    badge: 'LIMITED EDITION',
    rating: 4.8,
    reviewsCount: 31,
    colors: [
      { name: 'Raw Sand', hex: '#d9d2c5' },
      { name: 'Stealth Black', hex: '#0f0f0f' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      '/Images/701495763_18046518320785194_4400771909126757418_n.jpg',
      '/Images/598581739_18027027101785194_673176336095704335_n.jpg',
      '/Images/700169476_18046003397785194_424452020238058406_n.jpg'
    ],
    description: 'Clean luxury aesthetic inspired by European urban uniform design. High-density embroidered logo across chest with ribbed cuffs and hem.',
    gsm: '400 GSM Heavyweight Loopback Fleece',
    fabric: '100% Premium Cotton',
    fit: 'Contemporary Oversized',
    careInstructions: [
      'Machine wash gentle 30°C',
      'Iron inside out'
    ],
    inStock: true,
    featured: true
  },
  {
    id: 'commute-cargo-04',
    name: 'COMMUTE // Urban Parachute Cargo Trousers',
    slug: 'urban-parachute-cargo-trousers',
    category: 'Cargo & Bottoms',
    price: 3650,
    badge: 'NEW DROP',
    rating: 4.9,
    reviewsCount: 56,
    colors: [
      { name: 'Tactical Black', hex: '#141414' },
      { name: 'Military Olive', hex: '#4b5320' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      '/Images/700169476_18046003397785194_424452020238058406_n.jpg',
      '/Images/714610436_18048806609785194_4446470819008697431_n.jpg',
      '/Images/634784251_18035005097785194_2781208136069599641_n.jpg'
    ],
    description: 'Multi-pocket parachute canvas trousers with adjustable hem drawstrings, articulated knee darts, and water-repellent finish for commute weather.',
    gsm: '260 GSM Ripstop Canvas',
    fabric: '98% Cotton / 2% Elastane Tech Stretch',
    fit: 'Wide Leg Adjustable Flare',
    careInstructions: [
      'Cold water wash',
      'Hang dry'
    ],
    inStock: true,
    featured: true
  },
  {
    id: 'commute-denim-05',
    name: 'COMMUTE // Raw Edged Distressed Utility Jacket',
    slug: 'raw-edged-distressed-utility-jacket',
    category: 'Outerwear',
    price: 5950,
    originalPrice: 6800,
    badge: 'LIMITED EDITION',
    rating: 5.0,
    reviewsCount: 19,
    colors: [
      { name: 'Vintage Indigo', hex: '#2b3a4a' },
      { name: 'Washed Obsidian', hex: '#1f1f1f' }
    ],
    sizes: ['M', 'L', 'XL'],
    images: [
      '/Images/634784251_18035005097785194_2781208136069599641_n.jpg',
      '/Images/591167934_18026433338785194_8001990465308318093_n.jpg',
      '/Images/591141623_18025438829785194_2315208716052989970_n.jpg'
    ],
    description: 'Architectural outerwear piece featuring heavy raw denim, distressed accents, dual-way matte black YKK metal zipper, and hidden tech pockets.',
    gsm: '14 oz Heavyweight Rigid Denim',
    fabric: '100% Cotton Denim',
    fit: 'Structured Boxy Cut',
    careInstructions: [
      'Dry clean recommended',
      'Spot clean with cold water'
    ],
    inStock: true,
    featured: true
  },
  {
    id: 'commute-acid-tee-06',
    name: 'COMMUTE // Acid Wash Vintage Oversized Tee',
    slug: 'acid-wash-vintage-oversized-tee',
    category: 'Heavyweight Tees',
    price: 2290,
    badge: 'BESTSELLER',
    rating: 4.7,
    reviewsCount: 64,
    colors: [
      { name: 'Acid Slate', hex: '#33383d' },
      { name: 'Mineral Dust', hex: '#5c544d' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [
      '/Images/591141623_18025438829785194_2315208716052989970_n.jpg',
      '/Images/635771777_18034735625785194_5461931106032739367_n.jpg',
      '/Images/587806725_18027267677785194_817095884676047356_n.jpg'
    ],
    description: 'Individually hand-dyed acid wash tee with subtle distress detailing on sleeve hems. No two pieces are completely identical.',
    gsm: '270 GSM Heavyweight Jersey',
    fabric: '100% Combed Cotton',
    fit: 'Streetwear Boxy Fit',
    careInstructions: [
      'Wash cold with like colors',
      'Do not bleach'
    ],
    inStock: true,
    featured: false
  },
  {
    id: 'commute-zip-hoodie-07',
    name: 'COMMUTE // Heavyweight Zip-Up Bomber Hoodie',
    slug: 'heavyweight-zip-up-bomber-hoodie',
    category: 'Outerwear',
    price: 5200,
    badge: 'NEW DROP',
    rating: 4.9,
    reviewsCount: 38,
    colors: [
      { name: 'Midnight Charcoal', hex: '#1c1d21' }
    ],
    sizes: ['M', 'L', 'XL'],
    images: [
      '/Images/587806725_18027267677785194_817095884676047356_n.jpg',
      '/Images/592460022_18026742872785194_7742904155201854238_n.jpg',
      '/Images/591123441_18025929899785194_2311687140685625912_n.jpg'
    ],
    description: 'Hybrid zip hoodie and lightweight bomber layer. Double-ended zip closure with custom engraved COMMUTE pull tab.',
    gsm: '420 GSM Terry Fleece',
    fabric: '90% Cotton / 10% Polyester',
    fit: 'Over-proportioned Boxy Cut',
    careInstructions: [
      'Machine wash gentle',
      'Tumble dry low'
    ],
    inStock: true,
    featured: false
  },
  {
    id: 'commute-sweatpants-08',
    name: 'COMMUTE // Tactical Cuffed Sweatpants',
    slug: 'tactical-cuffed-sweatpants',
    category: 'Cargo & Bottoms',
    price: 3250,
    badge: 'BACK IN STOCK',
    rating: 4.8,
    reviewsCount: 45,
    colors: [
      { name: 'Dark Heather', hex: '#222222' },
      { name: 'Washed Stone', hex: '#7a7672' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      '/Images/591123441_18025929899785194_2311687140685625912_n.jpg',
      '/Images/495792496_18000955763785194_6843194416252522730_n.jpg',
      '/Images/551311808_18017032739785194_3681695216227474174_n.jpg'
    ],
    description: 'Heavy fleece sweatpants with deep zipper security pockets and elasticized waist with custom metal aglet drawstrings.',
    gsm: '380 GSM Heavy Fleece',
    fabric: '100% Premium Cotton',
    fit: 'Relaxed Tapered Fit',
    careInstructions: [
      'Machine wash cold',
      'Air dry'
    ],
    inStock: true,
    featured: false
  },
  {
    id: 'commute-cap-09',
    name: 'COMMUTE // Signature Embroidered Cap',
    slug: 'signature-embroidered-cap',
    category: 'Accessories',
    price: 1450,
    badge: 'BESTSELLER',
    rating: 4.9,
    reviewsCount: 77,
    colors: [
      { name: 'Matte Black', hex: '#000000' },
      { name: 'Off White', hex: '#efeeea' }
    ],
    sizes: ['M', 'L'],
    images: [
      '/Images/551311808_18017032739785194_3681695216227474174_n.jpg',
      '/Images/552033163_18017358329785194_4315901684107743802_n.jpg'
    ],
    description: '6-panel dad cap crafted from washed twill cotton with 3D raised embroidery logo on crown and antique brass strap buckle.',
    gsm: '100% Heavy Twill Cotton',
    fabric: 'Washed Cotton Canvas',
    fit: 'Adjustable One Size',
    careInstructions: [
      'Hand wash only',
      'Do not submerge metal buckle'
    ],
    inStock: true,
    featured: false
  },
  {
    id: 'commute-tote-10',
    name: 'COMMUTE // Heavy Duty Canvas Tech Tote',
    slug: 'heavy-duty-canvas-tech-tote',
    category: 'Accessories',
    price: 1850,
    badge: 'NEW DROP',
    rating: 4.9,
    reviewsCount: 23,
    colors: [
      { name: 'Natural Sand / Onyx', hex: '#ded6c6' }
    ],
    sizes: ['L'],
    images: [
      '/Images/640260001_122190841928542549_7334197571696768160_n.jpg',
      '/Images/701681578_18046501448785194_4534141943983685466_n.jpg'
    ],
    description: 'Reinforced 18 oz duck canvas carryall with padded laptop compartment (fits up to 16" MacBook Pro), key leash, and external bottle pocket.',
    gsm: '18 oz Heavyweight Duck Canvas',
    fabric: '100% Unbleached Organic Cotton',
    fit: '25 Litre Utility Capacity',
    careInstructions: [
      'Spot clean with mild detergent'
    ],
    inStock: true,
    featured: false
  }
];

export const INSTAGRAM_POSTS = [
  {
    id: 'insta-1',
    image: '/Images/700740227_18046266803785194_68359887164937934_n.jpg',
    likes: '1,420',
    comments: '89',
    caption: 'COMMUTE // Drop 04 "Urban Uniform" live now. Heavyweight boxy silhouettes engineered for daily movement.',
    date: '2 DAYS AGO'
  },
  {
    id: 'insta-2',
    image: '/Images/688021048_18045594275785194_5710366581933748412_n.jpg',
    likes: '2,105',
    comments: '134',
    caption: 'Details matter. 280 GSM combed cotton with high-density silicone typography on pitch black.',
    date: '4 DAYS AGO'
  },
  {
    id: 'insta-3',
    image: '/Images/636009027_18034757891785194_6131245554875701596_n.jpg',
    likes: '1,890',
    comments: '92',
    caption: '450 GSM French Terry Fleece. Structured hood drape designed for street weather.',
    date: '1 WEEK AGO'
  },
  {
    id: 'insta-4',
    image: '/Images/701495763_18046518320785194_4400771909126757418_n.jpg',
    likes: '3,450',
    comments: '210',
    caption: 'The Raw Sand Monogram Crewneck. Minimalist luxury crafted for daily commuting.',
    date: '1 WEEK AGO'
  },
  {
    id: 'insta-5',
    image: '/Images/700169476_18046003397785194_424452020238058406_n.jpg',
    likes: '1,760',
    comments: '78',
    caption: 'Tactical parachute bottoms with adjustable hem flares. Streetwear meets functional utility.',
    date: '2 WEEKS AGO'
  },
  {
    id: 'insta-6',
    image: '/Images/714610436_18048806609785194_4446470819008697431_n.jpg',
    likes: '2,980',
    comments: '165',
    caption: 'Street snap by @commute.co in the city. Tag us to be featured in our monthly lookbook.',
    date: '2 WEEKS AGO'
  }
];

export const CLIENT_SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/commute.co/',
  facebook: 'https://www.facebook.com/profile.php?id=61566276471501',
  handle: '@commute.co',
  email: 'support@commute.co',
  phone: '+880 1712-345678',
  address: 'Commute Atelier Studio, Road 11, Banani, Dhaka, Bangladesh'
};
