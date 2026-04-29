"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { CreditCard, Wallet, Building, Calendar, CheckCircle2, Shield } from 'lucide-react';

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState('upi');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Secure Checkout</h1>
        <p className="text-gray-600 text-lg">Please complete your order details.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-8 flex items-center border-b border-gray-100 pb-4">
              <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold shadow-md shadow-primary/20">1</span> 
              Shipping Details
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-medium bg-gray-50 focus:bg-white transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-medium bg-gray-50 focus:bg-white transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Complete Address</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-medium bg-gray-50 focus:bg-white transition-colors" placeholder="Flat, House no., Building, Company, Apartment" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">City</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-medium bg-gray-50 focus:bg-white transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">State</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-medium bg-gray-50 focus:bg-white transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">PIN Code</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-medium bg-gray-50 focus:bg-white transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-medium bg-gray-50 focus:bg-white transition-colors" />
              </div>
            </form>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-8 flex items-center border-b border-gray-100 pb-4">
              <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold shadow-md shadow-primary/20">2</span> 
              Delivery Schedule
            </h2>
            <div className="relative max-w-md">
              <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary h-5 w-5" />
              <input type="date" className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-bold text-gray-800 bg-gray-50 focus:bg-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-8 flex items-center border-b border-gray-100 pb-4">
              <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold shadow-md shadow-primary/20">3</span> 
              Payment Method
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { id: 'upi', name: 'UPI / QR', desc: 'Google Pay, PhonePe', icon: <div className="font-black text-lg">UPI</div>, style: 'bg-blue-50 text-blue-600 border-blue-200' },
                { id: 'card', name: 'Credit/Debit Card', desc: 'Secure card payment', icon: <CreditCard className="h-6 w-6" />, style: 'bg-purple-50 text-purple-600 border-purple-200' },
                { id: 'netbanking', name: 'Net Banking', desc: 'All major banks', icon: <Building className="h-6 w-6" />, style: 'bg-orange-50 text-orange-600 border-orange-200' },
                { id: 'wallet', name: 'Wallets', desc: 'Amazon Pay, Paytm', icon: <Wallet className="h-6 w-6" />, style: 'bg-green-50 text-green-600 border-green-200' },
              ].map((method) => (
                <div 
                  key={method.id}
                  className={`border-2 rounded-2xl p-5 cursor-pointer flex items-center transition-all ${paymentMethod === method.id ? 'border-primary bg-primary/5 ring-4 ring-primary/10' : 'border-gray-100 hover:border-gray-300 hover:bg-gray-50'}`}
                  onClick={() => setPaymentMethod(method.id)}
                >
                  <div className={`h-12 w-12 rounded-xl flex items-center justify-center mr-4 ${method.style}`}>
                    {method.icon}
                  </div>
                  <div>
                    <h3 className={`font-bold ${paymentMethod === method.id ? 'text-primary' : 'text-gray-900'}`}>{method.name}</h3>
                    <p className="text-xs text-gray-500 font-medium">{method.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="lg:col-span-1">
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 sticky top-28">
            <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Order Summary</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-start text-sm">
                <span className="text-gray-900 font-bold">1x Red Roses Bouquet</span>
                <span className="text-gray-900 font-bold bg-gray-50 px-2 py-1 rounded-md">₹999</span>
              </div>
              <div className="flex justify-between items-start text-sm">
                <span className="text-gray-900 font-bold">1x Truffle Cake</span>
                <span className="text-gray-900 font-bold bg-gray-50 px-2 py-1 rounded-md">₹850</span>
              </div>
            </div>

            <div className="space-y-4 mb-6 border-t border-b border-gray-100 py-6">
              <div className="flex justify-between items-center text-gray-600 text-sm font-medium">
                <span>Subtotal</span>
                <span className="text-gray-900 font-bold">₹1849.00</span>
              </div>
              <div className="flex justify-between items-center text-gray-600 text-sm font-medium">
                <span>Tax (18%)</span>
                <span className="text-gray-900 font-bold">₹332.82</span>
              </div>
              <div className="flex justify-between items-center text-gray-600 text-sm font-medium">
                <span>Shipping</span>
                <span className="text-green-600 font-bold bg-green-50 px-2 py-1 rounded-md">Free</span>
              </div>
            </div>

            <div className="flex justify-between items-center text-2xl font-black text-gray-900 mb-8 bg-gray-50 p-4 rounded-xl">
              <span>Payable</span>
              <span className="text-primary">₹2181.82</span>
            </div>

            <Link href="/order-confirmation" className="w-full bg-primary text-white font-extrabold py-5 rounded-xl hover:bg-[#c5a028] transition-colors flex items-center justify-center shadow-lg shadow-primary/30 text-lg uppercase tracking-wide">
              <CheckCircle2 className="mr-2 h-6 w-6" /> Pay Securely
            </Link>
            
            <div className="mt-6 flex flex-col items-center justify-center space-y-2">
              <Shield className="h-8 w-8 text-green-500 mb-1" />
              <p className="text-center text-xs font-bold text-gray-500 uppercase tracking-widest">
                256-bit SSL Encryption
              </p>
              <p className="text-center text-xs text-gray-400 font-medium">
                Safe and secure transactions guaranteed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
