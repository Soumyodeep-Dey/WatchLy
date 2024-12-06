import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage'; // Import additional pages
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import AllClassicPage from './pages/AllClassicPage';
import AllLuxuaryPage from './pages/AllLuxuaryPage';
import WishlistPage from './pages/WishlistPage';
import CartPage from './pages/CartPage';

const App = () => {
    return (
        <Router>
            {/* Layout provides consistent Header and Footer */}
            <Layout>
                <Routes>
                    {/* Define routes for each page */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/wishlist" element={<WishlistPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/all-classic-products" element={<AllClassicPage />} />
                    <Route path="/all-luxury-products" element={<AllLuxuaryPage />} />
                    
                    {/* Fallback route for undefined paths */}
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
