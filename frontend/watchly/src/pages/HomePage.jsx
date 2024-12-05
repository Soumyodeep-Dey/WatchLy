
const featuredProducts = [
  {
    id: 1,
    name: "Classic Wristwatch",
    price: "$299",
    imageUrl: "https://rukminim2.flixcart.com/image/850/1000/xif0q/watch/o/j/4/1-chronograph-full-stainless-steel-30m-water-resistant-luxury-original-imagt4gyvgun3akd.jpeg?q=90&crop=false",
  },
  {
    id: 2,
    name: "Luxury Timepiece",
    price: "$999",
    imageUrl: "https://www.watchesworld.com/wp-content/uploads/2023/08/Omega-Seamaster-300m-Chronograph-1.jpg",
  },
  {
    id: 3,
    name: "Limited Edition",
    price: "$3,499",
    imageUrl: "https://m.media-amazon.com/images/I/61IduqXygwL._AC_UY350_.jpg",
  },
];

const HomePage = () => {
  return (
    <div className="bg-black text-gold">
      {/* Hero Section */}
      <section
        className="hero bg-cover bg-center py-16 text-center relative"
        style={{ backgroundImage: "url('/hero-watch-bg.jpg')" }}
      >
        <div className="bg-black-rich bg-opacity-70 absolute inset-0"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4 text-white-off">
            Welcome to Watchly
          </h1>
          <p className="text-lg mb-6 text-white">
            Explore our premium collection of luxury and smartwatches.
          </p>
          <button className="bg-gradient-gold px-6 py-2 rounded-md hover:opacity-90 transition text-black font-semibold">
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
              <img
                src={product.imageUrl}
                alt={product.name}
                className="mb-4 mx-auto h-40"
              />
              <h3 className="text-xl font-medium text-gold">{product.name}</h3>
              <p className="text-lg mt-2 text-white-off">{product.price}</p>
              <button className="mt-4 bg-gradient-to-r from-gold-light to-gold-dark text-black px-4 py-2 rounded-md hover:bg-black hover:text-gold transition-all">
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta bg-gradient-gold text-center py-16">
        <h2 className="text-3xl font-semibold mb-4 text-white">
          Discover Your Perfect Watch
        </h2>
        <p className="text-lg mb-6 text-white-off">
          Find a watch that matches your style and needs. Shop from our
          exclusive collection today!
        </p>
        <button className="bg-black text-gold px-6 py-2 rounded-md hover:bg-gold hover:text-black transition-all">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default HomePage;
