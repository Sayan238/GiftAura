"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: 'Priya Sharma',
    avatar: '👩‍🦰',
    rating: 5,
    title: 'Perfect for Anniversary!',
    text: 'Ordered a gift hamper for my wife\'s anniversary. The delivery was super fast and the quality was exceptional. Highly recommended!',
    date: '2 days ago',
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    avatar: '👨',
    rating: 5,
    title: 'Same Day Delivery Works!',
    text: 'I needed a gift urgently and GiftAura delivered within hours. The personalization options are amazing. Worth every penny!',
    date: '1 week ago',
  },
  {
    id: 3,
    name: 'Aisha Patel',
    avatar: '👩',
    rating: 5,
    title: 'Beautiful Flowers!',
    text: 'The floral arrangements are absolutely stunning. Received so many compliments. The customer support team was super helpful too!',
    date: '10 days ago',
  },
  {
    id: 4,
    name: 'Vikram Singh',
    avatar: '👨‍💼',
    rating: 5,
    title: 'Corporate Gifting Solution',
    text: 'Used for bulk corporate gifts. Professional packaging, timely delivery, and excellent quality. My team was impressed!',
    date: '2 weeks ago',
  },
];

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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

export default function SocialProof() {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-primary/2 to-white relative overflow-hidden">
      {/* Background decorations */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity }}
        className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl -z-10"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 100, repeat: Infinity }}
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"
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
            ⭐ Customer Love
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Real Reviews from <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Real Customers</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See why thousands of customers trust us for their special moments
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {REVIEWS.map((review) => (
            <motion.div
              key={review.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-primary to-secondary text-white p-3 rounded-full shadow-lg">
                  <Quote className="h-5 w-5" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Review Title */}
                <h4 className="font-bold text-gray-900 text-lg mb-2">
                  {review.title}
                </h4>

                {/* Review Text */}
                <p className="text-gray-600 text-sm mb-6 flex-1 leading-relaxed">
                  "{review.text}"
                </p>

                {/* Divider */}
                <div className="border-t border-gray-100 pt-4 mt-4"></div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{review.avatar}</span>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-lg text-gray-600 mb-6">
            Join thousands of happy customers. Share your experience with GiftAura!
          </p>
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300">
            Leave a Review
          </button>
        </motion.div>
      </div>
    </section>
  );
}
