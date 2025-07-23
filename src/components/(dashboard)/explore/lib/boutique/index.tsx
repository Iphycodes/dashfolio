// src/components/boutique/index.tsx
'use client';

import { motion } from 'framer-motion';
import { mediaSize, useMediaQuery } from '@/_shared/components/responsiveness';
import { ShoppingBag } from 'iconsax-react';
import ProductShowcase from './lib/product-showcase';
import ProductGrid from './lib/product-grid';
import FilterBar from './lib/filter-bar';
import { useState } from 'react';

const categories = ['All', 'Clothing', 'Accessories', 'Tech Gear', 'Books'];

const featuredProducts = [
  {
    id: 1,
    name: 'Developer Hoodie Pro',
    description:
      'Premium cotton-blend hoodie with minimalist code pattern design and extra comfort for long coding sessions.',
    price: 59.99,
    category: 'Clothing',
    images: ['/asset/imgs/tech-hoodie-1.jpeg', '/asset/imgs/tech-hoodie-2.jpeg'],
    inStock: true,
    colors: ['#000000', '#333333', '#666666'],
    sizes: ['S', 'M', 'L', 'XL'],
    rating: 4.8,
    features: [
      'Premium cotton blend',
      'Hidden code pattern design',
      'Relaxed fit',
      'Available in multiple sizes',
    ],
  },
  {
    id: 2,
    name: 'Tech Stack T-Shirt',
    description:
      'Soft cotton t-shirt featuring popular tech stack icons in a modern, minimalist design.',
    price: 29.99,
    category: 'Clothing',
    images: ['/asset/imgs/tech-hoodie-1.jpeg', '/asset/imgs/tech-hoodie-2.jpeg'],
    inStock: true,
    colors: ['#FFFFFF', '#000000', '#2196f3'],
    sizes: ['S', 'M', 'L', 'XL'],
    rating: 4.7,
    features: [
      'Premium cotton blend',
      'Hidden code pattern design',
      'Relaxed fit',
      'Available in multiple sizes',
    ],
  },
  {
    id: 3,
    name: 'Developer Backpack',
    description:
      'Water-resistant laptop backpack with dedicated compartments for all your tech essentials.',
    price: 89.99,
    category: 'Accessories',
    images: ['/asset/imgs/tech-hoodie-1.jpeg', '/asset/imgs/tech-hoodie-2.jpeg'],
    inStock: true,
    colors: ['#000000', '#0A192F'],
    sizes: ['One Size'],
    rating: 4.9,
    features: [
      'Premium cotton blend',
      'Hidden code pattern design',
      'Relaxed fit',
      'Available in multiple sizes',
    ],
  },
  {
    id: 4,
    name: 'Mechanical Keyboard',
    description:
      'Custom mechanical keyboard with RGB backlight and programmer-friendly key layout.',
    price: 149.99,
    category: 'Tech Gear',
    images: ['/asset/imgs/tech-hoodie-1.jpeg', '/asset/imgs/tech-hoodie-2.jpeg'],
    inStock: true,
    colors: ['#000000', '#FFFFFF'],
    sizes: ['Standard'],
    rating: 4.8,
    features: [
      'Premium cotton blend',
      'Hidden code pattern design',
      'Relaxed fit',
      'Available in multiple sizes',
    ],
  },
  {
    id: 5,
    name: 'Code Pattern Notebook',
    description: 'Premium hardcover notebook with code pattern design and high-quality paper.',
    price: 19.99,
    category: 'Accessories',
    images: ['/asset/imgs/tech-hoodie-1.jpeg', '/asset/imgs/tech-hoodie-2.jpeg'],
    inStock: true,
    colors: ['#000000', '#2196f3', '#4CAF50'],
    sizes: ['A5', 'A4'],
    rating: 4.6,
    features: [
      'Premium cotton blend',
      'Hidden code pattern design',
      'Relaxed fit',
      'Available in multiple sizes',
    ],
  },
  {
    id: 6,
    name: 'Clean Code Book',
    description:
      'Essential reading for developers focused on writing maintainable and efficient code.',
    price: 39.99,
    category: 'Books',
    images: ['/asset/imgs/tech-hoodie-1.jpeg', '/asset/imgs/tech-hoodie-2.jpeg'],
    inStock: true,
    colors: ['#000000'],
    sizes: ['Hardcover'],
    rating: 4.9,
    features: [
      'Premium cotton blend',
      'Hidden code pattern design',
      'Relaxed fit',
      'Available in multiple sizes',
    ],
  },
  {
    id: 7,
    name: 'Debug Duck',
    description: 'Classic rubber duck debugging companion with modern tech-inspired design.',
    price: 9.99,
    category: 'Accessories',
    images: ['/asset/imgs/tech-hoodie-1.jpeg', '/asset/imgs/tech-hoodie-2.jpeg'],
    inStock: true,
    colors: ['#FFD700', '#FF6B6B'],
    sizes: ['Standard'],
    rating: 4.7,
    features: [
      'Premium cotton blend',
      'Hidden code pattern design',
      'Relaxed fit',
      'Available in multiple sizes',
    ],
  },
  {
    id: 8,
    name: 'Code Pattern Socks',
    description: 'Comfortable cotton socks with playful code pattern design.',
    price: 12.99,
    category: 'Clothing',
    images: ['/asset/imgs/tech-hoodie-1.jpeg', '/asset/imgs/tech-hoodie-2.jpeg'],
    inStock: true,
    colors: ['#000000', '#2196f3', '#4CAF50'],
    sizes: ['S', 'M', 'L'],
    rating: 4.5,
    features: [
      'Premium cotton blend',
      'Hidden code pattern design',
      'Relaxed fit',
      'Available in multiple sizes',
    ],
  },
  {
    id: 9,
    name: 'Wireless Mouse Pro',
    description: 'Ergonomic wireless mouse with programmable buttons and long battery life.',
    price: 79.99,
    category: 'Tech Gear',
    images: ['/asset/imgs/tech-hoodie-1.jpeg', '/asset/imgs/tech-hoodie-2.jpeg'],
    inStock: true,
    colors: ['#000000', '#FFFFFF'],
    sizes: ['Standard'],
    rating: 4.8,
    features: [
      'Premium cotton blend',
      'Hidden code pattern design',
      'Relaxed fit',
      'Available in multiple sizes',
    ],
  },
  {
    id: 10,
    name: 'Developer Coffee Mug',
    description: 'Large capacity ceramic mug with humorous programming quotes.',
    price: 14.99,
    category: 'Accessories',
    images: ['/asset/imgs/tech-hoodie-1.jpeg', '/asset/imgs/tech-hoodie-2.jpeg'],
    inStock: true,
    colors: ['#000000', '#FFFFFF', '#2196f3'],
    sizes: ['12oz', '16oz'],
    rating: 4.6,
    features: [
      'Premium cotton blend',
      'Hidden code pattern design',
      'Relaxed fit',
      'Available in multiple sizes',
    ],
  },
  {
    id: 11,
    name: 'Algorithm Poster Set',
    description: 'Set of 3 posters featuring popular algorithms in minimalist design.',
    price: 29.99,
    category: 'Accessories',
    images: ['/asset/imgs/tech-hoodie-1.jpeg', '/asset/imgs/tech-hoodie-2.jpeg'],
    inStock: true,
    colors: ['#000000', '#FFFFFF'],
    sizes: ['18x24', '24x36'],
    rating: 4.7,
    features: [
      'Premium cotton blend',
      'Hidden code pattern design',
      'Relaxed fit',
      'Available in multiple sizes',
    ],
  },
  {
    id: 12,
    name: 'Laptop Sleeve Pro',
    description: 'Padded laptop sleeve with additional pockets for accessories.',
    price: 34.99,
    category: 'Tech Gear',
    images: ['/asset/imgs/tech-hoodie-1.jpeg', '/asset/imgs/tech-hoodie-2.jpeg'],
    inStock: true,
    colors: ['#000000', '#333333'],
    sizes: ['13"', '15"', '17"'],
    rating: 4.8,
    features: [
      'Premium cotton blend',
      'Hidden code pattern design',
      'Relaxed fit',
      'Available in multiple sizes',
    ],
  },
];

const Boutique = () => {
  const isMobile = useMediaQuery(mediaSize.mobile);
  const isTablet = useMediaQuery(mediaSize.tablet);
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div className="max-w-7xl mx-auto py-8 space-y-16">
      {/* Hero Section */}
      <motion.div
        className="text-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/20 dark:bg-neutral-800/30"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <ShoppingBag variant="Bulk" className="text-blue-500" size={20} />
          <span className="text-sm">Developer Merchandise</span>
        </motion.div>

        <h1 className={`${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl'} font-bold`}>
          Developer Boutique
        </h1>
        <p
          className={`text-muted-foreground max-w-2xl mx-auto ${isMobile ? 'text-sm' : 'text-base'}`}
        >
          Curated collection of high-quality merchandise for developers and tech enthusiasts.
        </p>
      </motion.div>

      {/* Featured Products Showcase */}
      <ProductShowcase products={featuredProducts} isMobile={isMobile} isTablet={isTablet} />

      {/* Category Filter */}
      <FilterBar
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        isMobile={isMobile}
      />

      {/* Product Grid */}
      <ProductGrid category={activeCategory} isMobile={isMobile} isTablet={isTablet} />

      {/* Newsletter Signup */}
      <motion.div
        className="text-center space-y-6 py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className={`font-bold ${isMobile ? 'text-2xl' : 'text-3xl'}`}>Stay Updated</h2>
        <p className="text-muted-foreground">
          Subscribe to receive updates about new products and exclusive offers.
        </p>
        <motion.button
          className="px-6 py-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Subscribe Now
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Boutique;
