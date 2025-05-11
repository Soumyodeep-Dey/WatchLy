export default function AboutPage() {
  return (
    <div className="min-h-screen py-16 px-6 bg-black-rich text-white-off relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-95"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gold opacity-5 animate-spin-slow"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gold opacity-5 animate-spin-slow-reverse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gold relative">
          About Watchly
          <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></span>
        </h1>

        {/* Content Container */}
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Our Mission Section */}
          <section className="group bg-gray-800/40 backdrop-blur-md border border-gold/20 rounded-2xl p-8 shadow-lg transform hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gold relative inline-block">
              Our Mission
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              At Watchly, we're revolutionizing the watch shopping experience by combining cutting-edge technology with timeless elegance. Our mission is to create a seamless, personalized platform where watch enthusiasts can discover, explore, and purchase their perfect timepiece through an innovative and intuitive interface.
            </p>
          </section>

          {/* Our Vision Section */}
          <section className="group bg-gray-800/40 backdrop-blur-md border border-gold/20 rounded-2xl p-8 shadow-lg transform hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gold relative inline-block">
              Our Vision
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              We envision Watchly as the future of watch retail, where artificial intelligence meets luxury shopping. Through our AI-powered recommendation system and upcoming virtual try-on feature, we're creating an immersive shopping experience that bridges the gap between online convenience and in-store expertise. Our goal is to make luxury watch shopping accessible, personalized, and technologically advanced.
            </p>
          </section>

          {/* Our Technology Section */}
          <section className="group bg-gray-800/40 backdrop-blur-md border border-gold/20 rounded-2xl p-8 shadow-lg transform hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gold relative inline-block">
              Our Technology
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gold">Current Features</h3>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-center">
                    <span className="text-gold mr-2">•</span>
                    Advanced Search & Filtering System
                  </li>
                  <li className="flex items-center">
                    <span className="text-gold mr-2">•</span>
                    Infinite Scroll Product Loading
                  </li>
                  <li className="flex items-center">
                    <span className="text-gold mr-2">•</span>
                    Responsive Design with Tailwind CSS
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gold">Coming Soon</h3>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-center">
                    <span className="text-gold mr-2">•</span>
                    AI-Powered Style Advisor
                  </li>
                  <li className="flex items-center">
                    <span className="text-gold mr-2">•</span>
                    Virtual Try-On with AR
                  </li>
                  <li className="flex items-center">
                    <span className="text-gold mr-2">•</span>
                    Real-Time Analytics Dashboard
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Meet the Team Section */}
          <section className="group bg-gray-800/40 backdrop-blur-md border border-gold/20 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-gold relative inline-block">
              Meet the Team
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="text-center bg-gray-900/50 backdrop-blur-sm border border-gold/20 rounded-xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative mb-6">
                  <div className="relative w-40 h-40 mx-auto">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gold/20 to-gold/5 animate-pulse"></div>
                    <img
                      src="/MY photo.jpg"
                      alt="Soumyodeep Dey"
                      className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-gold/20 group-hover:border-gold transition-all duration-500 transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gold mb-2 transform group-hover:scale-105 transition-transform duration-300">Soumyodeep Dey</h3>
                <p className="text-gold-light font-semibold mb-2">Founder & CEO</p>
                <p className="text-gray-300 text-sm mt-2 leading-relaxed">Leading the vision and technological innovation</p>
                <div className="mt-4 flex justify-center space-x-4">
                  <a href="#" className="text-gold/60 hover:text-gold transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-gold/60 hover:text-gold transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-gold/60 hover:text-gold transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="text-center bg-gray-900/50 backdrop-blur-sm border border-gold/20 rounded-xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative mb-6">
                  <div className="relative w-40 h-40 mx-auto">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gold/20 to-gold/5 animate-pulse"></div>
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Jane Smith"
                      className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-gold/20 group-hover:border-gold transition-all duration-500 transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gold mb-2 transform group-hover:scale-105 transition-transform duration-300">Jane Smith</h3>
                <p className="text-gold-light font-semibold mb-2">Head of Technology</p>
                <p className="text-gray-300 text-sm mt-2 leading-relaxed">Driving AI and AR innovation</p>
                <div className="mt-4 flex justify-center space-x-4">
                  <a href="#" className="text-gold/60 hover:text-gold transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-gold/60 hover:text-gold transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-gold/60 hover:text-gold transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="text-center bg-gray-900/50 backdrop-blur-sm border border-gold/20 rounded-xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative mb-6">
                  <div className="relative w-40 h-40 mx-auto">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gold/20 to-gold/5 animate-pulse"></div>
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Alice Johnson"
                      className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-gold/20 group-hover:border-gold transition-all duration-500 transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gold mb-2 transform group-hover:scale-105 transition-transform duration-300">Alice Johnson</h3>
                <p className="text-gold-light font-semibold mb-2">UX/UI Designer</p>
                <p className="text-gray-300 text-sm mt-2 leading-relaxed">Crafting the perfect user experience</p>
                <div className="mt-4 flex justify-center space-x-4">
                  <a href="#" className="text-gold/60 hover:text-gold transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-gold/60 hover:text-gold transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-gold/60 hover:text-gold transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
