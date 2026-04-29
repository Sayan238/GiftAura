"use client";
import React from 'react';
import Link from 'next/link';
import { CheckCircle, Package, Truck, Calendar, MapPin, ChevronRight } from 'lucide-react';

export default function OrderConfirmation() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-3xl p-8 md:p-12 text-center border border-gray-100 shadow-xl shadow-green-500/10 mb-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-emerald-500"></div>
        <div className="inline-flex items-center justify-center w-24 h-24 bg-green-50 rounded-full mb-6 relative">
          <div className="absolute inset-0 bg-green-400 opacity-20 animate-ping rounded-full"></div>
          <CheckCircle className="h-12 w-12 text-green-500 relative z-10" />
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Order Confirmed!</h1>
        <p className="text-lg text-gray-600 mb-6 max-w-lg mx-auto font-medium">Thank you for your purchase. Your order has been securely received and is being processed.</p>
        <div className="bg-gray-50 inline-block px-6 py-3 rounded-xl border border-gray-200">
          <p className="text-sm text-gray-500 uppercase font-bold tracking-widest mb-1">Order ID</p>
          <p className="font-black text-gray-900 tracking-wider">#GA-8472910</p>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-8 border-b border-gray-100 pb-4 flex items-center">
          <Package className="mr-3 h-6 w-6 text-primary" /> Order Details
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 bg-gray-50 p-6 rounded-2xl border border-gray-100">
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-3 rounded-xl text-blue-600 mt-1 shadow-inner"><Calendar className="h-6 w-6" /></div>
            <div>
              <p className="text-sm text-gray-500 font-bold uppercase tracking-wide mb-1">Delivery Date</p>
              <p className="font-bold text-gray-900">Oct 24, 2026</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-purple-100 p-3 rounded-xl text-purple-600 mt-1 shadow-inner"><Truck className="h-6 w-6" /></div>
            <div>
              <p className="text-sm text-gray-500 font-bold uppercase tracking-wide mb-1">Method</p>
              <p className="font-bold text-gray-900">Same Day Express</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-orange-100 p-3 rounded-xl text-orange-600 mt-1 shadow-inner"><MapPin className="h-6 w-6" /></div>
            <div>
              <p className="text-sm text-gray-500 font-bold uppercase tracking-wide mb-1">Address</p>
              <p className="font-bold text-gray-900">123 Gifting St, Techville</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-gray-900 mb-4 flex items-center tracking-wide"><span className="w-1.5 h-6 bg-primary rounded-full mr-3"></span> Items</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
               <div className="flex items-center space-x-4">
                 <div className="w-16 h-16 bg-gray-100 rounded-xl overflow-hidden border border-gray-100 flex-shrink-0">
                   <img src="https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=100" alt="Item" className="w-full h-full object-cover" />
                 </div>
                 <div>
                   <p className="font-bold text-gray-900 text-lg">Premium Red Roses Bouquet</p>
                   <p className="text-sm text-gray-500 font-bold bg-gray-50 inline-block px-2 py-1 rounded-md mt-1">Qty: 1</p>
                 </div>
               </div>
               <span className="font-bold text-gray-900 text-lg">₹999</span>
            </div>
            <div className="flex justify-between items-center bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
               <div className="flex items-center space-x-4">
                 <div className="w-16 h-16 bg-gray-100 rounded-xl overflow-hidden border border-gray-100 flex-shrink-0">
                   <img src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=100" alt="Item" className="w-full h-full object-cover" />
                 </div>
                 <div>
                   <p className="font-bold text-gray-900 text-lg">Chocolate Truffle Cake</p>
                   <p className="text-sm text-gray-500 font-bold bg-gray-50 inline-block px-2 py-1 rounded-md mt-1">Qty: 1</p>
                 </div>
               </div>
               <span className="font-bold text-gray-900 text-lg">₹850</span>
            </div>
          </div>
          <div className="mt-8 flex justify-between items-center border-t-2 border-dashed border-gray-200 pt-6 px-2">
            <span className="font-black text-gray-900 text-xl uppercase tracking-wider">Total Amount</span>
            <span className="text-3xl font-black text-primary">₹2181.82</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/account/orders" className="flex-1 max-w-xs bg-white text-gray-900 border-2 border-gray-200 font-extrabold py-5 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center text-lg uppercase tracking-wide">
          Track Order
        </Link>
        <Link href="/" className="flex-1 max-w-xs bg-primary text-white font-extrabold py-5 rounded-xl hover:bg-[#c5a028] transition-colors flex items-center justify-center shadow-xl shadow-primary/40 text-lg uppercase tracking-wide">
          Keep Shopping <ChevronRight className="ml-1 h-6 w-6" />
        </Link>
      </div>
    </div>
  );
}
