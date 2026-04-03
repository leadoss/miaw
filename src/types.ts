export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  images: string[];
  category: string;
  sizes: string[];
  colors: { name: string; hex: string }[];
  benefits: string[];
  isBestSeller?: boolean;
  stockStatus: 'in-stock' | 'low-stock' | 'out-of-stock';
}

export interface CartItem extends Product {
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'The Essential Seamless Brief',
    price: 24,
    originalPrice: 30,
    description: 'Our signature seamless brief designed for all-day comfort and zero visible lines. Made from ultra-breathable micro-modal.',
    images: [
      'https://images.unsplash.com/photo-1582533081021-75249939562b?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1626497748470-284d41f66350?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Briefs',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Nude', hex: '#E3C5AF' },
      { name: 'Black', hex: '#1A1A1A' },
      { name: 'Blush', hex: '#F8F1EA' }
    ],
    benefits: ['No visible lines', 'Breathable fabric', 'All-day comfort', 'Durable stretch'],
    isBestSeller: true,
    stockStatus: 'low-stock'
  },
  {
    id: '2',
    name: 'Lace Trim Thong',
    price: 18,
    description: 'Elegant lace meets everyday comfort. A delicate thong that feels like nothing at all.',
    images: [
      'https://images.unsplash.com/photo-1594235412402-9f99b217bb27?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1610410110825-783307524025?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Thongs',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Black', hex: '#1A1A1A' },
      { name: 'Midnight', hex: '#2C3E50' }
    ],
    benefits: ['Soft lace trim', 'Cotton gusset', 'Low rise fit', 'Invisible under clothes'],
    isBestSeller: true,
    stockStatus: 'in-stock'
  },
  {
    id: '3',
    name: 'High-Waist Sculpting Brief',
    price: 32,
    description: 'Gentle compression with a premium feel. Smooths and shapes without feeling restrictive.',
    images: [
      'https://images.unsplash.com/photo-1626497748470-284d41f66350?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Briefs',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Sand', hex: '#D2B48C' },
      { name: 'Espresso', hex: '#3D2B1F' }
    ],
    benefits: ['Tummy control', 'Seamless edges', 'Moisture-wicking', 'Stay-put waistband'],
    isBestSeller: false,
    stockStatus: 'in-stock'
  },
  {
    id: '4',
    name: 'Silk Satin Bralette',
    price: 45,
    originalPrice: 55,
    description: 'The ultimate in luxury. Real silk satin with adjustable straps and a soft elastic band.',
    images: [
      'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Bralettes',
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'Champagne', hex: '#F7E7CE' },
      { name: 'Black', hex: '#1A1A1A' }
    ],
    benefits: ['100% Silk', 'Wire-free', 'Adjustable straps', 'Premium hardware'],
    isBestSeller: true,
    stockStatus: 'low-stock'
  }
];
