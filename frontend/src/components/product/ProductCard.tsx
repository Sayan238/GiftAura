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
    <div className="bg-white rounded-md overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 group relative flex flex-col h-full p-2">
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-1">
        {product.discount && (
          <span className="bg-red-600 text-white text-[11px] font-bold px-2 py-0.5 rounded-sm shadow-sm">
            {product.discount}% OFF
          </span>
        )}
      </div>
      
      <button
        onClick={handleToggleWishlist}
        className={`absolute top-4 right-4 z-10 p-2 rounded-full transition-all flex items-center justify-center shadow-md ${
          wishlisted
            ? 'bg-white text-red-500'
            : 'bg-white text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100'
        }`}
      >
        <Heart className={`h-4 w-4 ${wishlisted ? 'fill-current' : ''}`} />
      </button>

      <Link href={`/product/${product.id}`} className="block overflow-hidden rounded-sm">
        <div className="relative h-64 bg-white flex items-center justify-center">
          <Image 
            src={product.image || "https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=500"}
            alt={product.name}
            fill
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </Link>
      
      <div className="pt-4 pb-2 px-2 flex flex-col flex-grow">
        <Link href={`/product/${product.id}`}>
          <h3 className="text-sm font-bold text-gray-900 line-clamp-2 hover:text-orange-600 transition-colors mb-1 leading-snug">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center space-x-1 mb-2">
          <div className="flex text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-200'}`} />
            ))}
          </div>
          <span className="text-[12px] text-blue-600 hover:text-orange-600 font-medium">({product.reviews})</span>
        </div>
        
        <div className="mt-auto">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-2xl font-bold text-gray-900">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">M.R.P: ₹{product.originalPrice}</span>
            )}
          </div>
          
          <div className="space-y-1 mb-4">
            <p className="text-[12px] text-gray-700">Get it by <span className="font-bold">Tomorrow</span></p>
            <p className="text-[12px] text-gray-600 italic">FREE Delivery by GiftAura</p>
          </div>
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-[#ffd814] hover:bg-[#f7ca00] text-gray-900 text-[13px] font-bold py-2 rounded-full transition-all shadow-sm border border-[#fcd200]"
          >
            Add to Cart
          </button>
          <button
            onClick={handleBuyNow}
            className="flex-1 bg-[#ffa41c] hover:bg-[#fa8900] text-gray-900 text-[13px] font-bold py-2 rounded-full transition-all shadow-sm border border-[#ee9100]"
          >
            Buy Now
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
