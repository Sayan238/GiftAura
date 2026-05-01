"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CreditCard, Wallet, Building, Calendar, CheckCircle2, Shield, QrCode, Smartphone, Loader2, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CheckoutPage() {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [paymentStep, setPaymentStep] = useState('form'); // form, processing, qr, success

  const handlePay = () => {
    setIsProcessing(true);
    
    // Simulate processing delay
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentStep(paymentMethod); // Set to upi, card, netbanking, or wallet
    }, 1500);
  };

  const handleMockSuccess = () => {
    setIsProcessing(true);
    setTimeout(() => {
      router.push('/order-confirmation');
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-gray-50 min-h-screen relative">
      <AnimatePresence>
        {isProcessing && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white/80 backdrop-blur-md z-[10001] flex flex-col items-center justify-center"
          >
            <Loader2 className="h-16 w-16 text-primary animate-spin mb-8" />
            <h2 className="text-2xl font-black text-gray-900 mb-2">Processing Your Secure Payment</h2>
            <p className="text-gray-500 font-medium">Please do not refresh or close the page...</p>
          </motion.div>
        )}

        {/* Unified Payment Modal */}
        {paymentStep !== 'form' && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPaymentStep('form')}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="max-w-lg w-full bg-white border border-gray-100 rounded-[3rem] p-8 md:p-12 shadow-[0_40px_100px_rgba(0,0,0,0.3)] text-center relative overflow-hidden z-10"
            >
              {/* Top Branding */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-secondary to-primary"></div>
              
              {/* Payment Step: UPI */}
              {paymentStep === 'upi' && (
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6">
                    <QrCode className="h-10 w-10" />
                  </div>
                  <h1 className="text-2xl font-black text-gray-900 mb-2">Scan & Pay with UPI</h1>
                  <p className="text-gray-500 text-sm font-medium mb-8">Complete your payment of <span className="text-primary font-black">₹2181.82</span></p>
                  
                  <div className="relative group cursor-pointer mb-8" onClick={handleMockSuccess}>
                    <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] blur-xl group-hover:bg-primary/10 transition-all"></div>
                    <div className="relative bg-white border-2 border-gray-50 p-6 rounded-[2rem] shadow-sm flex flex-col items-center">
                      <img 
                        src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=giftaura@upi&pn=GiftAura%20Premium&am=2181.82&cu=INR" 
                        alt="Payment QR" 
                        className="w-48 h-48 mb-4 group-hover:scale-105 transition-transform duration-500"
                      />
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Merchant: GiftAura Premium Gifting</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Payment Step: CARD */}
              {paymentStep === 'card' && (
                <div className="text-left">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600">
                      <CreditCard className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl font-black text-gray-900">Card Details</h2>
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Secure Credit/Debit Payment</p>
                    </div>
                  </div>

                  <div className="space-y-6 mb-8">
                    <div>
                      <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Card Holder Name</label>
                      <input type="text" placeholder="SAYAN BARMAN" className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 font-bold text-gray-800" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Card Number</label>
                      <div className="relative">
                        <input type="text" placeholder="XXXX XXXX XXXX XXXX" className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 font-bold text-gray-800 tracking-widest" />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-1">
                          <div className="w-8 h-5 bg-blue-600 rounded-sm"></div>
                          <div className="w-8 h-5 bg-orange-500 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Expiry Date</label>
                        <input type="text" placeholder="MM / YY" className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 font-bold text-gray-800" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">CVV</label>
                        <input type="password" placeholder="XXX" className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 font-bold text-gray-800" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Payment Step: NETBANKING */}
              {paymentStep === 'netbanking' && (
                <div className="text-left">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600">
                      <Building className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl font-black text-gray-900">Select Your Bank</h2>
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Choose from popular banks</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {['HDFC Bank', 'ICICI Bank', 'SBI', 'Axis Bank', 'KOTAK', 'PNB'].map((bank) => (
                      <button key={bank} className="p-4 border border-gray-100 rounded-2xl font-bold text-gray-700 hover:border-primary hover:bg-primary/5 hover:text-primary transition-all text-sm">
                        {bank}
                      </button>
                    ))}
                    <button className="col-span-2 p-4 border border-gray-100 rounded-2xl font-bold text-gray-400 hover:text-gray-900 transition-all text-sm italic">
                      More Banks...
                    </button>
                  </div>
                </div>
              )}

              {/* Payment Step: WALLET */}
              {paymentStep === 'wallet' && (
                <div className="text-left">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600">
                      <Wallet className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl font-black text-gray-900">Choose Wallet</h2>
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Fast & Easy checkout</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {['Amazon Pay', 'Paytm Wallet', 'PhonePe Wallet', 'MobiKwik'].map((wallet) => (
                      <button key={wallet} className="w-full p-5 border border-gray-100 rounded-2xl font-black text-gray-800 hover:border-primary hover:bg-primary/5 hover:text-primary transition-all flex items-center justify-between">
                        {wallet}
                        <div className="w-5 h-5 border-2 border-gray-100 rounded-full"></div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Common Buttons */}
              <div className="space-y-4">
                <button 
                  onClick={handleMockSuccess}
                  className="w-full bg-[#121212] text-white font-black py-5 rounded-2xl hover:bg-black transition-all shadow-xl shadow-black/10 flex items-center justify-center gap-3 uppercase tracking-wider text-sm"
                >
                  Confirm & Pay ₹2181.82
                </button>

                <button 
                  onClick={() => setPaymentStep('form')}
                  className="flex items-center gap-2 text-gray-400 hover:text-gray-900 transition-colors mx-auto text-xs font-bold uppercase tracking-widest pt-2"
                >
                  <ArrowLeft className="h-3 w-3" /> Cancel & Go Back
                </button>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-50 flex items-center justify-center gap-2 text-gray-300">
                <Shield className="h-4 w-4" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Secured by GiftAura Pay Guard</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>


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
                  <input type="text" defaultValue="Sayan" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-medium bg-gray-50 focus:bg-white transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                  <input type="text" defaultValue="Barman" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-medium bg-gray-50 focus:bg-white transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Complete Address</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-medium bg-gray-50 focus:bg-white transition-colors" placeholder="Flat, House no., Building, Company, Apartment" defaultValue="123 Luxury Lane, Emerald District" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">City</label>
                  <input type="text" defaultValue="Kolkata" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-medium bg-gray-50 focus:bg-white transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">State</label>
                  <input type="text" defaultValue="West Bengal" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-medium bg-gray-50 focus:bg-white transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">PIN Code</label>
                  <input type="text" defaultValue="700001" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-medium bg-gray-50 focus:bg-white transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                <input type="tel" defaultValue="+91 9876543210" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-medium bg-gray-50 focus:bg-white transition-colors" />
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
              <input type="date" defaultValue="2024-05-15" className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-bold text-gray-800 bg-gray-50 focus:bg-white cursor-pointer transition-colors" />
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
                <span className="text-gray-900 font-bold">1x Royal Crimson Rose Bouquet</span>
                <span className="text-gray-900 font-bold bg-gray-50 px-2 py-1 rounded-md">₹999</span>
              </div>
              <div className="flex justify-between items-start text-sm">
                <span className="text-gray-900 font-bold">1x Midnight Truffle Indulgence</span>
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

            <button 
              onClick={handlePay}
              className="w-full bg-primary text-white font-extrabold py-5 rounded-xl hover:bg-[#c5a028] transition-colors flex items-center justify-center shadow-lg shadow-primary/30 text-lg uppercase tracking-wide"
            >
              <CheckCircle2 className="mr-2 h-6 w-6" /> Pay Securely
            </button>
            
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

