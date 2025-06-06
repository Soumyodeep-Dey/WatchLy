import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
    <div className="bg-black text-gold min-h-screen">
      {/* Hero Section */}
      <section
        className="hero bg-cover bg-center py-80 text-center relative md:py-80 sm:py-40"
        style={{
          backgroundImage: "url('/homebg.jpg')",
        }}
      >
        <div className="bg-black bg-opacity-60 absolute inset-0 backdrop-blur-sm"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-4 max-w-4xl mx-auto"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 0.2,
              type: "spring",
              stiffness: 100
            }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight"
          >
            Welcome to{" "}
            <motion.span 
              className="text-gold inline-block"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5,
                delay: 0.8,
                type: "spring",
                stiffness: 200
              }}
            >
              Watchly
            </motion.span>
          </motion.h1>
          <p className="text-lg md:text-xl mb-12 text-gray-300 leading-relaxed">
            Discover our curated collection of premium luxury and smartwatches, 
            where timeless elegance meets cutting-edge technology.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-gradient-to-r from-gold-light to-gold-dark px-10 py-4 rounded-full 
              text-black font-semibold text-xl overflow-hidden transition-all duration-300
              hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] 
              before:absolute before:inset-0 before:bg-white before:opacity-0 
              before:transition-opacity before:duration-300 hover:before:opacity-20"
            onClick={() => navigate("/products")}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Shop Now
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </motion.button>
        </motion.div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products py-24 px-4 md:px-8 max-w-[92rem] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.7,
              type: "spring",
              stiffness: 100
            }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Featured{" "}
            <motion.span 
              className="text-gold inline-block"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ 
                duration: 0.6,
                delay: 0.3,
                type: "spring",
                stiffness: 150
              }}
            >
              Watches
            </motion.span>
          </motion.h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className={`product bg-gradient-to-b from-gray-900 to-black border border-gold-dark/30 
                shadow-2xl p-3 rounded-xl transition-all duration-300
                ${index === 3 ? 'lg:hidden' : ''}
                hover:border-gold-dark hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]`}
            >
              <div className="overflow-hidden rounded-lg mb-3">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-76 sm:h-88 md:h-[30rem] object-cover transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gold mb-3">{product.name}</h3>
              <p className="text-lg md:text-xl mt-2 text-gray-300 mb-6">{product.price}</p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-gold-light to-gold-dark text-black px-6 py-3 
                  rounded-lg font-medium text-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] 
                  transition-all duration-300"
                onClick={() => handleViewDetails(product.path)}
              >
                View Details
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold-dark/20 to-gold-light/20 backdrop-blur-sm"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Discover Your Perfect <span className="text-gold">Watch</span>
          </h2>
          <p className="text-lg md:text-xl mb-10 text-gray-300 leading-relaxed">
            Find a watch that perfectly matches your style and needs. 
            Explore our exclusive collection today and make a statement that lasts.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-gold px-8 py-4 rounded-full font-semibold text-lg
              border-2 border-gold hover:bg-gold hover:text-black transition-all duration-300
              hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
            onClick={() => navigate("/contact")}
          >
            Get Your Custom Watch
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;
