"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Truck, Zap } from 'lucide-react';
import Link from 'next/link';

export default function SameDayDelivery() {
  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-secondary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-primary/5 rounded-full translate-x-1/4 translate-y-1/2" />

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-gradient-to-br from-primary/5 via-white to-secondary/5 rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between border border-primary/10 shadow-xl shadow-primary/5">
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
              className="inline-flex items-center space-x-2 bg-white px-3 py-1 rounded-full text-primary font-black mb-4 shadow-sm border border-primary/10"
              whileHover={{ scale: 1.05 }}
            >
              <Zap className="h-4 w-4 text-secondary" />
              <span className="text-[10px] uppercase tracking-wider">Express Delivery</span>
            </motion.div>

            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 leading-tight tracking-tighter">
              Forgot an important date? <br />
              <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">We've got you covered!</span>
            </h2>

            {/* Description */}
            <p className="text-sm text-gray-500 mb-6 max-w-lg leading-relaxed font-medium">
              Order before 6 PM and get your gifts delivered on the very same day across 50+ major cities in India. Fast, reliable, and secure.
            </p>

            {/* Features */}
            <motion.div
              className="space-y-3 mb-6"
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
                    className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm p-3 rounded-xl border border-white/40 shadow-sm hover:shadow-md transition-shadow"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    whileHover={{ x: 6 }}
                  >
                    <div className={`flex-shrink-0 bg-gradient-to-br ${idx === 0 ? 'from-green-400 to-green-600' : idx === 1 ? 'from-blue-400 to-blue-600' : 'from-orange-400 to-orange-600'} p-2 rounded-lg text-white`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-xs">{feature.title}</h4>
                      <p className="text-[10px] text-gray-500 font-medium">{feature.desc}</p>
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
              <Link href="/same-day-delivery" className="inline-flex items-center gap-2 text-white bg-gradient-to-r from-primary to-secondary px-6 py-2.5 rounded-full font-black text-xs uppercase tracking-widest hover:shadow-lg transition-all">
                <Truck className="h-4 w-4" />
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
            <div className="relative aspect-square w-56 md:w-full max-w-sm">
              {/* Animated background circles */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity }}
                className="absolute inset-0 border-2 border-primary/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity }}
                className="absolute inset-6 border border-secondary/10 rounded-full"
              />

              {/* Glass morphism container */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-10 bg-white/40 backdrop-blur-lg rounded-2xl border border-white/60 flex items-center justify-center shadow-xl"
              >
                <motion.div
                  animate={{ scale: [1, 1.05, 1], rotate: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="text-6xl"
                >
                  🚚
                </motion.div>
              </motion.div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, delay: 0.2, repeat: Infinity }}
                className="absolute top-2 -left-4 bg-white/90 backdrop-blur-md p-2 px-3 rounded-lg shadow-md border border-white/40 text-[10px] font-bold text-gray-900 uppercase tracking-tight"
              >
                ✅ 50+ Cities Served
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, delay: 0.4, repeat: Infinity }}
                className="absolute -bottom-2 -right-4 bg-white/90 backdrop-blur-md p-2 px-3 rounded-lg shadow-md border border-white/40 text-[10px] font-bold text-gray-900 uppercase tracking-tight"
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
