import { useState } from "react";
import { toast } from 'react-toastify';
import PropTypes from "prop-types";

const RemoveFromWIshListButton = ({ productId, onWishlistUpdate }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleRemoveFromWishlist = async () => {
    const token = sessionStorage.getItem("jwt");

    if (!token) {
      toast.error('Please log in to remove items from wishlist', {
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
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/wishlist/${productId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (res.ok) {
        toast.success('Removed from wishlist successfully', {
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
        if (onWishlistUpdate) {
          onWishlistUpdate();
        }
      } else {
        toast.error(data.error || 'Failed to remove from wishlist', {
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
      console.error("Error removing from wishlist:", error);
      toast.error('Error removing from wishlist', {
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
      onClick={handleRemoveFromWishlist}
      disabled={isLoading}
      className="w-full py-2 px-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg 
        hover:opacity-90 transition-opacity duration-300 disabled:opacity-50 disabled:cursor-not-allowed
        transform hover:scale-105 active:scale-95"
    >
      {isLoading ? "Removing..." : "Remove from Wishlist"}
    </button>
  );
};

RemoveFromWIshListButton.propTypes = {
  productId: PropTypes.string.isRequired, // The ID of the product to remove
  onWishlistUpdate: PropTypes.func, // Optional callback to refresh the wishlist
};

export default RemoveFromWIshListButton;