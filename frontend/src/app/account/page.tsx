"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Package, Heart, MapPin, LogOut, ChevronRight, Edit2, Grid3X3, Trash2, Plus, Clock, CheckCircle2, Eye } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState('orders');
  const [editingProfile, setEditingProfile] = useState(false);
  const [showAddAddress, setShowAddAddress] = useState(false);
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
  
  // Real state for user profile
  const [userData, setUserData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+91 9876543210',
    dob: '1995-05-15'
  });

  const [loading, setLoading] = useState(false);

  const handleProfileUpdate = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')!).token : null;
      const response = await fetch('http://localhost:5000/api/users/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          name: `${userData.firstName} ${userData.lastName}`,
          email: userData.email,
          phone: userData.phone,
          dob: userData.dob
        })
      });

      if (response.ok) {
        setEditingProfile(false);
        alert('Profile updated successfully!');
      } else {
        alert('Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  // Mock data
  const orders = [
    { id: 1, orderId: 'GA-847291', date: 'Oct 20, 2026', amount: 1000, status: 'delivered', items: [{ name: 'Red Roses Bouquet', qty: 1, image: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=100' }] },
    { id: 2, orderId: 'GA-847292', date: 'Oct 15, 2026', amount: 2000, status: 'delivered', items: [{ name: 'Premium Cake & Flowers', qty: 1, image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=100' }] },
  ];

  const wishlistItems = [
    { id: 1, name: 'Pearl Stud Earrings', price: 2499, rating: 4.8, image: 'https://images.pexels.com/photos/1457801/pexels-photo-1457801.jpeg?auto=compress&cs=tinysrgb&w=500' },
    { id: 2, name: 'Luxury Spa Gift Hamper', price: 3999, rating: 4.9, image: 'https://images.pexels.com/photos/1020585/pexels-photo-1020585.jpeg?auto=compress&cs=tinysrgb&w=500' },
  ];

  const addresses = [
    { id: 1, name: 'Home', address: '123 Main St, Apartment 4B, New York', phone: '9876543210', default: true },
    { id: 2, name: 'Office', address: '456 Corporate Blvd, Suite 500, Boston', phone: '9876543211', default: false },
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'delivered': return 'bg-green-50 text-green-600';
      case 'pending': return 'bg-yellow-50 text-yellow-600';
      case 'cancelled': return 'bg-red-50 text-red-600';
      default: return 'bg-blue-50 text-blue-600';
    }
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'delivered': return <CheckCircle2 className="h-4 w-4" />;
      case 'pending': return <Clock className="h-4 w-4" />;
      default: return <CheckCircle2 className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <motion.div
            className="w-full md:w-72 flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm sticky top-28">
              {/* Profile Card */}
              <div className="flex items-center space-x-4 border-b border-gray-100 pb-6 mb-6">
                <div className="w-14 h-14 bg-[#232f3e] text-white rounded-full flex items-center justify-center font-bold text-xl">
                  {userData.firstName[0]}{userData.lastName[0]}
                </div>
                <div>
                  <h2 className="font-bold text-gray-900 text-lg">{userData.firstName} {userData.lastName}</h2>
                  <p className="text-xs text-gray-500">{userData.email}</p>
                </div>
              </div>

              {/* Navigation */}
              <nav className="space-y-1 mb-8">
                {[
                  { id: 'orders', label: 'Your Orders', icon: <Package className="h-5 w-5" /> },
                  { id: 'profile', label: 'Login & Security', icon: <User className="h-5 w-5" /> },
                  { id: 'addresses', label: 'Your Addresses', icon: <MapPin className="h-5 w-5" /> },
                  { id: 'wishlist', label: 'Your Wishlist', icon: <Heart className="h-5 w-5" /> },
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-md transition-all font-medium ${
                      activeTab === tab.id
                        ? 'bg-orange-50 text-orange-700 border-l-4 border-orange-500'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                ))}
              </nav>

              {/* Logout */}
              <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors font-medium">
                <LogOut className="h-5 w-5" />
                <span>Sign Out</span>
              </button>
            </div>
          </motion.div>

          {/* Content Area */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              {/* Orders Tab */}
              {activeTab === 'orders' && (
                <motion.div
                  key="orders"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900">Your Orders</h2>
                  </div>

                  <div className="space-y-6">
                    {orders.map((order) => (
                      <div key={order.id} className="border border-gray-200 rounded-lg overflow-hidden">
                        <div className="bg-gray-50 px-6 py-4 flex flex-wrap gap-6 text-sm text-gray-600 border-b border-gray-200">
                          <div>
                            <p className="uppercase text-[10px] font-bold">Order Placed</p>
                            <p className="font-medium">{order.date}</p>
                          </div>
                          <div>
                            <p className="uppercase text-[10px] font-bold">Total</p>
                            <p className="font-medium">₹{order.amount}</p>
                          </div>
                          <div className="ml-auto text-right">
                            <p className="uppercase text-[10px] font-bold">Order #</p>
                            <p className="font-medium text-blue-600 hover:underline cursor-pointer">{order.orderId}</p>
                          </div>
                        </div>
                        <div className="p-6 flex items-center gap-6">
                          <img src={order.items[0].image} alt="Product" className="w-20 h-20 object-cover rounded-md" />
                          <div className="flex-1">
                            <p className="font-bold text-gray-900">{order.items[0].name}</p>
                            <p className="text-sm text-gray-500 mt-1">Delivered on {order.date}</p>
                            <div className="mt-4 flex gap-4">
                              <button 
                                onClick={() => handleBuyAgain(order.items[0])}
                                className="bg-yellow-400 hover:bg-yellow-500 text-xs font-bold py-2 px-4 rounded-md shadow-sm"
                              >
                                Buy it again
                              </button>
                              <button className="bg-white border border-gray-300 hover:bg-gray-50 text-xs font-bold py-2 px-4 rounded-md shadow-sm">View your item</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <motion.div
                  key="profile"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900">Login & Security</h2>
                    {!editingProfile && (
                      <button
                        onClick={() => setEditingProfile(true)}
                        className="bg-white border border-gray-300 px-4 py-2 rounded-md font-bold text-sm hover:bg-gray-50 shadow-sm"
                      >
                        Edit Profile
                      </button>
                    )}
                  </div>

                  <div className="space-y-8 max-w-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                        <input
                          type="text"
                          disabled={!editingProfile}
                          value={userData.firstName}
                          onChange={(e) => setUserData({...userData, firstName: e.target.value})}
                          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all disabled:bg-gray-50 disabled:text-gray-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                        <input
                          type="text"
                          disabled={!editingProfile}
                          value={userData.lastName}
                          onChange={(e) => setUserData({...userData, lastName: e.target.value})}
                          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all disabled:bg-gray-50 disabled:text-gray-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        disabled
                        value={userData.email}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 bg-gray-50 text-gray-500 cursor-not-allowed"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Mobile Phone Number</label>
                      <input
                        type="tel"
                        disabled={!editingProfile}
                        value={userData.phone}
                        onChange={(e) => setUserData({...userData, phone: e.target.value})}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all disabled:bg-gray-50 disabled:text-gray-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Date of Birth</label>
                      <input
                        type="date"
                        disabled={!editingProfile}
                        value={userData.dob}
                        onChange={(e) => setUserData({...userData, dob: e.target.value})}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all disabled:bg-gray-50 disabled:text-gray-500"
                      />
                    </div>

                    {editingProfile && (
                      <div className="flex gap-4 pt-4">
                        <button
                          onClick={handleProfileUpdate}
                          disabled={loading}
                          className="bg-yellow-400 hover:bg-yellow-500 px-8 py-2 rounded-md font-bold text-sm shadow-sm disabled:opacity-50"
                        >
                          {loading ? 'Saving...' : 'Save Changes'}
                        </button>
                        <button
                          onClick={() => setEditingProfile(false)}
                          className="bg-white border border-gray-300 px-8 py-2 rounded-md font-bold text-sm hover:bg-gray-50 shadow-sm"
                        >
                          Cancel
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
              
              {/* Other tabs follow similar clean Amazon style */}
              {activeTab === 'addresses' && (
                <motion.div
                  key="addresses"
                  className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-6 border-b border-gray-100">Your Addresses</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <button className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center text-gray-500 hover:border-gray-400 hover:bg-gray-50 transition-all h-full min-h-[200px]">
                      <Plus className="h-10 w-10 mb-2" />
                      <span className="font-bold">Add Address</span>
                    </button>
                    {addresses.map(addr => (
                      <div key={addr.id} className="border border-gray-300 rounded-lg p-6 flex flex-col min-h-[200px]">
                        {addr.default && <p className="text-xs text-gray-500 mb-2">Default: <Heart className="inline h-3 w-3 fill-orange-500 text-orange-500" /></p>}
                        <p className="font-bold text-gray-900">{addr.name}</p>
                        <p className="text-sm text-gray-600 mt-2 flex-grow">{addr.address}</p>
                        <p className="text-sm text-gray-600 mt-1">Phone: {addr.phone}</p>
                        <div className="mt-4 flex gap-4 text-sm font-medium text-blue-600">
                          <button className="hover:underline hover:text-orange-600">Edit</button>
                          <span className="text-gray-300">|</span>
                          <button className="hover:underline hover:text-orange-600">Remove</button>
                          {!addr.default && (
                            <>
                              <span className="text-gray-300">|</span>
                              <button className="hover:underline hover:text-orange-600">Set as Default</button>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

