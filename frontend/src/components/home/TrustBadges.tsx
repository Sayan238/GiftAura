"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Truck, RotateCcw, Headphones } from 'lucide-react';

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
    <section className="py-24 bg-white relative overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Why <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Trust</span> GiftAura?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We're committed to delivering joy safely and securely. Here's what makes us reliable.
          </p>
        </motion.div>

        {/* Trust Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {TRUST_ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`} />

                {/* Card */}
                <div className="p-8 rounded-3xl border-2 border-gray-100 bg-white hover:border-primary/30 transition-all duration-300 h-full flex flex-col text-center md:text-left lg:text-center">
                  {/* Icon Container */}
                  <motion.div
                    className={`w-20 h-20 mx-auto lg:mx-auto rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 10 }}
                  >
                    <Icon className="h-10 w-10 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed flex-1">
                    {item.description}
                  </p>

                  {/* Hover indicator */}
                  <motion.div
                    className="mt-4 text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  >
                    ✓ Verified & Trusted
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-12 border border-primary/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-gray-700 text-lg font-semibold mb-4">
            Join thousands of happy customers who choose GiftAura for their gifting needs
          </p>
          <motion.p
            className="text-sm text-gray-600"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🎁 Trusted | 💯 Authentic | ⚡ Fast | 😊 Reliable
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
