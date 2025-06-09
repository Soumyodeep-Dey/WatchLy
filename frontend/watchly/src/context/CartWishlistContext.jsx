import { createContext, useContext, useState, useEffect } from 'react';
import { AuthContext } from '../auth/AuthContext';

const CartWishlistContext = createContext();

export const CartWishlistProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);
  const { isLoggedIn } = useContext(AuthContext);

  const fetchCartCount = async () => {
    const token = sessionStorage.getItem("jwt");
    if (!token) {
      setCartCount(0);
      return;
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        setCartCount(data.cartItems?.length || 0);
      } else {
        setCartCount(0);
      }
    } catch (error) {
      console.error("Error fetching cart count:", error);
      setCartCount(0);
    }
  };

  const fetchWishlistCount = async () => {
    const token = sessionStorage.getItem("jwt");
    if (!token) {
      setWishlistCount(0);
      return;
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/wishlist`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        setWishlistCount(data.wishlistItems?.length || 0);
      } else {
        setWishlistCount(0);
      }
    } catch (error) {
      console.error("Error fetching wishlist count:", error);
      setWishlistCount(0);
    }
  };

  const updateCartCount = (newCount) => {
    setCartCount(newCount || 0);
  };

  const updateWishlistCount = (newCount) => {
    setWishlistCount(newCount || 0);
  };

  useEffect(() => {
    const initializeCounts = async () => {
      if (isLoggedIn) {
        await Promise.all([fetchCartCount(), fetchWishlistCount()]);
      } else {
        setCartCount(0);
        setWishlistCount(0);
      }
      setIsInitialized(true);
    };

    initializeCounts();
  }, [isLoggedIn]);

  // Don't render children until initialization is complete
  if (!isInitialized) {
    return null;
  }

  return (
    <CartWishlistContext.Provider 
      value={{ 
        cartCount, 
        wishlistCount, 
        updateCartCount, 
        updateWishlistCount,
        fetchCartCount,
        fetchWishlistCount
      }}
    >
      {children}
    </CartWishlistContext.Provider>
  );
};

export const useCartWishlist = () => {
  const context = useContext(CartWishlistContext);
  if (!context) {
    throw new Error('useCartWishlist must be used within a CartWishlistProvider');
  }
  return context;
}; 