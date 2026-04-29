"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Gift, Sparkles } from 'lucide-react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/20 rounded-full"
        />
      </div>

      {/* Main gradient background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-primary/5 to-secondary/5" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="relative bg-gradient-to-br from-primary/20 to-secondary/10 rounded-3xl p-12 md:p-16 border border-primary/20 shadow-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Side decorations */}
          <div className="absolute top-0 right-0 text-6xl opacity-20 group-hover:scale-110 transition-transform">
            🎁
          </div>
          <div className="absolute bottom-0 left-0 text-5xl opacity-20">
            ✨
          </div>

          <div className="relative z-10">
            {/* Header */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="text-sm font-bold text-primary uppercase tracking-wide">
                  Exclusive Offers
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
                Get <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">20% Off</span> Your First Order!
              </h2>
              <p className="text-gray-600 text-lg max-w-xl">
                Subscribe to our newsletter and get exclusive deals, tips for gifting, and early access to new collections delivered to your inbox.
              </p>
            </motion.div>

            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="relative flex flex-col sm:flex-row gap-3 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* Email Input */}
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none font-medium placeholder-gray-500 transition-colors duration-300"
                  required
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                {submitted ? (
                  <>
                    <span>✓ Subscribed!</span>
                  </>
                ) : (
                  <>
                    <Gift className="h-5 w-5" />
                    <span>Get Offer</span>
                  </>
                )}
              </motion.button>
            </motion.form>

            {/* Benefits */}
            <motion.div
              className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {[
                { icon: '🎯', text: '20% Off Coupon' },
                { icon: '📬', text: 'Weekly Deals' },
                { icon: '🔔', text: 'Early Access' },
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-3 text-gray-700 font-medium"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-2xl">{benefit.icon}</span>
                  <span>{benefit.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Privacy note */}
            <p className="mt-6 text-xs text-gray-600 text-center">
              We respect your privacy. Unsubscribe anytime. No spam, ever.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
