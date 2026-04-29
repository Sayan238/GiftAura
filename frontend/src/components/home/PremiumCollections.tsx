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
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity }}
        className="absolute -top-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 100, repeat: Infinity }}
        className="absolute -bottom-40 -right-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"
      />

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
            🌟 Premium Collections
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Curated For Every <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Occasion</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Specially designed collections to make every moment memorable
          </p>
        </motion.div>

        {/* Collections Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {COLLECTIONS.map((collection) => (
            <motion.div
              key={collection.id}
              variants={itemVariants}
              whileHover={{ y: -12 }}
              className="group"
            >
              <div className="relative h-full rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gray-200">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 flex items-end p-6 transition-all`}
                  >
                    <div className="w-full">
                      <p className="text-white text-sm font-bold mb-2">
                        {collection.icon} {collection.name}
                      </p>
                    </div>
                  </motion.div>

                  {/* Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className={`absolute top-4 right-4 bg-gradient-to-br ${collection.gradient} text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg`}
                  >
                    Premium
                  </motion.div>
                </div>

                {/* Content */}
                <div className="bg-white p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {collection.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4">
                    {collection.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <span className="text-sm font-bold text-gray-900">{collection.rating}</span>
                  </div>

                  {/* Price */}
                  <p className="text-lg font-black text-primary mb-4">
                    {collection.price}
                  </p>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-2 text-primary font-bold group-hover:text-secondary transition-colors"
                  >
                    <span>Shop Collection</span>
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-lg text-gray-600 mb-6">
            Looking for something specific? Browse our complete collection
          </p>
          <Link href="/collections" className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300">
            All Collections
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
