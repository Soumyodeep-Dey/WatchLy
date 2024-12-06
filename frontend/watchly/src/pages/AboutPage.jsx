export default function AboutPage() {
  return (
    <div className="py-12 px-6 bg-black-rich text-white-off">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-12 text-gold">
        About Watchly
      </h1>

      {/* Content Container */}
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Our Mission Section */}
        <section className="bg-black border border-gold-light rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gold-light">
            Our Mission
          </h2>
          <p className="text-lg text-gray-400">
            Our mission at Watchly is to bring premium, stylish, and affordable
            watches to individuals who appreciate fine craftsmanship. We strive
            to provide an exceptional customer experience by offering carefully
            curated collections and top-notch service.
          </p>
        </section>

        {/* Our Vision Section */}
        <section className="bg-black border border-gold-light rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gold-light">
            Our Vision
          </h2>
          <p className="text-lg text-gray-400">
            We envision becoming the leading online retailer for luxury watches,
            offering an extensive collection that caters to diverse tastes while
            ensuring excellent quality and customer satisfaction. Our commitment
            is to make every individual feel confident and elegant, one watch at
            a time.
          </p>
        </section>

        {/* Our Story Section */}
        <section className="bg-black border border-gold-light rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gold-light">
            Our Story
          </h2>
          <p className="text-lg text-gray-400">
            Watchly was founded by a group of watch enthusiasts who sought to
            bridge the gap between luxury and accessibility. What began as a
            small project to provide quality timepieces at reasonable prices has
            grown into a thriving online business that serves customers
            worldwide.
          </p>
        </section>

        {/* Meet the Team Section */}
        <section className="bg-black border border-gold-light rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-8 text-gold-light">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center bg-black border border-gold-dark rounded-xl p-4 hover:shadow-xl transition-all">
              <img
                src="/MY photo.jpg"
                alt="Soumyodeep Dey"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gold">Soumyodeep Dey</h3>
              <p className="text-gray-400">Founder & CEO</p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center bg-black border border-gold-dark rounded-xl p-4 hover:shadow-xl transition-all">
              <img
                src="https://via.placeholder.com/150"
                alt="Jane Smith"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gold">Jane Smith</h3>
              <p className="text-gray-400">Head of Marketing</p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center bg-black border border-gold-dark rounded-xl p-4 hover:shadow-xl transition-all">
              <img
                src="https://via.placeholder.com/150"
                alt="Alice Johnson"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gold">Alice Johnson</h3>
              <p className="text-gray-400">Product Designer</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
