"use client";
import React from 'react';
import { Users, LayoutDashboard, ShoppingCart, Activity, Store } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-screen bg-gray-50">
      <div className="mb-10 text-center sm:text-left">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Admin Portal</h1>
        <p className="text-gray-600 font-medium text-lg">Platform Overview for GiftAura</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {[
          { icon: <Users className="h-8 w-8"/>, title: 'Total Users', val: '12,450', col: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' },
          { icon: <Store className="h-8 w-8"/>, title: 'Total Vendors', val: '342', col: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-100' },
          { icon: <ShoppingCart className="h-8 w-8"/>, title: 'Total Orders', val: '8,920', col: 'text-green-600', bg: 'bg-green-50', border: 'border-green-100' },
          { icon: <Activity className="h-8 w-8"/>, title: 'Total Revenue', val: '₹12.5M', col: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-100' },
        ].map((stat, i) => (
          <div key={i} className={`bg-white p-6 rounded-3xl border ${stat.border} shadow-sm flex flex-col justify-center items-center text-center hover:shadow-md transition-shadow`}>
            <div className={`w-16 h-16 ${stat.bg} ${stat.col} rounded-2xl flex items-center justify-center mb-4`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">{stat.title}</p>
              <p className="text-3xl font-black text-gray-900">{stat.val}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-3xl p-12 border border-gray-100 shadow-sm flex flex-col items-center justify-center min-h-[400px]">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
          <LayoutDashboard className="h-20 w-20 text-primary relative z-10" />
        </div>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Admin Analytics</h2>
        <p className="text-gray-500 font-medium text-lg text-center max-w-md">Detailed reporting, chart views, and platform management tools will be available in the next platform update.</p>
      </div>
    </div>
  );
}
