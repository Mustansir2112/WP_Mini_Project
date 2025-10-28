import React from 'react';
import { Search, Filter } from 'lucide-react';

export default function FilterSection({ 
  searchTerm, 
  setSearchTerm, 
  categories, 
  selectedCategory, 
  setSelectedCategory,
  priceRange,
  setPriceRange 
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-8">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search auctions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <Filter size={20} className="text-gray-600" />
        <span className="font-semibold text-gray-700">Filters</span>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
          <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat.toLowerCase())}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  selectedCategory === cat.toLowerCase()
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Prices</option>
            <option value="under1000">Under $1,000</option>
            <option value="1000-5000">$1,000 - $5,000</option>
            <option value="over5000">Over $5,000</option>
          </select>
        </div>
      </div>
    </div>
  );
}