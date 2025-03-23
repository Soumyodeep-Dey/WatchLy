import PropTypes from "prop-types";

function AddToCartButton({ productId, userId, onAddToCart }) {
  const handleAddToCart = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId, userId }), // Send productId & userId
      });

      if (!response.ok) {
        throw new Error("Failed to add item to cart");
      }

      const data = await response.json();
      console.log("Item added to cart:", data);

      // Call the provided function to update UI
      onAddToCart(productId);

      // Show success message
      alert("Item is added to cart!");
    } catch (error) {
      console.error("Error adding item to cart:", error);
      alert("Failed to add item to cart. Please try again.");
    }
  };

  return (
    <button
      className="w-full px-10 py-4 bg-gold text-black font-semibold text-lg rounded-lg shadow-md hover:bg-black hover:text-white transition duration-300 transform hover:scale-105 border-2 border-transparent hover:border-gold focus:outline-none focus:ring-2 focus:ring-gold"
      onClick={handleAddToCart}
    >
      Add to Cart
    </button>
  );
}

AddToCartButton.propTypes = {
  productId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired, // Pass user ID to associate cart item
  onAddToCart: PropTypes.func.isRequired,
};

export default AddToCartButton;
