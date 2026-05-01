"use client";
import React, { useState } from 'react';
import { Filter, ChevronDown, SlidersHorizontal, Gift, Star } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';

const BASE_PRODUCTS = [
  { id: '1', name: 'Premium Red Roses Bouquet', price: 999, originalPrice: 1299, rating: 4.8, reviewCount: 124, image: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=500', discount: 20 },
  { id: '2', name: 'Chocolate Truffle Cake', price: 850, originalPrice: 1000, rating: 4.9, reviewCount: 89, image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=500', discount: 15 },
  { id: '3', name: 'Personalized Name Necklace', price: 1499, originalPrice: 1999, rating: 4.7, reviewCount: 210, image: 'https://images.pexels.com/photos/10983783/pexels-photo-10983783.jpeg?auto=compress&cs=tinysrgb&w=500', discount: 25 },
  { id: '4', name: 'Silver Hoop Earrings', price: 699, rating: 4.5, reviewCount: 45, image: 'https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg?auto=compress&cs=tinysrgb&w=500', isNew: true },
];

const SAMPLE_PRODUCTS = [
  ...BASE_PRODUCTS,
  ...BASE_PRODUCTS.map(p => ({ ...p, id: p.id + '_2', name: p.name + ' - Deluxe', price: p.price + 200, reviewCount: p.reviewCount + 10 })),
  ...BASE_PRODUCTS.map(p => ({ ...p, id: p.id + '_3', name: p.name + ' - Premium', price: p.price + 400, reviewCount: p.reviewCount + 50 })),
  ...BASE_PRODUCTS.map(p => ({ ...p, id: p.id + '_4', name: p.name + ' - Standard', price: p.price - 100, reviewCount: p.reviewCount + 5 })),
  ...BASE_PRODUCTS.map(p => ({ ...p, id: p.id + '_5', name: p.name + ' - Special Edition', price: p.price + 500, reviewCount: p.reviewCount + 115 })),
  ...BASE_PRODUCTS.map(p => ({ ...p, id: p.id + '_6', name: p.name + ' - Plus', price: p.price + 50, reviewCount: p.reviewCount + 2 })),
];

export default function OccasionPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = React.use(params);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Format slug for display (e.g., "anniversary" -> "Anniversary")
  const occasionName = resolvedParams.slug.charAt(0).toUpperCase() + resolvedParams.slug.slice(1);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Breadcrumbs */}
      <nav className="text-sm mb-4 text-gray-500 font-medium">
        <ol className="flex items-center space-x-2">
          <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
          <li><span>›</span></li>
          <li><a href="/occasion" className="hover:text-primary transition-colors">Occasions</a></li>
          <li><span>›</span></li>
          <li className="text-gray-900 font-bold">{occasionName}</li>
        </ol>
      </nav>
      
      <div className="mb-6 pb-4 border-b border-gray-200">
        <div className="flex items-center gap-2 mb-1">
          <Gift className="h-5 w-5 text-gray-400" />
          <h1 className="text-2xl font-bold text-gray-900">
            {occasionName} Special <span className="text-sm font-normal text-gray-500 ml-2">({SAMPLE_PRODUCTS.length} results)</span>
          </h1>
        </div>
        <p className="text-sm text-gray-500 mt-1">Curated gifts for perfect {resolvedParams.slug} celebrations</p>
      </div>

      <div className="flex flex-col gap-8">

        {/* Filter Overlay / Drawer */}
        {isFilterOpen && (
          <div className="fixed inset-0 z-[100] flex">
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm transition-opacity" 
              onClick={() => setIsFilterOpen(false)}
            />
            
            {/* Drawer */}
            <aside className="relative z-50 w-full max-w-xs flex-shrink-0 bg-white shadow-2xl h-full overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                  <h2 className="text-lg font-bold text-gray-900 flex items-center">
                    <Filter className="h-5 w-5 mr-2"/> Filters
                  </h2>
                  <button onClick={() => setIsFilterOpen(false)} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Close panel</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="mb-4">
                   <button onClick={() => setIsFilterOpen(false)} className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors w-full text-left">Clear All Filters</button>
                </div>
                
                {/* Delivery Day */}
                <div className="mb-6">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm">Delivery Day</h3>
                  <div className="space-y-3">
                    {['Today', 'Tomorrow', 'Any Date'].map(opt => (
                      <label key={opt} className="flex items-center space-x-2 cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        <span className="text-sm text-gray-700 hover:text-gray-900 transition-colors">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6 border-t border-gray-200 pt-4">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm">Price</h3>
                  <div className="space-y-3">
                    {['Under ₹500', '₹500 - ₹1000', '₹1000 - ₹2000', 'Over ₹2000'].map(range => (
                      <label key={range} className="flex items-center space-x-2 cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        <span className="text-sm text-gray-700 hover:text-gray-900 transition-colors">{range}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Customer Reviews */}
                <div className="mb-6 border-t border-gray-200 pt-4">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm">Customer Reviews</h3>
                  <div className="space-y-3">
                    <button className="flex items-center text-sm text-gray-700 hover:text-orange-500 w-full text-left">
                      <div className="flex text-yellow-400 mr-2">
                        {Array.from({ length: 4 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                        <Star className="h-4 w-4 text-gray-300" />
                      </div>
                      &amp; Up
                    </button>
                    <button className="flex items-center text-sm text-gray-700 hover:text-orange-500 w-full text-left">
                      <div className="flex text-yellow-400 mr-2">
                        {Array.from({ length: 3 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                        {Array.from({ length: 2 }).map((_, i) => <Star key={i} className="h-4 w-4 text-gray-300" />)}
                      </div>
                      &amp; Up
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        )}

        <div className="flex-1 w-full">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsFilterOpen(true)} 
                className="flex items-center text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-50 transition-colors shadow-sm"
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" /> Filters
              </button>
              <span className="hidden sm:inline text-sm text-gray-500 font-medium">1-{SAMPLE_PRODUCTS.length} of over {SAMPLE_PRODUCTS.length} results for "{occasionName}"</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="hidden sm:inline text-sm text-gray-700 font-medium">Sort by:</span>
              <div className="relative">
                <select className="appearance-none bg-white border border-gray-300 text-sm text-gray-700 py-2 pl-3 pr-8 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 cursor-pointer shadow-sm">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Avg. Customer Review</option>
                  <option>Newest Arrivals</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {SAMPLE_PRODUCTS.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
