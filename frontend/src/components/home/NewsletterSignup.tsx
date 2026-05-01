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
    <section className="py-12 md:py-16 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/5 to-secondary/5" />

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="relative bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Header */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-[10px] font-black text-primary uppercase tracking-widest">
                  Exclusive Offers
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2 tracking-tighter">
                Get <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">20% Off</span> Your First Order!
              </h2>
              <p className="text-sm text-gray-500 font-medium max-w-xl">
                Subscribe for exclusive deals, gifting tips, and early access to new collections.
              </p>
            </div>

            {/* Form */}
            <div className="flex-1 w-full max-w-md">
              <motion.form
                onSubmit={handleSubmit}
                className="relative flex flex-col sm:flex-row gap-2"
              >
                {/* Email Input */}
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:outline-none text-sm font-medium placeholder-gray-400 transition-all"
                    required
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-black text-[10px] uppercase tracking-widest rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  {submitted ? (
                    <span>✓ Subscribed!</span>
                  ) : (
                    <>
                      <Gift className="h-4 w-4" />
                      <span>Get Offer</span>
                    </>
                  )}
                </motion.button>
              </motion.form>

              {/* Benefits */}
              <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
                {[
                  { icon: '🎯', text: '20% Off' },
                  { icon: '📬', text: 'Weekly Deals' },
                  { icon: '🔔', text: 'Early Access' },
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-[10px] text-gray-600 font-bold uppercase tracking-tight">
                    <span>{benefit.icon}</span>
                    <span>{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
