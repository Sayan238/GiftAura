"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Truck, RotateCcw, Headphones, Star } from 'lucide-react';

const TRUST_ITEMS = [
  {
    id: 1,
    icon: Shield,
    title: '100% Secure Payment',
    description: 'Your transactions are protected with industry-leading encryption technology.',
    color: 'from-green-400 to-green-600',
  },
  {
    id: 2,
    icon: Truck,
    title: 'Free & Fast Delivery',
    description: 'Same-day delivery in 50+ cities. Free shipping on orders above ₹1500.',
    color: 'from-blue-400 to-blue-600',
  },
  {
    id: 3,
    icon: RotateCcw,
    title: '7-Day Easy Returns',
    description: 'Not satisfied? Return or exchange within 7 days of delivery - no questions asked.',
    color: 'from-orange-400 to-orange-600',
  },
  {
    id: 4,
    icon: Headphones,
    title: '24/7 Customer Support',
    description: 'Our friendly support team is always here to help with any questions or concerns.',
    color: 'from-purple-400 to-purple-600',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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

export default function TrustBadges() {
  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity }}
          className="absolute -bottom-32 -left-32 w-72 h-72 bg-secondary/5 rounded-full"
        />
      </div>

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2 tracking-tighter">
            Why <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">Trust</span> GiftAura?
          </h2>
          <p className="text-sm text-gray-500 max-w-xl mx-auto leading-relaxed font-medium">
            We're committed to delivering joy safely and securely. Here's what makes us reliable.
          </p>
        </motion.div>

        {/* Trust Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {TRUST_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="group relative"
              >
                {/* Card */}
                <div className="p-5 rounded-2xl border border-gray-100 bg-white hover:border-primary/30 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center text-center">
                  {/* Icon Container */}
                  <motion.div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-md group-hover:scale-105 transition-transform duration-300`}
                    whileHover={{ rotate: 10 }}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-gray-900 mb-2 tracking-tight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-gray-500 leading-relaxed flex-1 font-medium">
                    {item.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="mt-3 text-[10px] font-black text-primary uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    ✓ Verified & Trusted
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 text-center bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-gray-900 text-sm md:text-base font-black mb-3 uppercase tracking-tight">
            Join thousands of happy customers who choose GiftAura
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">
             <span className="flex items-center gap-1.5"><Star className="h-3 w-3 text-secondary fill-secondary" /> Trusted</span>
             <span className="flex items-center gap-1.5"><Star className="h-3 w-3 text-secondary fill-secondary" /> Authentic</span>
             <span className="flex items-center gap-1.5"><Star className="h-3 w-3 text-secondary fill-secondary" /> Fast</span>
             <span className="flex items-center gap-1.5"><Star className="h-3 w-3 text-secondary fill-secondary" /> Reliable</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
