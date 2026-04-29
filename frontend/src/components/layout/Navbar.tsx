"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, ShoppingBag, User, Heart, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';

const CATEGORIES = [
  { 
    name: 'Gifts', 
    link: '/category/gifts', 
    sub: [
      { name: 'Personalized Gifts', desc: 'Custom made with love', img: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=200' },
      { name: 'Gift Hampers', desc: 'Curated premium baskets', img: 'https://images.pexels.com/photos/1020585/pexels-photo-1020585.jpeg?auto=compress&cs=tinysrgb&w=200' },
      { name: 'Chocolates', desc: 'Sweet treats & truffles', img: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=200' },
      { name: 'Plants', desc: 'Green indoor plants', img: 'https://images.pexels.com/photos/1449729/pexels-photo-1449729.jpeg?auto=compress&cs=tinysrgb&w=200' }
    ] 
  },
  { 
    name: 'Flowers', 
    link: '/category/flowers', 
    sub: [
      { name: 'Roses', desc: 'Classic symbol of love', img: 'https://images.pexels.com/photos/371285/pexels-photo-371285.jpeg?auto=compress&cs=tinysrgb&w=200' },
      { name: 'Lilies', desc: 'Elegant and fragrant', img: 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=200' },
      { name: 'Orchids', desc: 'Exotic premium blooms', img: 'https://images.pexels.com/photos/1024982/pexels-photo-1024982.jpeg?auto=compress&cs=tinysrgb&w=200' },
      { name: 'Mixed Bouquets', desc: 'Vibrant combinations', img: 'https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?auto=compress&cs=tinysrgb&w=200' }
    ] 
  },
  { 
    name: 'Cakes', 
    link: '/category/cakes', 
    sub: [
      { name: 'Chocolate', desc: 'Rich and decadent', img: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=200' },
      { name: 'Red Velvet', desc: 'Classic premium taste', img: 'https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=200' },
      { name: 'Fruit Cakes', desc: 'Fresh and fruity', img: 'https://images.pexels.com/photos/853151/pexels-photo-853151.jpeg?auto=compress&cs=tinysrgb&w=200' },
      { name: 'Photo Cakes', desc: 'Personalized designs', img: 'https://images.pexels.com/photos/1262302/pexels-photo-1262302.jpeg?auto=compress&cs=tinysrgb&w=200' }
    ] 
  },
  { 
    name: 'Jewellery', 
    link: '/category/jewellery', 
    sub: [
      { name: 'Earrings', desc: 'Diamond, Gold, Silver', img: 'https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg?auto=compress&cs=tinysrgb&w=200' },
      { name: 'Necklaces', desc: 'Elegant pendants', img: 'https://images.pexels.com/photos/691046/pexels-photo-691046.jpeg?auto=compress&cs=tinysrgb&w=200' },
      { name: 'Rings', desc: 'For special promises', img: 'https://images.pexels.com/photos/1457801/pexels-photo-1457801.jpeg?auto=compress&cs=tinysrgb&w=200' },
      { name: 'Bracelets', desc: 'Charming wristwear', img: 'https://images.pexels.com/photos/2849742/pexels-photo-2849742.jpeg?auto=compress&cs=tinysrgb&w=200' }
    ] 
  },
  { 
    name: 'Occasions', 
    link: '/category/occasions', 
    sub: [
      { name: 'Birthday', desc: 'Make their day special', img: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=200' },
      { name: 'Anniversary', desc: 'Celebrate your love', img: 'https://images.pexels.com/photos/948185/pexels-photo-948185.jpeg?auto=compress&cs=tinysrgb&w=200' },
      { name: 'Wedding', desc: 'For the perfect couple', img: 'https://images.pexels.com/photos/712392/pexels-photo-712392.jpeg?auto=compress&cs=tinysrgb&w=200' },
      { name: 'Romantic', desc: 'Surprise your partner', img: 'https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&w=200' }
    ] 
  },
];

export default function Navbar() {
  const router = useRouter();
  const { totalItems } = useCart();
  const { totalItems: wishlistTotal } = useWishlist();
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Flatten categories into searchable terms
  const allSuggestions = CATEGORIES.flatMap(c => 
    [c.name, ...c.sub.map(s => s.name)]
  );

  const filteredSuggestions = allSuggestions.filter(s => 
    s.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 5); // Max 5 suggestions

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      setShowSuggestions(false);
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setShowSuggestions(false);
    setSearchQuery('');
    router.push(`/search?q=${encodeURIComponent(suggestion)}`);
  };

  return (
    <nav className="fixed w-full z-50 glass-effect transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-primary tracking-tight">GiftAura</span>
            </Link>
          </div>

          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(e.target.value.length > 0);
                }}
                onFocus={() => { if(searchQuery) setShowSuggestions(true); }}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                onKeyDown={handleSearch}
                className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm transition-shadow shadow-sm"
                placeholder="Search for gifts, flowers, jewellery..."
              />
              <AnimatePresence>
                {showSuggestions && filteredSuggestions.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50"
                  >
                    <ul>
                      {filteredSuggestions.map((suggestion, idx) => (
                        <li key={idx}>
                          <button
                            onMouseDown={(e) => {
                              e.preventDefault(); // Prevent blur
                              handleSuggestionClick(suggestion);
                            }}
                            className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors flex items-center"
                          >
                            <Search className="h-4 w-4 mr-3 text-gray-400" />
                            {suggestion}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link href="/wishlist" className="text-gray-600 hover:text-primary transition-colors relative">
              <Heart className="h-6 w-6" />
              {wishlistTotal > 0 && (
                <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlistTotal}
                </span>
              )}
            </Link>
            <Link href="/account" className="text-gray-600 hover:text-primary transition-colors">
              <User className="h-6 w-6" />
            </Link>
            <Link href="/cart" className="text-gray-600 hover:text-primary transition-colors relative">
              <ShoppingBag className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <div className="hidden md:flex space-x-8 pb-3 justify-center pt-3 border-t border-gray-100">
          {CATEGORIES.map((category) => (
            <div
              key={category.name}
              className="relative group"
              onMouseEnter={() => setActiveMenu(category.name)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                href={category.link}
                className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors"
              >
                {category.name}
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>

              <AnimatePresence>
                {activeMenu === category.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 transform -translate-x-1/2 mt-3 w-[500px] rounded-3xl shadow-2xl bg-white ring-1 ring-black ring-opacity-5 z-50 overflow-hidden"
                  >
                    <div className="p-6 grid grid-cols-2 gap-4">
                      {category.sub.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={category.name === 'Occasions' 
                            ? `/occasion/${subItem.name.toLowerCase().replace(/\s+/g, '-')}` 
                            : `/category/${subItem.name.toLowerCase().replace(/\s+/g, '-')}`
                          }
                          className="group flex items-center p-3 rounded-2xl hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100 mr-4 border border-gray-100">
                            <img src={subItem.img} alt={subItem.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 group-hover:text-primary transition-colors text-sm">{subItem.name}</h4>
                            <p className="text-xs text-gray-500 font-medium line-clamp-1">{subItem.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="bg-gray-50 p-4 text-center border-t border-gray-100">
                      <Link href={category.link} className="text-sm font-bold text-primary hover:text-[#c5a028] transition-colors relative inline-flex items-center group/link">
                        Explore all {category.name} <ChevronDown className="h-4 w-4 ml-1 -rotate-90 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
