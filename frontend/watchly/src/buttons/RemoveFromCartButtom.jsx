import PropTypes from "prop-types";

const RemoveFromCartButton = ({ productId, onCartUpdate }) => {
  const handleRemove = async () => {
    const token = sessionStorage.getItem("jwt");

    if (!token) {
      alert("Please log in to remove items from your cart.");
      return;
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/cart/${productId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        alert("✅ Item removed from cart");
        if (onCartUpdate) {
          onCartUpdate(); // Callback to refresh the cart
        }
      } else {
        const data = await res.json();
        console.error("Failed to remove item:", data.error);
        alert("❌ Failed to remove item");
      }
    } catch (error) {
      console.error("Error removing item from cart:", error);
      alert("❌ Something went wrong");
    }
  };

  return (
    <button
      onClick={handleRemove}
      className="bg-gold text-black font-semibold py-2 px-4 rounded-xl shadow-md hover:bg-gold-light transition-all duration-300 transform hover:scale-105"
    >
      Remove
    </button>
  );
};

RemoveFromCartButton.propTypes = {
  productId: PropTypes.string.isRequired, // The ID of the product to remove
  onCartUpdate: PropTypes.func, // Optional callback to refresh the cart
};

export default RemoveFromCartButton;