import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-16 relative">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-900 opacity-90"></div>
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* About Section */}
                    <div className="transform hover:scale-105 transition-transform duration-300">
                        <h3 className="text-2xl font-bold mb-6 text-gold border-b-2 border-gold pb-2 inline-block">
                            About Watchly
                        </h3>
                        <p className="text-sm text-gray-400 leading-relaxed mt-4">
                            Discover premium watches tailored to your style. Experience luxury and elegance at its finest.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-gold border-b-2 border-gold pb-2 inline-block">
                            Quick Links
                        </h3>
                        <ul className="space-y-4 mt-4">
                            <li>
                                <Link 
                                    to="/" 
                                    className="text-sm text-gray-300 hover:text-gold transition-all duration-300 flex items-center group"
                                >
                                    <span className="w-0 group-hover:w-2 h-0.5 bg-gold mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/products" 
                                    className="text-sm text-gray-300 hover:text-gold transition-all duration-300 flex items-center group"
                                >
                                    <span className="w-0 group-hover:w-2 h-0.5 bg-gold mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/about" 
                                    className="text-sm text-gray-300 hover:text-gold transition-all duration-300 flex items-center group"
                                >
                                    <span className="w-0 group-hover:w-2 h-0.5 bg-gold mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/contact" 
                                    className="text-sm text-gray-300 hover:text-gold transition-all duration-300 flex items-center group"
                                >
                                    <span className="w-0 group-hover:w-2 h-0.5 bg-gold mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-gold border-b-2 border-gold pb-2 inline-block">
                            Follow Us
                        </h3>
                        <ul className="flex space-x-6 mt-4">
                            <li>
                                <a
                                    href="https://www.facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-blue-500 transition-all duration-300 transform hover:scale-110"
                                >
                                    <FontAwesomeIcon icon={faFacebookF} className="text-2xl" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
                                >
                                    <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-pink-500 transition-all duration-300 transform hover:scale-110"
                                >
                                    <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
                                >
                                    <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-12 border-t border-gray-700 relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
                </div>

                {/* Copyright */}
                <div className="text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} <span className="text-gold font-semibold">Watchly Pvt Ltd</span>. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
