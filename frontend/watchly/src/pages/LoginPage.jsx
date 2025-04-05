import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate(); // For navigation after login

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");

    const apiUrl = "http://localhost:8000/api/auth/login"; // Replace with your actual API URL
    const userData = {
      email: formData.email,
      password: formData.password,
    };

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Invalid email or password");
        }
        return response.json();
      })
      .then((data) => {
        if (data.token) {
          // Store the token in localStorage
          localStorage.setItem("token", data.token);

          // Redirect to the home page or dashboard
          navigate("/");
        } else {
          setError("Invalid email or password");
        }
      })
      .catch((error) => {
        console.error("Error logging in:", error);
        setError("Error logging in. Please try again.");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black-rich text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gold mb-6">Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
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
            Login
          </button>
        </form>

        {/* Signup Link */}
        <p className="text-center text-gray-400 mt-6">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-gold hover:text-yellow-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
