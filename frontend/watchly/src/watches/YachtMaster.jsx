function YachtMaster() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-12 px-4">
      <h1 className="text-5xl font-extrabold text-center text-black mb-10">
        Rolex Yacht-Master 40 - Blue Dial
      </h1>
      <div className="flex flex-col md:flex-row items-center max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
        {/* Product Image */}
        <img
          src="https://images.jdmagicbox.com/quickquotes/images_main/rolex-yacht-master-ii-oyster-44-mm-oystersteel-and-everose-gold-184502099-txmzv.png"
          alt="Rolex Yacht-Master 40 Blue Dial"
          className="w-full md:w-1/2 h-auto object-cover transition-opacity duration-300 hover:opacity-80"
        />
        {/* Product Details */}
        <div className="p-8 md:w-1/2">
          <p className="text-lg text-gray-700 mb-4">
            Crafted in 18 kt white gold, featuring a striking blue dial and a rotatable bezel.
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
        <h2 className="text-4xl font-bold text-black mb-6">About the Rolex Yacht-Master</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          The Rolex Yacht-Master is a luxury sports watch that embodies the spirit of sailing and adventure. Introduced in 1992, it combines functionality with elegance, making it a favorite among sailing enthusiasts and watch collectors alike.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Available in various sizes and materials, including Rolesium (a combination of platinum and stainless steel), the Yacht-Master features a distinctive rotatable bezel that allows sailors to track elapsed time while at sea.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          The blue dial of this model is not only visually appealing but also enhances readability, making it easy to tell the time in any conditions. The watch is water-resistant and designed to withstand the rigors of marine environments.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          With its perfect blend of style and functionality, the Rolex Yacht-Master is a timeless piece that appeals to those who appreciate luxury and adventure.
        </p>
      </div>
    </div>
  );
}

export default YachtMaster;
