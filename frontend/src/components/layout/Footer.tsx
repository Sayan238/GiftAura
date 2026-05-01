import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white pt-12 pb-6">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <span className="text-2xl font-black text-secondary tracking-tighter mb-4 flex">GiftAura</span>
            <p className="text-gray-400 text-xs leading-relaxed mb-4 max-w-xs">
              Delivering happiness & beautiful surprises. Premium gifting platform for flowers, cakes, jewellery, and personalized gifts.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-secondary hover:text-black transition-all">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-secondary hover:text-black transition-all">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-secondary hover:text-black transition-all">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-white/40 mb-4">Categories</h3>
            <ul className="space-y-2 text-xs text-gray-400 font-bold">
              <li><Link href="/category/flowers" className="hover:text-secondary transition-colors">Fresh Flowers</Link></li>
              <li><Link href="/category/cakes" className="hover:text-secondary transition-colors">Delicious Cakes</Link></li>
              <li><Link href="/category/jewellery" className="hover:text-secondary transition-colors">Premium Jewellery</Link></li>
              <li><Link href="/category/gifts" className="hover:text-secondary transition-colors">Personalized Gifts</Link></li>
              <li><Link href="/category/hampers" className="hover:text-secondary transition-colors">Gift Hampers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-white/40 mb-4">Customer Service</h3>
            <ul className="space-y-2 text-xs text-gray-400 font-bold">
              <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
              <li><Link href="/track" className="hover:text-secondary transition-colors">Track Order</Link></li>
              <li><Link href="/shipping" className="hover:text-secondary transition-colors">Shipping Policy</Link></li>
              <li><Link href="/faq" className="hover:text-secondary transition-colors">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-white/40 mb-4">Contact Info</h3>
            <ul className="space-y-3 text-xs text-gray-400 font-bold">
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 text-secondary shrink-0" />
                <span className="leading-tight">123 Gifting Street, Cyber City, Techville 400012</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-secondary shrink-0" />
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-secondary shrink-0" />
                <span>support@giftaura.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} GiftAura. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
