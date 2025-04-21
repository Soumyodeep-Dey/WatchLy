import { useEffect, useState } from "react";
import AddToCartButton from "../buttons/AddToCartButton"; // ✅ Make sure it's default export


function DayDateGreen() {
  const [product, setProduct] = useState(null); // State to store product data
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Fetch product data from the backend
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/watches/67d097edbcc7677ff2fa4214`)
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

          {/* ✅ Properly Rendered Add to Cart Button */}
          <AddToCartButton productId={product._id} />
        </div>
      </div>
    </div>
  );
}

export default DayDateGreen;
