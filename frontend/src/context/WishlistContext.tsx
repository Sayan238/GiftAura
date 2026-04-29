"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface WishlistItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
}

interface WishlistContextType {
  items: WishlistItem[];
  addToWishlist: (product: WishlistItem) => void;
  removeFromWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;
  totalItems: number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<WishlistItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('giftaura_wishlist');
      if (saved) setItems(JSON.parse(saved));
    } catch {}
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) localStorage.setItem('giftaura_wishlist', JSON.stringify(items));
  }, [items, loaded]);

  const addToWishlist = (product: WishlistItem) => {
    setItems(prev => {
      if (prev.find(i => i.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  const removeFromWishlist = (id: string) => {
    setItems(prev => prev.filter(i => i.id !== id));
  };

  const isInWishlist = (id: string) => items.some(i => i.id === id);

  const totalItems = items.length;

  return (
    <WishlistContext.Provider value={{ items, addToWishlist, removeFromWishlist, isInWishlist, totalItems }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) throw new Error('useWishlist must be used within a WishlistProvider');
  return context;
}
