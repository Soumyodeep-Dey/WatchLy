import PropTypes from "prop-types";

const RemoveFromWIshListButton = ({ productId, onWishlistUpdate }) => {
  const handleRemove = async () => {
    const token = sessionStorage.getItem("jwt");

    if (!token) {
      alert("Please log in to remove items from your wishlist.");
      return;
    }

    console.log("Removing product from wishlist with productId:", productId); // Debugging log

    try {
      const res = await fetch(`http://localhost:8000/api/wishlist/${productId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (res.ok) {
        console.log("Wishlist response:", data); // Debugging log
        alert("✅ Item removed from wishlist");
        if (onWishlistUpdate) {
          onWishlistUpdate(); // Callback to refresh the wishlist
        }
      } else {
        console.error("Failed to remove item:", data.error);
        alert("❌ Failed to remove item");
      }
    } catch (error) {
      console.error("Error removing item from wishlist:", error);
      alert("❌ Something went wrong");
    }
  };

  return (
    <button
      onClick={handleRemove}
      className="bg-red-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-600 transition"
    >
      Remove
    </button>
  );
};

RemoveFromWIshListButton.propTypes = {
  productId: PropTypes.string.isRequired, // The ID of the product to remove
  onWishlistUpdate: PropTypes.func, // Optional callback to refresh the wishlist
};

export default RemoveFromWIshListButton;