"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, Filter, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { PRODUCTS } from '@/data/products';

const getBestsellers = () => {
  return PRODUCTS.filter(p => p.isBestseller || p.reviewCount > 300)
    .sort((a, b) => {
      const aScore = (a.rating * a.reviewCount);
      const bScore = (b.rating * b.reviewCount);
      return bScore - aScore;
    });
};

export default function BestSellersPage() {
  const { addToCart } = useCart();
  const bestsellers = getBestsellers();
  const [sortBy, setSortBy] = useState('popularity');

  const sortedProducts = [...bestsellers].sort((a, b) => {
    switch(sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return b.reviewCount - a.reviewCount;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12 md:py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              🏆 Best <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">Sellers</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the products loved by thousands of customers. These bestsellers have earned their reputation through quality and customer satisfaction.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Sort Bar */}
        <motion.div
          className="flex justify-between items-center mb-8 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-gray-600 font-medium">
            Showing {sortedProducts.length} bestselling products
          </span>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-gray-50 hover:bg-gray-100 border border-transparent text-gray-700 py-2 pl-4 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-medium cursor-pointer transition-colors"
            >
              <option value="popularity">Sort by Popularity</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {sortedProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (idx % 4) * 0.1 }}
              whileHover={{ y: -8 }}
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
                    <Link href={`/product/${product.id}`}>
                      <h3 className="font-bold text-gray-900 text-lg line-clamp-2 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                  </div>

                  {/* Price and CTA */}
                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-2xl font-black text-primary">₹{product.price}</p>
                      {product.originalPrice && (
                        <p className="text-sm text-gray-400 line-through">₹{product.originalPrice}</p>
                      )}
                    </div>
                    <button
                      onClick={() => addToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                      })}
                      className="w-full bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/50 text-white py-3 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <ShoppingCart className="h-5 w-5" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
