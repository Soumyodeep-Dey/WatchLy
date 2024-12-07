function LadyDateJust() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-12 px-4">
      <h1 className="text-5xl font-extrabold text-center text-black mb-10">
        Rolex Lady-Datejust
      </h1>
      <div className="flex flex-col md:flex-row items-center max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
        {/* Product Image */}
        <img
          src="https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-grid/c_limit,w_2440/v1/catalogue/2024/upright-bba-with-shadow/m278288rbr-0006"
          alt="Rolex Lady-Datejust"
          className="w-full md:w-1/2 h-auto object-cover transition-opacity duration-300 hover:opacity-80"
        />
        {/* Product Details */}
        <div className="p-8 md:w-1/2">
          <p className="text-lg text-gray-700 mb-4">
            A timeless design featuring a stainless steel and Everose gold combination, with a refined diamond dial.
          </p>
          <p className="text-4xl font-bold text-gold mb-6">$599.99</p>

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
        <h2 className="text-4xl font-bold text-black mb-6">About the Rolex Lady-Datejust</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          The Rolex Lady-Datejust is a symbol of elegance and precision, featuring a unique blend of stainless steel and Everose gold.
          Its refined design makes it the perfect accessory for any occasion.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          First introduced in 1957, the Lady-Datejust has become a classic in the world of luxury watches.
          It was designed specifically for women, combining functionality with a feminine touch.
          The watch is known for its distinctive date display at 3 o&apos;clock, which is magnified by a Cyclops lens on the crystal.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          The diamond dial adds a touch of glamour, making it suitable for both formal events and everyday wear.
          Each Lady-Datejust is meticulously crafted, ensuring that every detail meets Rolex&apos;s high standards of quality and precision.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          With its timeless design and exceptional craftsmanship, the Rolex Lady-Datejust remains a favorite among watch enthusiasts and collectors alike, embodying the spirit of luxury and sophistication.
        </p>
      </div>
    </div>
  );
}

export default LadyDateJust;
