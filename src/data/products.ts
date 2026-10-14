import type { Product } from '../types';

// Only products publicly listed by the chapter are included. Prices have not
// been published, so `price` stays null — the shop shows "on enquiry".
// New products can be dropped straight into this array.
export const products: Product[] = [
  {
    slug: 'canvas-tote',
    name: 'Artisan Canvas Tote',
    projectSlug: 'kalakaari',
    tags: ['Bags', 'Eco-friendly'],
    image: null,
    imageAlt: 'Artisan-made canvas tote bag. Product photograph to be added.',
    price: null,
    availability: 'Made to order — ask about current batches',
    description: [
      'A durable, everyday canvas bag hand-made by the artisan community behind Project Kalakaari.',
      'Originally designed as an alternative to single-use plastic bags, each tote represents steady employment for the women who make it.',
    ],
    variants: null,
  },
  {
    slug: 'jade-plant',
    name: 'Potted Jade Plant',
    projectSlug: 'srijan',
    tags: ['Plants', 'Gifting'],
    image: null,
    imageAlt: 'Potted jade plant prepared by gardener partners. Product photograph to be added.',
    price: null,
    availability: 'Seasonal — ask about current stock',
    description: [
      'A healthy jade plant potted and prepared by the gardeners partnered with Project Srijan.',
      'Popular as a low-maintenance houseplant and a makings-of-a-gift piece, each pot directs income to gardening livelihoods.',
    ],
    variants: null,
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function relatedProducts(currentSlug: string, limit = 2): Product[] {
  return products.filter((p) => p.slug !== currentSlug && p.projectSlug === (getProduct(currentSlug)?.projectSlug ?? '')).slice(0, limit);
}
