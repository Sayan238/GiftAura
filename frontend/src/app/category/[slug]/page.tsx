"use client";
import React, { useState, useMemo } from 'react';
import { Filter, ChevronDown, SlidersHorizontal, Star, X } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';

const BASE_PRODUCTS = [
  { id: '1', name: 'Premium Red Roses Bouquet', price: 999, originalPrice: 1299, rating: 4.8, reviews: 124, image: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=500', discount: 20 },
  { id: '2', name: 'Chocolate Truffle Cake', price: 850, originalPrice: 1000, rating: 4.9, reviews: 89, image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=500', discount: 15 },
  { id: '3', name: 'Personalized Name Necklace', price: 1499, originalPrice: 1999, rating: 4.7, reviews: 210, image: 'https://images.pexels.com/photos/10983783/pexels-photo-10983783.jpeg?auto=compress&cs=tinysrgb&w=500', discount: 25 },
  { id: '4', name: 'Silver Hoop Earrings', price: 699, rating: 4.5, reviews: 45, image: 'https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg?auto=compress&cs=tinysrgb&w=500', isNew: true },
  { id: '5', name: 'Orchid Flower Vase', price: 1299, originalPrice: 1599, rating: 4.6, reviews: 67, image: 'https://images.pexels.com/photos/1024982/pexels-photo-1024982.jpeg?auto=compress&cs=tinysrgb&w=500', discount: 18 },
  { id: '6', name: 'Photo Printed Mug', price: 349, originalPrice: 499, rating: 4.4, reviews: 320, image: 'https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=500', discount: 30 },
  { id: '7', name: 'Red Velvet Cake', price: 950, originalPrice: 1200, rating: 4.8, reviews: 145, image: 'https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=500', discount: 20 },
  { id: '8', name: 'Fresh Fruit Cake', price: 750, originalPrice: 900, rating: 4.6, reviews: 78, image: 'https://images.pexels.com/photos/853151/pexels-photo-853151.jpeg?auto=compress&cs=tinysrgb&w=500', discount: 15 },
  { id: '9', name: 'Gold Pendant Necklace', price: 2999, rating: 4.9, reviews: 56, image: 'https://images.pexels.com/photos/691046/pexels-photo-691046.jpeg?auto=compress&cs=tinysrgb&w=500', isNew: true },
  { id: '10', name: 'White Lilies Bouquet', price: 1199, originalPrice: 1499, rating: 4.7, reviews: 88, image: 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=500', discount: 20 },
  { id: '11', name: 'Luxury Spa Hamper', price: 2499, originalPrice: 2999, rating: 4.9, reviews: 412, image: 'https://images.pexels.com/photos/1020585/pexels-photo-1020585.jpeg?auto=compress&cs=tinysrgb&w=500', discount: 15 },
  { id: '12', name: 'Customized Wooden Frame', price: 599, rating: 4.5, reviews: 150, image: 'https://images.pexels.com/photos/371285/pexels-photo-371285.jpeg?auto=compress&cs=tinysrgb&w=500', isNew: true },
];

const SAMPLE_PRODUCTS = [
  ...BASE_PRODUCTS,
  ...BASE_PRODUCTS.map(p => ({ ...p, id: p.id + '_2', name: p.name + ' - Premium', price: p.price + 150, reviews: p.reviews + 12 })),
  ...BASE_PRODUCTS.map(p => ({ ...p, id: p.id + '_3', name: p.name + ' - Classic', price: p.price - 50, reviews: p.reviews + 40 })),
];

const PRICE_RANGES = [
  { label: 'Under ₹500', min: 0, max: 500 },
  { label: '₹500 - ₹1000', min: 500, max: 1000 },
  { label: '₹1000 - ₹2000', min: 1000, max: 2000 },
  { label: 'Over ₹2000', min: 2000, max: Infinity },
];

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = React.use(params);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('popularity');
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const itemsPerPage = 12;

  // Toggle a price range filter
  const togglePriceRange = (label: string) => {
    setSelectedPriceRanges(prev =>
      prev.includes(label) ? prev.filter(r => r !== label) : [...prev, label]
    );
    setCurrentPage(1); // Reset to page 1 when filter changes
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedPriceRanges([]);
    setSortBy('popularity');
    setCurrentPage(1);
  };

  // Filter & sort products
  const filteredAndSortedProducts = useMemo(() => {
    let products = [...SAMPLE_PRODUCTS];

    // Apply price filter
    if (selectedPriceRanges.length > 0) {
      const activeRanges = PRICE_RANGES.filter(r => selectedPriceRanges.includes(r.label));
      products = products.filter(p =>
        activeRanges.some(r => p.price >= r.min && p.price < r.max)
      );
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        products.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        products.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        products.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case 'rating':
        products.sort((a, b) => b.rating - a.rating);
        break;
      default: // popularity — sort by reviews
        products.sort((a, b) => b.reviews - a.reviews);
        break;
    }

    return products;
  }, [sortBy, selectedPriceRanges]);

  const totalPages = Math.ceil(filteredAndSortedProducts.length / itemsPerPage);
  const currentProducts = filteredAndSortedProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Determine banner image based on category slug
  let bannerImg = 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=1600';
  if (resolvedParams.slug.includes('flower') || resolvedParams.slug.includes('rose') || resolvedParams.slug.includes('orchid') || resolvedParams.slug.includes('lil')) {
    bannerImg = 'https://images.pexels.com/photos/371285/pexels-photo-371285.jpeg?auto=compress&cs=tinysrgb&w=1600';
  } else if (resolvedParams.slug.includes('cake') || resolvedParams.slug.includes('chocolate')) {
    bannerImg = 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1600';
  } else if (resolvedParams.slug.includes('jewel') || resolvedParams.slug.includes('ring') || resolvedParams.slug.includes('necklace') || resolvedParams.slug.includes('earring')) {
    bannerImg = 'https://images.pexels.com/photos/1395306/pexels-photo-1395306.jpeg?auto=compress&cs=tinysrgb&w=1600';
  }

  const categoryName = resolvedParams.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const FilterContent = (
    <div className="p-0">
      <div className="mb-6 flex justify-between items-center">
          <button onClick={() => { clearFilters(); setIsFilterOpen(false); }} className="text-xs font-bold text-blue-600 hover:text-orange-600 transition-colors uppercase tracking-wider">Clear All</button>
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
          {PRICE_RANGES.map(range => (
            <label key={range.label} className="flex items-center space-x-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedPriceRanges.includes(range.label)}
                onChange={() => togglePriceRange(range.label)}
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                {range.label}
              </span>
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
            & Up
          </button>
          <button className="flex items-center text-sm text-gray-700 hover:text-orange-500 w-full text-left">
            <div className="flex text-yellow-400 mr-2">
              {Array.from({ length: 3 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              {Array.from({ length: 2 }).map((_, i) => <Star key={i} className="h-4 w-4 text-gray-300" />)}
            </div>
            & Up
          </button>
        </div>
      </div>
      
      {/* Select City */}
      <div className="mb-6 border-t border-gray-200 pt-4">
        <h3 className="font-bold text-gray-900 mb-3 text-sm">City</h3>
        <select className="w-full bg-white border border-gray-300 text-sm text-gray-700 py-2 px-3 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
          <option>Delhi</option>
          <option>Mumbai</option>
          <option>Bangalore</option>
          <option>Chennai</option>
          <option>Kolkata</option>
        </select>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Breadcrumbs */}
      <nav className="text-[13px] mb-6 text-gray-600 font-medium">
        <ol className="flex items-center space-x-1.5">
          <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
          <li className="text-gray-400">›</li>
          <li><a href="/category" className="hover:text-primary transition-colors">Categories</a></li>
          <li className="text-gray-400">›</li>
          <li className="text-gray-900 font-bold">{categoryName}</li>
        </ol>
      </nav>
      
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 flex items-baseline gap-3">
          {categoryName} 
          <span className="text-xl font-normal text-gray-500">({filteredAndSortedProducts.length} results)</span>
        </h1>
      </div>

      <div className="flex flex-col gap-8">
        {/* Filter Drawer */}
        {isFilterOpen && (
          <div className="fixed inset-0 z-[100001] flex">
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={() => setIsFilterOpen(false)} />
            <aside className="relative z-50 w-[320px] max-w-[85vw] flex-shrink-0 bg-white shadow-2xl h-full overflow-y-auto">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <h2 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                    <SlidersHorizontal className="h-5 w-5 text-orange-500" /> Filters
                  </h2>
                  <button 
                    onClick={() => setIsFilterOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="h-6 w-6 text-gray-400" />
                  </button>
                </div>
                <div className="flex-1 p-6">
                  {FilterContent}
                </div>
              </div>
            </aside>
          </div>
        )}

        <div className="w-full">
          <div className="flex flex-wrap items-center gap-6 mb-8">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsFilterOpen(true)} 
                className="flex items-center text-sm font-bold text-gray-700 bg-white border border-gray-300 rounded-lg px-6 py-2.5 hover:bg-gray-50 transition-all shadow-sm active:scale-95"
              >
                <SlidersHorizontal className="h-4 w-4 mr-2.5" /> Filters
              </button>
              <span className="text-sm text-gray-600 font-medium">
                {filteredAndSortedProducts.length === 0
                  ? 'No results found'
                  : `1-${Math.min(currentPage * itemsPerPage, filteredAndSortedProducts.length)} of over ${filteredAndSortedProducts.length} results for "${categoryName}"`
                }
              </span>
            </div>
            
            <div className="ml-auto flex items-center space-x-3">
              <span className="hidden sm:inline text-sm text-gray-700 font-bold">Sort by:</span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => { setSortBy(e.target.value); setCurrentPage(1); }}
                  className="appearance-none bg-white border border-gray-300 text-sm font-bold text-gray-700 py-2.5 pl-4 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary cursor-pointer shadow-sm transition-all"
                >
                  <option value="popularity">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Avg. Customer Review</option>
                  <option value="newest">Newest Arrivals</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
              </div>
            </div>
          </div>

          {filteredAndSortedProducts.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-sm">
              <div className="text-6xl mb-4">🔍</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">No products found</h2>
              <p className="text-gray-500 mb-6">Try adjusting your filters to find what you&apos;re looking for.</p>
              <button onClick={clearFilters} className="bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-[#c5a028] transition-colors">
                Clear All Filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {currentProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              
              {totalPages > 1 && (
                <div className="mt-14 mb-8 flex justify-center">
                  <nav className="flex items-center space-x-2">
                    <button 
                      onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      className="px-4 py-2 border border-gray-200 rounded-xl text-gray-500 hover:bg-gray-50 disabled:opacity-50 font-medium transition-colors"
                    >
                      Prev
                    </button>
                    
                    {Array.from({ length: totalPages }).map((_, idx) => (
                      <button 
                        key={idx}
                        onClick={() => setCurrentPage(idx + 1)}
                        className={`w-10 h-10 rounded-xl font-bold transition-colors ${currentPage === idx + 1 ? 'bg-primary text-white shadow-md shadow-primary/20' : 'border border-gray-200 text-gray-700 hover:bg-gray-50'}`}
                      >
                        {idx + 1}
                      </button>
                    ))}

                    <button 
                      onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 disabled:opacity-50 font-medium transition-colors"
                    >
                      Next
                    </button>
                  </nav>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
