"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const COLLECTIONS = [
  {
    id: 1,
    name: 'Luxury Wedding Collection',
    description: 'Premium gifts for the most special day',
    price: '₹4,999 - ₹24,999',
    icon: '💍',
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.9,
    gradient: 'from-rose-500 to-pink-500',
  },
  {
    id: 2,
    name: 'Anniversary Romance Pack',
    description: 'Celebrate your love with curated gifts',
    price: '₹3,999 - ₹14,999',
    icon: '💞',
    image: 'https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.8,
    gradient: 'from-red-500 to-rose-500',
  },
  {
    id: 3,
    name: 'Birthday Deluxe',
    description: 'Make their day extra special',
    price: '₹2,999 - ₹12,999',
    icon: '🎉',
    image: 'https://images.pexels.com/photos/3300616/pexels-photo-3300616.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.7,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 4,
    name: 'Corporate Excellence',
    description: 'Impress clients and employees',
    price: '₹5,999 - ₹49,999',
    icon: '🏆',
    image: 'https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.9,
    gradient: 'from-blue-500 to-cyan-500',
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function PremiumCollections() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity }}
        className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 100, repeat: Infinity }}
        className="absolute -bottom-40 -right-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl -z-10"
      />

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
            🌟 Premium Collections
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2 tracking-tighter">
            Curated For Every <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">Occasion</span>
          </h2>
          <p className="text-sm text-gray-500 max-w-xl mx-auto font-medium">
            Specially designed collections to make every moment memorable
          </p>
        </motion.div>

        {/* Collections Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {COLLECTIONS.map((collection) => (
            <motion.div
              key={collection.id}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group"
            >
              <div className="relative h-full rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 bg-white">
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className={`absolute top-3 right-3 bg-gradient-to-br ${collection.gradient} text-white px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest shadow-md`}
                  >
                    Premium
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col justify-between h-[calc(100%-12rem)]">
                  <div>
                    {/* Title */}
                    <h3 className="text-sm md:text-base font-black text-gray-900 mb-1 group-hover:text-primary transition-colors leading-tight">
                      {collection.name}
                    </h3>

                    {/* Description */}
                    <p className="text-[11px] text-gray-500 mb-2 line-clamp-1 font-medium">
                      {collection.description}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-1.5 mb-2">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-2.5 w-2.5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <span className="text-[10px] font-bold text-gray-900">{collection.rating}</span>
                    </div>
                  </div>

                  <div>
                    {/* Price */}
                    <p className="text-xs md:text-sm font-black text-primary mb-3">
                      {collection.price}
                    </p>

                    {/* CTA */}
                    <motion.button
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary group-hover:text-secondary transition-colors"
                    >
                      <span>Shop Collection</span>
                      <ArrowRight className="h-3 w-3" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-sm text-gray-500 mb-4 font-medium">
            Looking for something specific? Browse our complete collection
          </p>
          <Link href="/collections" className="inline-flex items-center gap-2 text-primary hover:text-secondary font-black text-xs uppercase tracking-widest border-b-2 border-primary pb-1 transition-all">
            All Collections
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
