import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
      const res = await fetch("http://localhost:8000/api/cart", {
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

  const handleRemove = async (productId) => {
    const token = localStorage.getItem("token");

    try {
      const res = await fetch(`http://localhost:8000/api/cart/${productId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        alert("✅ Item removed from cart");
        fetchCartItems(); // Refresh the cart
      } else {
        const data = await res.json();
        console.error("Failed to remove item:", data.error);
      }
    } catch (error) {
      console.error("Error removing item from cart:", error);
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
                src={item.product.imageUrl}
                alt={item.product.name}
                className="w-32 h-32 object-cover rounded-md"
              />
              <div className="flex-grow">
                <h2 className="text-xl font-semibold text-gold mb-2">
                  {item.product.name}
                </h2>
                <p className="text-gray-400 text-lg mb-4">{item.product.price}</p>
                <p className="text-gray-400 text-lg mb-4">
                  Quantity: {item.quantity}
                </p>
              </div>
              <button
                onClick={() => handleRemove(item.product._id)}
                className="bg-gold text-black font-semibold py-2 px-4 rounded-xl shadow-md hover:bg-gold-light transition-all duration-300 transform hover:scale-105"
              >
                Remove
              </button>
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
