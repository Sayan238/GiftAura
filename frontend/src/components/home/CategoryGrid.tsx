"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Gift, Flower, Cake, Gem, Heart, Package } from 'lucide-react';

const CATEGORIES = [
  { id: 1, name: 'Flowers', icon: Flower, color: 'text-pink-500', bgGradient: 'from-pink-400 to-pink-600', link: '/category/flowers' },
  { id: 2, name: 'Cakes', icon: Cake, color: 'text-amber-600', bgGradient: 'from-amber-400 to-amber-600', link: '/category/cakes' },
  { id: 3, name: 'Jewellery', icon: Gem, color: 'text-emerald-500', bgGradient: 'from-emerald-400 to-emerald-600', link: '/category/jewellery' },
  { id: 4, name: 'Earrings', icon: Gem, color: 'text-purple-500', bgGradient: 'from-purple-400 to-purple-600', link: '/category/earrings' },
  { id: 5, name: 'Personalized', icon: Heart, color: 'text-red-500', bgGradient: 'from-red-400 to-red-600', link: '/category/personalized' },
  { id: 6, name: 'Hampers', icon: Package, color: 'text-blue-500', bgGradient: 'from-blue-400 to-blue-600', link: '/category/hampers' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function CategoryGrid() {
  return (
    <section className="py-10 md:py-12 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-24 h-24 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" 
      />
      <motion.div 
        animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 right-0 w-32 h-32 bg-secondary/5 rounded-full translate-x-1/3 translate-y-1/3" 
      />

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-1 tracking-tighter">
            Shop by <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">Category</span>
          </h2>
          <p className="text-sm text-gray-500 max-w-xl mx-auto font-medium">
            Explore our curated collections to find the perfect gift
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link href={cat.link} key={cat.id}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative h-full"
                >
                  {/* Main card */}
                  <div className="relative bg-white rounded-xl p-3 md:p-4 border border-gray-100 shadow-sm hover:shadow-2xl hover:border-secondary/20 transition-all duration-500 cursor-pointer h-full flex flex-col items-center justify-center text-center overflow-hidden">
                    {/* Hover Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${cat.bgGradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
                    
                    {/* Icon wrapper */}
                    <motion.div
                      className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${cat.bgGradient} flex items-center justify-center mb-3 group-hover:shadow-[0_8px_20px_-5px_rgba(0,0,0,0.3)] transition-all duration-500 relative`}
                      whileHover={{ rotate: 12, scale: 1.1 }}
                    >
                      <Icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                      {/* Shine effect on icon */}
                      <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-[-20deg]" />
                    </motion.div>

                    {/* Category name */}
                    <h3 className="font-bold text-gray-900 text-[11px] md:text-xs group-hover:text-primary transition-all duration-300 uppercase tracking-widest">
                      {cat.name}
                    </h3>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Link href="/category/all" className="inline-flex items-center gap-2 text-primary hover:text-secondary font-black text-xs uppercase tracking-widest border-b-2 border-primary hover:border-secondary pb-1 transition-all group">
            View All Categories
            <motion.span 
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="inline-block"
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
