"use client";
import React from 'react';
import Link from 'next/link';
import { Heart, ShoppingCart, Trash2, ArrowRight } from 'lucide-react';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';

export default function WishlistPage() {
  const { items, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleMoveToCart = (item: typeof items[0]) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    });
    removeFromWishlist(item.id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center space-x-3 mb-8">
        <div className="bg-rose-100 p-3 rounded-full text-rose-500">
          <Heart className="h-6 w-6 fill-current" />
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900">My Wishlist</h1>
        <span className="text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full text-sm">
          {items.length} Items
        </span>
      </div>

      {items.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group relative flex flex-col">
              
              <button onClick={() => removeFromWishlist(item.id)} className="absolute top-3 right-3 z-10 bg-white/90 p-2 rounded-full text-gray-400 hover:text-red-500 hover:bg-white transition-colors shadow-sm">
                <Trash2 className="h-4 w-4" />
              </button>

              <Link href={`/product/${item.id}`} className="block relative h-56 bg-gray-100 overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </Link>
              
              <div className="p-5 flex-1 flex flex-col">
                <Link href={`/product/${item.id}`}>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                </Link>
                
                <div className="mt-auto pt-4 flex items-center justify-between">
                  <div>
                    <span className="text-xl font-bold text-gray-900">₹{item.price}</span>
                    {item.originalPrice && (
                      <span className="text-sm text-gray-400 line-through ml-2">₹{item.originalPrice}</span>
                    )}
                  </div>
                  
                  <button
                    onClick={() => handleMoveToCart(item)}
                    className="bg-primary/10 text-primary hover:bg-primary hover:text-white p-3 rounded-xl flex items-center justify-center transition-colors"
                    title="Move to Cart"
                  >
                    <ShoppingCart className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-gray-100 p-12 text-center h-[50vh] flex flex-col items-center justify-center">
          <div className="bg-gray-50 w-24 h-24 rounded-full flex items-center justify-center mb-6">
            <Heart className="h-10 w-10 text-gray-300" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Wishlist is Empty</h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">Looks like you haven&apos;t added any items to your wishlist yet. Explore our collections and find something you love!</p>
          <Link href="/" className="inline-flex items-center space-x-2 bg-primary text-white font-bold px-8 py-4 rounded-xl hover:bg-[#c5a028] transition-colors shadow-lg shadow-primary/30">
            <span>Explore Gifts</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      )}
    </div>
  );
}
