"use client";
import React from 'react';
import Link from 'next/link';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    rating: number;
    reviews: number;
    image: string;
    discount?: number;
    isNew?: boolean;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const wishlisted = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    if (wishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.image,
      });
    }
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-200 group relative flex flex-col h-full">
      <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
        {product.discount && (
          <span className="bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm">
            {product.discount}% OFF
          </span>
        )}
        {product.isNew && (
          <span className="bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm">
            NEW
          </span>
        )}
      </div>
      
      <button
        onClick={handleToggleWishlist}
        className={`absolute top-2 right-2 z-10 p-1.5 rounded-full transition-all flex items-center justify-center ${
          wishlisted
            ? 'bg-white/90 text-red-500'
            : 'bg-white/90 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100'
        }`}
        title={wishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
      >
        <Heart className={`h-4 w-4 ${wishlisted ? 'fill-current' : ''}`} />
      </button>

      <Link href={`/product/${product.id}`}>
        <div className="relative h-72 bg-gray-50 overflow-hidden flex items-center justify-center p-4">
          {product.image ? (
            <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300 mix-blend-multiply" />
          ) : (
            <div className="text-gray-300">
               <img src={`https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=500`} alt="Gift" className="w-full h-full object-cover opacity-80" />
            </div>
          )}
        </div>
      </Link>
      
      <div className="p-4 flex flex-col flex-grow border-t border-gray-100">
        <Link href={`/product/${product.id}`}>
          <h3 className="text-sm font-medium text-gray-900 line-clamp-2 hover:text-primary transition-colors mb-1">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center space-x-1 mb-2">
          <div className="flex text-yellow-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-200'}`} />
            ))}
          </div>
          <span className="text-xs text-blue-600 hover:text-orange-500 cursor-pointer ml-1">{product.reviews}</span>
        </div>
        
        <div className="mt-auto mb-3">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-xs text-gray-500 line-through">₹{product.originalPrice}</span>
            )}
            {product.discount && (
              <span className="text-xs text-green-600 font-medium">({product.discount}% off)</span>
            )}
          </div>
          <div className="mt-1 space-y-0.5">
            <p className="text-[11px] text-gray-500">Get it by <span className="font-bold text-gray-900">Tomorrow</span></p>
            <p className="text-[11px] text-gray-500">FREE Delivery by GiftAura</p>
          </div>
        </div>
        
        <button
          onClick={handleAddToCart}
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-sm font-medium py-2 px-4 rounded-full transition-colors flex items-center justify-center gap-2 shadow-sm"
          title="Add to Cart"
        >
          <ShoppingCart className="h-4 w-4" /> Add to Cart
        </button>
      </div>
    </div>
  );
}
