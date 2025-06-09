import { useState } from "react";
import { toast } from 'react-toastify';
import PropTypes from "prop-types";
import { useCartWishlist } from "../context/CartWishlistContext";

const AddToCartButton = ({ productId, onCartUpdate }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { updateCartCount } = useCartWishlist();

  const handleAddToCart = async () => {
    const token = sessionStorage.getItem("jwt");

    if (!token) {
      toast.error('Please log in to add items to cart', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        style: {
          background: 'rgba(17, 24, 39, 0.95)',
          border: '1px solid rgba(212, 175, 55, 0.2)',
          color: '#fff',
        },
        icon: '⌚',
      });
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productId }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success('Added to cart successfully', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          style: {
            background: 'rgba(17, 24, 39, 0.95)',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            color: '#fff',
          },
          icon: '⌚',
        });
        // Update the cart count in the context
        const cartRes = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/cart`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (cartRes.ok) {
          const cartData = await cartRes.json();
          updateCartCount(cartData.cartItems.length);
        }
        if (onCartUpdate) {
          onCartUpdate();
        }
      } else {
        toast.error(data.error || 'Failed to add to cart', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          style: {
            background: 'rgba(17, 24, 39, 0.95)',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            color: '#fff',
          },
          icon: '⌚',
        });
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast.error('Error adding to cart', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        style: {
          background: 'rgba(17, 24, 39, 0.95)',
          border: '1px solid rgba(212, 175, 55, 0.2)',
          color: '#fff',
        },
        icon: '⌚',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={isLoading}
      className="w-full bg-gradient-to-r from-gold-light to-gold-dark text-black px-8 py-4 
        rounded-full font-semibold text-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] 
        transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
        transform hover:scale-105 active:scale-95"
    >
      {isLoading ? "Adding..." : "Add to Cart"}
    </button>
  );
};

AddToCartButton.propTypes = {
  productId: PropTypes.string.isRequired,
  onCartUpdate: PropTypes.func,
};

export default AddToCartButton;
