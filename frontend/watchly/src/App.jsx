import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext'; // Import AuthProvider
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
import DayDateGreen from './watches/DayDateGreen';
import DayDateBlue from './watches/DayDateBlue';
import LadyDateJust from './watches/LadyDateJust';
import Submariner from './watches/Submariner';
import YachtMaster from './watches/YachtMaster';
import GMTmaster from './watches/GMTmaster';
import Login from './pages/LoginPage'; // Import Login page
import Signup from './pages/SignUpPage'; // Import Sign-up page

const App = () => {
    return (
        <AuthProvider>
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


                        {/* Login and Sign-up */}
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />


                        <Route path="/all-classic-products" element={<AllClassicPage />} />
                        {/* all classic watches */}
                        <Route path="/Rolex+Oyster+Perpetual+Day-Date+36+Green" element={<DayDateGreen />} />
                        <Route path="/Rolex+Lady-Datejust+watch" element={<LadyDateJust />} />
                        <Route path="/Rolex+Oyster+Perpetual+Day-Date+36+Blue" element={<DayDateBlue />} />


                        <Route path="/all-luxury-products" element={<AllLuxuaryPage />} />
                        {/* all luxury watches */}
                        <Route path="/Rolex+Yacht+Master+II" element={<YachtMaster />} />
                        <Route path="/Rolex+GMT+Master+II" element={<GMTmaster />} />
                        <Route path="/Rolex+Submariner" element={<Submariner />} />
                        
                        {/* Fallback route for undefined paths */}
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </Layout>
            </Router>
        </AuthProvider>
    );
};

export default App;
