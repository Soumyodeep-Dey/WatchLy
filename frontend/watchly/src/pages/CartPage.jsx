import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddtoWishListButton from "../buttons/AddtoWishListButtom";
import RemoveFromCartButton from "../buttons/RemoveFromCartButtom";

function CartPage() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCartItems = async () => {
    const token = sessionStorage.getItem("jwt");

    if (!token) {
      alert("Please log in to view your cart.");
      return;
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (res.ok) {
        setCartItems(data.cartItems);
      } else {
        console.error("Failed to fetch cart items:", data.error);
        setCartItems([]);
      }
    } catch (error) {
      console.error("Error fetching cart items:", error);
      setCartItems([]);
    } finally {
      setLoading(false);
    }
  };

  const handleQuantityChange = async (productId, quantityChange) => {
    const token = sessionStorage.getItem("jwt");

    if (!token) {
      alert("Please log in to update cart items.");
      return;
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/cart/${productId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ quantityChange }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Cart updated");
        fetchCartItems();
      } else {
        console.error("Failed to update cart item:", data.error);
      }
    } catch (error) {
      console.error("Error updating cart item:", error);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  if (loading) {
    return <div className="text-center text-lg text-gray-700">Loading...</div>;
  }

  return (
    <div className="bg-black-rich min-h-screen py-12 px-6 text-white-off">
      <h1 className="text-4xl font-bold text-center text-gold mb-12">
        Your Cart
      </h1>

      {cartItems.length > 0 ? (
        <div className="max-w-6xl mx-auto space-y-8">
          {cartItems.map((item) => (
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
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleQuantityChange(item.productId._id, -1)}
                    className="bg-red-500 text-white font-semibold py-1 px-3 rounded-lg hover:bg-red-600 transition"
                  >
                    -
                  </button>
                  <button
                    onClick={() => handleQuantityChange(item.productId._id, 1)}
                    className="bg-green-500 text-white font-semibold py-1 px-3 rounded-lg hover:bg-green-600 transition"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <RemoveFromCartButton
                  productId={item.productId._id}
                  onCartUpdate={fetchCartItems} // Refresh the cart after removal
                />
                <AddtoWishListButton productId={item.productId._id} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center">
          <p className="text-lg text-gray-500">
            Your cart is empty. Add items to your cart to see them here!
          </p>
          <button
            className="mt-4 bg-gradient-gold px-6 py-2 rounded-md text-black font-semibold hover:opacity-90 transition"
            onClick={() => navigate("/products")}
          >
            Shop Now
          </button>
        </div>
      )}
    </div>
  );
}

export default CartPage;
