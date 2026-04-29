"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Minus, Plus, Trash2, ArrowRight, Tag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { items, removeFromCart, updateQty } = useCart();
  const [couponCode, setCouponCode] = useState('');

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const tax = subtotal * 0.18;
  const shipping = subtotal > 1500 ? 0 : 99;
  const total = subtotal + tax + shipping;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Shopping Cart</h1>
      
      {items.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-sm">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">Looks like you haven&apos;t added any gifts to your cart yet. Explore our collections and find the perfect gift.</p>
          <Link href="/" className="inline-block bg-primary text-white font-bold px-8 py-3 rounded-xl hover:bg-[#c5a028] transition-colors">
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-4">
            {items.map(item => (
              <div key={item.id} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center gap-6">
                <div className="w-24 h-24 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 overflow-hidden flex-shrink-0 border border-gray-100">
                  {item.image ? (
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-xs font-medium">[Image]</span>
                  )}
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{item.name}</h3>
                  <p className="font-bold text-primary text-xl">₹{item.price}</p>
                </div>
                
                <div className="flex items-center justify-center space-x-4">
                  <div className="flex items-center border border-gray-200 rounded-xl h-12 bg-gray-50 px-2">
                    <button onClick={() => updateQty(item.id, item.qty - 1)} className="p-2 text-gray-500 hover:text-primary transition-colors"><Minus className="h-4 w-4" /></button>
                    <span className="w-8 text-center font-bold text-gray-900">{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty + 1)} className="p-2 text-gray-500 hover:text-primary transition-colors"><Plus className="h-4 w-4" /></button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="p-3 text-red-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-colors">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm sticky top-28">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>
              
              <div className="flex space-x-2 mb-8">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Tag className="h-4 w-4 text-gray-400" />
                  </div>
                  <input type="text" placeholder="Coupon Code" className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-semibold" />
                </div>
                <button className="bg-gray-900 text-white px-5 py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors">
                  Apply
                </button>
              </div>

              <div className="space-y-4 mb-6 border-b border-gray-100 pb-6">
                <div className="flex justify-between items-center text-gray-600 font-medium text-sm">
                  <span>Subtotal ({items.length} items)</span>
                  <span className="font-bold text-gray-900">₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-gray-600 font-medium text-sm">
                  <span>Tax (18% GST)</span>
                  <span className="font-bold text-gray-900">₹{tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-gray-600 font-medium text-sm">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? <span className="text-green-500 font-bold bg-green-50 px-2 py-1 rounded-md">Free</span> : <span className="font-bold text-gray-900">₹{shipping.toFixed(2)}</span>}</span>
                </div>
              </div>

              <div className="flex justify-between items-center text-2xl font-black text-gray-900 mb-8">
                <span>Total</span>
                <span className="text-primary">₹{total.toFixed(2)}</span>
              </div>

              <Link href="/checkout" className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-[#c5a028] transition-colors flex items-center justify-center shadow-lg shadow-primary/30 text-lg">
                Proceed to Checkout <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
