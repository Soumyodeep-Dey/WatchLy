import PropTypes from "prop-types";

const AddtoWishListButton = ({ productId, onWishlistUpdate }) => {
  const handleAddToWishlist = async (productId) => {
    const token = sessionStorage.getItem("jwt");

    if (!token) {
      alert("Please log in to add items to your wishlist.");
      return;
    }

    console.log("Adding product to wishlist:", productId); // Debugging log

    try {
      const res = await fetch("http://localhost:8000/api/wishlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productId }),
      });

      const data = await res.json();

      if (res.ok) {
        console.log("Wishlist response:", data); // Debugging log
        alert("✅ Item added to wishlist");
        if (onWishlistUpdate) {
          onWishlistUpdate(); // Optional callback to refresh the wishlist
        }
      } else {
        console.error("Failed to add item to wishlist:", data.error);
        alert("❌ " + data.error);
      }
    } catch (error) {
      console.error("Error adding to wishlist:", error);
      alert("❌ Something went wrong");
    }
  };

  return (
    <button
      onClick={() => handleAddToWishlist(productId)}
      className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition"
    >
      Add to Wishlist
    </button>
  );
};

AddtoWishListButton.propTypes = {
  productId: PropTypes.string.isRequired,
  onWishlistUpdate: PropTypes.func, // Optional callback to refresh the wishlist
};

export default AddtoWishListButton;