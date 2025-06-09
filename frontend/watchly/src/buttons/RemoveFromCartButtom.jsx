import { useState } from "react";
import { toast } from 'react-toastify';
import PropTypes from "prop-types";
import { useCartWishlist } from "../context/CartWishlistContext";

const RemoveFromCartButton = ({ productId, onCartUpdate }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { updateCartCount } = useCartWishlist();

  const handleRemoveFromCart = async () => {
    const token = sessionStorage.getItem("jwt");

    if (!token) {
      toast.error('Please log in to remove items from cart', {
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
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/cart/${productId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (res.ok) {
        toast.success('Removed from cart successfully', {
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
        toast.error(data.error || 'Failed to remove from cart', {
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
      console.error("Error removing from cart:", error);
      toast.error('Error removing from cart', {
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
      onClick={handleRemoveFromCart}
      disabled={isLoading}
      className="w-full py-2 px-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg 
        hover:opacity-90 transition-opacity duration-300 disabled:opacity-50 disabled:cursor-not-allowed
        transform hover:scale-105 active:scale-95"
    >
      {isLoading ? "Removing..." : "Remove from Cart"}
    </button>
  );
};

RemoveFromCartButton.propTypes = {
  productId: PropTypes.string.isRequired, // The ID of the product to remove
  onCartUpdate: PropTypes.func, // Optional callback to refresh the cart
};

export default RemoveFromCartButton;