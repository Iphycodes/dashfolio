// src/components/boutique/lib/product-showcase.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ShoppingBag, Star1, Heart } from 'iconsax-react';
import { Badge } from '@/components/ui/badge';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  features: string[];
  inStock: boolean;
  colors: string[];
  sizes: string[];
  rating: number;
}

interface ProductShowcaseProps {
  products: Product[];
  isMobile?: boolean;
  isTablet?: boolean;
}

const ProductShowcase = ({ products, isMobile, isTablet }: ProductShowcaseProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset image index when product changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [currentIndex]);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [products.length, isHovered]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  return (
    <div
      className="space-y-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header with Navigation */}
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Featured Products</h3>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="p-2 rounded-lg bg-neutral-900/10 dark:bg-neutral-800/30 hover:bg-neutral-900/20 dark:hover:bg-neutral-800/50 transition-colors"
          >
            <i className="ri-arrow-left-s-line text-xl" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-lg bg-neutral-900/10 dark:bg-neutral-800/30 hover:bg-neutral-900/20 dark:hover:bg-neutral-800/50 transition-colors"
          >
            <i className="ri-arrow-right-s-line text-xl" />
          </button>
        </div>
      </div>

      {/* Product Display */}
      <div className={`grid ${isTablet ? 'grid-cols-1 gap-8' : 'grid-cols-2 gap-12'}`}>
        {/* Product Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className={`flex flex-col justify-center ${isTablet ? 'text-center' : 'text-left'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              {/* Badge and Rating */}
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="bg-blue/10 text-blue">
                  Featured
                </Badge>
                <div className="flex items-center gap-1">
                  <Star1 variant="Bold" size={16} className="text-yellow-500" />
                  <span className="text-sm">{products[currentIndex].rating}</span>
                </div>
              </div>

              {/* Title and Price */}
              <div>
                <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-bold`}>
                  {products[currentIndex].name}
                </h2>
                <div className="mt-2 text-2xl font-semibold text-blue">
                  ${products[currentIndex].price}
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground">{products[currentIndex].description}</p>

              {/* Features */}
              <div className="space-y-2">
                {products[currentIndex].features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <i className="ri-check-line text-green-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Color and Size Selection */}
              <div className="space-y-4">
                {/* Colors */}
                <div className="space-y-2">
                  <span className="text-sm font-medium">Colors</span>
                  <div className="flex gap-2">
                    {products[currentIndex].colors.map((color) => (
                      <button
                        key={color}
                        className={`w-6 h-6 rounded-full border-2 transition-all duration-200 ${
                          selectedColor === color
                            ? 'border-blue scale-110'
                            : 'border-transparent hover:scale-110'
                        }`}
                        style={{ backgroundColor: color }}
                        onClick={() => setSelectedColor(color)}
                      />
                    ))}
                  </div>
                </div>

                {/* Sizes */}
                <div className="space-y-2">
                  <span className="text-sm font-medium">Sizes</span>
                  <div className="flex gap-2">
                    {products[currentIndex].sizes.map((size) => (
                      <button
                        key={size}
                        className={`px-3 py-1 rounded-lg text-sm transition-all duration-200 ${
                          selectedSize === size
                            ? 'bg-blue text-white'
                            : 'bg-neutral-900/10 dark:bg-neutral-800/30 hover:bg-neutral-900/20 dark:hover:bg-neutral-800/50'
                        }`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <motion.button
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue text-white hover:bg-blue-600 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ShoppingBag size={20} />
                  <span>Add to Cart</span>
                </motion.button>
                <motion.button
                  className="p-3 rounded-lg bg-neutral-900/10 dark:bg-neutral-800/30 hover:bg-neutral-900/20 dark:hover:bg-neutral-800/50 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Heart size={20} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Image Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentIndex}-${currentImageIndex}`} // Updated key to handle both indices
            className="relative h-[500px] rounded-xl overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.01 }}
          >
            {/* Image Carousel */}
            <div className="relative h-full">
              <Image
                src={products[currentIndex].images[currentImageIndex]}
                alt={`${products[currentIndex].name} - View ${currentImageIndex + 1}`}
                fill
                className="object-cover"
              />

              {/* Image Navigation Arrows - Only show if multiple images */}
              {products[currentIndex].images.length > 1 && (
                <>
                  {/* Previous Button */}
                  {currentImageIndex > 0 && (
                    <motion.button
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black/70 transition-colors z-10"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setCurrentImageIndex((prev) => Math.max(0, prev - 1));
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      // whileHover={{ scale: 1.1 }}
                      // whileTap={{ scale: 0.9 }}
                    >
                      <i className="ri-arrow-left-s-line text-xl" />
                    </motion.button>
                  )}

                  {/* Next Button */}
                  {currentImageIndex < products[currentIndex].images.length - 1 && (
                    <motion.button
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black/70 transition-colors z-10"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setCurrentImageIndex((prev) =>
                          Math.min(products[currentIndex].images.length - 1, prev + 1)
                        );
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      // whileHover={{ scale: 1.1 }}
                      // whileTap={{ scale: 0.9 }}
                    >
                      <i className="ri-arrow-right-s-line text-xl" />
                    </motion.button>
                  )}
                </>
              )}

              {/* Image Indicators - Only show if multiple images */}
              {products[currentIndex].images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {products[currentIndex].images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setCurrentImageIndex(idx);
                      }}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        currentImageIndex === idx ? 'w-4 bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Indicators */}
      {/* <div className="flex justify-center gap-2">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-6 bg-blue'
                : 'w-1.5 bg-neutral-900/20 dark:bg-neutral-800/50'
            }`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default ProductShowcase;
