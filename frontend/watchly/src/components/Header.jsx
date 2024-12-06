import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHeart, FaShoppingCart, FaSearch } from 'react-icons/fa'; // Adding FaSearch for search icon

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation(); // Get the current location

    return (
        <header className="bg-black text-white shadow-lg">
            <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <h1 className="text-3xl font-bold text-gold">
                    <Link to="/" className="hover:text-white transition duration-200">Watchly</Link>
                </h1>

                {/* Search Bar */}
                <div className="flex-grow mx-6 relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full bg-gold text-black rounded-full pl-4 pr-10 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-gold-light"
                    />
                    <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black" />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <ul className="flex space-x-6">
                        <li>
                            <Link
                                to="/"
                                className={`transition duration-200 ${location.pathname === '/' ? 'text-gold' : 'text-white hover:text-gold'}`}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/products"
                                className={`transition duration-200 ${location.pathname === '/products' ? 'text-gold' : 'text-white hover:text-gold'}`}
                            >
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className={`transition duration-200 ${location.pathname === '/about' ? 'text-gold' : 'text-white hover:text-gold'}`}
                            >
                                About 
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className={`transition duration-200 ${location.pathname === '/contact' ? 'text-gold' : 'text-white hover:text-gold'}`}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>

                    {/* Wishlist and Cart */}
                    <div className="flex space-x-6">
                        <Link
                            to="/wishlist"
                            className={`flex items-center transition duration-200 ${location.pathname === '/wishlist' ? 'text-gold' : 'text-white hover:text-gold'} space-x-2`}
                        >
                            <FaHeart className="text-gold" />
                            <span>Wishlist</span>
                        </Link>
                        <Link
                            to="/cart"
                            className={`flex items-center transition duration-200 ${location.pathname === '/cart' ? 'text-gold' : 'text-white hover:text-gold'} space-x-2`}
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
                    <span className="material-icons">
                        {isMenuOpen ? 'close' : 'menu'}
                    </span>
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-black-rich">
                    <ul className="flex flex-col items-center space-y-4 py-4">
                        <li>
                            <Link 
                                to="/" 
                                className={`text-white hover:text-gold ${location.pathname === '/' ? 'text-gold' : ''}`} 
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/products" 
                                className={`text-white hover:text-gold ${location.pathname === '/products' ? 'text-gold' : ''}`} onClick={() => setIsMenuOpen(false)}
                            >
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/about" 
                                className={`text-white hover:text-gold ${location.pathname === '/about' ? 'text-gold' : ''}`} 
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About 
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/contact" 
                                className={`text-white hover:text-gold ${location.pathname === '/contact' ? 'text-gold' : ''}`} 
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/wishlist"
                                className={`flex items-center text-white hover:text-gold ${location.pathname === '/wishlist' ? 'text-gold' : ''} space-x-2`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <FaHeart className="text-gold" />
                                <span>Wishlist</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/cart"
                                className={`flex items-center text-white hover:text-gold ${location.pathname === '/cart' ? 'text-gold' : ''} space-x-2`}
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