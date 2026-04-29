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
    <section className="py-24 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Shop by <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Category</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore our carefully curated collections to find the perfect gift for every occasion and person
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {CATEGORIES.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <Link href={cat.link} key={cat.id}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -12, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative"
                >
                  {/* Card background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${cat.bgGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`} />

                  {/* Main card */}
                  <div className="relative bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer h-full flex flex-col items-center justify-center">
                    {/* Icon wrapper */}
                    <motion.div
                      className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${cat.bgGradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 relative`}
                      whileHover={{ rotate: 10 }}
                    >
                      <Icon className="h-8 w-8 md:h-10 md:w-10 text-white" />
                    </motion.div>

                    {/* Category name */}
                    <h3 className="font-bold text-gray-900 text-center text-base md:text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text transition-all duration-300">
                      {cat.name}
                    </h3>

                    {/* Hover indicator */}
                    <motion.div
                      className="mt-3 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ y: 10 }}
                      whileHover={{ y: 0 }}
                    >
                      Explore →
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Link href="/category/all" className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:gap-4 transition-all duration-300">
            View All Categories
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
