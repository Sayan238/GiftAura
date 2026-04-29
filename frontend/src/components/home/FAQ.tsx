"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    id: 1,
    question: 'What is the delivery timeline for same-day delivery?',
    answer: 'Same-day delivery is available for orders placed before 12 PM in select cities. Orders placed after 12 PM will be delivered the next day. You can check availability for your area during checkout.',
  },
  {
    id: 2,
    question: 'Can I customize my gift order?',
    answer: 'Absolutely! We offer personalization options including custom messages, name engraving, gift wrapping preferences, and more. You can customize most items during the checkout process.',
  },
  {
    id: 3,
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, debit cards, digital wallets (Apple Pay, Google Pay), UPI, and net banking. All payments are encrypted with 256-bit SSL for maximum security.',
  },
  {
    id: 4,
    question: 'What is your return and exchange policy?',
    answer: 'We offer a 30-day money-back guarantee if you\'re not satisfied with your gift. If a product is damaged during delivery, we\'ll replace it free of cost. Contact our support team for easy returns.',
  },
  {
    id: 5,
    question: 'Can I send gifts at a specific time on the delivery day?',
    answer: 'Yes! During checkout, you can select a preferred time slot (morning, afternoon, or evening) for delivery. We also offer surprise delivery options with personalized messages.',
  },
  {
    id: 6,
    question: 'Is gift wrapping included in the price?',
    answer: 'Most of our items come with complimentary premium gift wrapping. For special themed wrapping or additional customization, there might be a small additional charge.',
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

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-br from-white via-secondary/2 to-white relative overflow-hidden">
      {/* Background decorations */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity }}
        className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mb-6"
          >
            <HelpCircle className="h-8 w-8 text-primary" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Frequently Asked <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services and policies
          </p>
        </motion.div>

        {/* FAQs List */}
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {FAQS.map((faq) => (
            <motion.div
              key={faq.id}
              variants={itemVariants}
              className="group"
            >
              <motion.button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full text-left"
                whileHover={{ x: 4 }}
              >
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-gray-900 pr-8">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openId === faq.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="h-6 w-6 text-primary" />
                    </motion.div>
                  </div>
                </div>
              </motion.button>

              {/* Answer */}
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-t-0 border-gray-100 rounded-b-2xl p-6 mt-1">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 text-center border border-primary/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our support team is available 24/7 to help you with any concerns
          </p>
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-primary/30 transition-all">
            Contact Support
          </button>
        </motion.div>
      </div>
    </section>
  );
}
