"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Truck, Zap } from 'lucide-react';
import Link from 'next/link';

export default function SameDayDelivery() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-primary/5 rounded-full translate-x-1/4 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-gradient-to-br from-primary/5 via-white to-secondary/5 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between border border-primary/10 shadow-2xl shadow-primary/5">
          {/* Left Content */}
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full text-primary font-semibold mb-6 shadow-sm border border-primary/10"
              whileHover={{ scale: 1.05 }}
            >
              <Zap className="h-5 w-5 text-secondary" />
              <span>Express Delivery</span>
            </motion.div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Forgot an important date? <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">We've got you covered!</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              Order before 6 PM and get your gifts delivered on the very same day across 50+ major cities in India. We ensure fast, reliable, and secure delivery.
            </p>

            {/* Features */}
            <motion.div
              className="space-y-4 mb-8"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { icon: Truck, title: '2-Hour Delivery', desc: 'For selected items in prime areas' },
                { icon: MapPin, title: 'Track Order', desc: 'Real-time GPS tracking' },
                { icon: Clock, title: 'Same-Day Guaranteed', desc: 'Order before 6 PM' },
              ].map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={idx}
                    className="flex items-start space-x-4 bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white/40 shadow-sm hover:shadow-md transition-shadow"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    whileHover={{ x: 8 }}
                  >
                    <div className={`flex-shrink-0 bg-gradient-to-br ${idx === 0 ? 'from-green-400 to-green-600' : idx === 1 ? 'from-blue-400 to-blue-600' : 'from-orange-400 to-orange-600'} p-3 rounded-lg text-white`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/same-day-delivery" className="inline-flex items-center gap-2 text-white bg-gradient-to-r from-primary to-secondary hover:shadow-2xl hover:shadow-primary/40 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300">
                <Truck className="h-5 w-5" />
                Explore Express Gifts
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="md:w-5/12 w-full flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-square w-64 md:w-full max-w-md">
              {/* Animated background circles */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity }}
                className="absolute inset-0 border-4 border-primary/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity }}
                className="absolute inset-8 border-2 border-secondary/20 rounded-full"
              />

              {/* Glass morphism container */}
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-12 bg-white/40 backdrop-blur-lg rounded-3xl border border-white/60 flex items-center justify-center shadow-2xl"
              >
                <motion.div
                  animate={{ scale: [1, 1.05, 1], rotate: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="text-8xl"
                >
                  🚚
                </motion.div>
              </motion.div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, delay: 0.2, repeat: Infinity }}
                className="absolute top-4 -left-6 bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-lg border border-white/40 text-sm font-semibold text-gray-900 w-40"
              >
                ✅ 50+ Cities Served
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, delay: 0.4, repeat: Infinity }}
                className="absolute -bottom-4 -right-8 bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-lg border border-white/40 text-sm font-semibold text-gray-900"
              >
                ⚡ 2-Hour Premium
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
