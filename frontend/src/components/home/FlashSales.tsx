"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, Zap, Clock } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

const FLASH_SALE_PRODUCTS = [
  {
    id: 'f1',
    name: 'Red Roses Bouquet',
    price: 599,
    originalPrice: 999,
    discount: 40,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=500',
    stock: 8,
  },
  {
    id: 'f2',
    name: 'Chocolate Truffle Cake',
    price: 499,
    originalPrice: 850,
    discount: 41,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=500',
    stock: 12,
  },
  {
    id: 'f3',
    name: 'Photo Printed Mug',
    price: 199,
    originalPrice: 349,
    discount: 43,
    rating: 4.6,
    image: 'https://images.pexels.com/photos/1204463/pexels-photo-1204463.jpeg?auto=compress&cs=tinysrgb&w=500',
    stock: 25,
  },
  {
    id: 'f4',
    name: 'Pearl Stud Earrings',
    price: 349,
    originalPrice: 549,
    discount: 36,
    rating: 4.4,
    image: 'https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg?auto=compress&cs=tinysrgb&w=500',
    stock: 5,
  },
  {
    id: 'f5',
    name: 'Coffee Lover\'s Gift Set',
    price: 599,
    originalPrice: 899,
    discount: 33,
    rating: 4.6,
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=500',
    stock: 18,
  },
  {
    id: 'f6',
    name: 'Succulent Garden',
    price: 399,
    originalPrice: 549,
    discount: 27,
    rating: 4.5,
    image: 'https://images.pexels.com/photos/1020585/pexels-photo-1020585.jpeg?auto=compress&cs=tinysrgb&w=500',
    stock: 14,
  },
];


interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ hours: 3, minutes: 45, seconds: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Reset timer
          return { hours: 3, minutes: 45, seconds: 30 };
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-3 text-lg font-bold">
      <Clock className="h-5 w-5 text-secondary animate-pulse" />
      <div className="flex gap-1">
        <span className="bg-secondary text-white px-3 py-1 rounded-lg">
          {String(timeLeft.hours).padStart(2, '0')}h
        </span>
        <span className="text-gray-600">:</span>
        <span className="bg-secondary text-white px-3 py-1 rounded-lg">
          {String(timeLeft.minutes).padStart(2, '0')}m
        </span>
        <span className="text-gray-600">:</span>
        <span className="bg-secondary text-white px-3 py-1 rounded-lg">
          {String(timeLeft.seconds).padStart(2, '0')}s
        </span>
      </div>
    </div>
  );
}

export default function FlashSales() {
  const { addToCart } = useCart();

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

  return (
    <section className="pt-32 pb-24 md:py-32 bg-gradient-to-br from-secondary/10 via-white to-primary/5 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header with Timer */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16 bg-white rounded-3xl p-8 border border-secondary/20 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block bg-gradient-to-r from-secondary to-secondary/70 text-white px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2">
                <Zap className="h-4 w-4" /> FLASH SALE
              </span>
              <span className="text-xs font-bold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                LIMITED TIME
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-2">
              Massive <span className="text-transparent bg-gradient-to-r from-secondary to-primary bg-clip-text">Discounts</span> Today!
            </h2>
            <p className="text-lg text-gray-600 max-w-xl">
              Don't miss out! These jaw-dropping deals are only available for a limited time. Grab your favorites before they're gone!
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="flex-shrink-0 bg-gradient-to-br from-secondary/20 to-transparent p-6 rounded-2xl border-2 border-secondary/30">
            <p className="text-sm text-gray-600 font-semibold mb-3 text-center">Ends In</p>
            <CountdownTimer />
          </div>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {FLASH_SALE_PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                {/* Image Container */}
                <Link href={`/product/${product.id}`} className="relative aspect-square bg-gray-100 overflow-hidden group/img">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500"
                  />

                  {/* Discount Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="absolute top-2 right-2 bg-gradient-to-br from-secondary to-red-600 text-white px-2 py-0.5 rounded-full text-[10px] font-bold shadow-lg"
                  >
                    {product.discount}% OFF
                  </motion.div>

                  {/* Stock Alert */}
                  {product.stock <= 10 && (
                    <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-0.5 rounded-full text-[9px] font-bold animate-pulse">
                      {product.stock} left
                    </div>
                  )}
                </Link>

                {/* Content */}
                <div className="flex-1 p-3 md:p-4 flex flex-col justify-between">
                  {/* Title & Rating */}
                  <div className="mb-2 md:mb-3">
                    <Link href={`/product/${product.id}`}>
                      <h3 className="font-bold text-gray-900 text-[11px] md:text-sm line-clamp-1 md:line-clamp-2 group-hover:text-primary transition-colors mb-1">
                        {product.name}
                      </h3>
                    </Link>
                    <div className="flex items-center gap-1">
                      <Star className="h-2.5 w-2.5 md:h-3.5 md:w-3.5 fill-yellow-400 text-yellow-400" />
                      <span className="text-[10px] md:text-xs font-bold text-gray-700">{product.rating}</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-3 md:mb-4">
                    <div className="flex items-end gap-1.5 md:gap-2 flex-wrap">
                      <span className="text-sm md:text-xl font-black text-secondary">₹{product.price}</span>
                      <span className="text-[9px] md:text-xs text-gray-400 line-through">₹{product.originalPrice}</span>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <motion.button
                    onClick={() => addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.image,
                    })}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-secondary to-red-600 hover:shadow-lg hover:shadow-secondary/50 text-white py-1.5 md:py-2 rounded-lg md:rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-1 md:gap-2 text-[10px] md:text-sm"
                  >
                    <ShoppingCart className="h-3 w-3 md:h-4 md:w-4" />
                    Grab Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <Link href="/flash-sale" className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary to-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-secondary/40 transition-all duration-300">
            <Zap className="h-5 w-5" />
            View All Flash Deals
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
