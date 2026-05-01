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
    <section className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-20 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 rounded-full font-black text-[10px] uppercase tracking-widest mb-4">
            Perfect for Every Occasion
          </span>

          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2 tracking-tighter">
            Gifts by <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">Occasion</span>
          </h2>
          <p className="text-sm text-gray-500 max-w-xl mx-auto font-medium">
            Find curated gift collections for every special moment in your life
          </p>
        </motion.div>

        {/* Occasions Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {OCCASIONS.map((occ, index) => (
            <Link href={occ.link} key={occ.id}>
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
                className="group relative"
              >
                <div className={`relative overflow-hidden rounded-2xl h-64 ${occ.image} shadow-sm group-hover:shadow-xl transition-all duration-300 cursor-pointer`}>
                  {/* Content positioning */}
                  <div className="absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/80 transition-all">
                    {/* Emoji */}
                    <div className="absolute top-4 right-4 text-3xl group-hover:scale-110 transition-transform">
                      {occ.emoji}
                    </div>

                    {/* Text content */}
                    <div className="relative">
                      <h3 className="text-xl md:text-2xl font-black text-white mb-1 tracking-tight">
                        {occ.name}
                      </h3>
                      <p className="text-white/80 text-xs font-bold mb-3 uppercase tracking-wider">
                        {occ.desc}
                      </p>

                      <div className="flex items-center text-white text-[10px] font-black uppercase tracking-widest gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        Explore Collection
                        <ArrowRight className="h-3 w-3" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Link href="/category/all" className="inline-flex items-center gap-2 text-primary hover:text-secondary font-black text-xs uppercase tracking-widest border-b-2 border-primary pb-1 transition-all">
            Browse All Gifts
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
