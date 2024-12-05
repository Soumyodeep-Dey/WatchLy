import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* About Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">About Watchly</h3>
                    <p className="text-sm text-gray-400">
                        Discover premium watches tailored to your style. Experience luxury and elegance at its finest.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/" className="text-sm hover:text-blue-400">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/products" className="text-sm hover:text-blue-400">
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-sm hover:text-blue-400">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="text-sm hover:text-blue-400">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Social Media Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebookF} className="text-xl hover:text-blue-400" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} className="text-xl hover:text-blue-400" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} className="text-xl hover:text-blue-400" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedinIn} className="text-xl hover:text-blue-400" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-sm text-gray-500 mt-8">
                © 2024 Watchly. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
