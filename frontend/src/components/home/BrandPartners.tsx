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
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/5 rounded-full translate-x-1/4 translate-y-1/4" />

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 rounded-full font-black text-[10px] uppercase tracking-widest mb-4">
            🤝 Our Partners
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2 tracking-tighter">
            Trusted Brand <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">Partners</span>
          </h2>
          <p className="text-sm text-gray-500 max-w-xl mx-auto font-medium">
            Partnering with the best brands to bring you premium quality gifts
          </p>
        </motion.div>

        {/* Brands Grid */}
        <motion.div
          className="grid grid-cols-4 md:grid-cols-8 gap-3 mb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {BRANDS.map((brand) => (
            <motion.div
              key={brand.id}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className="relative bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 text-center h-full flex flex-col items-center justify-center">
                {/* Logo */}
                <div className="text-2xl mb-2">
                  {brand.logo}
                </div>

                {/* Name */}
                <h3 className="font-bold text-gray-900 text-[9px] uppercase tracking-tighter">
                  {brand.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partnership Info */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 rounded-2xl p-6 border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            { icon: '✓', title: 'Quality Assured', desc: 'Vetted standards' },
            { icon: '🎯', title: 'Wide Selection', desc: 'Diverse options' },
            { icon: '💰', title: 'Best Prices', desc: 'Direct partnerships' }
          ].map((info, i) => (
            <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                {info.icon}
              </div>
              <div className="text-left">
                <h4 className="font-bold text-gray-900 text-xs tracking-tight">{info.title}</h4>
                <p className="text-[10px] text-gray-500 font-medium">{info.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <button className="inline-flex items-center gap-2 text-primary hover:text-secondary font-black text-xs uppercase tracking-widest border-b-2 border-primary pb-1 transition-all">
            Partner With Us
            <span className="inline-block">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
