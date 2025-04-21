import PropTypes from "prop-types";
import { useState } from "react";

const MoveToCartButton = ({ productId, quantity, onCartUpdate, onWishlistUpdate }) => {
  const [loading, setLoading] = useState(false);

  const handleMoveToCart = async () => {
    const token = sessionStorage.getItem("jwt");

    if (!token) {
      alert("Please log in to move items to your cart.");
      return;
    }

    setLoading(true);

    try {
      // Add the item to the cart with its quantity
      const addToCartRes = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productId, quantity }),
      });

      if (!addToCartRes.ok) {
        const errorData = await addToCartRes.json();
        console.error("Failed to add item to cart:", errorData.error);
        alert("❌ Failed to add item to cart");
        return;
      }

      // Remove the item from the wishlist
      const removeFromWishlistRes = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/wishlist/${productId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!removeFromWishlistRes.ok) {
        const errorData = await removeFromWishlistRes.json();
        console.error("Failed to remove item from wishlist:", errorData.error);
        alert("❌ Failed to remove item from wishlist");
        return;
      }

      alert("✅ Item moved to cart");
      if (onCartUpdate) {
        onCartUpdate(); // Refresh the cart
      }
      if (onWishlistUpdate) {
        onWishlistUpdate(); // Refresh the wishlist
      }
    } catch (error) {
      console.error("Error moving item to cart:", error);
      alert("❌ Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleMoveToCart}
      disabled={loading}
      className={`bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition ${
        loading ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {loading ? "Processing..." : "Move to Cart"}
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