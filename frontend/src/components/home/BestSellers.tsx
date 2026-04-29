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
      staggerChildren: 0.1,
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

export default function BestSellers() {
  const { addToCart } = useCart();
  const bestsellers = getBestsellers();

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white border border-primary/20 px-4 py-2 rounded-full mb-6 shadow-sm"
            whileHover={{ scale: 1.05 }}
          >
            <TrendingUp className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-gray-700">Customer Favorites</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Best <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Sellers</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            These are our most loved products. Trusted by thousands of customers with amazing ratings and reviews.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {bestsellers.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -12 }}
              className="group"
            >
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-gray-100">
                {/* Product Image */}
                <Link href={`/product/${product.id}`} className="relative h-64 bg-gray-200 overflow-hidden group/img">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500"
                  />

                  {/* Badges Container */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.isBestseller && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-primary to-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                      >
                        🏆 Bestseller
                      </motion.div>
                    )}
                    {product.isNew && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                      >
                        ✨ New
                      </motion.div>
                    )}
                  </div>

                  {/* Discount Badge */}
                  {product.discount && (
                    <div className="absolute bottom-4 right-4 bg-gradient-to-r from-secondary to-primary text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      {product.discount}% OFF
                    </div>
                  )}
                </Link>

                {/* Product Info */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  {/* Rating & Title */}
                  <div className="mb-4">
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating)
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-bold text-gray-700">{product.rating}</span>
                      <span className="text-sm text-gray-400">({product.reviewCount})</span>
                    </div>

                    {/* Title */}
                    <Link href={`/product/${product.id}`}>
                      <h3 className="font-bold text-gray-900 text-lg line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text transition-all duration-300">
                        {product.name}
                      </h3>
                    </Link>
                  </div>

                  {/* Stats */}
                  <div className="mb-4 text-sm text-gray-600 font-medium">
                    <p>✅ {(product.reviewCount / 1000).toFixed(1)}k+ Happy Customers</p>
                  </div>

                  {/* Price and CTA */}
                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-black text-primary">₹{product.price}</p>
                        {product.originalPrice && (
                          <p className="text-sm text-gray-400 line-through">₹{product.originalPrice}</p>
                        )}
                      </div>
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
                      className="w-full bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/50 text-white py-3 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <ShoppingCart className="h-5 w-5" />
                      Add to Cart
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-gray-600 text-lg mb-6">Want to explore more bestsellers?</p>
          <Link href="/best-sellers" className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300">
            Browse All Bestsellers
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
