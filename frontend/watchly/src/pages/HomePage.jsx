
const HomePage = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="hero bg-gray-100 text-center py-16">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    Welcome to Watchly
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                    Explore our premium collection of luxury and smartwatches.
                </p>
                <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
                    Shop Now
                </button>
            </section>

            {/* Featured Products Section */}
            <section className="featured-products py-16 px-6">
                <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
                    Featured Watches
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Example Product */}
                    <div className="product bg-white shadow-md p-4 rounded-md">
                        <img
                            src="/ICON.png"
                            alt="Watch"
                            className="mb-4 mx-auto"
                        />
                        <h3 className="text-lg font-medium text-gray-700">
                            Classic Wristwatch
                        </h3>
                        <p className="text-gray-600">Starting at $299</p>
                        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                            View Details
                        </button>
                    </div>

                    {/* Add more product cards here */}
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="cta bg-blue-500 text-white text-center py-16">
                <h2 className="text-3xl font-semibold mb-4">
                    Discover Your Perfect Watch
                </h2>
                <p className="text-lg mb-6">
                    Find a watch that matches your style and needs. Shop from our exclusive collection today!
                </p>
                <button className="bg-white text-blue-500 px-6 py-2 rounded-md hover:bg-gray-200">
                    Get Started
                </button>
            </section>
        </div>
    );
};

export default HomePage;
