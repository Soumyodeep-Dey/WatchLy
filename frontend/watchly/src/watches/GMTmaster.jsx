function GMTMaster() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-12 px-4">
      <h1 className="text-5xl font-extrabold text-center text-black mb-10">
        Rolex GMT Master II - Pepsi Dial
      </h1>
      <div className="flex flex-col md:flex-row items-center max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
        {/* Product Image with Shadow */}
        <img
          src="https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-majesty/c_limit,w_2440/v1/catalogue/2024/upright-c/m126720vtnr-0001"
          alt="Rolex GMT Master II Pepsi Dial"
          className="w-full md:w-1/2 h-auto object-cover transition-opacity duration-300 hover:opacity-80 shadow-lg"
        />
        {/* Product Details */}
        <div className="p-8 md:w-1/2">
          <p className="text-lg text-gray-700 mb-4">
            The Rolex GMT Master II is designed for precision and style, featuring a dual-tone bezel for tracking time zones.
          </p>
          <p className="text-4xl font-bold text-gold mb-6">$12,000.00</p>

          {/* Buy Now Button */}
          <button
            className="w-full px-10 py-4 bg-gold text-black font-semibold text-lg rounded-lg shadow-md hover:bg-black hover:text-white transition-colors duration-300 transform hover:scale-105 mb-8 border-2 border-transparent hover:border-gold focus:outline-none focus:ring-2 focus:ring-gold"
          >
            Buy Now
          </button>

          {/* Add to Cart Button */}
          <button
            className="w-full px-10 py-4 bg-black text-white font-semibold text-lg rounded-lg shadow-md hover:bg-gold hover:text-black transition-colors duration-300 transform hover:scale-105 border-2 border-transparent hover:border-gold focus:outline-none focus:ring-2 focus:ring-gold"
          >
            Add to Cart
          </button>
        </div>
      </div>
      {/* Additional Section */}
      <div className="mt-12 max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-black mb-6">About the Rolex GMT Master II</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          The Rolex GMT Master II is a luxury watch that combines elegance with functionality, perfect for travelers.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          With a dual-time zone feature, this timepiece is equipped with a bi-directional rotating bezel and a 24-hour hand.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Its stainless steel construction ensures durability, while the distinctive &quot;Pepsi&quot; bezel adds a pop of color.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          The GMT Master II is not just a watch; it&apos;s a statement of style and adventure, catering to both collectors and modern travelers.
        </p>
      </div>
    </div>
  );
}

export default GMTMaster;
