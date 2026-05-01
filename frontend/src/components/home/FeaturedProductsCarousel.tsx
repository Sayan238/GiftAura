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
    image: 'https://images.pexels.com/photos/206940/pexels-photo-206940.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-white to-secondary/5 relative overflow-hidden">
      {/* Background decorations */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity }}
        className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-10 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 md:px-4 md:py-1.5 rounded-full font-bold text-[9px] md:text-xs mb-3 md:mb-4 uppercase tracking-wider">
            ✨ Curated Selection
          </span>
          <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-2 tracking-tighter">
            Featured <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">Collections</span>
          </h2>
          <p className="text-sm md:text-base text-gray-500 max-w-xl mx-auto px-4">
            Handpicked premium gifts for every special moment
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Carousel */}
          <motion.div
            className="relative min-h-[440px] md:h-[380px] overflow-hidden rounded-2xl shadow-xl"
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
                <div className="flex flex-col md:grid md:grid-cols-2 gap-0 h-full bg-white border border-gray-100 overflow-hidden">
                  {/* Image Side - Fixed consistency */}
                  <motion.div
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="h-48 md:h-full relative overflow-hidden bg-gray-50"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/5" />
                  </motion.div>
 
                  {/* Content Side */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: index === activeIndex ? 1 : 0, x: index === activeIndex ? 0 : 20 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col justify-center p-6 md:p-10"
                  >
                    {/* Badge */}
                    <span className="inline-block bg-primary/10 text-primary px-3 py-0.5 rounded-full font-bold text-[9px] md:text-[10px] mb-3 md:mb-4 w-fit uppercase tracking-wider">
                      {product.badge}
                    </span>
  
                    {/* Title & Description */}
                    <h3 className="text-xl md:text-3xl font-black text-gray-900 mb-2 md:mb-3 leading-tight tracking-tight">
                      {product.name}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500 mb-4 md:mb-6 line-clamp-2 md:line-clamp-none leading-relaxed">
                      {product.description}
                    </p>
  
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4 md:mb-6 bg-gray-50 w-fit px-3 py-1 rounded-full border border-gray-100">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-2.5 w-2.5 md:h-3 md:w-3 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <span className="font-bold text-gray-900 text-[10px] md:text-xs">{product.rating}</span>
                      <span className="text-gray-400 text-[9px] md:text-[10px]">({product.reviews} reviews)</span>
                    </div>
  
                    {/* Price */}
                    <div className="flex items-baseline gap-3 mb-6 md:mb-8">
                      <span className="text-2xl md:text-4xl font-black text-gray-900">₹{product.price}</span>
                      <span className="text-sm md:text-lg text-gray-400 line-through">₹{product.originalPrice}</span>
                      <span className="text-green-600 font-black text-xs md:text-sm">
                        {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                      </span>
                    </div>
  
                    {/* CTAs */}
                    <div className="flex gap-3 mt-auto md:mt-0">
                      <motion.button
                        onClick={() => addToCart({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          image: product.image,
                        })}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 bg-[#ffd814] text-gray-900 py-2.5 md:py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#f7ca00] shadow-md border border-[#fcd200] transition-all text-xs md:text-sm uppercase tracking-wider"
                      >
                        <ShoppingCart className="h-4 w-4" />
                        Add to Cart
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2.5 md:p-3.5 bg-gray-50 text-gray-900 rounded-xl font-bold hover:bg-gray-100 transition-all border border-gray-200"
                      >
                        <Heart className="h-4 w-4" />
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
 
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2 md:-mx-6 md:px-0 z-10 pointer-events-none">
            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white/90 backdrop-blur-md border border-gray-200 p-2 md:p-3 rounded-full shadow-lg hover:bg-white transition-all pointer-events-auto"
            >
              <ChevronLeft className="h-4 w-4 md:h-6 md:w-6 text-gray-900" />
            </motion.button>
  
            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white/90 backdrop-blur-md border border-gray-200 p-2 md:p-3 rounded-full shadow-lg hover:bg-white transition-all pointer-events-auto"
            >
              <ChevronRight className="h-4 w-4 md:h-6 md:w-6 text-gray-900" />
            </motion.button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 md:gap-3 mt-8">
            {FEATURED_PRODUCTS.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.2 }}
                className={`transition-all rounded-full ${
                  index === activeIndex
                    ? 'bg-secondary w-6 md:w-10 h-1.5 md:h-2'
                    : 'bg-gray-300 w-1.5 md:w-2 h-1.5 md:h-2 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
