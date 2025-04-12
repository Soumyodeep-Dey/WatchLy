import { useState, useEffect, createContext } from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!sessionStorage.getItem("jwt"));

  useEffect(() => {
    const checkAuthStatus = () => {
      setIsLoggedIn(!!sessionStorage.getItem("jwt")); // Update state based on sessionStorage
    };

    // Check auth status on mount
    checkAuthStatus();

    // Listen for changes to sessionStorage in the same tab
    const originalSetItem = sessionStorage.setItem;
    sessionStorage.setItem = function (key) {
      originalSetItem.apply(this, arguments);
      if (key === "jwt") {
        checkAuthStatus();
      }
    };

    return () => {
      sessionStorage.setItem = originalSetItem; // Restore original setItem
    };
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
