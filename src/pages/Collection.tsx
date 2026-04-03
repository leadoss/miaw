import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS } from '../types';
import { ProductCard } from '../components/ProductCard';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';

export const Collection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('featured');

  const categoryFilter = searchParams.get('cat');

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];
    if (categoryFilter && categoryFilter !== 'all') {
      result = result.filter(p => p.category.toLowerCase() === categoryFilter.toLowerCase());
    }
    
    if (sortBy === 'price-low') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') result.sort((a, b) => b.price - a.price);
    if (sortBy === 'newest') result.sort((a, b) => b.id.localeCompare(a.id));
    
    return result;
  }, [categoryFilter, sortBy]);

  const categories = ['All', 'Briefs', 'Thongs', 'Bralettes'];

  return (
    <div className="pt-32 pb-24 px-6 bg-brand-beige min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-5xl font-serif font-bold text-brand-dark capitalize">
            {categoryFilter ? categoryFilter : 'Shop All'}
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Discover our collection of premium intimate essentials. Designed for comfort, crafted for confidence.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 border-b border-gray-200 pb-6">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSearchParams({ cat: cat.toLowerCase() })}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap ${
                  (categoryFilter === cat.toLowerCase() || (!categoryFilter && cat === 'All'))
                    ? 'bg-brand-dark text-white shadow-lg'
                    : 'bg-white text-gray-400 hover:text-brand-dark'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
            <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-brand-accent transition-colors">
              <SlidersHorizontal size={16} /> Filters
            </button>
            
            <div className="relative">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent pr-8 pl-2 py-2 text-xs font-bold uppercase tracking-widest outline-none cursor-pointer"
              >
                <option value="featured">Sort: Featured</option>
                <option value="newest">Sort: Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
