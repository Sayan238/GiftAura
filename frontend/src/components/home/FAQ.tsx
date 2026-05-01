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
    <section className="py-12 md:py-16 bg-gradient-to-br from-white via-secondary/2 to-white relative overflow-hidden">
      {/* Background decorations */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity }}
        className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4"
          >
            <HelpCircle className="h-6 w-6 text-primary" />
          </motion.div>

          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2 tracking-tighter">
            Frequently Asked <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">Questions</span>
          </h2>
          <p className="text-sm text-gray-500 max-w-xl mx-auto font-medium">
            Find answers to common questions about our services and policies
          </p>
        </motion.div>

        {/* FAQs List */}
        <motion.div
          className="space-y-3"
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
                whileHover={{ x: 2 }}
              >
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-gray-900 pr-8 tracking-tight">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openId === faq.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="h-5 w-5 text-primary" />
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
                    <div className="bg-gray-50 border border-t-0 border-gray-100 rounded-b-xl p-4 mt-0.5">
                      <p className="text-xs text-gray-600 leading-relaxed font-medium">
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
          className="mt-12 bg-gray-50 rounded-2xl p-6 text-center border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-lg font-black text-gray-900 mb-2 tracking-tighter">
            Still have questions?
          </h3>
          <p className="text-xs text-gray-500 mb-4 font-medium">
            Our support team is available 24/7 to help you with any concerns
          </p>
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full font-black text-[10px] uppercase tracking-widest hover:shadow-lg transition-all">
            Contact Support
          </button>
        </motion.div>
      </div>
    </section>
  );
}
