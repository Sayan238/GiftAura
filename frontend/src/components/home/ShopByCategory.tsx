"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Flower, Cake, Gift, Gem } from 'lucide-react';
import Link from 'next/link';

const CATEGORIES = [
  {
    id: 1,
    name: 'Flowers & Bouquets',
    description: 'Fresh flowers arranged beautifully',
    icon: Flower,
    color: 'from-rose-500 to-pink-500',
    lightColor: 'from-rose-50 to-pink-50',
    slug: 'flowers',
    count: '250+ Products',
    emoji: '🌹',
  },
  {
    id: 2,
    name: 'Cakes & Pastries',
    description: 'Delicious handmade creations',
    icon: Cake,
    color: 'from-amber-500 to-orange-500',
    lightColor: 'from-amber-50 to-orange-50',
    slug: 'cakes',
    count: '180+ Products',
    emoji: '🎂',
  },
  {
    id: 3,
    name: 'Gift Hampers',
    description: 'Curated gift sets for all occasions',
    icon: Gift,
    color: 'from-purple-500 to-pink-500',
    lightColor: 'from-purple-50 to-pink-50',
    slug: 'hampers',
    count: '320+ Products',
    emoji: '🎁',
  },
  {
    id: 4,
    name: 'Jewellery & Accessories',
    description: 'Premium jewelry pieces',
    icon: Gem,
    color: 'from-yellow-500 to-amber-500',
    lightColor: 'from-yellow-50 to-amber-50',
    slug: 'jewellery',
    count: '150+ Products',
    emoji: '💎',
  },
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
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6 },
  },
};

export default function ShopByCategory() {
  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/5 rounded-full translate-x-1/4 translate-y-1/4" />

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-2.5 py-1 rounded-full font-bold text-[10px] mb-3 uppercase tracking-wider">
            🛍️ Shop by Category
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2 tracking-tighter">
            Browse Our <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">Collections</span>
          </h2>
          <p className="text-sm text-gray-500 max-w-lg mx-auto">
            Explore our wide range of premium gift categories
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {CATEGORIES.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group"
              >
                <Link href={`/category/${category.slug}`}>
                  <div className={`relative h-full rounded-xl p-5 overflow-hidden cursor-pointer transition-all duration-300 bg-gradient-to-br ${category.lightColor} border border-gray-100 shadow-sm hover:shadow-lg`}>
                    {/* Background gradient overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.1 }}
                      className={`absolute inset-0 bg-gradient-to-br ${category.color}`}
                    />

                    {/* Content */}
                    <div className="relative flex flex-col h-full">
                      {/* Icon & Emoji */}
                      <div className="flex items-center gap-2 mb-3">
                        <motion.div
                          className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} text-white shadow-sm`}
                          whileHover={{ rotate: 15 }}
                        >
                          <Icon className="h-5 w-5" />
                        </motion.div>
                        <span className="text-xl">{category.emoji}</span>
                      </div>

                      {/* Title */}
                      <h3 className="relative text-lg font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors tracking-tight">
                        {category.name}
                      </h3>

                      {/* Description */}
                      <p className="relative text-gray-500 text-[11px] mb-3 flex-1 line-clamp-2 leading-relaxed">
                        {category.description}
                      </p>

                      {/* Count & CTA */}
                      <div className="relative">
                        <p className="text-[9px] font-bold text-gray-400 mb-2 uppercase tracking-widest">
                          {category.count}
                        </p>

                        <div className="inline-flex items-center gap-1.5 text-primary font-black text-[10px] uppercase tracking-wider">
                          <span>Explore</span>
                          <ArrowRight className="h-3 w-3" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <Link href="/category/all" className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest hover:shadow-lg hover:shadow-primary/30 transition-all">
            View All Categories
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
