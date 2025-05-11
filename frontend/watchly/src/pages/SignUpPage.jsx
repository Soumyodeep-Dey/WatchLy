import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    setSuccess("");

    const apiUrl = `${import.meta.env.VITE_BACKEND_URL}/api/auth/register`;

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to register. Please try again.");
        }
        return response.json();
      })
      .then(() => {
        setSuccess("Registration successful! Redirecting to login...");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      })
      .catch((error) => {
        console.error("Error during registration:", error);
        setError("Failed to register. Please try again.");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black-rich text-white relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gold opacity-5 animate-spin-slow"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gold opacity-5 animate-spin-slow-reverse"></div>
      </div>

      <div className="relative z-10 w-full max-w-md px-4">
        <div className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-gold/20 
          transform hover:scale-[1.02] transition-all duration-300">
          <h2 className="text-3xl font-bold text-center text-gold mb-8 relative">
            Create Account
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></span>
          </h2>
          
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-500 rounded-lg p-3 mb-6 text-center">
              {error}
            </div>
          )}
          {success && (
            <div className="bg-green-500/10 border border-green-500/20 text-green-500 rounded-lg p-3 mb-6 text-center">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="group">
              <label htmlFor="name" className="block text-lg font-semibold mb-2 text-gold group-focus-within:text-gold-light transition-colors">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 text-lg border border-gray-600 rounded-lg bg-black/50 text-white 
                  focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent
                  transition-all duration-300 placeholder-gray-500"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email Field */}
            <div className="group">
              <label htmlFor="email" className="block text-lg font-semibold mb-2 text-gold group-focus-within:text-gold-light transition-colors">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 text-lg border border-gray-600 rounded-lg bg-black/50 text-white 
                  focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent
                  transition-all duration-300 placeholder-gray-500"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password Field */}
            <div className="group">
              <label htmlFor="password" className="block text-lg font-semibold mb-2 text-gold group-focus-within:text-gold-light transition-colors">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 text-lg border border-gray-600 rounded-lg bg-black/50 text-white 
                  focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent
                  transition-all duration-300 placeholder-gray-500"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-gold-light to-gold-dark text-black text-lg font-bold 
                rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-gold/20
                focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              Sign Up
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center text-gray-400 mt-8">
            Already have an account?{" "}
            <Link 
              to="/login" 
              className="text-gold hover:text-gold-light transition-colors duration-300 font-semibold"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
