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
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full translate-x-1/4 translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full font-bold text-sm mb-6">
            💡 Why Choose GiftAura?
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            We Make Gift Giving <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Effortless</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to send the perfect gift with confidence and ease
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-primary/30 shadow-md hover:shadow-2xl transition-all duration-300 h-full">
                  {/* Icon Background */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 mb-6 transition-all"
                  >
                    <Icon className="h-8 w-8 text-primary" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Hover Line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary origin-left rounded-b-2xl"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
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
              className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 text-center border border-primary/10"
            >
              <p className="text-3xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {stat.number}
              </p>
              <p className="text-gray-600 font-medium mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
