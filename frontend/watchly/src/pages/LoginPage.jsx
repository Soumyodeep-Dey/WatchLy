import { useContext, useState } from "react";
import { AuthContext } from "../auth/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const LoginPage = () => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        if (data.token) {
          sessionStorage.setItem("jwt", data.token);
          setIsLoggedIn(true);
          navigate("/");
        } else {
          setError("Token not received from the server.");
        }
      } else {
        setError(data.error || "Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Something went wrong. Please try again.");
    }
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
            Welcome Back
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></span>
          </h2>
          
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-500 rounded-lg p-3 mb-6 text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
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
              Login
            </button>
          </form>

          {/* Signup Link */}
          <p className="text-center text-gray-400 mt-8">
            Don&apos;t have an account?{" "}
            <Link 
              to="/signup" 
              className="text-gold hover:text-gold-light transition-colors duration-300 font-semibold"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
