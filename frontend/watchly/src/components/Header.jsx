import { useState, useRef, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaSearch, FaUser, FaBars } from "react-icons/fa";
import { fetchSearchSuggestions } from "../functions/SearchFunction";
import { AuthContext } from "../auth/AuthContext";
import { useCartWishlist } from "../context/CartWishlistContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const searchContainerRef = useRef(null);

  // Use global auth context
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const { cartCount, wishlistCount } = useCartWishlist();

  const handleLogout = () => {
    sessionStorage.removeItem("jwt");
    setIsLoggedIn(false);
    toast.info('Logged out successfully! 👋', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    navigate("/");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setSuggestions([]);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleSearchChange = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim()) {
      const results = await fetchSearchSuggestions(query);
      setSuggestions(results);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearchSelect = (path) => {
    setSearchQuery("");
    setSuggestions([]);
    navigate(`/${path}`);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (suggestions.length > 0) {
      handleSearchSelect(suggestions[0].path);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <header className="bg-black/95 text-white shadow-lg sticky top-0 z-50 backdrop-blur-md border-b border-gold/10">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <h1 className="text-3xl font-bold text-gold group">
            <Link 
              to="/" 
              className="hover:text-white transition-all duration-300 flex items-center"
            >
              <span className="relative">
                Watchly V1.0
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-gold-dark group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>
          </h1>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gold hover:text-white transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars className="w-6 h-6" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Search Bar */}
            <div className="relative w-[500px]" ref={searchContainerRef}>
              <form onSubmit={handleSearchSubmit} className="relative group">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search for watches..."
                  className="w-full bg-black/80 text-white border-2 border-gold/30 rounded-full pl-5 pr-12 py-3 
                    placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold
                    transition-all duration-300 hover:border-gold/50 group-hover:border-gold/50
                    shadow-lg shadow-gold/5"
                />
                <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gold/80 
                  group-hover:text-gold transition-all duration-300 text-lg" />
              </form>

              {/* Search Suggestions */}
              {suggestions.length > 0 && (
                <ul className="absolute left-0 right-0 bg-black/95 backdrop-blur-md text-white rounded-lg shadow-xl mt-2 z-10 
                  border-2 border-gold/20 overflow-hidden transform origin-top transition-all duration-300">
                  {suggestions.map((suggestion) => (
                    <li
                      key={suggestion._id}
                      className="px-5 py-3.5 hover:bg-gold/10 hover:text-gold cursor-pointer transition-all duration-300
                        border-b border-gold/10 last:border-b-0 flex items-center space-x-3"
                      onClick={() => handleSearchSelect(suggestion.path)}
                    >
                      <FaSearch className="text-gold/60 w-4 h-4" />
                      <span className="text-base">{suggestion.name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-6">
              <Link
                to="/products"
                className="hover:text-gold transition-all duration-300 relative group whitespace-nowrap"
              >
                Products
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-gold-dark group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/about"
                className="hover:text-gold transition-all duration-300 relative group whitespace-nowrap"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-gold-dark group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/contact"
                className="hover:text-gold transition-all duration-300 relative group whitespace-nowrap"
              >
                Contact Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-gold-dark group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-6">
              {!isLoggedIn && (
                <Link
                  to="/login" 
                  className="hover:text-gold transition-all duration-300 relative group whitespace-nowrap"
                >
                  Login
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-gold-dark group-hover:w-full transition-all duration-300"></span>
                </Link>
              )}
              <Link 
                to="/wishlist" 
                className="text-white hover:text-gold transition-all duration-300 transform hover:scale-110 relative group"
              >
                <FaHeart />
                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-4 h-4 bg-gold rounded-full text-black text-xs flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    {wishlistCount}
                  </span>
                )}
              </Link>
              <Link
                to="/cart"
                className="text-white hover:text-gold transition-all duration-300 transform hover:scale-110 relative group"
              >
                <FaShoppingCart />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-4 h-4 bg-gold rounded-full text-black text-xs flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    {cartCount}
                  </span>
                )}
              </Link>
              <button
                onClick={() => navigate("/user")}
                className="text-white hover:text-gold transition-all duration-300 transform hover:scale-110"
              >
                <FaUser />
              </button>
              {isLoggedIn && (
                <button
                  onClick={handleLogout}
                  className="bg-gradient-to-r from-gold to-gold-dark text-black px-4 py-1.5 rounded-lg font-medium 
                    hover:opacity-90 transition-all duration-300 transform hover:scale-105
                    shadow-lg hover:shadow-xl whitespace-nowrap"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gold/10 animate-slideDown">
            <div className="px-6 py-4">
              {/* Mobile Search */}
              <div className="relative mb-4" ref={searchContainerRef}>
                <form onSubmit={handleSearchSubmit} className="relative group">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search for watches..."
                    className="w-full bg-black/50 text-white border border-gold/20 rounded-full pl-4 pr-10 py-3
                      placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-transparent
                      transition-all duration-300 hover:border-gold/40"
                  />
                  <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gold/60" />
                </form>
                {/* Mobile Search Suggestions */}
                {suggestions.length > 0 && (
                  <ul className="absolute left-0 right-0 bg-black/95 backdrop-blur-md text-white rounded-lg shadow-xl mt-2 z-10 
                    border border-gold/20 overflow-hidden">
                    {suggestions.map((suggestion) => (
                      <li
                        key={suggestion._id}
                        className="px-4 py-3 hover:bg-gold/10 hover:text-gold cursor-pointer transition-all duration-300
                          border-b border-gold/10 last:border-b-0 flex items-center space-x-2"
                        onClick={() => handleSearchSelect(suggestion.path)}
                      >
                        <FaSearch className="text-gold/60 w-4 h-4" />
                        <span>{suggestion.name}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <ul className="flex flex-col space-y-4">
                <li>
                  <Link
                    to="/products"
                    className={`block py-2 text-white hover:text-gold transition-all duration-300
                      ${location.pathname === "/products" ? "text-gold" : ""}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className={`block py-2 text-white hover:text-gold transition-all duration-300
                      ${location.pathname === "/about" ? "text-gold" : ""}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className={`block py-2 text-white hover:text-gold transition-all duration-300
                      ${location.pathname === "/contact" ? "text-gold" : ""}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/wishlist"
                    className={`flex items-center space-x-2 py-2 text-white hover:text-gold transition-all duration-300
                      ${location.pathname === "/wishlist" ? "text-gold" : ""}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FaHeart className="text-gold" />
                    <span>Wishlist</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cart"
                    className={`flex items-center space-x-2 py-2 text-white hover:text-gold transition-all duration-300
                      ${location.pathname === "/cart" ? "text-gold" : ""}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FaShoppingCart className="text-gold" />
                    <span>Cart</span>
                  </Link>
                </li>
                <li>
                  {isLoggedIn ? (
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsMenuOpen(false);
                      }}
                      className="w-full bg-gradient-to-r from-gold to-gold-dark text-black px-6 py-2 rounded-lg font-medium 
                        hover:opacity-90 transition-all duration-300 transform hover:scale-105
                        shadow-lg hover:shadow-xl"
                    >
                      Logout
                    </button>
                  ) : (
                    <Link
                      to="/login"
                      className="w-full bg-gradient-to-r from-gold to-gold-dark text-black px-6 py-2 rounded-lg font-medium 
                        hover:opacity-90 transition-all duration-300 transform hover:scale-105
                        shadow-lg hover:shadow-xl inline-block text-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Login
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
