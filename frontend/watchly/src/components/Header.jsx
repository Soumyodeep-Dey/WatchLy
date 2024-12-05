import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaShoppingCart } from 'react-icons/fa'; // Using react-icons for Wishlist and Cart icons

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-black text-white shadow-lg">
            <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <h1 className="text-3xl font-bold text-gold">
                    <Link to="/" className="hover:text-white transition duration-200">Watchly</Link>
                </h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <ul className="flex space-x-6">
                        <li>
                            <Link to="/" className="text-white hover:text-gold transition duration-200">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/products" className="text-white hover:text-gold transition duration-200">
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-white hover:text-gold transition duration-200">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="text-white hover:text-gold transition duration-200">
                                Contact
                            </Link>
                        </li>
                    </ul>

                    {/* Wishlist and Cart */}
                    <div className="flex space-x-6">
                        <Link
                            to="/wishlist"
                            className="flex items-center text-white hover:text-gold transition duration-200 space-x-2"
                        >
                            <FaHeart className="text-gold" />
                            <span>Wishlist</span>
                        </Link>
                        <Link
                            to="/cart"
                            className="flex items-center text-white hover:text-gold transition duration-200 space-x-2"
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
                <div className="md:hidden bg-gray-900">
                    <ul className="flex flex-col items-center space-y-4 py-4">
                        <li>
                            <Link to="/" className="text-white hover:text-gold" onClick={() => setIsMenuOpen(false)}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/products" className="text-white hover:text-gold" onClick={() => setIsMenuOpen(false)}>
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-white hover:text-gold" onClick={() => setIsMenuOpen(false)}>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="text-white hover:text-gold" onClick={() => setIsMenuOpen(false)}>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/wishlist"
                                className="flex items-center text-white hover:text-gold space-x-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <FaHeart className="text-gold" />
                                <span>Wishlist</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/cart"
                                className="flex items-center text-white hover:text-gold space-x-2"
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
