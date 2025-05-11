import { useState, useRef, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaSearch, FaUser } from "react-icons/fa";
import { fetchSearchSuggestions } from "../functions/SearchFunction";
import { AuthContext } from "../auth/AuthContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const searchContainerRef = useRef(null);

  // Use global auth context
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const handleLogout = () => {
    sessionStorage.removeItem("jwt");
    setIsLoggedIn(false);
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
    <header className="bg-black text-white shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-gold group">
          <Link 
            to="/" 
            className="hover:text-white transition-all duration-300 flex items-center"
          >
            <span className="relative">
              Watchly
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
            </span>
          </Link>
        </h1>

        {/* Search Bar */}
        <div className="flex-grow mx-6 relative" ref={searchContainerRef}>
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="w-full bg-black text-white border border-gold rounded-full pl-4 pr-10 py-2.5 
                placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent
                transition-all duration-300 hover:border-gold-light"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gold 
              transition-all duration-300 group-hover:text-gold-light" />
          </form>
          {/* Search Suggestions */}
          {suggestions.length > 0 && (
            <ul className="absolute left-0 right-0 bg-black text-white rounded-lg shadow-xl mt-2 z-10 
              border border-gold overflow-hidden transform origin-top transition-all duration-300">
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion._id}
                  className="px-4 py-3 hover:bg-gold hover:text-black cursor-pointer transition-all duration-300
                    border-b border-gray-800 last:border-b-0"
                  onClick={() => handleSearchSelect(suggestion.path)}
                >
                  {suggestion.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          <Link 
            to="/products" 
            className="hover:text-gold transition-all duration-300 relative group"
          >
            Products
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link 
            to="/about" 
            className="hover:text-gold transition-all duration-300 relative group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
          </Link>
          {!isLoggedIn && (
            <Link 
              to="/login" 
              className="hover:text-gold transition-all duration-300 relative group"
            >
              Login
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
            </Link>
          )}
          <Link 
            to="/wishlist" 
            className="text-white hover:text-gold transition-all duration-300 transform hover:scale-110"
          >
            <FaHeart />
          </Link>
          <Link 
            to="/cart" 
            className="text-white hover:text-gold transition-all duration-300 transform hover:scale-110"
          >
            <FaShoppingCart />
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
              className="bg-gold text-black px-4 py-2 rounded-lg font-medium 
                hover:bg-gold-light transition-all duration-300 transform hover:scale-105
                shadow-lg hover:shadow-xl"
            >
              Logout
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black-rich animate-slideDown">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {["Home", "Products", "About", "Contact"].map((page) => (
              <li key={page} className="w-full text-center">
                <Link
                  to={`/${page.toLowerCase()}`}
                  className={`text-white hover:text-gold transition-all duration-300 block py-2
                    ${location.pathname === `/${page.toLowerCase()}` ? "text-gold" : ""}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {page}
                </Link>
              </li>
            ))}

            <li className="w-full text-center">
              <Link
                to="/wishlist"
                className={`flex items-center justify-center text-white hover:text-gold transition-all duration-300
                  ${location.pathname === "/wishlist" ? "text-gold" : ""} space-x-2 py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                <FaHeart className="text-gold" />
                <span>Wishlist</span>
              </Link>
            </li>
            <li className="w-full text-center">
              <Link
                to="/cart"
                className={`flex items-center justify-center text-white hover:text-gold transition-all duration-300
                  ${location.pathname === "/cart" ? "text-gold" : ""} space-x-2 py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                <FaShoppingCart className="text-gold" />
                <span>Cart</span>
              </Link>
            </li>
            <li className="w-full text-center">
              {isLoggedIn ? (
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="bg-gold text-black px-6 py-2 rounded-lg font-medium 
                    hover:bg-gold-light transition-all duration-300 transform hover:scale-105
                    shadow-lg hover:shadow-xl w-32"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="bg-gold text-black px-6 py-2 rounded-lg font-medium 
                    hover:bg-gold-light transition-all duration-300 transform hover:scale-105
                    shadow-lg hover:shadow-xl w-32 inline-block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
