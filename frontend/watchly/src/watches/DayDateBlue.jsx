 
function DayDateBlue() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-12 px-4">
      <h1 className="text-5xl font-extrabold text-center text-black mb-10">
        Rolex Oyster Perpetual Day-Date 36 - Blue Dial
      </h1>
      <div className="flex flex-col md:flex-row items-center max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
        {/* Product Image */}
        <img
          src="https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-grid/c_limit,w_2440/v1/catalogue/2024/upright-bba-with-shadow/m228239-0076"
          alt="Rolex Oyster Perpetual Day-Date 36 Blue Dial"
          className="w-full md:w-1/2 h-auto object-cover transition-opacity duration-300 hover:opacity-80"
        />
        {/* Product Details */}
        <div className="p-8 md:w-1/2">
          <p className="text-lg text-gray-700 mb-4">
            Crafted in 18 kt Everose gold, featuring a stunning blue dial and a unique diamond-set bezel.
          </p>
          <p className="text-4xl font-bold text-gold mb-6">$359.99</p>
          <button className="px-10 py-4 bg-black text-white font-semibold text-lg rounded-lg shadow-md hover:bg-gold hover:text-black transition-colors duration-300 transform hover:scale-105">
            Add to Cart
          </button>
        </div>
      </div>
      {/* Additional Section */}
      <div className="mt-12 max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-black mb-6">About the Rolex Day-Date</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          The Rolex Day-Date, also known as the &quot;president&apos;s watch,&quot; is a symbol of prestige and luxury.Introduced in 1956, it was the first wristwatch to display the date and the day of the week spelled out in full.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Renowned for its exquisite craftsmanship, the Day-Date is available exclusively in precious metals, including 18 kt yellow gold, white gold, and Everose gold.
          The watch is characterized by its iconic President bracelet, which features semi-circular links and a concealed clasp, providing both comfort and elegance.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          The blue dial of this particular model is not only visually striking but also represents depth and sophistication.
          The diamond-set bezel adds a touch of opulence, making it a perfect choice for formal occasions or everyday wear.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          With its refined design and exceptional functionality, the Rolex Day-Date remains one of the most sought-after timepieces for those who appreciate excellence and timeless style.
        </p>
      </div>
    </div>
  );
}

export default DayDateBlue;