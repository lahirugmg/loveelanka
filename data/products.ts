import type { Product } from '@/types';

const products: Product[] = [
  {
    slug: 'batik-scarf',
    name: 'Batik Scarf',
    price: 45,
    image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1200&auto=format&fit=crop',
    description: 'Handmade batik scarf inspired by Sri Lankan motifs. Soft cotton blend with warm earthy tones.'
  },
  {
    slug: 'woven-basket',
    name: 'Woven Basket',
    price: 60,
    image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop',
    description: 'Handwoven palm basket perfect for storage or decor. Durable, natural, and modern.'
  },
  {
    slug: 'wooden-elephant',
    name: 'Wooden Elephant',
    price: 45,
    image: 'https://images.unsplash.com/photo-1608571429547-8406ae94b4d9?q=80&w=1200&auto=format&fit=crop',
    description: 'Carved wooden elephant figurine symbolizing strength and wisdom.'
  },
  {
    slug: 'handwoven-bowl',
    name: 'Handwoven Bowl',
    price: 50,
    image: 'https://images.unsplash.com/photo-1618835962148-b4cdbb28f1d1?q=80&w=1200&auto=format&fit=crop',
    description: 'Decorative handwoven bowl with clay and olive tones — a cozy centerpiece.'
  }
];

export default products;

