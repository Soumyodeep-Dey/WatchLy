import PropTypes from "prop-types";

const MoveToCartButton = ({ productId, onCartUpdate, onWishlistUpdate }) => {
  const handleMoveToCart = async () => {
    const token = sessionStorage.getItem("jwt");

    if (!token) {
      alert("Please log in to move items to your cart.");
      return;
    }

    try {
      // Add the item to the cart
      const addToCartRes = await fetch("http://localhost:8000/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productId }),
      });

      if (!addToCartRes.ok) {
        const errorData = await addToCartRes.json();
        console.error("Failed to add item to cart:", errorData.error);
        alert("❌ Failed to add item to cart");
        return;
      }

      // Remove the item from the wishlist
      const removeFromWishlistRes = await fetch(
        `http://localhost:8000/api/wishlist/${productId}`,
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
    }
  };

  return (
    <button
      onClick={handleMoveToCart}
      className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition"
    >
      Move to Cart
    </button>
  );
};

MoveToCartButton.propTypes = {
  productId: PropTypes.string.isRequired, // The ID of the product to move
  onCartUpdate: PropTypes.func, // Optional callback to refresh the cart
  onWishlistUpdate: PropTypes.func, // Optional callback to refresh the wishlist
};

export default MoveToCartButton;