import PropTypes from "prop-types";

const AddToCartButton = ({ productId, onCartUpdate }) => {
  const handleAddToCart = async (productId) => {
    const token = sessionStorage.getItem("jwt");

    if (!token) {
      alert("Please log in to add items to your cart.");
      return;
    }

    try {
      const res = await fetch("http://localhost:8000/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include the token here
        },
        body: JSON.stringify({ productId }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Item added to cart");
        if (onCartUpdate) {
          onCartUpdate(); // Notify the parent component to refresh the cart
        }
      } else {
        console.error("Add to cart failed:", data.error);
        alert("❌ " + data.error);
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("❌ Something went wrong");
    }
  };

  return (
    <button
      onClick={() => handleAddToCart(productId)}
      className="w-full px-10 py-4 bg-black text-white font-semibold text-lg rounded-lg shadow-md hover:bg-gold hover:text-black transition-colors duration-300 transform hover:scale-105 border-2 border-transparent hover:border-gold focus:outline-none focus:ring-2 focus:ring-gold"
    >
      Add to Cart
    </button>
  );
};

AddToCartButton.propTypes = {
  productId: PropTypes.string.isRequired,
  onCartUpdate: PropTypes.func, // Optional callback to refresh the cart
};

export default AddToCartButton;
