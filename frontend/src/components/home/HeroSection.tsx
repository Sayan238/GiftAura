"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="relative bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden min-h-[700px] flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity }}
          className="absolute -bottom-32 -left-32 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-white border border-primary/20 px-4 py-2 rounded-full shadow-sm w-fit"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-gray-700">Premium Gift Collections</span>
            </motion.div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight tracking-tight">
                GiftAura
              </h1>
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-pulse">
                  Delivering Happiness
                </span>
                <br />
                <span className="text-gray-900">& Beautiful Surprises</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
              Explore our premium collection of flowers, cakes, jewellery, and personalized gifts. Make every moment unforgettable with thoughtfully curated surprises.
            </p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              variants={itemVariants}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/category/all" className="group relative inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300">
                  <span>Shop Now</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/category/occasions" className="inline-flex items-center gap-2 bg-white text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-full font-bold text-lg hover:border-primary hover:text-primary transition-all duration-300 shadow-sm">
                  <span>View Occasions</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 gap-6 pt-8"
              variants={itemVariants}
            >
              <div className="space-y-1">
                <p className="text-3xl font-bold text-primary">10k+</p>
                <p className="text-sm text-gray-600">Premium Gifts</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-gray-600">Same-Day Cities</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            variants={itemVariants}
            className="relative hidden md:flex items-center justify-center h-[600px]"
          >
            {/* Main gradient orb */}
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/20 rounded-full blur-2xl"
            />

            {/* Floating cards container */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Top-left card */}
              <motion.div
                initial={{ opacity: 0, x: -50, y: 50 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                whileHover={{ y: -10, rotate: 5 }}
                className="absolute top-8 left-0 bg-white/90 backdrop-blur-md border border-white/40 p-4 rounded-2xl shadow-2xl w-48"
              >
                <p className="font-bold text-gray-900 text-sm">🚚 Same Day Delivery</p>
                <p className="text-xs text-gray-500 mt-1">In 50+ Major Cities</p>
              </motion.div>

              {/* Bottom-right card */}
              <motion.div
                initial={{ opacity: 0, x: 50, y: -50 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                whileHover={{ y: -10, rotate: -5 }}
                className="absolute bottom-16 right-0 bg-white/90 backdrop-blur-md border border-white/40 p-4 rounded-2xl shadow-2xl w-48"
              >
                <p className="font-bold text-gray-900 text-sm">⭐ 4.8+ Rating</p>
                <p className="text-xs text-gray-500 mt-1">10k+ Happy Customers</p>
              </motion.div>

              {/* Center decorative element */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity }}
                className="absolute inset-12 border-2 border-primary/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity }}
                className="absolute inset-24 border border-secondary/10 rounded-full"
              />

              {/* Center icon */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="text-6xl md:text-8xl"
              >
                🎁
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
