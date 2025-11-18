import React, { useState } from 'react';
import { Clock, X } from 'lucide-react';

export default function AuctionCard({ item }) {
  const [showBidModal, setShowBidModal] = useState(false);
  const [bidAmount, setBidAmount] = useState('');

  const handlePlaceBid = async () => {
    const token = localStorage.getItem('token');
    
    if (!token) {
      alert('Please login to place a bid');
      setShowBidModal(false);
      return;
    }

    const amount = parseFloat(bidAmount);
    if (!amount || amount <= item.currentBid) {
      alert(`Bid must be higher than current bid of $${item.currentBid}`);
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/bids', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          itemId: item.id,
          amount: amount
        })
      });

      const data = await response.json();

      if (response.ok) {
        alert(`Bid of $${amount} placed successfully on ${item.title}!`);
        setShowBidModal(false);
        setBidAmount('');
        // Refresh the page or update the item
        window.location.reload();
      } else {
        alert(data.message || 'Failed to place bid');
      }
    } catch (error) {
      console.error('Error placing bid:', error);
      alert('An error occurred while placing your bid');
    }
  };

  const BidModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-8 relative">
        <button 
          onClick={() => setShowBidModal(false)} 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={24} />
        </button>
        
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">{item.image}</div>
          <h2 className="text-2xl font-bold text-gray-800">{item.title}</h2>
          <p className="text-gray-600">{item.category}</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Current Bid:</span>
            <span className="text-2xl font-bold text-brand-600">
              ${item.currentBid.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Clock size={14} /> {item.endTime}
            </span>
            <span>{item.bids} bids</span>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Bid Amount ($)
          </label>
          <input
            type="number"
            value={bidAmount}
            onChange={(e) => setBidAmount(e.target.value)}
            min={item.currentBid + 1}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent text-lg"
            placeholder={`Min: $${item.currentBid + 1}`}
          />
        </div>

        <button
          onClick={handlePlaceBid}
          className="w-full bg-brand-600 text-white py-3 rounded-lg hover:bg-brand-700 transition font-semibold text-lg"
        >
          Place Bid
        </button>
      </div>
    </div>
  );

  return (
    <>
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer">
        <div className="bg-gradient-to-br from-brand-50 to-purple-50 h-32 sm:h-40 md:h-48 flex items-center justify-center text-4xl sm:text-5xl md:text-6xl">
          {item.image}
        </div>
        <div className="p-4">
          <div className="text-xs text-gray-500 mb-1">{item.category}</div>
          <h3 className="font-bold text-lg mb-2 text-gray-800">{item.title}</h3>
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm text-gray-500">Current Bid</span>
            <span className="font-bold text-brand-600 text-lg">
              ${item.currentBid.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
            <span className="flex items-center gap-1">
              <Clock size={14} /> {item.endTime}
            </span>
            <span>{item.bids} bids</span>
          </div>
          <button 
            onClick={() => setShowBidModal(true)}
            className="w-full bg-brand-600 text-white py-2 rounded-lg hover:bg-brand-700 transition font-semibold"
          >
            Place Bid
          </button>
        </div>
      </div>

      {showBidModal && <BidModal />}
    </>
  );
}