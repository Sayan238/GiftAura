"use client";
import React, { useState } from 'react';
import { Package, Truck, CheckCircle2, MapPin, Search, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState('');
  const [showStatus, setShowStatus] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderId) setShowStatus(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto mt-20">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-[#232f3e] p-8 text-white">
            <h1 className="text-3xl font-bold mb-2">Track Your Gift</h1>
            <p className="text-gray-300">Enter your order ID to see real-time delivery status.</p>
          </div>

          <div className="p-8">
            <form onSubmit={handleTrack} className="flex flex-col md:flex-row gap-4 mb-12">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Enter Order ID (e.g. GA-847291)"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-lg font-medium"
                />
              </div>
              <button 
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-xl transition-all shadow-lg shadow-orange-500/20 whitespace-nowrap"
              >
                Track Now
              </button>
            </form>

            {showStatus ? (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="flex items-center justify-between p-4 bg-orange-50 rounded-xl border border-orange-100">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                      <Package className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-xs text-orange-600 font-bold uppercase tracking-wider">Current Status</p>
                      <p className="text-xl font-bold text-gray-900">Out for Delivery</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500 font-bold uppercase">Estimated Arrival</p>
                    <p className="text-xl font-bold text-gray-900">Today, 6:00 PM</p>
                  </div>
                </div>

                <div className="relative">
                  {/* Vertical Line */}
                  <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-gray-100" />

                  <div className="space-y-10">
                    {[
                      { status: 'Order Placed', time: 'Oct 20, 10:30 AM', icon: CheckCircle2, completed: true, active: false },
                      { status: 'Order Processed', time: 'Oct 20, 02:15 PM', icon: Package, completed: true, active: false },
                      { status: 'On the Way', time: 'Oct 21, 09:00 AM', icon: Truck, completed: true, active: false },
                      { status: 'Out for Delivery', time: 'Today, 01:20 PM', icon: MapPin, completed: false, active: true },
                      { status: 'Delivered', time: 'Pending', icon: CheckCircle2, completed: false, active: false },
                    ].map((step, idx) => (
                      <div key={idx} className="flex gap-6 relative">
                        <div className={`z-10 w-10 h-10 rounded-full flex items-center justify-center border-4 ${
                          step.active ? 'bg-orange-500 border-orange-100 text-white' : 
                          step.completed ? 'bg-green-500 border-green-100 text-white' : 'bg-white border-gray-100 text-gray-300'
                        }`}>
                          <step.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className={`font-bold ${step.active ? 'text-orange-600' : 'text-gray-900'}`}>{step.status}</p>
                          <p className="text-sm text-gray-500">{step.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                <div className="bg-white p-4 rounded-full shadow-md inline-block mb-4">
                  <Truck className="h-12 w-12 text-gray-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-700">Ready to Track?</h3>
                <p className="text-gray-500 mt-2">Check your order confirmation email for the ID.</p>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Link href="/" className="text-gray-500 hover:text-orange-600 font-bold flex items-center justify-center gap-2">
            Return to Shopping <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
