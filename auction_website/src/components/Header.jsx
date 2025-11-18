import React from "react";
import { Menu, Gavel, User, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Header({ isLoggedIn, setIsLoggedIn, onPage, setOnPage, isMenuOpen, setIsMenuOpen }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setOnPage('home');
    navigate('/');
  };

  const navLinks = [
    { page: "home", label: "Home", path: "/" },
    { page: "auctions", label: "Auctions", path: "/auctions" },
    { page: "about", label: "About", path: "/about" },
    { page: "contact", label: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => {
              setOnPage("home");
              navigate("/");
            }}
          >
            <Gavel className="text-brand-600" size={32} />
            <span className="text-2xl font-bold text-gray-800">BidHub</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  setOnPage(item.page);
                  navigate(item.path);
                }}
                className={`font-medium transition ${
                  onPage === item.page
                    ? "text-brand-600"
                    : "text-gray-700 hover:text-brand-600"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          {!isLoggedIn ? (
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => {
                  setOnPage("login");
                  navigate("/login");
                }}
                className={`font-medium transition ${
                  onPage === "login"
                    ? "text-brand-600"
                    : "text-gray-700 hover:text-brand-600"
                }`}
              >
                Login
              </button>

              <button
                onClick={() => {
                  setOnPage("signup");
                  navigate("/signup");
                }}
                className={`px-6 py-2 rounded-lg font-semibold transition ${
                  onPage === "signup"
                    ? "bg-brand-700 text-white"
                    : "bg-brand-600 text-white hover:bg-brand-700"
                }`}
              >
                Sign Up
              </button>
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => {
                  setOnPage("profile");
                  navigate("/profile");
                }}
                className={`font-medium transition flex items-center gap-2 ${
                  onPage === "profile"
                    ? "text-brand-600"
                    : "text-gray-700 hover:text-brand-600"
                }`}
              >
                <User size={20} />
                Profile
              </button>

              <button
                onClick={handleLogout}
                className="text-gray-700 hover:text-red-600 font-medium transition flex items-center gap-2"
              >
                <LogOut size={20} />
                Logout
              </button>
            </div>
          )}

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
              {navLinks.map((item) => (
                <button
                  key={item.page}
                  onClick={() => {
                    setOnPage(item.page);
                    setIsMenuOpen(false);
                    navigate(item.path);
                  }}
                  className={`text-left font-medium transition ${
                    onPage === item.page
                      ? "text-brand-600"
                      : "text-gray-700 hover:text-brand-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}

              {!isLoggedIn ? (
                <>
                  <button
                    onClick={() => {
                      setOnPage("login");
                      setIsMenuOpen(false);
                      navigate("/login");
                    }}
                    className={`text-left font-medium transition ${
                      onPage === "login"
                        ? "text-brand-600"
                        : "text-gray-700 hover:text-brand-600"
                    }`}
                  >
                    Login
                  </button>

                  <button
                    onClick={() => {
                      setOnPage("signup");
                      setIsMenuOpen(false);
                      navigate("/signup");
                    }}
                    className={`text-left px-6 py-2 rounded-lg font-semibold transition ${
                      onPage === "signup"
                        ? "bg-brand-700 text-white"
                        : "bg-brand-600 text-white hover:bg-brand-700"
                    }`}
                  >
                    Sign Up
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setOnPage("profile");
                      setIsMenuOpen(false);
                      navigate("/profile");
                    }}
                    className="text-left text-gray-700 hover:text-brand-600 font-medium"
                  >
                    Profile
                  </button>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="text-left text-red-600 hover:text-red-700 font-medium"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}