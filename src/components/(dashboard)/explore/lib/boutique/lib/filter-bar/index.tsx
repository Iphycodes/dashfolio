// src/components/boutique/lib/filter-bar.tsx
'use client';

import { motion } from 'framer-motion';
import { Filter, ArrowDown2 } from 'iconsax-react';
import { useState } from 'react';

interface FilterBarProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  isMobile?: boolean;
}

const FilterBar = ({ categories, activeCategory, setActiveCategory, isMobile }: FilterBarProps) => {
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);

  return (
    <div className="sticky top-0 z-20 bg-background/80 backdrop-blur-md border-y border-neutral-800/20">
      <div className="py-4">
        {/* Mobile Filter Button */}
        {isMobile && (
          <motion.button
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-50 dark:bg-neutral-800/30"
            onClick={() => setShowMobileFilter(!showMobileFilter)}
            whileTap={{ scale: 0.95 }}
          >
            <Filter size={20} />
            <span>Filters</span>
            <ArrowDown2
              size={16}
              className={`ml-2 transition-transform duration-300 ${
                showMobileFilter ? 'rotate-180' : ''
              }`}
            />
          </motion.button>
        )}

        {/* Desktop Categories */}
        <div
          className={`
          ${isMobile ? 'mt-4' : ''} 
          ${showMobileFilter || !isMobile ? 'block' : 'hidden'}
        `}
        >
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-blue text-background'
                    : 'bg-neutral-50 dark:bg-neutral-800/30 hover:bg-neutral-100 dark:hover:bg-neutral-800/70 dark:hover:bg-neutral-800/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}

            {/* Additional Filters */}
            {!isMobile && (
              <motion.div
                className="ml-auto flex items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {/* Price Range */}
                <div className="flex items-center gap-2">
                  <span className="text-sm">Price:</span>
                  <div className="relative w-40">
                    <div className="h-1 bg-neutral-50 dark:bg-neutral-800/30 rounded-full">
                      <motion.div
                        className="absolute h-full bg-blue rounded-full"
                        style={{
                          left: `${(priceRange[0] / 200) * 100}%`,
                          right: `${100 - (priceRange[1] / 200) * 100}%`,
                        }}
                      />
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={200}
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                      className="absolute top-0 left-0 w-full h-1 appearance-none bg-transparent pointer-events-none"
                    />
                    <input
                      type="range"
                      min={0}
                      max={200}
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      className="absolute top-0 left-0 w-full h-1 appearance-none bg-transparent pointer-events-none"
                    />
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ${priceRange[0]} - ${priceRange[1]}
                  </span>
                </div>

                {/* Sort */}
                <select className="px-3 py-2 rounded-lg bg-neutral-50 dark:bg-neutral-800/30 text-sm border-0 outline-none">
                  <option value="newest">Newest</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="popular">Most Popular</option>
                </select>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
