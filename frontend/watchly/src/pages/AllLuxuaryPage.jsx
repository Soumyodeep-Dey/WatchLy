import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AllLuxuryPage() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]); // State for storing watches

  useEffect(() => {
    // Fetch watches from backend
    fetch("http://localhost:8000/api/watches")
      .then((response) => {
        console.log("Response:", response); // Log the raw response
        return response.json();
      })
      .then((data) => {
        console.log("Data:", data); // Log the parsed data
        // Filter products with prices between $299.99 and $9,999.99
        const filteredProducts = data.filter(
          (product) => product.price <= "$19999.99"
        );
        setProducts(filteredProducts);
      })
      .catch((error) => console.error("Error fetching watches:", error));
  }, []);

  const handleViewDetails = (path) => {
    navigate(`/${path}`);
  };

  return (
    <div className="bg-black text-white py-16 px-6">
      <h1 className="text-5xl font-bold text-center mb-12 text-gold">All Luxury Watches</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-xl rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-96 object-cover"
            />
            <div className="p-6">
              <h2 className="text-3xl font-bold text-black">{product.name}</h2>
              <p className="text-lg text-gray-600 mt-2">{product.description}</p>
              <p className="text-2xl font-semibold text-gold mt-4">{product.price}</p>
              <button
                className="mt-6 px-8 py-3 bg-black text-white font-semibold text-lg rounded-lg hover:bg-gold hover:text-black transition-colors"
                onClick={() => handleViewDetails(product.path)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllLuxuryPage;
