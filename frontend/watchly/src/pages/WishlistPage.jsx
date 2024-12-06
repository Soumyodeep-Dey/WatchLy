import React from "react";

function WishlistPage() {
  return (
    <div className="bg-black-rich min-h-screen py-12 px-6 text-white-off">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center text-gold mb-12">
        Your Wishlist
      </h1>

      {/* Wishlist Items Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Sample Wishlist Item */}
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="bg-black border border-gold-dark rounded-xl p-6 shadow-lg hover:shadow-xl transition-transform hover:scale-105"
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
            <button className="mt-4 bg-gradient-gold text-black px-4 py-2 rounded-md hover:bg-black hover:text-gold transition-all">
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Empty State */}
      <div className="mt-16 text-center">
        <p className="text-lg text-gray-500">
          No items in your wishlist? Explore our collection and add your favorites!
        </p>
        <button
          className="mt-4 bg-gradient-gold px-6 py-2 rounded-md text-black font-semibold hover:opacity-90 transition"
          onClick={() => console.log("Navigate to Products")}
        >
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default WishlistPage;
