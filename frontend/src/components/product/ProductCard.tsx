"use client";
import React, { memo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
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
  const [isHovered, setIsHovered] = useState(false);

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
    <motion.div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10, 
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }}
      className="bg-white rounded-2xl overflow-hidden border border-gray-100 transition-all duration-500 group relative flex flex-col h-full p-2 md:p-3 animate-shine"
    >
      <motion.div 
        className="absolute top-3 left-3 z-10 flex flex-col gap-1"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        {product.discount && (
          <motion.span 
            className="bg-red-500 text-white text-[10px] md:text-[11px] font-black px-2 py-0.5 rounded-full shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 15, delay: 0.3 }}
          >
            {product.discount}% OFF
          </motion.span>
        )}
      </motion.div>
      
      <motion.button
        onClick={handleToggleWishlist}
        whileHover={{ scale: 1.2, rotate: 5 }}
        whileTap={{ scale: 0.8 }}
        className={`absolute top-3 right-3 z-10 p-2 rounded-full transition-all flex items-center justify-center shadow-lg backdrop-blur-md ${
          wishlisted
            ? 'bg-red-50 text-red-500'
            : 'bg-white/80 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100'
        }`}
      >
        <Heart className={`h-4 w-4 ${wishlisted ? 'fill-current' : ''}`} />
      </motion.button>

      <Link href={`/product/${product.id}`} className="block overflow-hidden rounded-xl bg-gray-50/50">
        <motion.div 
          className="relative h-44 md:h-56 flex items-center justify-center p-4"
        >
          <Image 
            src={product.image || "/images/products/red-roses.png"}
            alt={product.name}
            fill
            className="w-full h-full object-contain transition-all duration-700"
            style={{ 
              transform: isHovered ? 'scale(1.1) translateY(-5px)' : 'scale(1)',
              filter: isHovered ? 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))' : 'none'
            }}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </motion.div>
      </Link>
      
      <div className="pt-4 pb-2 px-1 flex flex-col flex-grow">
        <Link href={`/product/${product.id}`}>
          <motion.h3 
            className="text-sm md:text-base font-black text-gray-900 line-clamp-2 hover:text-primary transition-colors mb-1.5 leading-tight tracking-tight"
            whileHover={{ x: 2 }}
          >
            {product.name}
          </motion.h3>
        </Link>
        
        <div className="flex items-center gap-2 mb-3">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-200'}`} 
              />
            ))}
          </div>
          <span className="text-[11px] text-gray-400 font-bold">({product.reviews})</span>
        </div>
        
        <div className="mt-auto">
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-xl md:text-2xl font-black text-gray-900">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through font-medium">₹{product.originalPrice}</span>
            )}
          </div>
          
          <motion.div 
            className="flex flex-col gap-1.5 mb-4 p-2 bg-gray-50 rounded-lg border border-gray-100"
            animate={{ opacity: isHovered ? 1 : 0.8 }}
          >
            <p className="text-[10px] text-gray-600 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              Get it by <span className="font-black text-gray-900">Tomorrow</span>
            </p>
            <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">FREE Delivery by GiftAura</p>
          </motion.div>
        </div>
        
        <div className="flex gap-2 mt-auto">
          <motion.button
            onClick={handleAddToCart}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 bg-white hover:bg-gray-50 text-gray-900 text-xs font-black py-2.5 rounded-xl transition-all shadow-sm border border-gray-200 uppercase tracking-wider"
          >
            Add to Cart
          </motion.button>
          <motion.button
            onClick={handleBuyNow}
            whileHover={{ scale: 1.05, y: -2, backgroundColor: '#121212' }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 bg-primary text-white text-xs font-black py-2.5 rounded-xl transition-all shadow-md uppercase tracking-wider"
          >
            Buy Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default memo(ProductCard, (prevProps, nextProps) => {
  return prevProps.product.id === nextProps.product.id &&
         prevProps.product.price === nextProps.product.price &&
         prevProps.product.rating === nextProps.product.rating;
});
