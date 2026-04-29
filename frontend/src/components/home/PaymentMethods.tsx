"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Smartphone, DollarSign, Lock } from 'lucide-react';

const PAYMENT_METHODS = [
  {
    id: 1,
    name: 'Credit/Debit Cards',
    description: 'Visa, Mastercard, Rupay - All major cards accepted',
    icon: CreditCard,
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 2,
    name: 'Digital Wallets',
    description: 'Apple Pay, Google Pay, Amazon Pay',
    icon: Smartphone,
    color: 'from-green-500 to-green-600',
  },
  {
    id: 3,
    name: 'UPI Payments',
    description: 'GooglePay, PhonePe, BHIM, Paytm - Instant transfer',
    icon: DollarSign,
    color: 'from-purple-500 to-purple-600',
  },
  {
    id: 4,
    name: 'Secure & Encrypted',
    description: 'SSL 256-bit encryption for all transactions',
    icon: Lock,
    color: 'from-red-500 to-red-600',
  },
];

const SLOGANS = [
  'Pay how you want',
  'Choose your convenience',
  'Safe & Secure Always',
  'Fast Transactions',
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function PaymentMethods() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-secondary/5 to-transparent rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full font-bold text-sm mb-6">
            💳 Payment Options
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Multiple Payment <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Methods</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the payment method that works best for you
          </p>
        </motion.div>

        {/* Payment Methods Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {PAYMENT_METHODS.map((method) => {
            const Icon = method.icon;
            return (
              <motion.div
                key={method.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="relative h-full rounded-2xl bg-white border border-gray-100 p-6 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.05 }}
                    className={`absolute inset-0 bg-gradient-to-br ${method.color}`}
                  />

                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    className={`relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} text-white mb-4 shadow-lg`}
                  >
                    <Icon className="h-7 w-7" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="relative font-bold text-gray-900 text-lg mb-2">
                    {method.name}
                  </h3>
                  <p className="relative text-gray-600 text-sm leading-relaxed">
                    {method.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Security Features */}
        <motion.div
          className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12 border border-primary/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left side - Text */}
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-black text-gray-900 mb-4">
                Your Payment is <span className="text-primary">100% Safe</span>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl mt-1">✓</span>
                  <div>
                    <p className="font-bold text-gray-900">PCI DSS Compliant</p>
                    <p className="text-sm text-gray-600">Industry standard compliance</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl mt-1">✓</span>
                  <div>
                    <p className="font-bold text-gray-900">SSL 256-bit Encryption</p>
                    <p className="text-sm text-gray-600">Bank-level security</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl mt-1">✓</span>
                  <div>
                    <p className="font-bold text-gray-900">Fraud Protection</p>
                    <p className="text-sm text-gray-600">Advanced monitoring systems</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right side - Stats */}
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-6 text-center shadow-md"
              >
                <p className="text-3xl font-black text-primary">99.9%</p>
                <p className="text-sm text-gray-600 font-medium mt-2">Success Rate</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-6 text-center shadow-md"
              >
                <p className="text-3xl font-black text-secondary">0.1s</p>
                <p className="text-sm text-gray-600 font-medium mt-2">Avg. Processing</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-6 text-center shadow-md col-span-2"
              >
                <p className="text-3xl font-black text-primary">24/7</p>
                <p className="text-sm text-gray-600 font-medium mt-2">Support Available</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
