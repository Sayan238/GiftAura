"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Star, Truck, Shield, Heart, Share2, Minus, Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';

import { useWishlist } from '@/context/WishlistContext';

const PRODUCT = {
  id: '1',
  name: 'Premium Red Roses Bouquet with Truffle Cake',
  price: 1499,
  originalPrice: 1999,
  discount: 25,
  rating: 4.8,
  reviews: 124,
  description: 'Express your deepest emotions with this classic combination of farm-fresh, long-stemmed red roses and a deeply rich half kg chocolate truffle cake. Carefully arranged by our expert florists, this combo is the ultimate expression of love and affection, perfect for anniversaries, birthdays, or just because.',
  features: [
    'Hand-picked premium red roses (12-15 stems)',
    'Freshly baked 500g Chocolate Truffle Premium Cake',
    'Elegant red wrapping with golden ribbon',
    'Personalized message card included'
  ]
};

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = React.use(params);
  const router = useRouter();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [qty, setQty] = useState(1);
  const [pincode, setPincode] = useState('');

  const wishlisted = isInWishlist(PRODUCT.id);

  const handleToggleWishlist = () => {
    if (wishlisted) {
      removeFromWishlist(PRODUCT.id);
    } else {
      addToWishlist({
        id: PRODUCT.id,
        name: PRODUCT.name,
        price: PRODUCT.price,
        originalPrice: PRODUCT.originalPrice,
        image: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=200',
      });
    }
  };

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) {
      addToCart({
        id: PRODUCT.id,
        name: PRODUCT.name,
        price: PRODUCT.price,
        image: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=200',
      });
    }
    router.push('/cart');
  };

  const handleBuyNow = () => {
    for (let i = 0; i < qty; i++) {
      addToCart({
        id: PRODUCT.id,
        name: PRODUCT.name,
        price: PRODUCT.price,
        image: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=200',
      });
    }
    router.push('/checkout');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div className="space-y-4">
            <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden group shadow-inner">
              <img src="https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Product Main" className="w-full h-full object-cover" />
              <button 
                onClick={handleToggleWishlist}
                className={`absolute top-4 right-4 p-3 rounded-full shadow-sm transition-all z-10 flex items-center justify-center ${
                  wishlisted 
                    ? 'bg-rose-500 text-white' 
                    : 'bg-white/90 text-gray-400 hover:text-rose-500 hover:bg-white'
                }`}
              >
                <Heart className={`h-5 w-5 ${wishlisted ? 'fill-current' : ''}`} />
              </button>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[
                'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=200',
                'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=200',
                'https://images.pexels.com/photos/10983783/pexels-photo-10983783.jpeg?auto=compress&cs=tinysrgb&w=200',
                'https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg?auto=compress&cs=tinysrgb&w=200'
              ].map((imgUrl, idx) => (
                <div key={idx} className="aspect-square bg-gray-50 rounded-xl cursor-pointer hover:ring-2 hover:ring-primary transition-all overflow-hidden border border-gray-100">
                  <img src={imgUrl} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mb-6 flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-extrabold text-gray-900 leading-tight mb-2">{PRODUCT.name}</h1>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1 bg-yellow-50 px-2 py-1 rounded-full border border-yellow-100">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-bold text-gray-800">{PRODUCT.rating}</span>
                  </div>
                  <span className="text-sm text-primary font-medium hover:underline cursor-pointer">{PRODUCT.reviews} Reviews</span>
                </div>
              </div>
              <button className="p-2 text-gray-400 hover:text-gray-900 bg-gray-50 rounded-full transition-colors flex-shrink-0">
                <Share2 className="h-5 w-5" />
              </button>
            </div>

            <div className="mb-8">
              <div className="flex items-end space-x-3 mb-2">
                <span className="text-4xl font-black text-gray-900">₹{PRODUCT.price}</span>
                <span className="text-xl text-gray-400 line-through mb-1">₹{PRODUCT.originalPrice}</span>
                <span className="text-sm font-bold text-green-600 bg-green-50 px-2 py-1 rounded-md mb-1">{PRODUCT.discount}% OFF</span>
              </div>
              <p className="text-sm text-gray-500 font-medium">Inclusive of all taxes</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Check Delivery Options</h4>
                  <p className="text-sm text-gray-500">Enter pincode to check availability</p>
                </div>
                <div className="flex w-1/2">
                  <input 
                    type="text" 
                    placeholder="Enter Pincode" 
                    className="w-full px-4 py-2 rounded-l-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                  />
                  <button className="bg-gray-900 text-white px-4 py-2 rounded-r-lg font-medium hover:bg-gray-800 transition-colors">
                    Check
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-6 py-4 border-b border-gray-100">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Truck className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Free Same-Day Delivery</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Shield className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium">100% Secure Payment</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-10 w-full sm:w-3/4">
              <div className="flex items-center border border-gray-200 rounded-xl h-14 bg-gray-50">
                <button 
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="px-4 text-gray-500 hover:text-primary transition-colors"
                >
                  <Minus className="h-5 w-5" />
                </button>
                <span className="w-10 text-center font-bold text-gray-900 text-lg">{qty}</span>
                <button 
                  onClick={() => setQty(qty + 1)}
                  className="px-4 text-gray-500 hover:text-primary transition-colors"
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>
              
              <button onClick={handleAddToCart} className="flex-1 h-14 bg-white border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary/5 transition-colors flex items-center justify-center">
                Add to Cart
              </button>
              <button onClick={handleBuyNow} className="flex-1 h-14 bg-primary text-white font-bold rounded-xl hover:bg-[#c5a028] transition-colors shadow-lg shadow-primary/30 flex items-center justify-center">
                Buy Now
              </button>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg border-b border-gray-100 pb-2">Product Description</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{PRODUCT.description}</p>
              
              <h3 className="font-bold text-gray-900 mb-3 text-lg border-b border-gray-100 pb-2">Key Features</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 font-medium">
                {PRODUCT.features.map((feat, idx) => (
                  <li key={idx}>{feat}</li>
                ))}
              </ul>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
