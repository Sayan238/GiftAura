"use client";
import React from 'react';
import { Store, ShoppingBag, DollarSign, PlusCircle } from 'lucide-react';

export default function VendorDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-screen bg-gray-50">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Vendor Dashboard</h1>
          <p className="text-gray-600 font-medium text-lg">Welcome back, Gifting Co.</p>
        </div>
        <button className="bg-primary text-white font-extrabold px-6 py-4 rounded-xl hover:bg-[#c5a028] transition-colors flex items-center shadow-lg shadow-primary/30 uppercase tracking-wide">
          <PlusCircle className="mr-2 h-5 w-5" /> Add Product
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center space-x-5 hover:shadow-md transition-shadow">
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
            <Store className="h-8 w-8" />
          </div>
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Total Products</p>
            <p className="text-3xl font-black text-gray-900">124</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center space-x-5 hover:shadow-md transition-shadow">
          <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center">
            <ShoppingBag className="h-8 w-8" />
          </div>
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Active Orders</p>
            <p className="text-3xl font-black text-gray-900">38</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center space-x-5 hover:shadow-md transition-shadow">
          <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center">
            <DollarSign className="h-8 w-8" />
          </div>
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Total Revenue</p>
            <p className="text-3xl font-black text-gray-900">₹45.2k</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-100">
                <th className="py-4 px-2 font-bold text-gray-500 uppercase text-xs tracking-wider">Order ID</th>
                <th className="py-4 px-2 font-bold text-gray-500 uppercase text-xs tracking-wider">Product</th>
                <th className="py-4 px-2 font-bold text-gray-500 uppercase text-xs tracking-wider">Date</th>
                <th className="py-4 px-2 font-bold text-gray-500 uppercase text-xs tracking-wider">Status</th>
                <th className="py-4 px-2 font-bold text-gray-500 uppercase text-xs tracking-wider text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4].map(row => (
                <tr key={row} className="border-b border-gray-50 hover:bg-gray-50/80 transition-colors">
                  <td className="py-5 px-2 font-bold text-gray-900">#ORD-{900 + row}</td>
                  <td className="py-5 px-2 text-gray-700 font-medium">Premium Red Roses Bouquet</td>
                  <td className="py-5 px-2 text-gray-500 font-medium">Oct {20+row}, 2026</td>
                  <td className="py-5 px-2">
                    <span className="px-3 py-1.5 bg-yellow-50 text-yellow-600 text-xs font-bold uppercase tracking-wide rounded-md border border-yellow-100">Processing</span>
                  </td>
                  <td className="py-5 px-2 font-black text-gray-900 text-right">₹999</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
