import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <span className="text-3xl font-bold text-primary tracking-tight mb-6 flex">GiftAura</span>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Delivering happiness & beautiful surprises. Premium gifting platform for flowers, cakes, jewellery, and personalized gifts.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Categories</h3>
            <ul className="space-y-3 pb-2 text-sm text-gray-400">
              <li><Link href="/category/flowers" className="hover:text-primary transition-colors">Fresh Flowers</Link></li>
              <li><Link href="/category/cakes" className="hover:text-primary transition-colors">Delicious Cakes</Link></li>
              <li><Link href="/category/jewellery" className="hover:text-primary transition-colors">Premium Jewellery</Link></li>
              <li><Link href="/category/gifts" className="hover:text-primary transition-colors">Personalized Gifts</Link></li>
              <li><Link href="/category/hampers" className="hover:text-primary transition-colors">Gift Hampers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Customer Service</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/track" className="hover:text-primary transition-colors">Track Order</Link></li>
              <li><Link href="/shipping" className="hover:text-primary transition-colors">Shipping Policy</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary shrink-0" />
                <span>123 Gifting Street, Cyber City, Techville 400012</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary shrink-0" />
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary shrink-0" />
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
