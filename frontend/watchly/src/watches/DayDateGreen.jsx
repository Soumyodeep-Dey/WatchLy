function DayDateGreen() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-12 px-4">
      <h1 className="text-5xl font-extrabold text-center text-black mb-10">
        Rolex Oyster Perpetual Day-Date 36
      </h1>
      <div className="flex flex-col md:flex-row items-center max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
        {/* Product Image */}
        <img
          src="https://hamiltonandinches.com/media/catalog/product/cache/52fad59d8736408bee5028687415c967/m/1/m128345rbr-0068_drp-upright-bba-with-shadow.png"
          alt="Rolex Oyster Perpetual Day-Date 36"
          className="w-full md:w-1/2 h-auto object-cover transition-opacity duration-300 hover:opacity-80"
        />
        {/* Product Details */}
        <div className="p-8 md:w-1/2">
          <p className="text-lg text-gray-700 mb-4">
            Crafted in 18 kt yellow gold with a rainbow sapphire bezel and a diamond-paved dial.
          </p>
          <p className="text-4xl font-bold text-gold mb-6">$299.99</p>

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
        <h2 className="text-4xl font-bold text-black mb-6">About the Rolex Day-Date</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          The Rolex Oyster Perpetual Day-Date is synonymous with prestige and excellence. 
          Known as the &quot;president&apos;s watch,&quot; it is an icon of timeless luxury and exceptional craftsmanship. Introduced in 1956, it was the first wristwatch to display the date and the day of the week spelled out in full.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          The Day-Date is available exclusively in precious metals, including 18 kt yellow gold, white gold, and Everose gold. 
          Its distinctive features include the iconic President bracelet, which is known for its semi-circular links and concealed clasp, providing both comfort and elegance.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          This particular model, with its vibrant rainbow sapphire bezel, adds a unique flair to the classic design, making it a standout piece for any collection. 
          The diamond-paved dial enhances its luxurious appeal, making it suitable for both formal occasions and everyday wear.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          With its refined design and exceptional functionality, the Rolex Day-Date remains one of the most sought-after timepieces for those who appreciate excellence and timeless style.
        </p>
      </div>
    </div>
  );
}

export default DayDateGreen;
