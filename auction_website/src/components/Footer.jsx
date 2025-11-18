import React from 'react';
import { Gavel, Mail, Phone, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Footer({ setOnPage }) {
  const navigate = useNavigate();

  const handleNavigation = (page, path) => {
    setOnPage(page);
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Gavel className="text-brand-400" size={28} />
              <span className="text-2xl font-bold">BidHub</span>
            </div>
            <p className="text-gray-400">
              Your trusted online auction platform for unique items at amazing prices.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleNavigation('home', '/')}
                  className="text-gray-400 hover:text-white transition"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('auctions', '/auctions')}
                  className="text-gray-400 hover:text-white transition"
                >
                  Auctions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('about', '/about')}
                  className="text-gray-400 hover:text-white transition"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('contact', '/contact')}
                  className="text-gray-400 hover:text-white transition"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Electronics</span></li>
              <li><span className="text-gray-400">Art & Collectibles</span></li>
              <li><span className="text-gray-400">Jewelry</span></li>
              <li><span className="text-gray-400">Vehicles</span></li>
              <li><span className="text-gray-400">Real Estate</span></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={18} />
                <span>support@bidhub.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={18} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin size={18} />
                <span>123 Auction St, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 BidHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}