"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Package, Heart, MapPin, LogOut, ChevronRight, Edit2, Grid3X3, Trash2, Plus, Clock, CheckCircle2, Eye } from 'lucide-react';

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState('orders');
  const [editingProfile, setEditingProfile] = useState(false);
  const [showAddAddress, setShowAddAddress] = useState(false);

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <motion.div
            className="w-full md:w-72 flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-lg sticky top-28">
              {/* Profile Card */}
              <div className="flex items-center space-x-4 border-b border-gray-100 pb-6 mb-6">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-tr from-primary to-secondary text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  JD
                </motion.div>
                <div>
                  <h2 className="font-extrabold text-gray-900 text-lg">John Doe</h2>
                  <p className="text-xs text-gray-500 font-medium">john.doe@example.com</p>
                  <p className="text-xs text-gray-400 mt-1">✅ Verified Member</p>
                </div>
              </div>

              {/* Navigation */}
              <nav className="space-y-2 mb-8">
                {[
                  { id: 'orders', label: 'My Orders', icon: <Package className="h-5 w-5" />, badge: 2 },
                  { id: 'wishlist', label: 'Wishlist', icon: <Heart className="h-5 w-5" />, badge: 2 },
                  { id: 'addresses', label: 'Saved Addresses', icon: <MapPin className="h-5 w-5" />, badge: 2 },
                  { id: 'profile', label: 'Profile Settings', icon: <User className="h-5 w-5" /> },
                ].map(tab => (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    whileHover={{ x: 4 }}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all font-bold relative ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg shadow-primary/30'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      {tab.icon}
                      <span>{tab.label}</span>
                    </div>
                    {tab.badge && (
                      <span className="bg-secondary text-white text-xs font-bold px-2 py-1 rounded-full">
                        {tab.badge}
                      </span>
                    )}
                  </motion.button>
                ))}
              </nav>

              {/* Logout */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center space-x-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl transition-colors font-bold border border-transparent hover:border-red-100"
              >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Content Area */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {/* Orders Tab */}
              {activeTab === 'orders' && (
                <motion.div
                  key="orders"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg"
                >
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                    <h2 className="text-3xl font-black text-gray-900">Order History</h2>
                    <span className="bg-primary/10 text-primary px-4 py-2 rounded-full font-bold text-sm">
                      {orders.length} Orders
                    </span>
                  </div>

                  <motion.div
                    className="space-y-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {orders.map((order) => (
                      <motion.div
                        key={order.id}
                        variants={itemVariants}
                        whileHover={{ y: -4, shadow: 'lg' }}
                        className="border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-primary/30 transition-all group bg-gradient-to-br from-white to-gray-50"
                      >
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 pb-6 border-b border-gray-100">
                          <div>
                            <p className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Order #{order.orderId}</p>
                            <p className="text-sm text-gray-600 font-medium">Placed on {order.date}</p>
                          </div>
                          <div className="text-left sm:text-right mt-4 sm:mt-0">
                            <p className="font-black text-gray-900 text-2xl mb-2">₹{order.amount}</p>
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${getStatusColor(order.status)}`}
                            >
                              {getStatusIcon(order.status)}
                              {order.status}
                            </motion.div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-20 h-20 bg-gray-100 rounded-xl overflow-hidden border-2 border-gray-200 flex-shrink-0">
                              <img src={order.items[0].image} alt="Item" className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <p className="font-bold text-gray-900 text-lg">{order.items[0].name}</p>
                              <p className="text-sm text-gray-500">Qty: {order.items[0].qty}</p>
                            </div>
                          </div>
                          <motion.button
                            whileHover={{ x: 4 }}
                            className="text-primary font-bold flex items-center hover:text-primary/80 bg-primary/5 px-4 py-2 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                          >
                            <Eye className="h-4 w-4 mr-1" /> View
                          </motion.button>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )}

              {/* Wishlist Tab */}
              {activeTab === 'wishlist' && (
                <motion.div
                  key="wishlist"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg"
                >
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                    <h2 className="text-3xl font-black text-gray-900">My Wishlist</h2>
                    <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full font-bold text-sm">
                      {wishlistItems.length} Items
                    </span>
                  </div>

                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {wishlistItems.map((item) => (
                      <motion.div
                        key={item.id}
                        variants={itemVariants}
                        whileHover={{ y: -8 }}
                        className="group"
                      >
                        <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all h-full flex flex-col">
                          <div className="h-48 bg-gray-200 overflow-hidden relative">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-lg"
                            >
                              <Heart className="h-5 w-5 fill-red-500 text-red-500" />
                            </motion.button>
                          </div>
                          <div className="p-5 flex flex-col flex-1 justify-between">
                            <div>
                              <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-2">{item.name}</h3>
                              <div className="flex items-center gap-1 mb-3">
                                {[...Array(5)].map((_, i) => (
                                  <span key={i} className="text-yellow-400">★</span>
                                ))}
                                <span className="text-sm font-bold text-gray-700 ml-1">{item.rating}</span>
                              </div>
                            </div>
                            <div>
                              <p className="text-2xl font-black text-primary mb-4">₹{item.price}</p>
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="w-full bg-primary text-white font-bold py-2 rounded-lg transition-all"
                              >
                                Add to Cart
                              </motion.button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )}

              {/* Addresses Tab */}
              {activeTab === 'addresses' && (
                <motion.div
                  key="addresses"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg"
                >
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                    <h2 className="text-3xl font-black text-gray-900">Saved Addresses</h2>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setShowAddAddress(!showAddAddress)}
                      className="bg-primary text-white font-bold px-6 py-3 rounded-xl flex items-center gap-2 hover:shadow-lg"
                    >
                      <Plus className="h-5 w-5" /> Add Address
                    </motion.button>
                  </div>

                  <motion.div
                    className="space-y-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {addresses.map((addr) => (
                      <motion.div
                        key={addr.id}
                        variants={itemVariants}
                        whileHover={{ x: 4 }}
                        className="border-2 border-gray-100 rounded-2xl p-6 hover:border-primary/30 transition-all group relative"
                      >
                        {addr.default && (
                          <span className="absolute top-3 right-3 bg-green-50 text-green-600 text-xs font-bold px-3 py-1 rounded-full">
                            Default
                          </span>
                        )}
                        <h3 className="font-bold text-lg text-gray-900 mb-2">{addr.name}</h3>
                        <p className="text-gray-600 text-sm mb-3">{addr.address}</p>
                        <p className="text-gray-600 text-sm mb-4">📱 {addr.phone}</p>
                        <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="text-primary font-bold flex items-center gap-1 text-sm bg-primary/5 px-3 py-2 rounded-lg"
                          >
                            <Edit2 className="h-4 w-4" /> Edit
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="text-red-500 font-bold flex items-center gap-1 text-sm bg-red-50 px-3 py-2 rounded-lg"
                          >
                            <Trash2 className="h-4 w-4" /> Delete
                          </motion.button>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )}

              {/* Profile Settings Tab */}
              {activeTab === 'profile' && (
                <motion.div
                  key="profile"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg"
                >
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                    <h2 className="text-3xl font-black text-gray-900">Profile Settings</h2>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setEditingProfile(!editingProfile)}
                      className="bg-primary text-white font-bold px-6 py-3 rounded-xl flex items-center gap-2 hover:shadow-lg"
                    >
                      <Edit2 className="h-5 w-5" /> {editingProfile ? 'Cancel' : 'Edit'}
                    </motion.button>
                  </div>

                  <motion.div
                    className="space-y-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-3">First Name</label>
                        <input
                          type="text"
                          disabled={!editingProfile}
                          defaultValue="John"
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none font-bold disabled:bg-gray-50 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-3">Last Name</label>
                        <input
                          type="text"
                          disabled={!editingProfile}
                          defaultValue="Doe"
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none font-bold disabled:bg-gray-50 transition-all"
                        />
                      </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-bold text-gray-700 mb-3">Email</label>
                      <input
                        type="email"
                        disabled
                        defaultValue="john.doe@example.com"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 font-bold bg-gray-50 cursor-not-allowed"
                      />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-bold text-gray-700 mb-3">Phone Number</label>
                      <input
                        type="tel"
                        disabled={!editingProfile}
                        defaultValue="+91 9876543210"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none font-bold disabled:bg-gray-50 transition-all"
                      />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-bold text-gray-700 mb-3">Date of Birth</label>
                      <input
                        type="date"
                        disabled={!editingProfile}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none font-bold disabled:bg-gray-50 transition-all"
                      />
                    </motion.div>

                    {editingProfile && (
                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        whileHover={{ scale: 1.05 }}
                        className="w-full bg-primary text-white font-bold py-4 rounded-xl text-lg hover:shadow-lg transition-all mt-8"
                      >
                        Save Changes
                      </motion.button>
                    )}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
