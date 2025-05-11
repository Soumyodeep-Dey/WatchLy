export default function AboutPage() {
  return (
    <div className="min-h-screen py-16 px-6 bg-black-rich text-white-off">
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gold relative">
        About Watchly
        <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></span>
      </h1>

      {/* Content Container */}
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Our Mission Section */}
        <section className="bg-black border border-gold-light rounded-xl p-8 shadow-lg transform hover:scale-[1.02] transition-all duration-300">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gold-light relative inline-block">
            Our Mission
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gold-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Our mission at Watchly is to bring premium, stylish, and affordable
            watches to individuals who appreciate fine craftsmanship. We strive
            to provide an exceptional customer experience by offering carefully
            curated collections and top-notch service.
          </p>
        </section>

        {/* Our Vision Section */}
        <section className="bg-black border border-gold-light rounded-xl p-8 shadow-lg transform hover:scale-[1.02] transition-all duration-300">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gold-light relative inline-block">
            Our Vision
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gold-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            We envision becoming the leading online retailer for luxury watches,
            offering an extensive collection that caters to diverse tastes while
            ensuring excellent quality and customer satisfaction. Our commitment
            is to make every individual feel confident and elegant, one watch at
            a time.
          </p>
        </section>

        {/* Our Story Section */}
        <section className="bg-black border border-gold-light rounded-xl p-8 shadow-lg transform hover:scale-[1.02] transition-all duration-300">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gold-light relative inline-block">
            Our Story
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gold-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Watchly was founded by a group of watch enthusiasts who sought to
            bridge the gap between luxury and accessibility. What began as a
            small project to provide quality timepieces at reasonable prices has
            grown into a thriving online business that serves customers
            worldwide.
          </p>
        </section>

        {/* Meet the Team Section */}
        <section className="bg-black border border-gold-light rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-gold-light relative inline-block">
            Meet the Team
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gold-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center bg-black border border-gold-dark rounded-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="relative mb-6">
                <img
                  src="/MY photo.jpg"
                  alt="Soumyodeep Dey"
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-gold-dark group-hover:border-gold transition-all duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gold opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-semibold text-gold mb-2">Soumyodeep Dey</h3>
              <p className="text-gray-400">Founder & CEO</p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center bg-black border border-gold-dark rounded-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="relative mb-6">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Jane Smith"
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-gold-dark group-hover:border-gold transition-all duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gold opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-semibold text-gold mb-2">Jane Smith</h3>
              <p className="text-gray-400">Head of Marketing</p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center bg-black border border-gold-dark rounded-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="relative mb-6">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Alice Johnson"
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-gold-dark group-hover:border-gold transition-all duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gold opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-semibold text-gold mb-2">Alice Johnson</h3>
              <p className="text-gray-400">Product Designer</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
