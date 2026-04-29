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
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full translate-x-1/4 translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full font-bold text-sm mb-6">
            🛍️ Shop by Category
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Browse Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Collections</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of beautifully curated gift categories
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
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
                whileHover={{ y: -12, scale: 1.03 }}
                className="group"
              >
                <Link href={`/category/${category.slug}`}>
                  <div className={`relative h-full rounded-3xl p-8 overflow-hidden cursor-pointer transition-all duration-300 bg-gradient-to-br ${category.lightColor} border border-gray-100 shadow-lg hover:shadow-2xl`}>
                    {/* Background gradient overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.1 }}
                      className={`absolute inset-0 bg-gradient-to-br ${category.color}`}
                    />

                    {/* Floating decorative element */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity }}
                      className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${category.color} opacity-10`}
                    />

                    {/* Content */}
                    <div className="relative flex flex-col h-full">
                      {/* Icon & Emoji */}
                      <div className="flex items-center gap-3 mb-6">
                        <motion.div
                          className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} text-white shadow-lg`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="h-7 w-7" />
                        </motion.div>
                        <span className="text-4xl">{category.emoji}</span>
                      </div>

                      {/* Title */}
                      <h3 className="relative text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>

                      {/* Description */}
                      <p className="relative text-gray-600 mb-4 flex-1">
                        {category.description}
                      </p>

                      {/* Count */}
                      <div className="relative">
                        <p className="text-sm font-semibold text-gray-700 mb-4">
                          {category.count}
                        </p>

                        {/* CTA */}
                        <motion.div
                          className="inline-flex items-center gap-2 text-primary font-bold group-hover/link:text-secondary transition-colors"
                          whileHover={{ x: 4 }}
                        >
                          <span>Explore Now</span>
                          <ArrowRight className="h-5 w-5" />
                        </motion.div>
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
          <Link href="/category/all" className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300">
            View All Categories
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
