"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

const SLIDES = [
  {
    image: "/banner-purple.jpg",
    tag: "Trending Birthday Gift",
    title: <>Happy Birthday <br/><span className="text-secondary">Spa Bliss.</span></>,
    desc: "Surprise her with the ultimate relaxation experience – our curated Birthday Spa Gift Basket."
  },
  {
    image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&q=80&w=1600",
    tag: "Exclusive Hampers",
    title: <>Luxe <br/><span className="text-secondary">Collections.</span></>,
    desc: "Exquisite gift sets curated for the most special people in your life. Quality you can trust."
  },
  {
    image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&q=80&w=1600",
    tag: "Artisan Selection",
    title: <>Sweet <br/><span className="text-secondary">Indulgence.</span></>,
    desc: "Hand-crafted cakes and gourmet treats made with the finest Belgian chocolate and love."
  },

  {
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=1600",
    tag: "Freshly Picked",
    title: <>Signature <br/><span className="text-secondary">Floral.</span></>,
    desc: "Breathtaking arrangements that bring nature's beauty directly to their doorstep."
  }
];



export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % SLIDES.length);
  const prev = () => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <div className="bg-white pb-6">
      <div className="max-w-[1300px] mx-auto px-4 py-3">
        {/* Banner Carousel */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg h-[260px] md:h-[360px] bg-[#1a1a1a] group">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <motion.div 
              animate={{ 
                y: [0, -20, 0],
                x: [0, 10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-[10%] w-32 h-32 bg-secondary/10 rounded-full blur-2xl"
            />
            <motion.div 
              animate={{ 
                y: [0, 25, 0],
                x: [0, -15, 0]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 left-[5%] w-48 h-48 bg-primary/20 rounded-full blur-3xl"
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0 bg-[#121212]"
            >
              <img 
                src={SLIDES[current].image} 
                alt="Luxury Gifting" 
                className="w-full h-full object-cover opacity-60 transition-transform duration-[10000ms] ease-linear scale-100 group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 bg-gradient-to-r from-black/80 via-black/40 to-transparent">
                <div className="text-white max-w-2xl relative z-10">

                    <motion.div 
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                      className="flex items-center gap-2 mb-2 md:mb-4"
                    >
                      <div className="h-4 md:h-8 w-1 bg-secondary shadow-[0_0_15px_rgba(197,160,40,0.5)]"></div>
                      <span className="text-secondary font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[9px] md:text-[10px]">{SLIDES[current].tag}</span>
                    </motion.div>
                    <motion.h2 
                      initial={{ opacity: 0, y: 40, skewY: 2 }}
                      animate={{ opacity: 1, y: 0, skewY: 0 }}
                      transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                      className="text-2xl md:text-[3.2rem] font-black mb-2 md:mb-3 leading-[1.1] md:leading-[0.9] tracking-tighter"
                    >
                      {SLIDES[current].title}
                    </motion.h2>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      className="text-xs md:text-base font-medium opacity-90 mb-4 md:mb-6 text-gray-200 max-w-lg leading-relaxed line-clamp-2 md:line-clamp-none"
                    >
                      {SLIDES[current].desc}
                    </motion.p>
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, type: "spring" }}
                      className="flex gap-3 md:gap-4"
                    >
                      <Link href="/category/all" className="group bg-secondary text-black px-6 md:px-10 py-2 md:py-3 rounded-lg font-black shadow-lg hover:bg-white transition-all flex items-center justify-center gap-2 md:gap-3 text-[10px] md:text-xs relative overflow-hidden">
                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-[-20deg]" />
                        <span className="relative z-10">Shop Now</span> 
                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-2 transition-transform relative z-10"/>
                      </Link>
                      <Link href="/deals" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 md:px-10 py-2 md:py-3 rounded-lg font-black hover:bg-white/20 transition-all text-center text-[10px] md:text-xs">
                        Special Deals
                      </Link>
                    </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md text-white p-3 rounded-full hover:bg-white hover:text-black transition-all opacity-0 group-hover:opacity-100">
             <ChevronLeft className="h-4 w-4" />
          </button>
          <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md text-white p-3 rounded-full hover:bg-white hover:text-black transition-all opacity-0 group-hover:opacity-100">
             <ChevronRight className="h-4 w-4" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {SLIDES.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-1 transition-all duration-500 rounded-full ${current === idx ? 'w-8 bg-secondary' : 'w-2 bg-white/30'}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 py-4 border-y border-gray-100"
        >
          {[
            { icon: <Sparkles className="h-4 w-4 text-secondary"/>, title: 'Premium Quality', desc: 'Handpicked products' },
            { icon: <Play className="h-4 w-4 text-secondary"/>, title: 'Express Delivery', desc: 'Across 200+ cities' },
            { icon: <Sparkles className="h-4 w-4 text-secondary"/>, title: 'Secure Checkout', desc: '100% safe payment' },
            { icon: <Play className="h-4 w-4 text-secondary"/>, title: '24/7 Support', desc: 'Always here for you' }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2.5 group">
              <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-[#121212] transition-all group-hover:rotate-6">
                {item.icon}
              </div>
              <div>
                <h4 className="font-black text-[10px] text-gray-900 leading-tight">{item.title}</h4>
                <p className="text-[9px] text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Featured Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative h-[280px] rounded-2xl overflow-hidden group shadow-md bg-gray-100"
           >
              <img 
                src="https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=800" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                alt="Combos" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5">
                 <h3 className="text-lg font-black text-white mb-1">Signature Combos</h3>
                 <p className="text-white/80 mb-3 font-medium text-[10px]">Perfect pairings for your loved ones.</p>
                 <Link href="/category/combos" className="w-fit bg-secondary text-black px-5 py-1.5 rounded-full font-black text-[9px] hover:bg-white transition-all transform hover:-translate-y-1">Explore Now</Link>
              </div>
           </motion.div>
           
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative h-[280px] rounded-2xl overflow-hidden group shadow-md bg-gray-100"
           >
              <img 
                src="https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=800" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                alt="Cakes" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5">
                 <h3 className="text-lg font-black text-white mb-1">Artisan Cakes</h3>
                 <p className="text-white/80 mb-3 font-medium text-[10px]">Decadent handcrafted delights.</p>
                 <Link href="/category/cakes" className="w-fit bg-white/20 backdrop-blur-md text-white border border-white/30 px-5 py-1.5 rounded-full font-black text-[9px] hover:bg-white hover:text-black transition-all transform hover:-translate-y-1">Shop Cakes</Link>
              </div>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative h-[280px] rounded-2xl overflow-hidden group shadow-md bg-gray-100"
           >
              <img 
                src="https://images.pexels.com/photos/1020585/pexels-photo-1020585.jpeg?auto=compress&cs=tinysrgb&w=800" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                alt="Hampers" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5">
                 <h3 className="text-lg font-black text-white mb-1">Luxury Hampers</h3>
                 <p className="text-white/80 mb-3 font-medium text-[10px]">Premium curated gift boxes.</p>
                 <Link href="/category/gifts" className="w-fit bg-secondary text-black px-5 py-1.5 rounded-full font-black text-[9px] hover:bg-white transition-all transform hover:-translate-y-1">View All</Link>
              </div>
           </motion.div>
        </div>


        {/* Curated Sections */}
        <div className="mt-12 pb-10">
           <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-2xl font-black text-[#121212] tracking-tighter mb-1">Curated for You</h2>
                <p className="text-sm text-gray-500 font-medium">Handpicked selections for every unique occasion.</p>
              </div>
              <Link href="/category/all" className="text-xs font-black uppercase tracking-widest text-secondary hover:text-primary transition-colors border-b border-secondary pb-1">View All Collections</Link>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { title: 'Golden Hour', img: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=400' },
                { title: 'Midnight Magic', img: 'https://images.pexels.com/photos/1020585/pexels-photo-1020585.jpeg?auto=compress&cs=tinysrgb&w=400' },
                { title: 'Floral Fantasy', img: 'https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?auto=compress&cs=tinysrgb&w=400' },
                { title: 'Sweet Serenity', img: 'https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=400' }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-square rounded-xl overflow-hidden mb-3">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-xs group-hover:text-secondary transition-colors">{item.title}</h4>
                </motion.div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}
