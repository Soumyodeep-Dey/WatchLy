import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {/* About Section */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-gold">About Watchly</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Discover premium watches tailored to your style. Experience luxury and elegance at its finest.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-gold">Quick Links</h3>
                    <ul className="space-y-3">
                        <li>
                            <Link to="/" className="text-sm text-gray-300 hover:text-gold transition">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/products" className="text-sm text-gray-300 hover:text-gold transition">
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-sm text-gray-300 hover:text-gold transition">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="text-sm text-gray-300 hover:text-gold transition">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Social Media Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-gold">Follow Us</h3>
                    <ul className="flex space-x-6">
                        <li>
                            <a
                                href="https://www.facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-blue-500 transition"
                            >
                                <FontAwesomeIcon icon={faFacebookF} className="text-2xl" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-blue-400 transition"
                            >
                                <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-pink-500 transition"
                            >
                                <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-blue-600 transition"
                            >
                                <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Divider */}
            <div className="my-8 border-t border-gray-600"></div>

            {/* Copyright */}
            <div className="text-center text-sm text-gray-500">
                © {new Date().getFullYear()} <span className="text-gold">Watchly Pvt Ltd</span>. All rights reserved.
            </div>

        </footer>
    );
};

export default Footer;
