"use client";
import React from 'react';
import { motion } from 'framer-motion';

const BRANDS = [
  {
    id: 1,
    name: 'FNP Flowers',
    logo: '🌸',
    description: 'Premium fresh flowers',
  },
  {
    id: 2,
    name: 'Baker\'s Delight',
    logo: '🎂',
    description: 'Artisan cakes & pastries',
  },
  {
    id: 3,
    name: 'Luxury Jewels',
    logo: '💎',
    description: 'Fine jewelry designs',
  },
  {
    id: 4,
    name: 'Choco Dreams',
    logo: '🍫',
    description: 'Premium chocolates',
  },
  {
    id: 5,
    name: 'Green Garden',
    logo: '🌿',
    description: 'Plant & succulents',
  },
  {
    id: 6,
    name: 'Gift Studios',
    logo: '🎨',
    description: 'Custom gift creation',
  },
  {
    id: 7,
    name: 'Personal Box',
    logo: '📦',
    description: 'Personalized hampers',
  },
  {
    id: 8,
    name: 'Premium Wines',
    logo: '🍾',
    description: 'Wine collections',
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

export default function BrandPartners() {
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
            🤝 Our Partners
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Trusted Brand <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Partners</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Partnering with the best brands to bring you premium quality gifts
          </p>
        </motion.div>

        {/* Brands Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {BRANDS.map((brand) => (
            <motion.div
              key={brand.id}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.1 }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 text-center h-full flex flex-col items-center justify-center">
                {/* Logo */}
                <motion.div
                  className="text-5xl mb-3"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, repeatType: "loop" }}
                >
                  {brand.logo}
                </motion.div>

                {/* Name */}
                <h3 className="font-bold text-gray-900 text-sm mb-2">
                  {brand.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-600 text-center leading-tight">
                  {brand.description}
                </p>

                {/* Hover Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary origin-left rounded-b-2xl"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partnership Info */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12 border border-primary/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Quality Assurance */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
              <span className="text-3xl">✓</span>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Quality Assured</h4>
            <p className="text-gray-600 text-sm">
              Every partner is vetted for quality and reliability standards
            </p>
          </div>

          {/* Wide Selection */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 mb-4">
              <span className="text-3xl">🎯</span>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Wide Selection</h4>
            <p className="text-gray-600 text-sm">
              Access to premium brands with diverse gift options
            </p>
          </div>

          {/* Best Prices */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
              <span className="text-3xl">💰</span>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Best Prices</h4>
            <p className="text-gray-600 text-sm">
              Competitive pricing thanks to our direct partnerships
            </p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Interested in a partnership?
          </h3>
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300">
            Contact Sales Team
          </button>
        </motion.div>
      </div>
    </section>
  );
}
