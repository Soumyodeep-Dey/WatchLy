import React from "react";

function CartPage() {
  const cartItems = [
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
  ];

  const handleCheckout = () => {
    console.log("Proceed to Checkout");
  };

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
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    className="w-16 text-center border border-gold-light rounded-md bg-black text-white"
                  />
                </div>
              </div>
              <button className="text-gold hover:text-red-500 transition-all">
                Remove
              </button>
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
              <span className="text-gold">
                ${cartItems.reduce((total, item) => total + parseInt(item.price.slice(1)) * item.quantity, 0)}
              </span>
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
