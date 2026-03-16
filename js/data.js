// ============================================
// Bikecare360 — Product & Category Data
// ============================================

const SHOPIFY_BASE = 'https://bikecare360.com';

const CATEGORIES = [
  { id: 'chain-care', name: 'Chain Care', icon: '⛓️', count: 12, slug: 'chain-care' },
  { id: 'engine-oil', name: 'Engine Oil', icon: '🛢️', count: 18, slug: 'engine-oil' },
  { id: 'cleaners', name: 'Cleaners', icon: '✨', count: 15, slug: 'cleaners' },
  { id: 'tools', name: 'Tools', icon: '🔧', count: 10, slug: 'tools' },
  { id: 'gps-trackers', name: 'GPS Trackers', icon: '📍', count: 5, slug: 'gps-trackers' },
  { id: 'accessories', name: 'Accessories', icon: '🏍️', count: 20, slug: 'accessories' },
];

const BRANDS = [
  { id: 'honda', name: 'Honda', slug: 'honda', image: 'images/brands/honda.png' },
  { id: 'hero', name: 'Hero', slug: 'hero', image: 'images/brands/hero.png' },
  { id: 'bajaj', name: 'Bajaj', slug: 'bajaj', image: 'images/brands/bajaj.png' },
  { id: 'tvs', name: 'TVS', slug: 'tvs', image: 'images/brands/tvs.png' },
  { id: 'suzuki', name: 'Suzuki', slug: 'suzuki', image: 'images/brands/suzuki.png' },
  { id: 'yamaha', name: 'Yamaha', slug: 'yamaha', image: 'images/brands/yamaha.png' },
  { id: 'royal-enfield', name: 'Royal Enfield', slug: 'royal-enfield', image: 'images/brands/royal-enfield.png' },
  { id: 'ktm', name: 'KTM', slug: 'ktm', image: 'images/brands/ktm.png' },
];

const PRODUCTS = [
  {
    id: 'cordless-impact-wrench',
    name: 'INGCO 20V Cordless Impact Wrench',
    brand: 'INGCO',
    category: 'tools',
    price: 6999,
    originalPrice: 8000,
    rating: 4.5,
    reviews: 128,
    badge: 'sale',
    image: 'images/products/ingco-impact-wrench.jpg',
    shopifyUrl: SHOPIFY_BASE + '/products/ingco-20v-cordless-impact-wrench',
    description: 'Professional-grade 20V cordless impact wrench for quick wheel changes and heavy-duty bolting. Brushless motor delivers 300Nm torque.',
    features: ['300Nm Max Torque', '20V Lithium Battery', 'LED Work Light', '2-Year Warranty'],
    bikeBrands: ['honda', 'hero', 'bajaj', 'tvs', 'yamaha', 'royal-enfield', 'ktm', 'suzuki'],
  },
  {
    id: 'fuel-pump-test-kit',
    name: 'Motorcycle Fuel Pump Test Kit',
    brand: 'Bikecare360',
    category: 'tools',
    price: 1899,
    originalPrice: 2500,
    rating: 4.3,
    reviews: 67,
    badge: 'new',
    image: 'images/products/fuel-pump-test-kit.jpg',
    shopifyUrl: SHOPIFY_BASE + '/products/motorcycle-fuel-pump-test-kit',
    description: 'Diagnose fuel delivery issues with this comprehensive test kit. Works with all major motorcycle fuel injection systems.',
    features: ['Universal Fit', 'Pressure Gauge Included', 'Carrying Case', '1-Year Warranty'],
    bikeBrands: ['honda', 'hero', 'bajaj', 'tvs', 'yamaha', 'royal-enfield', 'ktm', 'suzuki'],
  },
  {
    id: 'motul-chain-care-kit',
    name: 'Motul Chain Care Kit (C1+C2)',
    brand: 'Motul',
    category: 'chain-care',
    price: 979,
    originalPrice: 1130,
    rating: 4.7,
    reviews: 342,
    badge: 'youtube',
    image: 'images/products/motul-chain-care-kit.jpg',
    shopifyUrl: SHOPIFY_BASE + '/products/motul-chain-care-kit',
    description: 'Complete chain maintenance kit with C1 Chain Clean and C2 Chain Lube. Extends chain life and reduces maintenance frequency.',
    features: ['C1 Chain Clean 400ml', 'C2 Chain Lube 400ml', 'For O-Ring & X-Ring Chains', 'As Seen on YouTube'],
    bikeBrands: ['bajaj', 'yamaha', 'royal-enfield', 'ktm'],
  },
  {
    id: 'fleettrack-gps',
    name: 'Fleettrack GPS Tracker for Bikes',
    brand: 'Fleettrack',
    category: 'gps-trackers',
    price: 2499,
    originalPrice: 5999,
    rating: 4.2,
    reviews: 89,
    badge: 'sale',
    image: 'images/products/fleettrack-gps.png',
    shopifyUrl: SHOPIFY_BASE + '/products/fleettrack-gps-tracker',
    description: 'Real-time GPS tracking for your motorcycle. Anti-theft alerts, trip history, and geofencing via mobile app.',
    features: ['Real-time Tracking', 'Anti-theft Alerts', 'Waterproof IP67', '1-Year Free SIM'],
    bikeBrands: ['honda', 'hero', 'bajaj', 'tvs', 'yamaha', 'royal-enfield', 'ktm', 'suzuki'],
  },
  {
    id: 'motul-7100-10w40',
    name: 'Motul 7100 4T 10W-40 Synthetic Oil',
    brand: 'Motul',
    category: 'engine-oil',
    price: 899,
    originalPrice: 1050,
    rating: 4.8,
    reviews: 512,
    badge: 'youtube',
    image: 'images/products/motul-7100-10w40.jpg',
    shopifyUrl: SHOPIFY_BASE + '/products/motul-7100-10w40',
    description: '100% synthetic 4-stroke engine oil with ester technology. Superior engine protection and smooth clutch performance.',
    features: ['100% Synthetic', 'Ester Technology', 'JASO MA2 Certified', '1 Litre'],
    bikeBrands: ['honda', 'hero', 'bajaj', 'tvs', 'yamaha', 'royal-enfield', 'ktm', 'suzuki'],
  },
  {
    id: 'wavex-bike-wash',
    name: 'Wavex Bike Body Wash Shampoo',
    brand: 'Wavex',
    category: 'cleaners',
    price: 349,
    originalPrice: 499,
    rating: 4.4,
    reviews: 231,
    badge: 'sale',
    image: 'images/products/carburetor-cleaner.jpg',
    shopifyUrl: SHOPIFY_BASE + '/products/wavex-bike-wash',
    description: 'pH-balanced motorcycle shampoo with foam cannon compatibility. Removes grime without damaging paint or decals.',
    features: ['pH Balanced', 'Foam Cannon Ready', 'Safe on All Surfaces', '500ml'],
    bikeBrands: ['honda', 'hero', 'bajaj', 'tvs', 'yamaha', 'royal-enfield', 'ktm', 'suzuki'],
  },
  {
    id: 're-air-filter',
    name: 'Royal Enfield Air Filter Element',
    brand: 'Royal Enfield',
    category: 'accessories',
    price: 450,
    originalPrice: 550,
    rating: 4.6,
    reviews: 156,
    badge: null,
    image: 'images/products/re-air-filter-1.jpg',
    shopifyUrl: SHOPIFY_BASE + '/products/re-air-filter',
    description: 'Genuine-spec air filter element for Royal Enfield Classic, Bullet, and Meteor models. Direct replacement, no modifications needed.',
    features: ['Direct Fit', 'High Filtration', 'Long Service Life', 'OE Spec'],
    bikeBrands: ['royal-enfield'],
  },
  {
    id: 'ktm-brake-pads',
    name: 'KTM Duke/RC Front Brake Pads',
    brand: 'Bikecare360',
    category: 'accessories',
    price: 599,
    originalPrice: 799,
    rating: 4.5,
    reviews: 98,
    badge: 'sale',
    image: 'images/products/honda-brake-shoes.jpg',
    shopifyUrl: SHOPIFY_BASE + '/products/ktm-duke-rc-brake-pads',
    description: 'Sintered front brake pads for KTM Duke 200/250/390 and RC series. Excellent stopping power in all weather conditions.',
    features: ['Sintered Compound', 'All-Weather Performance', 'KTM Duke/RC Fitment', 'Set of 2'],
    bikeBrands: ['ktm'],
  },
];

const YOUTUBE_VIDEOS = [
  {
    id: 'dQw4w9WgXcQ',
    title: 'How to Clean Your Bike Chain Like a Pro',
    description: 'Step-by-step chain cleaning tutorial using Motul C1+C2',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'Best Engine Oil for Your Bike — Complete Guide',
    description: 'Comparing mineral, semi-synthetic, and fully synthetic oils',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'GPS Tracker Installation — Full Tutorial',
    description: 'Installing Fleettrack GPS on Royal Enfield Classic 350',
  },
];

// Helper functions
function formatPrice(price) {
  return '₹' + price.toLocaleString('en-IN');
}

function getDiscount(original, current) {
  return Math.round(((original - current) / original) * 100);
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

function getProductsByCategory(categoryId) {
  return PRODUCTS.filter(p => p.category === categoryId);
}

function getProductsByBrand(brandSlug) {
  return PRODUCTS.filter(p => p.bikeBrands.includes(brandSlug));
}

function getBestSellers() {
  return [...PRODUCTS].sort((a, b) => b.reviews - a.reviews).slice(0, 4);
}

function renderProductCard(product) {
  const discount = getDiscount(product.originalPrice, product.price);
  const badgeHTML = product.badge
    ? `<span class="product-badge ${product.badge}">${
        product.badge === 'sale' ? `-${discount}%` :
        product.badge === 'new' ? 'New' :
        product.badge === 'youtube' ? '▶ YouTube' : product.badge
      }</span>`
    : '';

  return `
    <div class="product-card">
      <a href="pages/products/${product.id}.html" class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        ${badgeHTML}
      </a>
      <div class="product-info">
        <div class="product-brand">${product.brand}</div>
        <h4><a href="pages/products/${product.id}.html">${product.name}</a></h4>
        <div class="product-rating">
          <span class="stars">${renderStars(product.rating)}</span>
          <span class="count">(${product.reviews})</span>
        </div>
        <div class="product-pricing">
          <span class="price">${formatPrice(product.price)}</span>
          <span class="original-price">${formatPrice(product.originalPrice)}</span>
          <span class="discount">${discount}% off</span>
        </div>
        <div class="product-actions">
          <a href="${product.shopifyUrl}" target="_blank" rel="noopener" class="btn btn-shopify btn-sm">Buy Now</a>
          <a href="pages/products/${product.id}.html" class="btn btn-outline btn-sm">Details</a>
        </div>
      </div>
    </div>
  `;
}

// Make relative paths work from any page depth
function renderProductCardWithBase(product, basePath) {
  const discount = getDiscount(product.originalPrice, product.price);
  const badgeHTML = product.badge
    ? `<span class="product-badge ${product.badge}">${
        product.badge === 'sale' ? `-${discount}%` :
        product.badge === 'new' ? 'New' :
        product.badge === 'youtube' ? '▶ YouTube' : product.badge
      }</span>`
    : '';

  return `
    <div class="product-card">
      <a href="${basePath}pages/products/${product.id}.html" class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        ${badgeHTML}
      </a>
      <div class="product-info">
        <div class="product-brand">${product.brand}</div>
        <h4><a href="${basePath}pages/products/${product.id}.html">${product.name}</a></h4>
        <div class="product-rating">
          <span class="stars">${renderStars(product.rating)}</span>
          <span class="count">(${product.reviews})</span>
        </div>
        <div class="product-pricing">
          <span class="price">${formatPrice(product.price)}</span>
          <span class="original-price">${formatPrice(product.originalPrice)}</span>
          <span class="discount">${discount}% off</span>
        </div>
        <div class="product-actions">
          <a href="${product.shopifyUrl}" target="_blank" rel="noopener" class="btn btn-shopify btn-sm">Buy Now</a>
          <a href="${basePath}pages/products/${product.id}.html" class="btn btn-outline btn-sm">Details</a>
        </div>
      </div>
    </div>
  `;
}
