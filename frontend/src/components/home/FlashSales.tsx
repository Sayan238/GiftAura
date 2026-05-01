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
    <div className="flex items-center gap-2 text-base font-bold">
      <Clock className="h-4 w-4 text-secondary animate-pulse" />
      <div className="flex gap-1">
        <span className="bg-secondary text-white px-2 py-1 rounded-lg min-w-[32px] text-center">
          {String(timeLeft.hours).padStart(2, '0')}
        </span>
        <span className="text-gray-400">:</span>
        <span className="bg-secondary text-white px-2 py-1 rounded-lg min-w-[32px] text-center">
          {String(timeLeft.minutes).padStart(2, '0')}
        </span>
        <span className="text-gray-400">:</span>
        <span className="bg-secondary text-white px-2 py-1 rounded-lg min-w-[32px] text-center">
          {String(timeLeft.seconds).padStart(2, '0')}
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
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 30
      },
    },
  } as const;

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-secondary/5 via-white to-primary/5 relative overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header with Timer */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 bg-white rounded-2xl p-6 border border-secondary/20 shadow-md"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-block bg-secondary text-white px-3 py-1 rounded-full font-bold text-[10px] flex items-center gap-1.5 uppercase tracking-wider">
                <Zap className="h-3.5 w-3.5" /> FLASH SALE
              </span>
              <span className="text-[10px] font-bold text-secondary bg-secondary/10 px-2.5 py-1 rounded-full uppercase tracking-widest">
                Limited Time
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-1">
              Massive <span className="text-transparent bg-gradient-to-r from-secondary to-primary bg-clip-text">Discounts</span> Today!
            </h2>
            <p className="text-sm text-gray-500 font-medium">
              Premium deals available for a limited time. Grab yours before they vanish!
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="flex-shrink-0 bg-secondary/5 p-4 rounded-xl border border-secondary/10">
            <p className="text-[10px] text-gray-400 font-bold mb-2 uppercase tracking-widest text-center">Sale Ends In</p>
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
          {FLASH_SALE_PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group"
            >
              <div className="relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col p-1.5">
                {/* Image Container */}
                <Link href={`/product/${product.id}`} className="relative aspect-square bg-gray-50 overflow-hidden group/img rounded-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500"
                  />

                  {/* Discount Badge */}
                  <div className="absolute top-1.5 right-1.5 bg-secondary text-white px-1.5 py-0.5 rounded text-[9px] font-bold shadow-md">
                    {product.discount}% OFF
                  </div>

                  {/* Stock Alert */}
                  {product.stock <= 10 && (
                    <div className="absolute top-1.5 left-1.5 bg-orange-500 text-white px-1.5 py-0.5 rounded text-[8px] font-bold uppercase">
                      Only {product.stock} left
                    </div>
                  )}
                </Link>

                {/* Content */}
                <div className="flex-1 p-2 md:p-3 flex flex-col justify-between">
                  {/* Title & Rating */}
                  <div className="mb-2">
                    <Link href={`/product/${product.id}`}>
                      <h3 className="font-bold text-gray-900 text-[11px] md:text-xs line-clamp-2 group-hover:text-primary transition-colors leading-tight mb-1">
                        {product.name}
                      </h3>
                    </Link>
                    <div className="flex items-center gap-1">
                      <Star className="h-2.5 w-2.5 fill-yellow-400 text-yellow-400" />
                      <span className="text-[10px] font-bold text-gray-500">{product.rating}</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-3">
                    <div className="flex items-end gap-1.5 flex-wrap">
                      <span className="text-sm md:text-base font-black text-secondary">₹{product.price}</span>
                      <span className="text-[9px] text-gray-400 line-through">₹{product.originalPrice}</span>
                    </div>
                  </div>

                  {/* Grab Now Button - Amazon style */}
                  <motion.button
                    onClick={() => addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.image,
                    })}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#ffd814] hover:bg-[#f7ca00] text-gray-900 py-1.5 rounded-lg font-bold shadow-sm border border-[#fcd200] transition-all duration-300 flex items-center justify-center gap-1.5 text-[10px]"
                  >
                    <ShoppingCart className="h-3 w-3" />
                    Grab Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <Link href="/deals" className="inline-flex items-center gap-2 text-secondary hover:text-primary font-bold text-sm transition-colors border-b-2 border-secondary pb-1 uppercase tracking-widest">
            <Zap className="h-4 w-4" />
            View All Deals
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
