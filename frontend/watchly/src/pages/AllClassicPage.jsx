import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SortingButton from "../buttons/SortingButton";

function AllClassicPage() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]); // State for storing watches
  const [sortedProducts, setSortedProducts] = useState([]); // State for sorted watches

  useEffect(() => {
    // Fetch watches from backend
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/watches`)
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
    <div className="min-h-screen w-full bg-black-rich text-white relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gold opacity-5 animate-spin-slow"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gold opacity-5 animate-spin-slow-reverse"></div>
      </div>

      <div className="relative z-10 w-full h-full">
        <h1 className="text-5xl font-bold text-center py-12 text-gold relative">
          All Classic Watches
          <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></span>
        </h1>

        <div className="flex flex-col lg:flex-row h-[calc(100vh-12rem)]">
          {/* Sorting Button */}
          <div className="lg:w-64 p-6 lg:border-r border-gold/20">
            <div className="sticky top-24">
              <SortingButton onSort={handleSort} />
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1 p-6 overflow-y-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {sortedProducts.map((product) => (
                <div
                  key={product._id}
                  className="group bg-gray-800/80 backdrop-blur-sm border border-gold/20 rounded-2xl overflow-hidden 
                    transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-gold/10 transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gold mb-3">{product.name}</h2>
                    <p className="text-gray-400 text-lg mb-4 line-clamp-2">{product.description}</p>
                    <p className="text-2xl font-semibold text-gold mb-6">{product.price}</p>
                    <button
                      className="w-full py-3 bg-gradient-to-r from-gold-light to-gold-dark text-black font-semibold text-lg 
                        rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-gold/20
                        focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-gray-800"
                      onClick={() => handleViewDetails(product.path)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllClassicPage;
