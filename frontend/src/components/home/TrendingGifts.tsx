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
    <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-1 tracking-tighter">
              Trending <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">Gifts</span>
            </h2>
            <p className="text-sm text-gray-500 font-medium">Our most loved and bestselling products this week</p>
          </div>
          <Link href="/category/trending" className="text-primary font-black text-xs uppercase tracking-widest hover:gap-2 transition-all duration-300 flex items-center gap-1 border-b-2 border-primary pb-1">
            View All <span>→</span>
          </Link>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {TRENDING_PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group"
            >
              <div className="relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100 p-1.5">
                {/* Product Image */}
                <Link href={`/product/${product.id}`} className="block relative h-36 md:h-44 bg-white flex items-center justify-center overflow-hidden group/img rounded-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover/img:scale-105 transition-transform duration-500 p-2"
                  />

                  {/* Tag */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`absolute top-1.5 left-1.5 bg-gradient-to-r ${getTagColor(product.tag)} text-white px-2 py-0.5 rounded-full text-[8px] font-bold uppercase shadow-sm`}
                  >
                    {product.tag}
                  </motion.div>

                  {/* Discount badge */}
                  <div className="absolute bottom-1.5 right-1.5 bg-red-500 text-white px-1.5 py-0.5 rounded text-[8px] font-bold shadow-sm">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </div>
                </Link>

                {/* Product Info */}
                <div className="flex-1 p-2 md:p-3 flex flex-col justify-between">
                  {/* Rating and reviews */}
                  <div className="mb-2">
                    <div className="flex items-center gap-1 mb-1.5">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-2 w-2 md:h-2.5 md:w-2.5 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'}`}
                          />
                        ))}
                      </div>
                      <span className="text-[9px] md:text-[10px] font-bold text-gray-400">{product.rating}</span>
                    </div>

                    {/* Product name */}
                    <Link href={`/product/${product.id}`}>
                      <h3 className="font-bold text-gray-900 text-xs md:text-sm line-clamp-2 hover:text-primary transition-all duration-300 leading-tight">
                        {product.name}
                      </h3>
                    </Link>
                  </div>

                  {/* Price and action */}
                  <div className="flex justify-between items-center gap-2 pt-2 border-t border-gray-50">
                    <div className="flex-1">
                      <p className="text-sm md:text-base font-black text-gray-900">₹{product.price}</p>
                      <p className="text-[9px] text-gray-400 line-through">₹{product.originalPrice}</p>
                    </div>
                    <motion.button
                      onClick={() => addToCart({ id: String(product.id), name: product.name, price: product.price, image: product.image })}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#ffd814] text-gray-900 p-1.5 md:p-2 rounded-full hover:bg-[#f7ca00] shadow-sm border border-[#fcd200] transition-all duration-300 flex items-center justify-center"
                    >
                      <ShoppingCart className="h-3.5 w-3.5 md:h-4 md:w-4" />
                    </motion.button>
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
          <Link href="/category/all" className="inline-flex items-center gap-2 text-primary hover:text-secondary font-black text-xs uppercase tracking-widest border-b-2 border-primary pb-1 transition-all">
            Explore All Popular Gifts →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
