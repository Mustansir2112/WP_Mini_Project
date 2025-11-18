import React from 'react';
import { User, Search, Gavel } from 'lucide-react';
import AuctionCard from '../components/AuctionCard';
import { useNavigate } from "react-router-dom";

export default function HomePage({ auctionItems, setOnPage }) {
  const navigate = useNavigate();

  const handleBrowseAuctions = () => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/auctions');
      setOnPage('auctions');
    } else {
      navigate('/login');
      setOnPage('login');
    }
  };

  const handleStartBidding = () => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/auctions');
      setOnPage('auctions');
    } else {
      navigate('/signup');
      setOnPage('signup');
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-600 to-brand-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Discover Unique Items at Amazing Prices
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white/80">
            Join thousands of bidders and find your next treasure
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleBrowseAuctions} 
              className="bg-white text-brand-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition font-bold text-lg"
            >
              Browse Auctions
            </button>
            <button 
              onClick={handleStartBidding} 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-brand-600 transition font-bold text-lg"
            >
              Start Bidding
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition">
              <div className="bg-brand-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="text-brand-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Create Account
              </h3>
              <p className="text-gray-600">
                Sign up in seconds and start exploring amazing auctions
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition">
              <div className="bg-brand-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="text-brand-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Find Items
              </h3>
              <p className="text-gray-600">
                Browse through our curated selection of unique items
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition">
              <div className="bg-brand-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gavel className="text-brand-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Place Bids
              </h3>
              <p className="text-gray-600">
                Bid on items you love and win at great prices
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Auctions Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Featured Auctions
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {auctionItems.slice(0, 4).map(item => (
              <AuctionCard key={item.id} item={item} />
            ))}
          </div>

          <div className="text-center mt-8">
            <button 
              onClick={() => {
                setOnPage('auctions');
                navigate('/auctions');
              }} 
              className="bg-brand-600 text-white px-8 py-3 rounded-lg hover:bg-brand-700 transition font-semibold"
            >
              View All Auctions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}