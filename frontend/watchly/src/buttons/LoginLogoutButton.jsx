import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

const LoginLogoutButton = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the token from sessionStorage
    sessionStorage.removeItem("jwt");
    // Update the global login state
    setIsLoggedIn(false);
    // Redirect to the home page
    navigate("/");
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
