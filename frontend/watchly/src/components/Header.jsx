import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-gray-800 text-white">
            <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
                {/* Logo */}
                <h1 className="text-2xl font-bold">
                    <Link to="/">Watchly</Link>
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6">
                    <li>
                        <Link to="/" className="hover:text-blue-400">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/products" className="hover:text-blue-400">
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-blue-400">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-blue-400">
                            Contact
                        </Link>
                    </li>
                </ul>

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
                <div className="md:hidden bg-gray-700">
                    <ul className="flex flex-col items-center space-y-4 py-4">
                        <li>
                            <Link to="/" className="hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/products" className="hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
