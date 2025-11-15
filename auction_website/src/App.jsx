import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './Pages/HomePage';
import AuctionsPage from './Pages/AuctionsPage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import ContactPage from './Pages/ContactPage.jsx';
import AboutPage from './Pages/AboutPage';

const AuctionWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Electronics', 'Art', 'Collectibles', 'Jewelry', 'Vehicles', 'Real Estate'];
  
  const auctionItems = [
    { id: 1, title: 'Vintage Rolex Watch', category: 'Jewelry', currentBid: 5200, endTime: '2h 15m', image: '⌚', bids: 24 },
    { id: 2, title: 'MacBook Pro M3', category: 'Electronics', currentBid: 1800, endTime: '5h 30m', image: '💻', bids: 18 },
    { id: 3, title: 'Abstract Oil Painting', category: 'Art', currentBid: 3400, endTime: '1h 45m', image: '🎨', bids: 32 },
    { id: 4, title: 'Rare Pokemon Cards', category: 'Collectibles', currentBid: 890, endTime: '3h 20m', image: '🃏', bids: 45 },
    { id: 5, title: 'Diamond Necklace', category: 'Jewelry', currentBid: 8900, endTime: '6h 10m', image: '💎', bids: 28 },
    { id: 6, title: 'Tesla Model 3', category: 'Vehicles', currentBid: 35000, endTime: '12h 00m', image: '🚗', bids: 67 },
    { id: 7, title: 'Signed Baseball', category: 'Collectibles', currentBid: 450, endTime: '4h 25m', image: '⚾', bids: 15 },
    { id: 8, title: 'Modern Sculpture', category: 'Art', currentBid: 2100, endTime: '8h 40m', image: '🗿', bids: 22 },
  ];

  const filteredItems = auctionItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category.toLowerCase() === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    let matchesPrice = true;
    
    if (priceRange === 'under1000') matchesPrice = item.currentBid < 1000;
    else if (priceRange === '1000-5000') matchesPrice = item.currentBid >= 1000 && item.currentBid <= 5000;
    else if (priceRange === 'over5000') matchesPrice = item.currentBid > 5000;
    
    return matchesCategory && matchesSearch && matchesPrice;
  });

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        
        <Routes>
          <Route path="/" element={
            <HomePage auctionItems={auctionItems} />
          } />
          
          <Route path="/auctions" element={
            <AuctionsPage 
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              filteredItems={filteredItems}
              auctionItems={auctionItems}
            />
          } />
          
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default AuctionWebsite;