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
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-primary/5 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-secondary/5 to-transparent rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 rounded-full font-black text-[10px] uppercase tracking-widest mb-4">
            💳 Payment Options
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2 tracking-tighter">
            Multiple Payment <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">Methods</span>
          </h2>
          <p className="text-sm text-gray-500 max-w-xl mx-auto font-medium">
            Choose the payment method that works best for you
          </p>
        </motion.div>

        {/* Payment Methods Grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
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
                whileHover={{ y: -6 }}
                className="group"
              >
                <div className="relative h-full rounded-xl bg-white border border-gray-100 p-4 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col items-center text-center">
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className={`relative inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} text-white mb-4 shadow-md`}
                  >
                    <Icon className="h-6 w-6" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="relative font-bold text-gray-900 text-sm mb-1 tracking-tight">
                    {method.name}
                  </h3>
                  <p className="relative text-[10px] text-gray-500 font-medium leading-relaxed">
                    {method.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Security Features */}
        <motion.div
          className="bg-gray-50 rounded-2xl p-6 md:p-10 border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left side - Text */}
            <div className="flex flex-col justify-center">
              <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-4 tracking-tighter">
                Your Payment is <span className="text-primary">100% Safe</span>
              </h3>
              <ul className="grid grid-cols-1 gap-3">
                {[
                  { title: 'PCI DSS Compliant', desc: 'Industry standard compliance' },
                  { title: 'SSL 256-bit Encryption', desc: 'Bank-level security' },
                  { title: 'Fraud Protection', desc: 'Advanced monitoring' }
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-green-600 text-xs">✓</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-xs">{feature.title}</p>
                      <p className="text-[10px] text-gray-500 font-medium">{feature.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right side - Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: '99.9%', label: 'Success Rate' },
                { val: '0.1s', label: 'Processing' },
                { val: '24/7', label: 'Support', full: true }
              ].map((stat, i) => (
                <div
                  key={i}
                  className={`bg-white rounded-xl p-4 text-center border border-gray-100 shadow-sm ${stat.full ? 'col-span-2' : ''}`}
                >
                  <p className="text-xl md:text-2xl font-black text-primary tracking-tighter">{stat.val}</p>
                  <p className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
