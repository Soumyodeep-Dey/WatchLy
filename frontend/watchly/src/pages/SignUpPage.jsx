import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate(); // For navigation after successful registration

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

    const apiUrl = `${import.meta.env.VITE_BACKEND_URL}/api/auth/register`; // API endpoint for registration

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
          navigate("/login"); // Redirect to login page after successful registration
        }, 2000);
      })
      .catch((error) => {
        console.error("Error during registration:", error);
        setError("Failed to register. Please try again.");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black-rich text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gold mb-6">Sign Up</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && <p className="text-green-500 text-center mb-4">{success}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-lg font-semibold mb-2 text-gold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 text-lg border border-gray-600 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-gold"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-lg font-semibold mb-2 text-gold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 text-lg border border-gray-600 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-gold"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-lg font-semibold mb-2 text-gold">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 text-lg border border-gray-600 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-gold"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gold text-black text-lg font-bold rounded-lg hover:bg-yellow-500 transition duration-300 transform hover:scale-105"
          >
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-400 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-gold hover:text-yellow-500">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
