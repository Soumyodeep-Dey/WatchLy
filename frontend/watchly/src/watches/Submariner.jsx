function Submariner() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-12 px-4">
      <h1 className="text-5xl font-extrabold text-center text-black mb-10">
        Rolex Submariner - Black Dial
      </h1>
      <div className="flex flex-col md:flex-row items-center max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
        {/* Product Image */}
        <img
          src="https://timeavenue.com/wp-content/uploads/2024/06/m126613lb-0002_drp-upright-bba-with-shadow.webp"
          alt="Rolex Submariner Black Dial"
          className="w-full md:w-1/2 h-auto object-cover transition-opacity duration-300 hover:opacity-80"
        />
        {/* Product Details */}
        <div className="p-8 md:w-1/2">
          <p className="text-lg text-gray-700 mb-4">
            The Rolex Submariner is a classic diving watch, known for its durability and precision.
          </p>
          <p className="text-4xl font-bold text-gold mb-6">$10,500.00</p>

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
        <h2 className="text-4xl font-bold text-black mb-6">About the Rolex Submariner</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          The Rolex Submariner, first introduced in 1953, is one of the most iconic diving watches in the world. It is renowned for its robust design and water resistance, making it a favorite among divers and watch enthusiasts alike.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          The watch features a unidirectional rotating bezel, allowing divers to track their immersion time accurately. Its luminous markers ensure visibility in low-light conditions, while the Oyster case provides exceptional water resistance.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Available in various materials, including stainless steel and gold, the Submariner combines functionality with elegance. Its timeless design has made it a staple in both the diving community and luxury watch circles.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Whether you&apos;re exploring the depths of the ocean or attending a formal event, the Rolex Submariner is a versatile timepiece that embodies adventure and sophistication.
        </p>
      </div>
    </div>
  );
}

export default Submariner;
