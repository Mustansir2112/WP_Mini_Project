import React from 'react';
import { Menu, Gavel } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Header({ isMenuOpen, setIsMenuOpen }) {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <Gavel className="text-blue-600" size={32} />
            <span className="text-2xl font-bold text-gray-800">BidHub</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => navigate('/')}
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Home
            </button>
            <button
              onClick={() => navigate('/auctions')}
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Auctions
            </button>
            <button
              onClick={() => navigate('/about')}
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              About
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Contact
            </button>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => navigate('/login')}
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Login
            </button>
            <button
              onClick={() => navigate('/signup')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => {
                  navigate('/');
                  setIsMenuOpen(false);
                }}
                className="text-left text-gray-700 hover:text-blue-600 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => {
                  navigate('/auctions');
                  setIsMenuOpen(false);
                }}
                className="text-left text-gray-700 hover:text-blue-600 font-medium"
              >
                Auctions
              </button>
              <button
                onClick={() => {
                  navigate('/about');
                  setIsMenuOpen(false);
                }}
                className="text-left text-gray-700 hover:text-blue-600 font-medium"
              >
                About
              </button>
              <button
                onClick={() => {
                  navigate('/contact');
                  setIsMenuOpen(false);
                }}
                className="text-left text-gray-700 hover:text-blue-600 font-medium"
              >
                Contact
              </button>
              <button
                onClick={() => {
                  navigate('/login');
                  setIsMenuOpen(false);
                }}
                className="text-left text-gray-700 hover:text-blue-600 font-medium"
              >
                Login
              </button>
              <button
                onClick={() => {
                  navigate('/signup');
                  setIsMenuOpen(false);
                }}
                className="text-left bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-semibold"
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
