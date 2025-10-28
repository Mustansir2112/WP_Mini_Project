import React from 'react';
import { Clock } from 'lucide-react';

export default function AuctionCard({ item }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer">
      <div className="bg-linear-gradientto-br from-blue-50 to-purple-50 h-32 sm:h-40 md:h-48 flex items-center justify-center text-4xl sm:text-5xl md:text-6xl">
        {item.image}
      </div>
      <div className="p-4">
        <div className="text-xs text-gray-500 mb-1">{item.category}</div>
        <h3 className="font-bold text-lg mb-2 text-gray-800">{item.title}</h3>
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm text-gray-500">Current Bid</span>
          <span className="font-bold text-blue-600 text-lg">${item.currentBid.toLocaleString()}</span>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
          <span className="flex items-center gap-1"><Clock size={14} /> {item.endTime}</span>
          <span>{item.bids} bids</span>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold">
          Place Bid
        </button>
      </div>
    </div>
  );
}