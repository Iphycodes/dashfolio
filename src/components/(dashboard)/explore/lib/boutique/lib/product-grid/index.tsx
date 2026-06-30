// src/components/boutique/lib/product-grid.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Heart, ShoppingBag, Star1 } from 'iconsax-react';
import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  inStock: boolean;
  colors: string[];
  sizes: string[];
  rating: number;
}

interface ProductGridProps {
  category: string;
  isMobile?: boolean;
  isTablet?: boolean;
}

// Sample products data
const products: Product[] = [
  {
    id: 1,
    name: 'Developer Backpack',
    description: 'Spacious backpack with laptop compartment and coding-themed design.',
    price: 79.99,
    category: 'Accessories',
    images: ['/path/to/backpack.jpg'],
    inStock: true,
    colors: ['#000000', '#333333'],
    sizes: ['One Size'],
    rating: 4.7,
  },
  {
    id: 2,
    name: 'Code Pattern T-Shirt',
    description: 'Comfortable cotton t-shirt with minimalist code pattern.',
    price: 29.99,
    category: 'Clothing',
    images: ['/path/to/tshirt.jpg'],
    inStock: true,
    colors: ['#FFFFFF', '#000000', '#2196f3'],
    sizes: ['S', 'M', 'L', 'XL'],
    rating: 4.8,
  },
  // Add more products...
];

const ProductGrid = ({ category, isMobile, isTablet }: ProductGridProps) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredProducts = products.filter(
    (product) => category === 'All' || product.category === category
  );

  return (
    <div
      className={`grid gap-6 ${
        isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-3'
      }`}
    >
      {filteredProducts.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <motion.div
            className="group relative rounded-xl border border-neutral-800/20 bg-neutral-50 dark:bg-neutral-800/10 overflow-hidden"
            onHoverStart={() => setHoveredId(product.id)}
            onHoverEnd={() => setHoveredId(null)}
            whileHover={{ y: -5 }}
          >
            {/* Image */}
            <div className="relative h-[300px] overflow-hidden">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Quick Actions Overlay */}
              <motion.div
                className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredId === product.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.button
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ShoppingBag size={20} className="text-white" />
                </motion.button>
                <motion.button
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Heart size={20} className="text-white" />
                </motion.button>
              </motion.div>

              {/* Stock Status */}
              {!product.inStock && (
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-red-500/90 text-white text-xs">
                  Out of Stock
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-lg line-clamp-1">{product.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star1 variant="Bold" size={16} className="text-yellow-500" />
                    <span className="text-sm">{product.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
              </div>

              {/* Colors and Price */}
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {product.colors.map((color, idx) => (
                    <div
                      key={idx}
                      className="w-4 h-4 rounded-full border border-neutral-800/20"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <span className="font-semibold text-lg">${product.price.toFixed(2)}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProductGrid;