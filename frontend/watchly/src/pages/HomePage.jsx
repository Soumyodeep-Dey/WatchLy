import { useNavigate } from 'react-router-dom';

const featuredProducts = [
  {
    id: 1,
    name: "Rolex Oyster Perpetual Day-Date 36",
    price: "$299.99",
    imageUrl: "/home1.webp",
  },
  {
    id: 2,
    name: "Rolex Lady-Datejust watch",
    price: "$599.99",
    imageUrl: "/home2.webp",
  },
  {
    id: 3,
    name: "Rolex Submariner",
    price: "$3,499.99",
    imageUrl: "/home3.jpg",
  },
];

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-black text-gold">
      {/* Hero Section */}
      <section
        className="hero bg-cover bg-center py-80 text-center relative"
        style={{
          backgroundImage:
            "url('/homebg.jpg')",
        }}
      >
        <div className="bg-black bg-opacity-70 absolute inset-0"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4 text-white">Welcome to Watchly</h1>
          <p className="text-lg mb-6 text-gray-300">
            Explore our premium collection of luxury and smartwatches.
          </p>
          <button
            className="bg-gradient-to-r from-gold-light to-gold-dark px-6 py-2 rounded-md hover:opacity-90 transition text-black font-semibold"
            onClick={() => navigate("/products")}
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products py-16 px-6">
        <h2 className="text-4xl font-semibold text-center mb-12 text-white">
          Featured Watches
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="product bg-black border border-gold-dark shadow-lg p-4 rounded-md transition-transform hover:scale-105"
            >
              <div className="overflow-hidden rounded-md">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="mb-4 mx-auto object-cover h-40 w-full"
                />
              </div>
              <h3 className="text-xl font-medium text-gold">{product.name}</h3>
              <p className="text-lg mt-2 text-gray-300">{product.price}</p>
              <button className="mt-4 bg-gradient-to-r from-gold-light to-gold-dark text-black px-4 py-2 rounded-md hover:bg-black hover:text-gold transition-all">
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>


      {/* Call to Action Section */ }
  <section className="cta bg-gradient-gold text-center py-16">
    <h2 className="text-3xl font-semibold mb-4 text-white">
      Discover Your Perfect Watch
    </h2>
    <p className="text-lg mb-6 text-white-off">
      Find a watch that matches your style and needs. Shop from our
      exclusive collection today!
    </p>
    <button className="bg-black text-gold px-6 py-2 rounded-md hover:bg-gold-dark hover:text-black transition-all" onClick={() => navigate("/contact")}>
      Get your customize watch
    </button>
  </section>
    </div >
  );
};

export default HomePage;
