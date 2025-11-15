import React from 'react';
import FilterSection from '../components/FilterSection';
import AuctionCard from '../components/AuctionCard';

export default function AuctionsPage({
  searchTerm,
  setSearchTerm,
  categories,
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  filteredItems,
  auctionItems
}) {
  return (
    <div className="py-8 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Browse Auctions</h1>
        
        <FilterSection 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />

        <div className="mb-4 text-gray-600">
          Showing {filteredItems.length} of {auctionItems.length} auctions
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map(item => (
            <AuctionCard key={item.id} item={item} />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No auctions found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}