import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const HomePage = () => {
  const navigate = useNavigate();
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/watches`)
      .then((response) => response.json())
      .then((data) => {
        setFeaturedProducts(data);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex + 3 >= featuredProducts.length ? 0 : prevIndex + 3
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredProducts.length]);

  const handleViewDetails = (watchId) => {
    navigate(`/watch/${watchId}`);
  };

  const visibleProducts = featuredProducts.slice(currentIndex, currentIndex + 3);

  return (
    <div className="bg-black text-gold min-h-screen">
      {/* Hero Section */}
      <section
        className="hero bg-cover bg-center py-80 text-center relative md:py-80 sm:py-40"
        style={{
          backgroundImage: "url('/homebg.jpg')",
        }}
      >
        <motion.div 
          animate={{ 
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="bg-black absolute inset-0 backdrop-blur-sm"
        />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            scale: [1, 1.02, 1]
          }}
          transition={{ 
            y: { duration: 0.8 },
            scale: { 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative border-2 border-gold px-10 py-4 rounded-full 
                text-gold font-semibold text-xl overflow-hidden transition-all duration-300
                hover:bg-gold hover:text-black hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
              onClick={() => navigate("/contact")}
            >
              <span className="relative z-10">Contact Us</span>
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Categories Section */}
      <section className="categories py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            y: [0, -10, 0]
          }}
          transition={{ 
            opacity: { duration: 0.8 },
            y: { 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="max-w-7xl mx-auto"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
          >
            Explore Our <span className="text-gold">Collections</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Luxury', 'Smart', 'Sport'].map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gold-dark/30
                  hover:border-gold-dark hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-gold mb-4">{category} Watches</h3>
                <p className="text-gray-400 mb-6">
                  Discover our exclusive collection of {category.toLowerCase()} watches, 
                  crafted with precision and style.
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="text-gold hover:text-gold-light transition-colors duration-300"
                  onClick={() => navigate(`/products?category=${category.toLowerCase()}`)}
                >
                  View Collection →
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products py-24 px-4 md:px-8 max-w-[92rem] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
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
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
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
          <AnimatePresence mode="wait">
            {visibleProducts.map((product, index) => (
              <motion.div
                key={product._id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1
                }}
                whileHover={{ y: -10 }}
                className="product bg-gradient-to-b from-gray-900 to-black border border-gold-dark/30 
                  shadow-2xl p-3 rounded-xl transition-all duration-300
                  hover:border-gold-dark hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]"
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
                  onClick={() => handleViewDetails(product._id)}
                >
                  View Details
                </motion.button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: Math.ceil(featuredProducts.length / 3) }).map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index * 3)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index * 3 ? 'bg-gold' : 'bg-gray-600'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </section>

      {/* Why Choose Watchly Section */}
      <section className="features py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            scale: [1, 1.02, 1]
          }}
          transition={{ 
            opacity: { duration: 0.8 },
            scale: { 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="max-w-7xl mx-auto"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
          >
            Why Choose <span className="text-gold">Watchly</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Quality",
                description: "Each watch is crafted with the finest materials and precision engineering.",
                icon: "✨"
              },
              {
                title: "Expert Service",
                description: "Our team of watch experts provides exceptional service and support.",
                icon: "👨‍🔧"
              },
              {
                title: "Secure Shopping",
                description: "Shop with confidence with our secure payment and delivery system.",
                icon: "🔒"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-900 to-black
                  border border-gold-dark/30 hover:border-gold-dark hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]
                  transition-all duration-300"
              >
                <motion.div 
                  className="text-4xl mb-4"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Call to Action Section */}
      <section className="cta relative py-24 px-4 overflow-hidden">
        <motion.div 
          key="cta-bg"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
          }}
          transition={{ 
            opacity: { 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            },
            backgroundPosition: {
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }
          }}
          className="absolute inset-0 bg-gradient-to-r from-gold-dark/20 via-gold-light/20 to-gold-dark/20 backdrop-blur-sm"
          style={{
            backgroundSize: '200% 200%'
          }}
        />
        <motion.div 
          key="cta-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            scale: [1, 1.01, 1]
          }}
          transition={{ 
            y: { duration: 0.8 },
            scale: { 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              y: [0, -5, 0]
            }}
            transition={{ 
              opacity: { duration: 0.6 },
              y: { 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="mb-8"
          >
            <span className="text-6xl">⌚</span>
          </motion.div>
          <motion.h2 
            key="cta-heading"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              y: [0, -5, 0]
            }}
            transition={{ 
              opacity: { duration: 0.6 },
              y: { 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Discover Your Perfect{" "}
            <motion.span 
              key="cta-watch"
              className="text-gold inline-block"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                textShadow: [
                  '0 0 5px rgba(212,175,55,0.5)',
                  '0 0 20px rgba(212,175,55,0.8)',
                  '0 0 5px rgba(212,175,55,0.5)'
                ]
              }}
              transition={{ 
                opacity: { duration: 0.5 },
                textShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              Watch
            </motion.span>
          </motion.h2>
          <motion.p 
            key="cta-description"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              y: [0, -3, 0]
            }}
            transition={{ 
              opacity: { duration: 0.6 },
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="text-lg md:text-xl mb-10 text-gray-300 leading-relaxed"
          >
            Find a watch that perfectly matches your style and needs. 
            Explore our exclusive collection today and make a statement that lasts.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              y: [0, -3, 0]
            }}
            transition={{ 
              opacity: { duration: 0.6 },
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <motion.button
              key="cta-button"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 30px rgba(212,175,55,0.3)",
                backgroundColor: "#D4AF37",
                color: "#000"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-black text-gold px-8 py-4 rounded-full font-semibold text-lg
                border-2 border-gold transition-all duration-300"
              onClick={() => navigate("/contact")}
            >
              Get Your Custom Watch
            </motion.button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;
