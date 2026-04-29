"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Gift } from 'lucide-react';

const OCCASIONS = [
  { id: 1, name: 'Birthdays', desc: 'Make their day special', emoji: '🎂', image: 'bg-gradient-to-br from-pink-400 via-rose-400 to-rose-500', link: '/occasion/birthday' },
  { id: 2, name: 'Anniversaries', desc: 'Celebrate your love', emoji: '💕', image: 'bg-gradient-to-br from-red-400 via-red-500 to-red-600', link: '/occasion/anniversary' },
  { id: 3, name: 'Weddings', desc: 'For the perfect couple', emoji: '💍', image: 'bg-gradient-to-br from-emerald-400 via-teal-400 to-teal-600', link: '/occasion/wedding' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export default function SpecialOccasions() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white border border-primary/20 px-4 py-2 rounded-full mb-6 shadow-sm"
            whileHover={{ scale: 1.05 }}
          >
            <Gift className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-gray-700">Perfect for Every Occasion</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Gifts by <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Occasion</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Find curated gift collections for every special moment in your loved one's life
          </p>
        </motion.div>

        {/* Occasions Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {OCCASIONS.map((occ, index) => (
            <Link href={occ.link} key={occ.id}>
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -16, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative"
              >
                <div className={`relative overflow-hidden rounded-3xl md:rounded-[2.5rem] h-96 ${occ.image} shadow-2xl group-hover:shadow-3xl transition-all duration-300 cursor-pointer border-4 border-white/20`}>
                  {/* Gradient overlay that changes on hover */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-500" />

                  {/* Content positioning */}
                  <div className="absolute inset-0 flex flex-col justify-end">
                    {/* Emoji at top */}
                    <motion.div
                      className="absolute top-8 right-8 text-6xl"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {occ.emoji}
                    </motion.div>

                    {/* Text content positioned at bottom */}
                    <motion.div
                      className="p-8 md:p-10 relative"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <h3 className="text-3xl md:text-4xl font-black text-white mb-3 leading-tight">
                        {occ.name}
                      </h3>
                      <p className="text-white/90 text-lg font-semibold mb-4">
                        {occ.desc}
                      </p>

                      {/* Action button that appears on hover */}
                      <motion.div
                        className="inline-flex items-center text-white text-sm font-bold gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ x: -10 }}
                        whileHover={{ x: 5 }}
                      >
                        Explore Collection
                        <motion.span
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="h-4 w-4" />
                        </motion.span>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <p className="text-gray-600 text-lg mb-6">Can't find what you're looking for?</p>
          <Link href="/category/all" className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300">
            Browse All Gifts →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
