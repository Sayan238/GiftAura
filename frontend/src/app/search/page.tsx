"use client";
import React, { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import ProductCard from '@/components/product/ProductCard';
import { Search, Sliders, Filter, ChevronDown, Star } from 'lucide-react';

import { PRODUCTS } from '@/data/products';

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const [sortBy, setSortBy] = useState('relevant');
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [ratingFilter, setRatingFilter] = useState(0);
  const [showFilters, setShowFilters] = useState(false);

  const isMatch = (text: string, search: string) => {
    const t = text.toLowerCase();
    const s = search.toLowerCase();
    if (t.includes(s)) return true;
    if (s.includes('choc') && t.includes('choc')) return true;
    if (s.includes('rose') && t.includes('rose')) return true;
    if (s.includes('neck') && t.includes('neck')) return true;
    if (s.includes('cake') && t.includes('cake')) return true;
    if (s.includes('flower') && t.includes('flower')) return true;
    if (s.includes('jewel') && (t.includes('ring') || t.includes('neck') || t.includes('pendant'))) return true;
    return false;
  };

  let filteredProducts = PRODUCTS.filter(product => isMatch(product.name, query));

  // Apply price filter
  filteredProducts = filteredProducts.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

  // Apply rating filter
  if (ratingFilter > 0) {
    filteredProducts = filteredProducts.filter(p => p.rating >= ratingFilter);
  }

  // Apply sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch(sortBy) {
      case 'price_low':
        return a.price - b.price;
      case 'price_high':
        return b.price - a.price;
      case 'newest':
        return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header Section */}
      <motion.div
        className="mb-8 flex flex-col md:flex-row md:items-center justify-between bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-3xl border border-primary/20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div>
          <h1 className="text-4xl font-black text-gray-900 mb-2">Search Results</h1>
          <p className="text-gray-600 text-lg">
            {sortedProducts.length > 0 ? (
              <>Found <span className="font-bold text-primary">{sortedProducts.length} items</span> for "<span className="font-bold text-gray-900">{query}</span>"</>
            ) : (
              <>No results found for "<span className="font-bold text-gray-900">{query}</span>"</>
            )}
          </p>
        </div>
        <div className="mt-4 md:mt-0 bg-white text-primary px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg">
          <Search className="h-5 w-5" />
          {sortedProducts.length} Items
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`${showFilters ? 'block' : 'hidden'} lg:block`}
        >
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg sticky top-28">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
              <h3 className="font-bold text-lg text-gray-900 flex items-center gap-2">
                <Sliders className="h-5 w-5 text-primary" /> Filters
              </h3>
              <button onClick={() => setShowFilters(false)} className="lg:hidden text-gray-500">✕</button>
            </div>

            {/* Sort Options */}
            <div className="mb-6">
              <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Sort By</h4>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg font-bold text-sm hover:border-primary focus:outline-none focus:border-primary transition-all bg-white"
              >
                <option value="relevant">Most Relevant</option>
                <option value="price_low">Price: Low to High</option>
                <option value="price_high">Price: High to Low</option>
                <option value="newest">Newest First</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Price Range Filter */}
            <div className="mb-6 pb-6 border-b border-gray-100">
              <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Price Range</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-gray-600">₹</span>
                  <input
                    type="range"
                    min="0"
                    max="5000"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg">
                  <span className="text-sm font-bold text-gray-700">₹{priceRange[0]}</span>
                  <span className="text-gray-400">-</span>
                  <span className="text-sm font-bold text-gray-700">₹{priceRange[1]}</span>
                </div>
              </div>
            </div>

            {/* Rating Filter */}
            <div className="pb-6 border-b border-gray-100">
              <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Rating</h4>
              <div className="space-y-2">
                {[5, 4, 3, 2, 1, 0].map((rating) => (
                  <motion.button
                    key={rating}
                    onClick={() => setRatingFilter(ratingFilter === rating ? 0 : rating)}
                    whileHover={{ x: 4 }}
                    className={`w-full text-left px-4 py-2 rounded-lg font-bold transition-all ${
                      ratingFilter === rating
                        ? 'bg-primary text-white'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {rating === 0 ? (
                        <span className="text-sm">All Ratings</span>
                      ) : (
                        <>
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                            />
                          ))}
                          <span className="text-xs ml-auto">{rating}+ ★</span>
                        </>
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              onClick={() => {
                setSortBy('relevant');
                setPriceRange([0, 5000]);
                setRatingFilter(0);
              }}
              className="w-full bg-gray-100 text-gray-900 font-bold py-2 rounded-lg hover:bg-gray-200 transition-all mt-4"
            >
              Clear Filters
            </motion.button>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="lg:col-span-3">
          {/* Mobile Filter Toggle */}
          <motion.button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden mb-6 w-full bg-white border-2 border-gray-200 text-gray-900 font-bold px-4 py-3 rounded-xl flex items-center justify-center gap-2 hover:border-primary transition-all"
          >
            <Filter className="h-5 w-5" /> Show Filters
          </motion.button>

          {sortedProducts.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {sortedProducts.map((product) => (
                <motion.div key={product.id} variants={itemVariants}>
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl border border-gray-100 p-16 text-center shadow-lg"
            >
              <div className="bg-gray-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">No results found</h2>
              <p className="text-gray-500 max-w-md mx-auto mb-8">
                We couldn't find any products matching your search. Try adjusting filters or searching for different keywords.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-3 rounded-xl hover:shadow-lg transition-all"
              >
                <Search className="h-5 w-5" /> Browse All Products
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity }}
          className="rounded-full h-12 w-12 border-4 border-secondary border-t-primary"
        />
      </div>
    }>
      <SearchResults />
    </Suspense>
  );
}
