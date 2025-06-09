import PropTypes from "prop-types";
import { useState } from "react";
import { toast } from 'react-toastify';
import { useCartWishlist } from "../context/CartWishlistContext";

const MoveToCartButton = ({ productId, quantity, onCartUpdate, onWishlistUpdate }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { updateCartCount, updateWishlistCount } = useCartWishlist();

  const handleMoveToCart = async () => {
    const token = sessionStorage.getItem("jwt");

    if (!token) {
      toast.error('Please log in to move items to cart', {
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
      // First, add to cart
      const cartRes = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productId, quantity }),
      });

      const cartData = await cartRes.json();

      if (cartRes.ok) {
        // Then, remove from wishlist
        const wishlistRes = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/wishlist/${productId}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (wishlistRes.ok) {
          toast.success('Moved to cart successfully', {
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
          // Update both cart and wishlist counts
          const [cartCountRes, wishlistCountRes] = await Promise.all([
            fetch(`${import.meta.env.VITE_BACKEND_URL}/api/cart`, {
              headers: { Authorization: `Bearer ${token}` },
            }),
            fetch(`${import.meta.env.VITE_BACKEND_URL}/api/wishlist`, {
              headers: { Authorization: `Bearer ${token}` },
            })
          ]);
          
          if (cartCountRes.ok) {
            const cartCountData = await cartCountRes.json();
            updateCartCount(cartCountData.cartItems.length);
          }
          
          if (wishlistCountRes.ok) {
            const wishlistCountData = await wishlistCountRes.json();
            updateWishlistCount(wishlistCountData.wishlistItems.length);
          }

          if (onCartUpdate) onCartUpdate();
          if (onWishlistUpdate) onWishlistUpdate();
        } else {
          toast.error('Failed to remove from wishlist', {
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
      } else {
        toast.error(cartData.error || 'Failed to add to cart', {
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
      console.error("Error moving to cart:", error);
      toast.error('Error moving to cart', {
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
      onClick={handleMoveToCart}
      disabled={isLoading}
      className="w-full py-2 px-4 bg-gradient-to-r from-gold to-gold-dark text-black font-semibold rounded-lg 
        hover:opacity-90 transition-opacity duration-300 disabled:opacity-50 disabled:cursor-not-allowed
        transform hover:scale-105 active:scale-95"
    >
      {isLoading ? "Moving..." : "Move to Cart"}
    </button>
  );
};

MoveToCartButton.propTypes = {
  productId: PropTypes.string.isRequired, // The ID of the product to move
  quantity: PropTypes.number.isRequired, // The quantity of the product
  onCartUpdate: PropTypes.func, // Optional callback to refresh the cart
  onWishlistUpdate: PropTypes.func, // Optional callback to refresh the wishlist
};

export default MoveToCartButton;