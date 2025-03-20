import { useEffect, useState } from "react";

function DayDateGreen() {
  const [product, setProduct] = useState(null); // State to store product data
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Fetch product data from the backend
    fetch("http://localhost:8000/api/watches/67d097edbcc7677ff2fa4214") // Use the actual product ID
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data); // Set the product data
        setLoading(false); // Stop loading
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
        setError(error.message);
        setLoading(false); // Stop loading
      });
  }, []);

  if (loading) {
    return <div className="text-center text-lg text-gray-700">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-lg text-red-500">Error: {error}</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-12 px-4">
      <h1 className="text-5xl font-extrabold text-center text-black mb-10">
        {product.name}
      </h1>
      <div className="flex flex-col md:flex-row items-center max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
        {/* Product Image */}
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full md:w-1/2 h-auto object-cover transition-opacity duration-300 hover:opacity-80"
        />
        {/* Product Details */}
        <div className="p-8 md:w-1/2">
          <p className="text-lg text-gray-700 mb-4">{product.description}</p>
          <p className="text-4xl font-bold text-gold mb-6">{product.price}</p>

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
