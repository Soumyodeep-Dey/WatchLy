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
    <header className="bg-black text-white shadow-lg">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-gold">
          <Link to="/" className="hover:text-white transition duration-200">
            Watchly
          </Link>
        </h1>

        {/* Search Bar in the center */}
        <div className="flex-grow mx-6 relative" ref={searchContainerRef}>
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="w-full bg-black text-white border border-gold rounded-full pl-4 pr-10 py-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gold" />
          </form>
          {/* Search Suggestions */}
          {suggestions.length > 0 && (
            <ul className="absolute left-0 right-0 bg-black text-white rounded-lg shadow-lg mt-2 z-10 border border-gold">
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion._id}
                  className="px-4 py-2 hover:bg-gold hover:text-black cursor-pointer"
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
          <Link to="/products" className="hover:text-gold">
            Products
          </Link>
          <Link to="/about" className="hover:text-gold">
            About
          </Link>
          {!isLoggedIn && (
            <Link to="/login" className="hover:text-gold">
              Login
            </Link>
          )}
          <Link to="/wishlist" className="text-white hover:text-gold">
            <FaHeart />
          </Link>
          <Link to="/cart" className="text-white hover:text-gold">
            <FaShoppingCart />
          </Link>
          <button
            onClick={() => navigate("/user")}
            className="text-white hover:text-gold"
          >
            <FaUser />
          </button>
          {isLoggedIn && (
            <button
              onClick={handleLogout}
              className="bg-gold text-black px-4 py-2 rounded-lg font-medium hover:bg-gold-light transition"
            >
              Logout
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black-rich">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {["Home", "Products", "About", "Contact"].map((page) => (
              <li key={page}>
                <Link
                  to={`/${page.toLowerCase()}`}
                  className={`text-white hover:text-gold ${
                    location.pathname === `/${page.toLowerCase()}`
                      ? "text-gold"
                      : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {page}
                </Link>
              </li>
            ))}

            <li>
              <Link
                to="/wishlist"
                className={`flex items-center text-white hover:text-gold ${
                  location.pathname === "/wishlist" ? "text-gold" : ""
                } space-x-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                <FaHeart className="text-gold" />
                <span>Wishlist</span>
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className={`flex items-center text-white hover:text-gold ${
                  location.pathname === "/cart" ? "text-gold" : ""
                } space-x-2`}
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
                  className="bg-gold text-black px-4 py-2 rounded-lg font-medium hover:bg-gold-light transition"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="bg-gold text-black px-4 py-2 rounded-lg font-medium hover:bg-gold-light transition"
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
