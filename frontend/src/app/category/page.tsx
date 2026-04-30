"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Gift, Flower, Coffee, Heart } from 'lucide-react';

const CATEGORIES = [
  { 
    name: 'Luxury Gifts', 
    slug: 'gifts', 
    img: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=600',
    count: 156,
    icon: Gift
  },
  { 
    name: 'Fresh Blooms', 
    slug: 'flowers', 
    img: 'https://images.pexels.com/photos/371285/pexels-photo-371285.jpeg?auto=compress&cs=tinysrgb&w=600',
    count: 89,
    icon: Flower
  },
  { 
    name: 'Artisan Cakes', 
    slug: 'cakes', 
    img: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600',
    count: 124,
    icon: Coffee
  },
  { 
    name: 'Fine Jewellery', 
    slug: 'jewellery', 
    img: 'https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg?auto=compress&cs=tinysrgb&w=600',
    count: 210,
    icon: Sparkles
  },
  { 
    name: 'Personalized', 
    slug: 'personalized', 
    img: 'https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=600',
    count: 45,
    icon: Heart
  }
];

export default function AllCategoriesPage() {
  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-gray-900 mb-4 tracking-tighter">Explore Categories</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">Discover our curated collection of premium gifts, flowers, and more for every occasion.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((cat) => (
            <Link 
              key={cat.slug} 
              href={`/category/${cat.slug}`}
              className="group relative h-[400px] rounded-[2rem] overflow-hidden shadow-2xl transition-all hover:-translate-y-2 hover:shadow-primary/20"
            >
              <img 
                src={cat.img} 
                alt={cat.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg">
                        <cat.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-white/80 text-sm font-bold uppercase tracking-widest">{cat.count} Items</span>
                </div>
                <h3 className="text-3xl font-black text-white mb-4">{cat.name}</h3>
                <div className="flex items-center text-secondary font-bold gap-2 group-hover:gap-4 transition-all">
                  Shop Now <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
