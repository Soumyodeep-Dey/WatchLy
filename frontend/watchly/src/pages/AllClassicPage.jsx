import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SortingButton from "../buttons/SortingButton";

function AllClassicPage() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]); // State for storing watches
  const [sortedProducts, setSortedProducts] = useState([]); // State for sorted watches

  useEffect(() => {
    // Fetch watches from backend
    fetch("http://localhost:8000/api/watches")
      .then((response) => response.json())
      .then((data) => {
        // Filter products with prices between $299.99 and $9,999.99
        const filteredProducts = data.filter(
          (product) =>
            parseFloat(product.price.replace(/[^0-9.-]+/g, "")) >= 299.99 &&
            parseFloat(product.price.replace(/[^0-9.-]+/g, "")) <= 9999.99
        );
        setProducts(filteredProducts);
        setSortedProducts(filteredProducts); // Initialize sorted products
      })
      .catch((error) => console.error("Error fetching watches:", error));
  }, []);

  const handleSort = (sortOrder) => {
    const sorted = [...products].sort((a, b) => {
      const priceA = parseFloat(a.price.replace(/[^0-9.-]+/g, ""));
      const priceB = parseFloat(b.price.replace(/[^0-9.-]+/g, ""));
      return sortOrder === "lowToHigh" ? priceA - priceB : priceB - priceA;
    });
    setSortedProducts(sorted);
  };

  const handleViewDetails = (path) => {
    navigate(`/${path}`);
  };

  return (
    <div className="bg-black-rich text-white py-16 px-6">
      <h1 className="text-5xl font-bold text-center mb-12 text-gold">All Classic Watches</h1>

      <div className="text-center mb-6">
        <SortingButton onSort={handleSort} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {sortedProducts.map((product) => (
          <div
            key={product._id}
            className="bg-white border-4 border-gold-dark shadow-lg rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-96 object-cover"
            />
            <div className="p-6">
              <h2 className="text-3xl font-bold text-gold">{product.name}</h2>
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

export default AllClassicPage;
