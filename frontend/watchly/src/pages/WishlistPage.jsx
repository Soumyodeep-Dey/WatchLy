import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function WishlistPage() {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState([1, 2, 3]); // Mock wishlist items

  // Function to remove an item from the wishlist
  const handleRemove = (item) => {
    setWishlist((prevWishlist) => prevWishlist.filter((id) => id !== item));
  };

  // Function to handle adding an item to the cart
  const handleAddToCart = (item) => {
    console.log(`Item ${item} added to cart`);
    // Add your logic for adding the item to the cart here
  };

  return (
    <div className="bg-black-rich min-h-screen py-12 px-6 text-white-off">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center text-gold mb-12">
        Your Wishlist
      </h1>

      {/* Wishlist Items Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {wishlist.length > 0 ? (
          wishlist.map((item) => (
            <div
              key={item}
              className="bg-black border border-gold-dark rounded-xl p-6 shadow-lg hover:shadow-xl transition-transform hover:scale-105 cursor-pointer"
              onClick={() => navigate(`/details/${item}`)} // Redirect to details page
            >
              <img
                src="https://via.placeholder.com/200"
                alt={`Wishlist Item ${item}`}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold text-gold mb-2">
                Wishlist Item {item}
              </h2>
              <p className="text-gray-400 text-lg">
                A brief description of the product goes here.
              </p>

              {/* Buttons Section */}
              <div className="flex justify-between mt-6">
                {/* Add to Cart Button */}
                <button
                  className="bg-gradient-gold text-black px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-all"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card click redirection
                    handleAddToCart(item); // Add item to cart
                  }}
                >
                  Add to Cart
                </button>

                {/* Remove Button */}
                <button
                  className="bg-gold-dark text-white px-4 py-2 rounded-lg font-medium hover:bg-gold-light hover:text-black transition-all"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card click redirection
                    handleRemove(item); // Remove item from wishlist
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-lg text-gray-400">
            Your wishlist is empty.
          </p>
        )}
      </div>

      {/* Empty State */}
      {wishlist.length === 0 && (
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-500">
            No items in your wishlist? Explore our collection and add your favorites!
          </p>
          <button
            className="mt-4 bg-gradient-gold px-6 py-2 rounded-lg text-black font-semibold hover:opacity-90 transition"
            onClick={() => navigate("/products")}
          >
            Shop Now
          </button>
        </div>
      )}
    </div>
  );
}

export default WishlistPage;
