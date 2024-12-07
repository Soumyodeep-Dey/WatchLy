import { useState } from "react";

function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Luxury Watch 1",
      price: "$250",
      imageUrl: "https://via.placeholder.com/200",
      quantity: 1,
    },
    {
      id: 2,
      name: "Luxury Watch 2",
      price: "$320",
      imageUrl: "https://via.placeholder.com/200",
      quantity: 2,
    },
  ]);

  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) } // Ensure quantity is at least 1
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleAddToWishlist = (id) => {
    const item = cartItems.find((item) => item.id === id);
    console.log(`"${item.name}" added to wishlist.`);
  };

  const handleCheckout = () => {
    console.log("Proceed to Checkout");
  };

  const calculateTotal = () =>
    cartItems.reduce(
      (total, item) => total + parseInt(item.price.slice(1)) * item.quantity,
      0
    );

  return (
    <div className="bg-black-rich min-h-screen py-12 px-6 text-white-off">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center text-gold mb-12">
        Your Cart
      </h1>

      {/* Cart Items Section */}
      <div className="max-w-6xl mx-auto space-y-8">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-black border border-gold-dark rounded-xl p-6 shadow-lg flex items-center gap-6"
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-32 h-32 object-cover rounded-md"
              />
              <div className="flex-grow">
                <h2 className="text-xl font-semibold text-gold mb-2">
                  {item.name}
                </h2>
                <p className="text-gray-400 text-lg mb-4">{item.price}</p>
                <div className="flex items-center space-x-4">
                  <label className="text-gray-300">Quantity:</label>
                  <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                    className="px-2 py-1 border border-gold-light rounded-md bg-black text-white hover:text-red-500"
                  >
                    -
                  </button>
                  <span className="text-white text-lg">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, 1)}
                    className="px-2 py-1 border border-gold-light rounded-md bg-black text-white hover:text-green-500"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex flex-col space-y-10 "> {/* Changed to flex-col */}
                <button
                  onClick={() => handleAddToWishlist(item.id)}
                  className="bg-gold text-black font-semibold py-2 px-4 rounded-xl shadow-md hover:bg-gold-light transition-all duration-300 transform hover:scale-105"
                >
                  Add to Wishlist
                </button>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="bg-gold text-black font-semibold py-2 px-4 rounded-xl shadow-md hover:bg-gold-light transition-all duration-300 transform hover:scale-105"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">
            <p className="text-lg text-gray-500">
              Your cart is empty. Add items to your cart to see them here!
            </p>
            <button
              className="mt-4 bg-gradient-gold px-6 py-2 rounded-md text-black font-semibold hover:opacity-90 transition"
              onClick={() => console.log("Navigate to Products")}
            >
              Shop Now
            </button>
          </div>
        )}
      </div>

      {/* Checkout Section */}
      {cartItems.length > 0 && (
        <div className="max-w-6xl mx-auto mt-12">
          <div className="flex justify-between items-center bg-black border border-gold-dark rounded-xl p-6 shadow-lg">
            <p className="text-lg font-semibold text-white">
              Total:{" "}
              <span className="text-gold">${calculateTotal()}</span>
            </p>
            <button
              onClick={handleCheckout}
              className="bg-gradient-gold px-6 py-2 rounded-md text-black font-semibold hover:bg-black hover:text-gold transition-all"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
