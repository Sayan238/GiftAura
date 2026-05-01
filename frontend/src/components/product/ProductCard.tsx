"use client";
import React, { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { useRouter } from 'next/navigation';

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

function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const router = useRouter();
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

  const handleBuyNow = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    router.push('/checkout');
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
    <div className="bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 group relative flex flex-col h-full p-1.5 md:p-2">
      <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
        {product.discount && (
          <span className="bg-red-600 text-white text-[9px] md:text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm">
            {product.discount}% OFF
          </span>
        )}
      </div>
      
      <button
        onClick={handleToggleWishlist}
        className={`absolute top-2 right-2 z-10 p-1.5 rounded-full transition-all flex items-center justify-center shadow-md ${
          wishlisted
            ? 'bg-white text-red-500'
            : 'bg-white text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100'
        }`}
      >
        <Heart className={`h-3.5 w-3.5 ${wishlisted ? 'fill-current' : ''}`} />
      </button>

      <Link href={`/product/${product.id}`} className="block overflow-hidden rounded">
        <div className="relative h-40 md:h-52 bg-white flex items-center justify-center">
          <Image 
            src={product.image || "https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=500"}
            alt={product.name}
            fill
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 p-2"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </Link>
      
      <div className="pt-2 md:pt-3 pb-1 md:pb-2 px-1 flex flex-col flex-grow">
        <Link href={`/product/${product.id}`}>
          <h3 className="text-xs md:text-sm font-bold text-gray-900 line-clamp-2 hover:text-orange-600 transition-colors mb-0.5 leading-snug">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center space-x-1 mb-1.5">
          <div className="flex text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`h-2.5 w-2.5 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-200'}`} />
            ))}
          </div>
          <span className="text-[10px] md:text-[11px] text-blue-600 hover:text-orange-600 font-medium">({product.reviews})</span>
        </div>
        
        <div className="mt-auto">
          <div className="flex items-baseline gap-1.5 mb-1 flex-wrap">
            <span className="text-base md:text-xl font-bold text-gray-900">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-[10px] md:text-xs text-gray-400 line-through">M.R.P: ₹{product.originalPrice}</span>
            )}
          </div>
          
          <div className="space-y-0.5 mb-3">
            <p className="text-[10px] text-gray-700">Get it by <span className="font-bold">Tomorrow</span></p>
            <p className="text-[9px] text-gray-500 italic">FREE Delivery by GiftAura</p>
          </div>
        </div>
        
        <div className="flex gap-1.5 mt-auto">
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-[#ffd814] hover:bg-[#f7ca00] text-gray-900 text-[11px] md:text-[12px] font-bold py-1.5 rounded-full transition-all shadow-sm border border-[#fcd200]"
          >
            Add
          </button>
          <button
            onClick={handleBuyNow}
            className="flex-1 bg-[#ffa41c] hover:bg-[#fa8900] text-gray-900 text-[11px] md:text-[12px] font-bold py-1.5 rounded-full transition-all shadow-sm border border-[#ee9100]"
          >
            Buy
          </button>
        </div>
      </div>
    </div>

  );
}

export default memo(ProductCard, (prevProps, nextProps) => {
  return prevProps.product.id === nextProps.product.id &&
         prevProps.product.price === nextProps.product.price &&
         prevProps.product.rating === nextProps.product.rating;
});
