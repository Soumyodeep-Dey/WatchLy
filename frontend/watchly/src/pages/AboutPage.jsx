import React from "react";
// If you want to add animations, uncomment the next line and wrap animated sections with motion.div
// import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Soumyodeep Dey",
    role: "Founder & CEO",
    img: "/MY photo.jpg",
    alt: "Soumyodeep Dey portrait",
    bio: "Leading the vision and technological innovation",
    socials: {
      portfolio: "https://soumyodeep-dey.vercel.app/",
      twitter: "https://x.com/Soumyodeep2003",
      github: "https://github.com/Soumyodeep-Dey"
    }
  }
];

const currentFeatures = [
  "User Authentication: Secure login and signup functionality",
  "Product Browsing: Browse watches by categories (Classic, Luxury)",
  "Product Details: Detailed view of each watch with specifications",
  "Shopping Cart: Add, remove, and manage items in cart",
  "Wishlist: Save favorite watches for later",
  "User Profile: Manage personal information and orders",
  "Responsive Design: Mobile-friendly interface with Tailwind CSS",
  "Contact & About Pages: Information about the platform and contact details",
  "Advanced Search & Filtering: Find products easily with robust search and filter options",
  "Infinite Scroll: Seamless product loading as users scroll"
];

const upcomingFeatures = [
  "Personalized Recommendations: AI-powered product suggestions",
  "Virtual Try-On: AR technology for virtual watch try-on",
  "AI Style Advisor: Smart style suggestions based on trends",
  "Real-Time Analytics: User behavior tracking and insights",
  "Order Tracking: Real-time order status updates",
  "Payment Integration: Multiple payment gateway support",
  "Reviews & Ratings: User reviews and rating system",
  "Social Sharing: Share products on social media"
];

const frontendTech = [
  "React 18: Modern UI development",
  "Vite: Fast development and optimized builds",
  "Tailwind CSS: Rapid, responsive UI",
  "Framer Motion: Smooth animations and transitions",
  "React Router DOM: Client-side routing",
  "React Toastify: Toast notifications",
  "Font Awesome & React Icons: Iconography"
];

const backendTech = [
  "Node.js & Express: Server and API",
  "MongoDB & Mongoose: Database and ODM",
  "JWT: Authentication",
  "Bcrypt: Password hashing",
  "CORS: Cross-origin resource sharing",
  "Dotenv: Environment variable management"
];

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

        <div className="max-w-5xl mx-auto space-y-16">
          {/* About Section */}
          <section className="group bg-gray-800/40 backdrop-blur-md border border-gold/20 rounded-2xl p-8 shadow-lg transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gold relative inline-block">
              Our Story
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              <b>Watchly</b> is a next-generation e-commerce platform dedicated to wristwatches, blending luxury with technology to deliver an immersive, personalized shopping experience. Built on a scalable <b>MERN stack</b> architecture, Watchly is designed for high performance, real-time analytics, and future-ready features like AI-powered recommendations and AR try-on. Our mission is to create a seamless, personalized platform where watch enthusiasts can discover, explore, and purchase their perfect timepiece through an innovative and intuitive interface.
            </p>
          </section>

          {/* Features Section */}
          <section className="group bg-gray-800/40 backdrop-blur-md border border-gold/20 rounded-2xl p-8 shadow-lg transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gold relative inline-block">
              Features
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gold mb-2">Current Features</h3>
                <ul className="text-gray-300 space-y-2 list-disc list-inside">
                  {currentFeatures.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gold mb-2">Coming Soon</h3>
                <ul className="text-gray-300 space-y-2 list-disc list-inside">
                  {upcomingFeatures.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Technology Stack Section */}
          <section className="group bg-gray-800/40 backdrop-blur-md border border-gold/20 rounded-2xl p-8 shadow-lg transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gold relative inline-block">
              Technology Stack
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gold mb-2">Frontend</h3>
                <ul className="text-gray-300 space-y-2 list-disc list-inside">
                  {frontendTech.map((tech, idx) => (
                    <li key={idx}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gold mb-2">Backend</h3>
                <ul className="text-gray-300 space-y-2 list-disc list-inside">
                  {backendTech.map((tech, idx) => (
                    <li key={idx}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Meet the Creator Section (Solo Founder) */}
          <section className="group bg-gray-800/40 backdrop-blur-md border border-gold/20 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-gold relative inline-block">
              Meet the Creator
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </h2>
            <div className="max-w-md mx-auto">
              <div className="text-center bg-gray-900/50 backdrop-blur-sm border border-gold/20 rounded-xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="relative mb-6">
                  <div className="relative w-40 h-40 mx-auto">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gold/20 to-gold/5 animate-pulse"></div>
                    <img
                      src={teamMembers[0].img}
                      alt={teamMembers[0].alt}
                      className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-gold/20 group-hover:border-gold transition-all duration-500 transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gold mb-2 transform group-hover:scale-105 transition-transform duration-300">{teamMembers[0].name}</h3>
                <p className="text-gold-light font-semibold mb-2">{teamMembers[0].role}</p>
                <p className="text-gray-300 text-sm mt-2 leading-relaxed">{teamMembers[0].bio}</p>
                <p className="text-gray-400 text-xs mt-4 italic">This project is built and maintained by a solo founder with passion and dedication.</p>
                <div className="mt-4 flex justify-center space-x-4">
                  {/* Portfolio */}
                  {teamMembers[0].socials.portfolio && (
                    <a
                      href={teamMembers[0].socials.portfolio}
                      className="text-gold/60 hover:text-gold transition-colors duration-300"
                      aria-label={`Portfolio of ${teamMembers[0].name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {/* Portfolio SVG (Link icon) */}
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 14L21 3m0 0v7m0-7h-7M7 7v10a4 4 0 004 4h6" />
                      </svg>
                    </a>
                  )}
                  {/* Twitter */}
                  {teamMembers[0].socials.twitter && (
                    <a
                      href={teamMembers[0].socials.twitter}
                      className="text-gold/60 hover:text-gold transition-colors duration-300"
                      aria-label={`Twitter profile of ${teamMembers[0].name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {/* Twitter SVG */}
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </a>
                  )}
                  {/* GitHub */}
                  {teamMembers[0].socials.github && (
                    <a
                      href={teamMembers[0].socials.github}
                      className="text-gold/60 hover:text-gold transition-colors duration-300"
                      aria-label={`GitHub profile of ${teamMembers[0].name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {/* GitHub SVG */}
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
