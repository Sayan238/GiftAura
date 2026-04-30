"use client";
import React from 'react';
import Link from 'next/link';
import { Package, ChevronRight, Search, Clock, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';

const MOCK_ORDERS = [
  {
    id: 'GA-847291',
    date: 'Oct 20, 2026',
    total: 1299,
    status: 'Delivered',
    items: [
      { name: 'Premium Red Roses Bouquet', qty: 1, price: 999, image: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=100' }
    ]
  },
  {
    id: 'GA-847292',
    date: 'Oct 15, 2026',
    total: 2450,
    status: 'Delivered',
    items: [
      { name: 'Chocolate Truffle Cake & Flowers Combo', qty: 1, price: 1850, image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=100' }
    ]
  }
];

export default function OrdersPage() {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleBuyAgain = (item: any) => {
    addToCart({
      id: item.id || Math.random().toString(),
      name: item.name,
      price: item.price || 1000,
      image: item.image,
    });
    router.push('/cart');
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12 mt-10">
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link href="/account" className="hover:text-orange-600 transition-colors">Your Account</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-orange-600 font-bold">Your Orders</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <h1 className="text-3xl font-bold text-gray-900">Your Orders</h1>
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search all orders" 
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all shadow-sm"
            />
          </div>
        </div>

        <div className="border-b border-gray-200 mb-8">
          <div className="flex space-x-8">
            <button className="border-b-2 border-orange-500 pb-4 px-1 text-sm font-bold text-gray-900">Orders</button>
            <button className="pb-4 px-1 text-sm font-medium text-gray-500 hover:text-gray-900">Buy Again</button>
            <button className="pb-4 px-1 text-sm font-medium text-gray-500 hover:text-gray-900">Not Yet Shipped</button>
            <button className="pb-4 px-1 text-sm font-medium text-gray-500 hover:text-gray-900">Cancelled</button>
          </div>
        </div>

        <div className="space-y-8">
          {MOCK_ORDERS.map((order) => (
            <div key={order.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gray-50 px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm border-b border-gray-200">
                <div>
                  <p className="uppercase text-[11px] font-bold text-gray-500 tracking-wider">Order Placed</p>
                  <p className="font-medium text-gray-700">{order.date}</p>
                </div>
                <div>
                  <p className="uppercase text-[11px] font-bold text-gray-500 tracking-wider">Total</p>
                  <p className="font-medium text-gray-700">₹{order.total}</p>
                </div>
                <div>
                  <p className="uppercase text-[11px] font-bold text-gray-500 tracking-wider">Ship To</p>
                  <button className="text-blue-600 hover:text-orange-600 font-medium">John Doe</button>
                </div>
                <div className="md:text-right">
                  <p className="uppercase text-[11px] font-bold text-gray-500 tracking-wider">Order # {order.id}</p>
                  <div className="flex md:justify-end gap-2 mt-1">
                    <button className="text-blue-600 hover:text-orange-600 font-medium">Order Details</button>
                    <span className="text-gray-300">|</span>
                    <button className="text-blue-600 hover:text-orange-600 font-medium">Invoice</button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 flex gap-4">
                    <div className="relative w-24 h-24 flex-shrink-0">
                      <img src={order.items[0].image} alt={order.items[0].name} className="w-full h-full object-cover rounded-md" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{order.items[0].name}</h3>
                      <p className="text-sm text-gray-600">Return window closed on Nov 10, 2026</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <button 
                          onClick={() => handleBuyAgain(order.items[0])}
                          className="bg-yellow-400 hover:bg-yellow-500 text-xs font-bold py-2 px-4 rounded-md shadow-sm transition-colors border border-yellow-500"
                        >
                          Buy it again
                        </button>
                        <button className="bg-white border border-gray-300 hover:bg-gray-50 text-xs font-bold py-2 px-4 rounded-md shadow-sm transition-colors">View your item</button>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-64 space-y-2">
                    <Link 
                      href="/track"
                      className="block w-full bg-[#ffa41c] hover:bg-[#fa8900] text-gray-900 text-sm font-bold py-2 rounded-md shadow-sm border border-[#ee9100] text-center"
                    >
                      Track package
                    </Link>
                    <button className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-sm font-bold py-2 rounded-md shadow-sm">Write a product review</button>
                    <button className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-sm font-bold py-2 rounded-md shadow-sm">Archive order</button>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
                <div className="flex items-center text-green-600 font-bold text-sm">
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  Delivered
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
