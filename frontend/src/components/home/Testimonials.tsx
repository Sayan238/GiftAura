"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '@/data/testimonials';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Auto-scroll testimonials
  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [autoplay]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
    setAutoplay(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    setAutoplay(false);
  };

  // Get 3 testimonials for desktop view
  const getVisibleTestimonials = () => {
    return [
      TESTIMONIALS[currentIndex],
      TESTIMONIALS[(currentIndex + 1) % TESTIMONIALS.length],
      TESTIMONIALS[(currentIndex + 2) % TESTIMONIALS.length],
    ];
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-white to-secondary/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white border border-primary/20 px-4 py-2 rounded-full mb-6 shadow-sm"
            whileHover={{ scale: 1.05 }}
          >
            <Star className="h-4 w-4 text-primary fill-primary" />
            <span className="text-sm font-semibold text-gray-700">Customer Reviews</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Loved by <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Thousands</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            See what our happy customers have to say about their GiftAura experience
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Desktop View - 3 Cards */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <AnimatePresence mode="wait">
              {getVisibleTestimonials().map((testimonial, idx) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`${
                    idx === 1
                      ? 'md:scale-105 md:z-10'
                      : ''
                  } transition-all duration-500`}
                >
                  <TestimonialCard testimonial={testimonial} isFeatured={idx === 1} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Mobile View - 1 Card */}
          <div className="md:hidden mb-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={TESTIMONIALS[currentIndex].id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <TestimonialCard testimonial={TESTIMONIALS[currentIndex]} isFeatured={true} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <motion.button
              onClick={handlePrev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-white border-2 border-primary rounded-full text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-lg"
            >
              <ChevronLeft className="h-5 w-5" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setAutoplay(false);
                  }}
                  whileHover={{ scale: 1.2 }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'bg-primary w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={handleNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-white border-2 border-primary rounded-full text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-lg"
            >
              <ChevronRight className="h-5 w-5" />
            </motion.button>
          </div>

          {/* Auto-play notice */}
          <p className="text-center text-sm text-gray-500">
            {autoplay
              ? '⏳ Auto-scrolling in 6 seconds...'
              : '➡️ Click next to continue browsing'}
          </p>
        </div>

        {/* Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {[
            { stat: '50K+', label: 'Happy Customers' },
            { stat: '4.8★', label: 'Average Rating' },
            { stat: '95%', label: 'Satisfaction Rate' },
            { stat: '24/7', label: 'Customer Support' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center"
            >
              <p className="text-3xl font-black text-primary mb-2">{item.stat}</p>
              <p className="text-sm text-gray-600 font-semibold">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, isFeatured }: { testimonial: any; isFeatured: boolean }) {
  return (
    <div className={`p-8 rounded-3xl border-2 transition-all duration-300 ${
      isFeatured
        ? 'border-primary bg-gradient-to-br from-primary/10 to-white shadow-2xl'
        : 'border-gray-100 bg-white shadow-lg hover:shadow-xl'
    }`}>
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
        ))}
        {/* Render half star if rating has decimal */}
        {testimonial.rating % 1 !== 0 && (
          <div className="relative h-5 w-5">
            <Star className="absolute h-5 w-5 text-yellow-400" />
            <div className="absolute overflow-hidden w-[50%] h-full">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            </div>
          </div>
        )}
      </div>

      {/* Review Text */}
      <p className="text-gray-700 font-medium leading-relaxed mb-6 line-clamp-4">
        "{testimonial.review}"
      </p>

      {/* Product Name */}
      <p className="text-sm text-primary font-bold mb-4">📦 {testimonial.product}</p>

      {/* Author */}
      <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
        <div className="text-3xl">{testimonial.avatar}</div>
        <div>
          <p className="font-bold text-gray-900">{testimonial.name}</p>
          <p className="text-sm text-gray-500">from {testimonial.location}</p>
        </div>
      </div>
    </div>
  );
}
