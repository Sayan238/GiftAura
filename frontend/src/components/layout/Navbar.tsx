"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, ShoppingBag, User, Heart, Menu, X, ChevronDown, Sparkles, ArrowRight } from 'lucide-react';


import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { useAuth } from '@/context/AuthContext';

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
  const { user, logout, isAuthenticated } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // Fetch dynamic suggestions from backend
  React.useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchQuery.length < 2) {
        setSuggestions([]);
        return;
      }
      try {
        const response = await fetch(`http://localhost:5000/api/products?keyword=${searchQuery}`);
        const data = await response.json();
        // Extract unique product names or categories
        const results = data.map((p: any) => p.name).slice(0, 8);
        setSuggestions(results);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    };

    const debounce = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(debounce);
  }, [searchQuery]);

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
    <>
      <div className="fixed w-full z-[9999] top-0 shadow-2xl">
        {/* Main Header */}
        <nav className="bg-[#121212] text-white border-b border-white/5 py-3 relative">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 flex items-center justify-between gap-4 md:gap-10">
          {/* Left: Hamburger & Logo */}
          <div className="flex items-center gap-3 relative z-[10010]">
            <button 
              onClick={() => setIsOpen(true)}
              className="lg:hidden p-1.5 hover:bg-white/5 rounded-full transition-colors"
            >
              <Menu className="h-5 w-5 text-white" />
            </button>
            <Link 
              href="/" 
              className="flex-shrink-0 group block cursor-pointer transition-all hover:opacity-80"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                router.push('/');
              }}
            >
              <div className="flex flex-col items-start leading-tight">
                <span className="text-lg md:text-xl font-black text-white tracking-tighter group-hover:text-secondary transition-colors">GiftAura</span>
                <span className="text-[7px] md:text-[8px] text-secondary font-bold tracking-[0.2em] uppercase">Premium Gifting</span>
              </div>
            </Link>
          </div>


          {/* Center: Search Bar (Desktop Only) */}
          <div className="hidden lg:flex items-center gap-12 flex-1 max-w-4xl">
            {/* Category Links */}
            <div className="flex items-center gap-6">
              {CATEGORIES.map((cat) => (
                <div 
                  key={cat.name}
                  className="relative group py-2"
                  onMouseEnter={() => setActiveMenu(cat.name)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link 
                    href={cat.link} 
                    className={`flex items-center gap-1 text-[13px] font-black tracking-tight transition-colors ${activeMenu === cat.name ? 'text-secondary' : 'text-gray-300 hover:text-white'}`}
                  >
                    {cat.name}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${activeMenu === cat.name ? 'rotate-180' : ''}`} />
                  </Link>

                  <AnimatePresence>
                    {activeMenu === cat.name && (
                      <>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[9999] pointer-events-none"
                        />
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 15 }}
                          className="absolute top-full left-0 pt-4 z-[10001]"
                        >
                          <div className="bg-white text-black shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-[2rem] p-8 min-w-[500px] border border-gray-100">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                              {cat.sub.map((sub) => (
                                <Link key={sub.name} href="#" className="flex items-start gap-4 group/item">
                                  <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-50 border border-gray-100">
                                    <img src={sub.img} className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-110" alt={sub.name} />
                                  </div>
                                  <div>
                                    <h4 className="text-[13px] font-black text-[#c5a028] group-hover/item:text-black transition-colors mb-0.5">{sub.name}</h4>
                                    <p className="text-[11px] text-gray-500 leading-snug">{sub.desc}</p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                            <div className="mt-8 pt-6 border-t border-gray-100 flex justify-center">
                               <Link href={cat.link} className="text-xs font-black text-gray-900 hover:text-secondary transition-colors flex items-center gap-2 group/btn">
                                  Explore all {cat.name} <ArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-1 transition-transform" />
                               </Link>
                            </div>
                          </div>
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="flex-1 relative group mx-4">
              <div className="relative flex items-center bg-white/5 border border-white/10 rounded-xl px-5 py-2 focus-within:bg-white/10 focus-within:border-secondary/50 focus-within:ring-4 focus-within:ring-secondary/10 transition-all duration-500 backdrop-blur-md">
                <Search className="h-4 w-4 text-gray-400 group-focus-within:text-secondary transition-colors" />
                <input
                  type="text"
                  value={searchQuery}
                  onFocus={() => setShowSuggestions(true)}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleSearch}
                  placeholder="Search for perfection..."
                  className="w-full bg-transparent border-none outline-none focus:outline-none focus:ring-0 text-[14px] px-3 placeholder-gray-500 font-bold tracking-tight text-white"
                />
              </div>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2 md:gap-6">
            <button 
              onClick={() => setIsOpen(true)}
              className="lg:hidden p-2.5 bg-white/5 rounded-full hover:bg-white/10 transition-all"
            >
              <Search className="h-5 w-5 text-gray-400" />
            </button>

            <div 
              className="relative py-1.5 hidden sm:block"
              onMouseEnter={() => setActiveMenu('account')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-2 text-[11px] md:text-xs font-bold hover:text-secondary transition-colors px-2.5 md:px-3.5 py-1.5 bg-white/5 rounded-full border border-white/10">
                <User className="h-3.5 w-3.5" />
                <span className="hidden md:inline">{isAuthenticated ? `Hi, ${user?.name}` : 'Account'}</span>
              </button>
              
              <AnimatePresence>
                {activeMenu === 'account' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-2 w-64 bg-[#1a1a1a] text-white shadow-2xl rounded-2xl overflow-hidden border border-white/10 z-[10001]"
                  >
                    <div className="p-6 grid grid-cols-1 gap-4 text-sm">
                       {!isAuthenticated ? (
                         <Link href="/login" className="bg-secondary text-black text-center py-3 rounded-xl font-black hover:bg-secondary/90 transition-all">Sign In</Link>
                       ) : (
                         <div className="text-center pb-2">
                           <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black mb-1">Logged in as</p>
                           <p className="font-black text-secondary truncate">{user?.email}</p>
                         </div>
                       )}
                       <div className="h-px bg-white/10 my-2"></div>
                       <Link href="/account" className="flex items-center gap-3 hover:text-secondary transition-colors"><User className="h-4 w-4 text-gray-500"/> My Profile</Link>
                       <Link href="/orders" className="flex items-center gap-3 hover:text-secondary transition-colors"><ShoppingBag className="h-4 w-4 text-gray-500"/> Your Orders</Link>
                       <Link href="/track" className="flex items-center gap-3 hover:text-secondary transition-colors"><Sparkles className="h-4 w-4 text-gray-500"/> Track Order</Link>
                       <Link href="/wishlist" className="flex items-center gap-3 hover:text-secondary transition-colors"><Heart className="h-4 w-4 text-gray-500"/> Wishlist</Link>
                       {isAuthenticated && (
                         <>
                           <div className="h-px bg-white/10 my-2"></div>
                           <button 
                             onClick={() => {
                               logout();
                               router.push('/');
                             }}
                             className="text-left text-rose-500 hover:text-rose-400 font-bold transition-colors flex items-center gap-3"
                           >
                             <X className="h-4 w-4" /> Sign Out
                           </button>
                         </>
                       )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/cart" className="relative group">
              <div className="p-2 md:p-2.5 bg-secondary/10 rounded-full group-hover:bg-secondary/20 transition-all border border-secondary/20">
                <ShoppingBag className="h-5 w-5 text-secondary" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-white text-black text-[10px] font-black rounded-full h-4 w-4 flex items-center justify-center border-2 border-[#121212]">
                    {totalItems}
                  </span>
                )}
              </div>
            </Link>
          </div>
        </div>
      </nav>

      {/* Premium Category Icon Bar (Scrollable on mobile) */}
      <div className="bg-white border-b border-gray-100 shadow-sm relative">
        <div className="max-w-[1300px] mx-auto px-4 py-2 flex items-center justify-start lg:justify-between overflow-x-auto whitespace-nowrap scrollbar-hide gap-1">
          {[
            { name: 'Luxury Gifts', id: 'gifts', img: 'https://cdn-icons-png.flaticon.com/128/679/679821.png', link: '/category/gifts' },
            { name: 'Fresh Blooms', id: 'flowers', img: 'https://cdn-icons-png.flaticon.com/128/346/346167.png', link: '/category/flowers' },
            { name: 'Artisan Cakes', id: 'cakes', img: 'https://cdn-icons-png.flaticon.com/128/2682/2682414.png', link: '/category/cakes' },
            { name: 'Fine Jewellery', id: 'jewellery', img: 'https://cdn-icons-png.flaticon.com/128/2856/2856811.png', link: '/category/jewellery' },
            { name: 'Personalized', id: 'personalized', img: 'https://cdn-icons-png.flaticon.com/128/1170/1170628.png', link: '/category/personalized' },
            { name: 'Luxe Combos', id: 'combos', img: 'https://cdn-icons-png.flaticon.com/128/4290/4290858.png', link: '/category/combos' },
            { name: 'Birthday', id: 'birthday', img: 'https://cdn-icons-png.flaticon.com/128/2413/2413074.png', link: '/category/birthday' },
            { name: 'Anniversary', id: 'anniversary', img: 'https://cdn-icons-png.flaticon.com/128/4151/4151351.png', link: '/category/anniversary' }
          ].map((cat) => (
            <Link key={cat.name} href={cat.link} className="flex flex-col items-center gap-1 px-3 min-w-[80px] transition-all group">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gray-50 flex items-center justify-center transition-all group-hover:bg-[#121212] group-hover:shadow-lg group-hover:-translate-y-0.5">
                <img src={cat.img} alt={cat.name} className="w-5 h-5 md:w-6 md:h-6 object-contain transition-all group-hover:invert group-hover:scale-105" />
              </div>
              <span className="text-[7px] md:text-[9px] font-black uppercase tracking-wider text-gray-500 group-hover:text-[#121212] transition-colors">{cat.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>

      {/* Mobile Drawer (Sidebar) - Outside navbar container */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/60 z-[99998] backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="lg:hidden fixed inset-y-0 left-0 w-[300px] bg-white shadow-2xl z-[99999] overflow-y-auto"
            >
              {/* Header */}
              <div className="bg-[#121212] text-white p-6 relative">
                <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 p-2 text-white/50 hover:text-white transition-colors">
                  <X className="h-6 w-6" />
                </button>
                <div className="flex items-center gap-4 mt-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/10">
                    <User className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h2 className="font-black text-lg">{isAuthenticated ? `Hi, ${user?.name}` : 'Hello, Sign In'}</h2>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest">{isAuthenticated ? user?.email : 'Premium Gifting'}</p>
                  </div>
                </div>
              </div>

              {/* Mobile Search Inside Drawer */}
              <div className="p-6 border-b border-gray-100">
                <div className="relative flex items-center bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5">
                  <Search className="h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => {
                       if (e.key === 'Enter') {
                          setIsOpen(false);
                          router.push(`/search?q=${searchQuery}`);
                       }
                    }}
                    placeholder="Search gifts..."
                    className="w-full bg-transparent border-none outline-none focus:ring-0 text-sm px-3 placeholder-gray-400 font-bold"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="p-6 space-y-8">
                {CATEGORIES.map((category) => (
                  <div key={category.name} className="space-y-4">
                    <Link
                      href={category.link}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-black text-gray-900 flex items-center justify-between group"
                    >
                      {category.name}
                      <ArrowRight className="h-4 w-4 text-secondary group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <div className="grid grid-cols-1 gap-3 pl-2">
                      {category.sub.map((sub) => (
                        <Link
                          key={sub.name}
                          href="#"
                          onClick={() => setIsOpen(false)}
                          className="text-sm text-gray-500 font-bold hover:text-secondary transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Actions */}
              <div className="p-6 bg-gray-50 mt-auto border-t border-gray-100 space-y-4">
                {!isAuthenticated ? (
                  <Link href="/login" onClick={() => setIsOpen(false)} className="block w-full bg-[#121212] text-white text-center py-4 rounded-xl font-black text-sm transition-all hover:bg-black">Sign In</Link>
                ) : (
                  <button 
                    onClick={() => {
                      logout();
                      setIsOpen(false);
                      router.push('/');
                    }} 
                    className="block w-full bg-rose-500 text-white text-center py-4 rounded-xl font-black text-sm transition-all hover:bg-rose-600 shadow-lg shadow-rose-500/20"
                  >
                    Sign Out
                  </button>
                )}
                <div className="grid grid-cols-3 gap-3">
                   <Link href="/orders" className="p-4 bg-white rounded-xl border border-gray-100 flex flex-col items-center gap-2 group">
                      <ShoppingBag className="h-5 w-5 text-gray-400 group-hover:text-secondary transition-colors" />
                      <span className="text-[10px] font-black uppercase text-gray-500">Orders</span>
                   </Link>
                   <Link href="/track" className="p-4 bg-white rounded-xl border border-gray-100 flex flex-col items-center gap-2 group">
                      <Sparkles className="h-5 w-5 text-gray-400 group-hover:text-secondary transition-colors" />
                      <span className="text-[10px] font-black uppercase text-gray-500">Track</span>
                   </Link>
                   <Link href="/wishlist" className="p-4 bg-white rounded-xl border border-gray-100 flex flex-col items-center gap-2 group">
                      <Heart className="h-5 w-5 text-gray-400 group-hover:text-secondary transition-colors" />
                      <span className="text-[10px] font-black uppercase text-gray-500">Wishlist</span>
                   </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}