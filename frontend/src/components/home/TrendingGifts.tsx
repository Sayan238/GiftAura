"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

const TRENDING_PRODUCTS = [
  { id: 1, name: 'Premium Red Roses Bouquet', price: 999, originalPrice: 1299, rating: 4.8, reviews: 124, tag: 'Bestseller', image: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=500' },
  { id: 2, name: 'Chocolate Truffle Cake (1kg)', price: 850, originalPrice: 1000, rating: 4.9, reviews: 89, tag: 'Trending', image: 'https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=500' },
  { id: 3, name: 'Personalized Name Necklace', price: 1499, originalPrice: 1999, rating: 4.7, reviews: 210, tag: 'New', image: 'https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg?auto=compress&cs=tinysrgb&w=500' },
  { id: 4, name: 'Luxury Spa Gift Hamper', price: 2499, originalPrice: 2999, rating: 4.6, reviews: 56, tag: 'Premium', image: 'https://images.pexels.com/photos/1020585/pexels-photo-1020585.jpeg?auto=compress&cs=tinysrgb&w=500' },
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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

const getTagColor = (tag: string): string => {
  const colors: { [key: string]: string } = {
    Bestseller: 'from-orange-400 to-orange-600',
    Trending: 'from-pink-400 to-pink-600',
    New: 'from-blue-400 to-blue-600',
    Premium: 'from-purple-400 to-purple-600',
  };
  return colors[tag] || 'from-primary';
};

export default function TrendingGifts() {
  const { addToCart } = useCart();

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Trending <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Gifts</span>
            </h2>
            <p className="text-lg text-gray-600">Our most loved and bestselling products this week</p>
          </div>
          <Link href="/category/trending" className="text-primary font-bold text-lg hover:gap-2 transition-all duration-300 flex items-center gap-1">
            View All <span>→</span>
          </Link>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {TRENDING_PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-gray-100">
                {/* Product Image */}
                <Link href={`/product/${product.id}`} className="block relative h-72 bg-gray-200 overflow-hidden group/img">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500"
                  />

                  {/* Tag */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`absolute top-4 left-4 bg-gradient-to-r ${getTagColor(product.tag)} text-white px-4 py-2 rounded-full text-xs font-bold uppercase shadow-lg`}
                  >
                    {product.tag}
                  </motion.div>

                  {/* Wishlist button */}
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <Heart className="h-5 w-5" />
                  </motion.button>

                  {/* Discount badge */}
                  <div className="absolute bottom-4 right-4 bg-gradient-to-r from-secondary to-primary text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </div>
                </Link>

                {/* Product Info */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  {/* Rating and reviews */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-bold text-gray-700">{product.rating}</span>
                      <span className="text-sm text-gray-400">({product.reviews})</span>
                    </div>

                    {/* Product name */}
                    <Link href={`/product/${product.id}`}>
                      <h3 className="font-bold text-gray-900 text-lg line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text transition-all duration-300">
                        {product.name}
                      </h3>
                    </Link>
                  </div>

                  {/* Price and action */}
                  <div className="flex justify-between items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="flex-1">
                      <p className="text-2xl font-black text-primary">₹{product.price}</p>
                      <p className="text-sm text-gray-400 line-through">₹{product.originalPrice}</p>
                    </div>
                    <motion.button
                      onClick={() => addToCart({ id: String(product.id), name: product.name, price: product.price, image: product.image })}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-gradient-to-br from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/50 text-white p-3 rounded-full transition-all duration-300 flex items-center justify-center col-span-1"
                    >
                      <ShoppingCart className="h-5 w-5" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <Link href="/category/all" className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300">
            Explore All Popular Gifts →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
