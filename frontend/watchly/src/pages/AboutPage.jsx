export default function AboutPage() {
  return (
    <div className="py-12 px-4 bg-black text-white">
      <h1 className="text-3xl font-semibold text-center mb-8 text-gold">About Watchly</h1>

      <div className="max-w-5xl mx-auto space-y-8">
        {/* Our Mission Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gold">Our Mission</h2>
          <p className="text-lg text-gray-300">
            Our mission at Watchly is to bring premium, stylish, and affordable watches to individuals who
            appreciate fine craftsmanship. We strive to provide an exceptional customer experience by offering
            carefully curated collections and top-notch service.
          </p>
        </section>

        {/* Our Vision Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gold">Our Vision</h2>
          <p className="text-lg text-gray-300">
            We envision becoming the leading online retailer for luxury watches, offering an extensive
            collection that caters to diverse tastes while ensuring excellent quality and customer satisfaction.
            Our commitment is to make every individual feel confident and elegant, one watch at a time.
          </p>
        </section>

        {/* Our Story Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gold">Our Story</h2>
          <p className="text-lg text-gray-300">
            Watchly was founded by a group of watch enthusiasts who sought to bridge the gap between luxury and
            accessibility. What began as a small project to provide quality timepieces at reasonable prices has
            grown into a thriving online business that serves customers worldwide.
          </p>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gold">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="/MY photo.jpg"
                alt="Soumyodeep Dey"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="font-semibold">Soumyodeep Dey</h3>
              <p className="text-gray-300">Founder & CEO</p>
            </div>
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Jane Smith"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="font-semibold">Jane Smith</h3>
              <p className="text-gray-300">Head of Marketing</p>
            </div>
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Alice Johnson"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="font-semibold">Alice Johnson</h3>
              <p className="text-gray-300">Product Designer</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
