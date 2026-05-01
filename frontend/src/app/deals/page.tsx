"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Clock, TrendingDown, Filter, ChevronDown, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { PRODUCTS } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const FLASH_SALE_PRODUCTS = [
  { id: 'f1', name: 'Royal Crimson Rose Bouquet', price: 599, originalPrice: 999, rating: 4.8, reviews: 156, image: '/images/products/red-roses.png', discount: 40 },
  { id: 'f2', name: 'Midnight Truffle Indulgence', price: 499, originalPrice: 850, rating: 4.9, reviews: 92, image: '/images/products/chocolate-cake.png', discount: 41 },
  { id: 'f3', name: 'Celestial Zen Spa Hamper - Classic', price: 699, originalPrice: 1099, rating: 4.7, reviews: 45, image: '/images/products/aroma-diffuser.png', discount: 36 },
];

export default function DealsPage() {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 45, seconds: 30 });
  const [sortBy, setSortBy] = useState('discount');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else if (minutes > 0) { minutes = 59; seconds = 59; hours--; }
        else if (hours > 0) { hours--; minutes = 59; seconds = 59; }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const discountedProducts = PRODUCTS.filter(p => (p.discount || 0) > 0)
    .sort((a, b) => {
      if (sortBy === 'discount') return (b.discount || 0) - (a.discount || 0);
      if (sortBy === 'price-low') return a.price - b.price;
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Header */}
      <div className="bg-[#121212] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -ml-48 -mb-48" />
        
        <div className="max-w-[1300px] mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-secondary/30">
              <Sparkles className="h-4 w-4" /> Exclusive Offers
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
              Special <span className="text-transparent bg-gradient-to-r from-secondary to-primary bg-clip-text">Deals</span>
            </h1>
            <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto font-medium">
              Discover the finest luxury gifts at unbeatable prices. Handpicked selections with exclusive discounts for a limited time.
            </p>
          </motion.div>
        </div>
      </div>

      <main className="max-w-[1300px] mx-auto px-4 py-12 -mt-10 relative z-20">
        
        {/* Flash Sale Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl border border-gray-100 mb-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Zap className="w-64 h-64 text-secondary" />
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-secondary text-white px-4 py-1.5 rounded-full text-xs font-black flex items-center gap-2 shadow-lg">
                  <Zap className="h-4 w-4" /> FLASH SALE
                </div>
                <div className="text-secondary font-black text-xs uppercase tracking-widest">Ending Soon!</div>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 tracking-tight">
                Limited Time <br/>Lightning Deals
              </h2>
              
              {/* Timer */}
              <div className="flex gap-4 mb-8">
                {[
                  { label: 'Hrs', value: timeLeft.hours },
                  { label: 'Min', value: timeLeft.minutes },
                  { label: 'Sec', value: timeLeft.seconds }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="bg-[#121212] text-white w-14 h-14 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-xl md:text-3xl font-black shadow-xl">
                      {String(item.value).padStart(2, '0')}
                    </div>
                    <span className="text-[10px] font-black text-gray-400 uppercase mt-2 tracking-widest">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full lg:w-auto">
              {FLASH_SALE_PRODUCTS.map((product) => (
                <div key={product.id} className="w-full md:w-48 bg-gray-50 rounded-2xl p-4 border border-gray-100 hover:shadow-xl transition-all group">
                   <div className="relative aspect-square mb-4 rounded-xl overflow-hidden bg-white">
                      <img src={product.image} alt={product.name} className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform" />
                      <div className="absolute top-2 right-2 bg-red-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full">-{product.discount}%</div>
                   </div>
                   <h3 className="font-bold text-gray-900 text-xs mb-1 line-clamp-1">{product.name}</h3>
                   <div className="flex items-baseline gap-2">
                      <span className="text-sm font-black text-secondary">₹{product.price}</span>
                      <span className="text-[10px] text-gray-400 line-through font-bold">₹{product.originalPrice}</span>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Filters & Sorting */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
          <div className="flex items-center gap-2">
            <TrendingDown className="h-5 w-5 text-secondary" />
            <h2 className="text-xl font-black text-gray-900 tracking-tight">All Discounted Items</h2>
            <span className="bg-gray-200 text-gray-600 text-[10px] font-black px-2 py-0.5 rounded-full ml-2">
              {discountedProducts.length} ITEMS
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs font-black text-gray-500 uppercase tracking-widest">
              <Filter className="h-3.5 w-3.5" /> Filter
            </div>
            <div className="relative">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-2 text-xs font-black text-gray-900 outline-none focus:border-secondary transition-all pr-10"
              >
                <option value="discount">Highest Discount</option>
                <option value="price-low">Price: Low to High</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {discountedProducts.map((product) => (
            <ProductCard key={product.id} product={{
              ...product,
              reviewCount: product.reviewCount 
            }} />
          ))}
        </div>
      </main>
    </div>
  );
}
