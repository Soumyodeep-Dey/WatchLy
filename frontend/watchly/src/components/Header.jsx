import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [suggestions, setSuggestions] = useState([]); // State for search suggestions
  const location = useLocation(); // Get the current location
  const navigate = useNavigate();
  const searchContainerRef = useRef(null); // Ref for the search container

  // Hide suggestions when clicking outside of the search container
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

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setSuggestions([]);
      return;
    }

    fetch(`http://localhost:8000/api/watches?q=${query}`)
      .then((response) => response.json())
      .then((data) => {
        // Show only 5 results and prioritize exact matches
        const filteredResults = data
          .filter((item) =>
            item.name.toLowerCase().includes(query.toLowerCase())
          )
          .slice(0, 5);

        setSuggestions(filteredResults);
      })
      .catch((error) =>
        console.error("Error fetching search suggestions:", error)
      );
  };

  const handleSearchSelect = (path) => {
    setSearchQuery(""); // Clear the search input
    setSuggestions([]); // Clear suggestions
    navigate(`/${path}`); // Redirect to the selected watch's page
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (suggestions.length > 0) {
      handleSearchSelect(suggestions[0].path); // Redirect to the first suggestion
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

        {/* Search Bar */}
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

          {/* Suggestions Dropdown */}
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

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className={`transition duration-200 ${
                  location.pathname === "/" ? "text-gold" : "text-white hover:text-gold"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className={`transition duration-200 ${
                  location.pathname === "/products" ? "text-gold" : "text-white hover:text-gold"
                }`}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`transition duration-200 ${
                  location.pathname === "/about" ? "text-gold" : "text-white hover:text-gold"
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`transition duration-200 ${
                  location.pathname === "/contact" ? "text-gold" : "text-white hover:text-gold"
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Wishlist and Cart */}
          <div className="flex space-x-6">
            <Link
              to="/wishlist"
              className={`flex items-center transition duration-200 ${
                location.pathname === "/wishlist" ? "text-gold" : "text-white hover:text-gold"
              } space-x-2`}
            >
              <FaHeart className="text-gold" />
              <span>Wishlist</span>
            </Link>
            <Link
              to="/cart"
              className={`flex items-center transition duration-200 ${
                location.pathname === "/cart" ? "text-gold" : "text-white hover:text-gold"
              } space-x-2`}
            >
              <FaShoppingCart className="text-gold" />
              <span>Cart</span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-icons">{isMenuOpen ? "close" : "menu"}</span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black-rich">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link
                to="/"
                className={`text-white hover:text-gold ${
                  location.pathname === "/" ? "text-gold" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className={`text-white hover:text-gold ${
                  location.pathname === "/products" ? "text-gold" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`text-white hover:text-gold ${
                  location.pathname === "/about" ? "text-gold" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`text-white hover:text-gold ${
                  location.pathname === "/contact" ? "text-gold" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
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
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
