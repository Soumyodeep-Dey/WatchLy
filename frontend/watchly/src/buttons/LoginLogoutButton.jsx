import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginLogoutButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check for token in sessionStorage on component mount
  useEffect(() => {
    const token = sessionStorage.getItem("jwt");
    setIsLoggedIn(!!token); // Update isLoggedIn based on token presence
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("jwt");
    setIsLoggedIn(false);
    navigate("/"); // Redirect to home after logout
  };

  return (
    <>
      {isLoggedIn ? (
        <button
          onClick={handleLogout}
          className="bg-gold text-black px-4 py-2 rounded-lg font-medium hover:bg-gold-light transition"
        >
          Logout
        </button>
      ) : (
        <Link
          to="/login"
          className="bg-gold text-black px-4 py-2 rounded-lg font-medium hover:bg-gold-light transition"
        >
          Login
        </Link>
      )}
    </>
  );
};

export default LoginLogoutButton;