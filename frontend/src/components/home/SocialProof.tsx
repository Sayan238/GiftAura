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
    <section className="py-12 md:py-16 bg-gradient-to-br from-white via-primary/2 to-white relative overflow-hidden">
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

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-2.5 py-1 rounded-full font-bold text-[10px] mb-3 uppercase tracking-wider">
            ⭐ Customer Love
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2 tracking-tighter">
            Real Reviews from <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">Real Customers</span>
          </h2>
          <p className="text-sm text-gray-500 max-w-lg mx-auto">
            See why thousands trust us for their special moments
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {REVIEWS.map((review) => (
            <motion.div
              key={review.id}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group"
            >
              <div className="relative bg-white rounded-xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="absolute -top-1.5 -right-1.5 bg-gradient-to-r from-primary to-secondary text-white p-1.5 rounded-full shadow-md">
                  <Quote className="h-3 w-3" />
                </div>

                {/* Rating */}
                <div className="flex gap-0.5 mb-2.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-2.5 w-2.5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Review Title */}
                <h4 className="font-bold text-gray-900 text-sm mb-1.5 leading-tight">
                  {review.title}
                </h4>

                {/* Review Text */}
                <p className="text-gray-500 text-[11px] mb-4 flex-1 leading-relaxed italic">
                  "{review.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-2 pt-3 border-t border-gray-50">
                  <span className="text-xl">{review.avatar}</span>
                  <div className="flex-1">
                    <p className="font-black text-gray-900 text-[10px]">{review.name}</p>
                    <p className="text-[9px] text-gray-400 font-medium">{review.date}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <button className="inline-flex items-center gap-2 text-primary hover:text-secondary font-black text-xs uppercase tracking-widest border-b-2 border-primary pb-1 transition-all">
            Leave a Review
          </button>
        </motion.div>
      </div>
    </section>
  );
}
