"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, ShoppingCart, Heart } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

const FEATURED_PRODUCTS = [
  {
    id: 'fp1',
    name: 'Luxury Gold Gift Hamper',
    description: 'Premium collection with gourmet items',
    price: 2499,
    originalPrice: 3999,
    image: 'https://images.pexels.com/photos/2774527/pexels-photo-2774527.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.9,
    reviews: 542,
    badge: 'Premium Choice',
  },
  {
    id: 'fp2',
    name: 'Exquisite Floral Arrangement',
    description: 'Hand-arranged exotic flowers',
    price: 1899,
    originalPrice: 2999,
    image: 'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.8,
    reviews: 438,
    badge: 'Bestseller',
  },
  {
    id: 'fp3',
    name: 'Personalized Jewelry Box',
    description: 'Custom engraved with your message',
    price: 1299,
    originalPrice: 1999,
    image: 'https://images.pexels.com/photos/1046521/pexels-photo-1046521.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.7,
    reviews: 356,
    badge: 'Trending',
  },
  {
    id: 'fp4',
    name: 'Artisan Cake Collection',
    description: 'Multi-layered gourmet cakes',
    price: 999,
    originalPrice: 1599,
    image: 'https://images.pexels.com/photos/3535552/pexels-photo-3535552.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.9,
    reviews: 612,
    badge: 'Top Rated',
  },
];

export default function FeaturedProductsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { addToCart } = useCart();

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % FEATURED_PRODUCTS.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + FEATURED_PRODUCTS.length) % FEATURED_PRODUCTS.length);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-white to-secondary/5 relative overflow-hidden">
      {/* Background decorations */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity }}
        className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full font-bold text-sm mb-6">
            ✨ Curated Selection
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Featured <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Collections</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Handpicked premium gifts for every special moment
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Carousel */}
          <motion.div
            className="relative h-[500px] md:h-[550px] overflow-hidden rounded-3xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {FEATURED_PRODUCTS.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: index === activeIndex ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 ${index === activeIndex ? 'pointer-events-auto' : 'pointer-events-none'}`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full md:gap-12 items-center bg-white rounded-3xl overflow-hidden shadow-2xl">
                  {/* Image Side */}
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Content Side */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col justify-center p-8 md:p-12"
                  >
                    {/* Badge */}
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="inline-block bg-primary text-white px-4 py-2 rounded-full font-bold text-sm mb-4 w-fit"
                    >
                      {product.badge}
                    </motion.span>

                    {/* Title & Description */}
                    <h3 className="text-4xl font-black text-gray-900 mb-3">
                      {product.name}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      {product.description}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-3 mb-8">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <span className="font-bold text-gray-900">{product.rating}</span>
                      <span className="text-gray-500">({product.reviews} reviews)</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-end gap-3 mb-8">
                      <span className="text-4xl font-black text-primary">₹{product.price}</span>
                      <span className="text-xl text-gray-400 line-through">₹{product.originalPrice}</span>
                      <span className="bg-secondary text-white px-3 py-1 rounded-lg font-bold ml-auto">
                        {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                      </span>
                    </div>

                    {/* CTAs */}
                    <div className="flex gap-4">
                      <motion.button
                        onClick={() => addToCart({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          image: product.image,
                        })}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-gradient-to-r from-primary to-primary/80 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/50 transition-all"
                      >
                        <ShoppingCart className="h-5 w-5" />
                        Add to Cart
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 bg-gray-100 text-gray-900 rounded-xl font-bold hover:bg-gray-200 transition-all"
                      >
                        <Heart className="h-5 w-5" />
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <motion.button
            onClick={prevSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md border border-white/40 p-3 rounded-full shadow-lg hover:bg-white transition-all z-10"
          >
            <ChevronLeft className="h-6 w-6 text-gray-900" />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md border border-white/40 p-3 rounded-full shadow-lg hover:bg-white transition-all z-10"
          >
            <ChevronRight className="h-6 w-6 text-gray-900" />
          </motion.button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {FEATURED_PRODUCTS.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.2 }}
                className={`transition-all rounded-full ${
                  index === activeIndex
                    ? 'bg-primary w-8 h-3'
                    : 'bg-gray-300 w-3 h-3 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
