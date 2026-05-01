"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Shield, Headphones, Leaf, Zap, Trophy } from 'lucide-react';

const BENEFITS = [
  {
    icon: Truck,
    title: 'Same-Day Delivery',
    description: 'Get your gifts delivered on the same day in 50+ cities across India',
  },
  {
    icon: Shield,
    title: '100% Secure',
    description: 'Multiple payment options and secure checkout with SSL encryption',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Dedicated customer support team ready to help anytime',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'Sustainable packaging and eco-conscious gift options',
  },
  {
    icon: Zap,
    title: 'Instant Customization',
    description: 'Personalize your gifts with messages and custom designs',
  },
  {
    icon: Trophy,
    title: 'Quality Assured',
    description: '4.8+ rating with 10,000+ satisfied customers',
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

export default function WhyChooseUs() {
  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/5 rounded-full translate-x-1/4 translate-y-1/4" />

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 rounded-full font-black text-[10px] uppercase tracking-widest mb-4">
            💡 Why Choose GiftAura?
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2 tracking-tighter">
            We Make Gift Giving <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">Effortless</span>
          </h2>
          <p className="text-sm text-gray-500 max-w-xl mx-auto font-medium">
            Everything you need to send the perfect gift with confidence and ease
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {BENEFITS.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="group"
              >
                <div className="relative bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center">
                  {/* Icon Background */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-50 text-primary group-hover:bg-primary group-hover:text-white mb-4 transition-all"
                  >
                    <Icon className="h-6 w-6" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-base font-bold text-gray-900 mb-2 tracking-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-medium">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            { number: '10k+', label: 'Happy Customers' },
            { number: '50+', label: 'Cities Covered' },
            { number: '4.8/5', label: 'Average Rating' },
            { number: '99.9%', label: 'On-Time Delivery' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100"
            >
              <p className="text-xl md:text-2xl font-black text-gray-900 tracking-tighter">
                {stat.number}
              </p>
              <p className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
