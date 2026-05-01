"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { PRODUCTS } from '@/data/products';

// Get bestsellers sorted by rating and reviews
const getBestsellers = () => {
  return PRODUCTS.filter(p => p.isBestseller || p.reviewCount > 300)
    .sort((a, b) => {
      const aScore = (a.rating * a.reviewCount);
      const bScore = (b.rating * b.reviewCount);
      return bScore - aScore;
    })
    .slice(0, 8);
};

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
  hidden: { opacity: 0, y: 30, scale: 0.95 },
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
};

export default function BestSellers() {
  const { addToCart } = useCart();
  const bestsellers = getBestsellers();

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-primary/10 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-1 bg-white border border-primary/20 px-3 py-1 rounded-full mb-3 shadow-sm"
            whileHover={{ scale: 1.05 }}
          >
            <TrendingUp className="h-3 w-3 text-primary" />
            <span className="text-[9px] font-bold uppercase tracking-wider text-gray-700">Customer Favorites</span>
          </motion.div>

          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2 tracking-tighter">
            Best <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">Sellers</span>
          </h2>
          <p className="text-sm text-gray-500 max-w-lg mx-auto leading-relaxed">
            These are our most loved products. Trusted by thousands of happy customers.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {bestsellers.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group"
            >
              <div className="relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100 p-1.5">
                {/* Product Image */}
                <Link href={`/product/${product.id}`} className="relative h-36 md:h-44 bg-white flex items-center justify-center overflow-hidden group/img rounded-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover/img:scale-105 transition-transform duration-500 p-2"
                  />

                  {/* Badges */}
                  <div className="absolute top-1.5 left-1.5">
                    {product.isBestseller && (
                      <div className="bg-secondary text-white px-2 py-0.5 rounded-full text-[8px] font-bold shadow-sm uppercase">
                        🏆 Bestseller
                      </div>
                    )}
                  </div>

                  {/* Discount Badge */}
                  {product.discount && (
                    <div className="absolute bottom-1.5 right-1.5 bg-red-500 text-white px-1.5 py-0.5 rounded text-[8px] font-bold shadow-sm">
                      {product.discount}% OFF
                    </div>
                  )}
                </Link>

                {/* Product Info */}
                <div className="flex-1 p-2 md:p-3 flex flex-col justify-between">
                  <div className="mb-2">
                    <div className="flex items-center gap-1 mb-1">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-2 w-2 md:h-2.5 md:w-2.5 ${
                              i < Math.floor(product.rating)
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-[9px] md:text-[10px] font-bold text-gray-400">{product.rating}</span>
                    </div>

                    <Link href={`/product/${product.id}`}>
                      <h3 className="font-bold text-gray-900 text-xs md:text-sm line-clamp-2 hover:text-primary transition-all duration-300 leading-tight">
                        {product.name}
                      </h3>
                    </Link>
                  </div>

                  <div className="space-y-3 pt-2 border-t border-gray-50">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <p className="text-sm md:text-base font-black text-gray-900">₹{product.price}</p>
                        {product.originalPrice && (
                          <p className="text-[9px] text-gray-400 line-through">₹{product.originalPrice}</p>
                        )}
                      </div>
                      <motion.button
                        onClick={() => addToCart({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          image: product.image,
                        })}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#ffd814] hover:bg-[#f7ca00] text-gray-900 p-1.5 md:p-2 rounded-full shadow-sm border border-[#fcd200] transition-all duration-300"
                      >
                        <ShoppingCart className="h-3.5 w-3.5 md:h-4 md:w-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <Link href="/best-sellers" className="inline-flex items-center gap-2 text-primary hover:text-secondary font-black text-xs md:text-sm uppercase tracking-widest border-b-2 border-primary pb-1 transition-all">
            Browse All Bestsellers
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
