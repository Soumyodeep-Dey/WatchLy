import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext'; // Import AuthProvider
import { CartWishlistProvider } from './context/CartWishlistContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
import WatchDetailPage from './pages/WatchDetailPage';
import Login from './pages/LoginPage'; // Import Login page
import Signup from './pages/SignUpPage'; // Import Sign-up page
import UserPage from './pages/UserPage';

const App = () => {
    return (
        <AuthProvider>
            <CartWishlistProvider>
                <Router>
                    <ToastContainer
                        position="top-right"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                        toastStyle={{
                            background: 'rgba(17, 24, 39, 0.95)',
                            border: '1px solid rgba(212, 175, 55, 0.2)',
                            color: '#fff',
                        }}
                    />
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


                            {/* Login and Sign-up */}
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />


                            <Route path="/all-classic-products" element={<AllClassicPage />} />
                            {/* all classic watches */}
                            <Route path="/all-luxury-products" element={<AllLuxuaryPage />} />
                            {/* all luxury watches */}
                            <Route path="/watch/:id" element={<WatchDetailPage />} />

                            {/* Other routes */}
                            <Route path="/user" element={<UserPage />} />

                            {/* Fallback route for undefined paths */}
                            <Route path="*" element={<NotFoundPage />} />
                        </Routes>
                    </Layout>
                </Router>
            </CartWishlistProvider>
        </AuthProvider>
    );
};

export default App;
