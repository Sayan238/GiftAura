"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Gift } from 'lucide-react';

const OCCASIONS = [
  { id: 1, name: 'Birthdays', desc: 'Make their day special', emoji: '🎂', image: '/images/occasions/birthday.png', link: '/occasion/birthday', color: 'from-pink-400/80 to-rose-500/80' },
  { id: 2, name: 'Anniversaries', desc: 'Celebrate your love', emoji: '💕', image: '/images/occasions/anniversary.png', link: '/occasion/anniversary', color: 'from-red-400/80 to-red-600/80' },
  { id: 3, name: 'Weddings', desc: 'For the perfect couple', emoji: '💍', image: '/images/occasions/wedding.png', link: '/occasion/wedding', color: 'from-emerald-400/80 to-teal-600/80' },
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
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative h-72 md:h-80 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                {/* Background Image */}
                <img 
                  src={occ.image} 
                  alt={occ.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Glassmorphism Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${occ.color} opacity-40 group-hover:opacity-20 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-end">
                  
                  {/* Emoji/Icon */}
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-2xl group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 border border-white/30">
                    {occ.emoji}
                  </div>

                  {/* Text content */}
                  <motion.div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-1 tracking-tight drop-shadow-lg">
                      {occ.name}
                    </h3>
                    <p className="text-white/90 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-4">
                      {occ.desc}
                    </p>

                    <div className="flex items-center text-secondary text-[10px] font-black uppercase tracking-widest gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      Explore Collection
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </motion.div>
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
