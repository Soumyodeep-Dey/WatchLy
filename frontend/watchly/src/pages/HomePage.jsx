import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/watches`)
      .then((response) => response.json())
      .then((data) => {
        // Show 4 products on mobile, 3 on desktop
        const products = data.slice(0, 4);
        setFeaturedProducts(products);
      });
  }, []);

  const handleViewDetails = (path) => {
    navigate(`/${path}`);
  };

  return (
    <div className="bg-black text-gold">
      {/* Hero Section */}
      <section
        className="hero bg-cover bg-center py-80 text-center relative md:py-80 sm:py-40"
        style={{
          backgroundImage: "url('/homebg.jpg')",
        }}
      >
        <div className="bg-black bg-opacity-70 absolute inset-0"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Welcome to Watchly</h1>
          <p className="text-base md:text-lg mb-8 text-gray-300">
            Explore our premium collection of luxury and smartwatches.
          </p>
          <button
            className="group relative bg-gradient-to-r from-gold-light to-gold-dark px-8 py-3 rounded-full 
              text-black font-semibold text-lg overflow-hidden transition-all duration-300
              hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] hover:scale-105
              before:absolute before:inset-0 before:bg-white before:opacity-0 
              before:transition-opacity before:duration-300 hover:before:opacity-20"
            onClick={() => navigate("/products")}
          >
            <span className="relative z-10">Shop Now</span>
          </button>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products py-16 px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-white">
          Featured Watches
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {featuredProducts.map((product, index) => (
            <div
              key={product._id}
              className={`product bg-black border-4 border-gold-dark shadow-lg p-4 rounded-md transition-transform hover:scale-105
                ${index === 3 ? 'lg:hidden' : ''}`}
            >
              <div className="overflow-hidden rounded-md">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="mb-4 mx-auto object-cover h-48 sm:h-64 md:h-96 w-full"
                />
              </div>
              <h3 className="text-lg md:text-xl font-medium text-gold">{product.name}</h3>
              <p className="text-base md:text-lg mt-2 text-gray-300">{product.price}</p>
              <button
                className="mt-4 bg-gradient-to-r from-gold-light to-gold-dark text-black px-4 py-2 rounded-md hover:bg-black hover:text-gold-dark transition-all w-full"
                onClick={() => handleViewDetails(product.path)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta bg-gradient-gold text-center py-16 px-4">
        <h2 className="text-3xl font-semibold mb-4 text-white">
          Discover Your Perfect Watch
        </h2>
        <p className="text-base md:text-lg mb-6 text-white-off">
          Find a watch that matches your style and needs. Shop from our
          exclusive collection today!
        </p>
        <button
          className="bg-black text-gold px-6 py-2 rounded-md hover:bg-gold-dark hover:text-black transition-all w-full sm:w-auto"
          onClick={() => navigate("/contact")}
        >
          Get your customize watch
        </button>
      </section>
    </div>
  );
};

export default HomePage;
