import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import RemoveFromWIshListButton from "../buttons/RemoveFromWIshListButton";
import MoveToCartButton from "../buttons/MoveToCartButton";

function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const navigate = useNavigate(); // Initialize navigate

  const fetchWishlistItems = async () => {
    const token = sessionStorage.getItem("jwt");

    if (!token) {
      alert("Please log in to view your wishlist.");
      return;
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/wishlist`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (res.ok) {
        setWishlistItems(data.wishlistItems);
      } else {
        console.error("Failed to fetch wishlist items:", data.error);
      }
    } catch (error) {
      console.error("Error fetching wishlist items:", error);
    }
  };

  useEffect(() => {
    fetchWishlistItems();
  }, []);

  return (
    <div className="bg-black-rich min-h-screen py-12 px-6 text-white-off">
      <h1 className="text-4xl font-bold text-center text-gold mb-12">
        Your Wishlist
      </h1>

      {wishlistItems.length > 0 ? (
        <div className="max-w-6xl mx-auto space-y-8">
          {wishlistItems.map((item) => (
            <div
              key={item._id}
              className="bg-black border border-gold-dark rounded-xl p-6 shadow-lg flex items-center gap-6"
            >
              <img
                src={item.productId.imageUrl}
                alt={item.productId.name}
                className="w-32 h-32 object-cover rounded-md cursor-pointer"
                onClick={() => navigate(`/${item.productId.path}`)} // Navigate to product page
              />
              <div className="flex-grow">
                <h2 className="text-xl font-semibold text-gold mb-2">
                  {item.productId.name}
                </h2>
                <p className="text-gray-400 text-lg mb-4">
                  Price: {item.productId.price}
                </p>
                <p className="text-gray-400 text-lg mb-4">
                  Quantity: {item.quantity}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <MoveToCartButton
                  productId={item.productId._id}
                  quantity={item.quantity} // Pass the quantity to MoveToCartButton
                  onCartUpdate={() => console.log("Cart updated")}
                  onWishlistUpdate={fetchWishlistItems} // Refresh the wishlist after moving
                />
                <RemoveFromWIshListButton
                  productId={item.productId._id}
                  onWishlistUpdate={fetchWishlistItems} // Refresh the wishlist after removal
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center">
          <p className="text-lg text-gray-500">
            Your wishlist is empty. Add items to your wishlist to see them here!
          </p>
        </div>
      )}
    </div>
  );
}

export default WishlistPage;
