"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Search, ArrowRight, Package, Star } from 'lucide-react';
import Link from 'next/link';

interface ProductPreview {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  discount?: number;
}

interface SearchDropdownProps {
  isVisible: boolean;
  searchQuery: string;
  suggestions: ProductPreview[];
  onClose: () => void;
}

const TRENDING_SEARCHES = [
  "Red Roses Bouquet",
  "Chocolate Truffle Cake",
  "Personalized Necklace",
  "Aura Diffuser",
  "Gift Hampers"
];

const SEARCH_CATEGORIES = [
  { name: 'Personalized', icon: Package, link: '/category/personalized' },
  { name: 'Bestsellers', icon: Star, link: '/best-sellers' },
  { name: 'New Arrivals', icon: TrendingUp, link: '/category/all?sort=newest' },
];

export default function SearchDropdown({ isVisible, searchQuery, suggestions, onClose }: SearchDropdownProps) {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.98 }}
      className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] max-w-[95vw] mt-4 bg-white shadow-[0_25px_70px_rgba(0,0,0,0.2)] rounded-[2rem] overflow-hidden z-[10002] border border-gray-100"
    >
      <div className="p-8 grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Left Column: Trending & Categories */}
        <div className="md:col-span-4 border-r border-gray-100 pr-8">
          <div className="mb-8">
            <h3 className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 mb-5 flex items-center gap-2">
              <TrendingUp className="h-3 w-3 text-primary" /> Trending
            </h3>
            <div className="flex flex-col gap-2">
              {TRENDING_SEARCHES.map((term) => (
                <Link
                  key={term}
                  href={`/search?q=${encodeURIComponent(term)}`}
                  onClick={onClose}
                  className="px-4 py-2.5 bg-gray-50 hover:bg-primary/5 text-gray-700 hover:text-primary rounded-xl text-xs font-bold transition-all flex items-center gap-3 group"
                >
                  <Search className="h-3.5 w-3.5 opacity-30 group-hover:opacity-100" />
                  {term}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 mb-5 flex items-center gap-2">
              <Star className="h-3 w-3 text-secondary" /> Discover
            </h3>
            <div className="space-y-2">
              {SEARCH_CATEGORIES.map((cat) => (
                <Link
                  key={cat.name}
                  href={cat.link}
                  onClick={onClose}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                      <cat.icon className="h-5 w-5" />
                    </div>
                    <span className="text-[13px] font-black text-gray-900">{cat.name}</span>
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Suggested Products */}
        <div className="md:col-span-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 flex items-center gap-2">
              <Package className="h-3 w-3 text-secondary" /> {searchQuery ? 'Top Matches' : 'Popular Gifts'}
            </h3>
            {searchQuery && suggestions.length > 0 && (
              <Link href={`/search?q=${searchQuery}`} onClick={onClose} className="text-[10px] font-black text-primary hover:text-secondary transition-colors underline underline-offset-4 decoration-2">
                All results
              </Link>
            )}
          </div>

          {suggestions.length > 0 ? (
            <div className="grid grid-cols-3 gap-5">
              {suggestions.slice(0, 3).map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  onClick={onClose}
                  className="group bg-white rounded-2xl p-3 transition-all border border-transparent hover:border-gray-100 hover:shadow-lg"
                >
                  <div className="aspect-[4/5] rounded-xl overflow-hidden mb-3 relative bg-gray-50">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {product.discount && (
                      <div className="absolute top-2 left-2 bg-red-500 text-white text-[8px] font-black px-2 py-0.5 rounded-md shadow-lg">
                        -{product.discount}%
                      </div>
                    )}
                  </div>
                  <h4 className="text-[11px] font-bold text-gray-900 mb-1.5 line-clamp-2 leading-snug group-hover:text-primary transition-colors h-7">
                    {product.name}
                  </h4>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black text-gray-900">₹{product.price}</span>
                    <div className="flex items-center gap-0.5 text-yellow-500">
                      <Star className="h-2.5 w-2.5 fill-current" />
                      <span className="text-[10px] font-black">{product.rating}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center py-16 bg-gray-50/50 rounded-3xl border border-dashed border-gray-200">
              <Search className="h-8 w-8 text-gray-200 mb-4" />
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                Search for magic...
              </p>
            </div>
          )}
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="bg-[#121212] p-4 flex items-center justify-between px-8">
        <p className="text-[8px] font-black text-gray-500 uppercase tracking-[0.3em]">
          GiftAura Premium • 2024
        </p>
        <div className="flex gap-3">
           <div className="h-1 w-1 bg-gray-800 rounded-full"></div>
           <div className="h-1 w-1 bg-gray-800 rounded-full"></div>
        </div>
      </div>
    </motion.div>
  );
}
