"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Github, Chrome, Gift, Sparkles } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Temporary mock sign-in logic
    setTimeout(() => {
      login(formData.email);
      setIsLoading(false);
      // Redirect to home or account page
      router.push('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[450px]"
      >
        {/* Logo & Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block group mb-6">
            <div className="flex flex-col items-center leading-tight">
              <span className="text-3xl font-black text-gray-900 tracking-tighter group-hover:text-primary transition-colors">GiftAura</span>
              <span className="text-[10px] text-secondary font-bold tracking-[0.3em] uppercase">Premium Gifting</span>
            </div>
          </Link>
          <h1 className="text-2xl font-black text-gray-900 tracking-tight">Welcome Back</h1>
          <p className="text-sm text-gray-500 font-medium mt-1">Sign in to access your luxury gifting experience</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-4 w-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                </div>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all font-bold text-sm text-gray-900"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex items-center justify-between ml-1">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest">
                  Password
                </label>
                <Link href="#" className="text-[11px] font-black text-primary uppercase tracking-widest hover:text-secondary transition-colors">
                  Forgot?
                </Link>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-11 pr-12 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all font-bold text-sm text-gray-900"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center">
                <input type="checkbox" className="peer sr-only" />
                <div className="w-5 h-5 bg-gray-50 border border-gray-200 rounded-lg peer-checked:bg-primary peer-checked:border-primary transition-all" />
                <svg className="absolute w-3 h-3 text-white left-1 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-xs font-bold text-gray-500 group-hover:text-gray-700 transition-colors">Keep me signed in</span>
            </label>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full py-4 bg-[#121212] text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:shadow-2xl hover:bg-black transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <span>Unlock Aura</span>
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </motion.button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase tracking-widest font-black">
              <span className="bg-white px-4 text-gray-300">Or continue with</span>
            </div>
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 py-3 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-all group">
              <Chrome className="h-4 w-4 group-hover:text-[#4285F4] transition-colors" />
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-600">Google</span>
            </button>
            <button className="flex items-center justify-center gap-3 py-3 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-all group">
              <Github className="h-4 w-4 group-hover:text-black transition-colors" />
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-600">Github</span>
            </button>
          </div>
        </div>

        {/* Footer Link */}
        <p className="text-center mt-8 text-sm font-bold text-gray-500">
          New to GiftAura?{' '}
          <Link href="#" className="text-primary hover:text-secondary border-b-2 border-primary/20 hover:border-secondary transition-all">
            Create an account
          </Link>
        </p>

        {/* Trust Badges */}
        <div className="mt-12 flex justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
           <div className="flex flex-col items-center gap-1">
              <Sparkles className="h-4 w-4" />
              <span className="text-[8px] font-black uppercase tracking-[0.2em]">Authentic</span>
           </div>
           <div className="flex flex-col items-center gap-1">
              <Gift className="h-4 w-4" />
              <span className="text-[8px] font-black uppercase tracking-[0.2em]">Premium</span>
           </div>
           <div className="flex flex-col items-center gap-1">
              <Lock className="h-4 w-4" />
              <span className="text-[8px] font-black uppercase tracking-[0.2em]">Secure</span>
           </div>
        </div>
      </motion.div>
    </div>
  );
}
