import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const UserPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", address: "", phone: "" });
  const [passwordData, setPasswordData] = useState({ currentPassword: "", newPassword: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = sessionStorage.getItem("jwt");

    if (!token) {
      toast.error('Please log in to view your profile', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        style: {
          background: 'rgba(17, 24, 39, 0.95)',
          border: '1px solid rgba(212, 175, 55, 0.2)',
          color: '#fff',
        },
        icon: '⌚',
      });
      setTimeout(() => {
        navigate("/login");
      }, 1000);
      return;
    }

    // Fetch user details from the backend
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch user details");
        }
        return response.json();
      })
      .then((data) => {
        setUser(data);
        setFormData({
          name: data.name,
          email: data.email,
          address: data.address || "",
          phone: data.phone || "",
        });
      })
      .catch((error) => console.error("Error fetching user details:", error))
      .finally(() => setLoading(false));
  }, [navigate]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  const handleUpdateDetails = (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem("jwt");

    fetch("http://localhost:8000/api/auth/user", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update user details");
        }
        return response.json();
      })
      .then((data) => {
        setMessage("✅ Details updated successfully!");
        setError("");
        setUser(data);
      })
      .catch((error) => {
        console.error("Error updating user details:", error);
        setError("❌ Failed to update details. Please try again.");
        setMessage("");
      });
  };

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem("jwt");

    fetch("http://localhost:8000/api/auth/user/password", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(passwordData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update password");
        }
        return response.json();
      })
      .then(() => {
        setMessage("✅ Password updated successfully!");
        setError("");
        setPasswordData({ currentPassword: "", newPassword: "" });
      })
      .catch((error) => {
        console.error("Error updating password:", error);
        setError("❌ Failed to update password. Please try again.");
        setMessage("");
      });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-black-rich">
        <div className="w-16 h-16 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

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
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gold relative">
          User Profile
          <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></span>
        </h1>

        <div className="max-w-3xl mx-auto space-y-8">
          {/* Messages */}
          {message && (
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 text-green-400 text-center animate-fade-in">
              {message}
            </div>
          )}
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-red-400 text-center animate-fade-in">
              {error}
            </div>
          )}

          {/* User Details Section */}
          <div className="bg-gray-900/40 backdrop-blur-md border border-gold/20 rounded-2xl p-8 shadow-lg transform hover:scale-[1.01] transition-all duration-300">
            <h2 className="text-2xl font-bold text-gold mb-8 relative inline-block">
              Your Details
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </h2>
            <form onSubmit={handleUpdateDetails} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="name" className="block text-lg font-semibold mb-2 text-gold group-hover:text-gold-light transition-colors duration-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 text-lg border border-gold/20 rounded-lg bg-black/50 text-white focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="group">
                  <label htmlFor="email" className="block text-lg font-semibold mb-2 text-gold group-hover:text-gold-light transition-colors duration-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 text-lg border border-gold/20 rounded-lg bg-black/50 text-white focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="group">
                  <label htmlFor="address" className="block text-lg font-semibold mb-2 text-gold group-hover:text-gold-light transition-colors duration-300">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full p-3 text-lg border border-gold/20 rounded-lg bg-black/50 text-white focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your address"
                  />
                </div>
                <div className="group">
                  <label htmlFor="phone" className="block text-lg font-semibold mb-2 text-gold group-hover:text-gold-light transition-colors duration-300">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 text-lg border border-gold/20 rounded-lg bg-black/50 text-white focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-gold to-gold-dark text-black text-lg font-bold rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02]"
              >
                Update Details
              </button>
            </form>
          </div>

          {/* Update Password Section */}
          <div className="bg-gray-900/40 backdrop-blur-md border border-gold/20 rounded-2xl p-8 shadow-lg transform hover:scale-[1.01] transition-all duration-300">
            <h2 className="text-2xl font-bold text-gold mb-8 relative inline-block">
              Update Password
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </h2>
            <form onSubmit={handleUpdatePassword} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="currentPassword" className="block text-lg font-semibold mb-2 text-gold group-hover:text-gold-light transition-colors duration-300">
                    Current Password
                  </label>
                  <input
                    type="password"
                    id="currentPassword"
                    name="currentPassword"
                    value={passwordData.currentPassword}
                    onChange={handlePasswordChange}
                    className="w-full p-3 text-lg border border-gold/20 rounded-lg bg-black/50 text-white focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your current password"
                    required
                  />
                </div>
                <div className="group">
                  <label htmlFor="newPassword" className="block text-lg font-semibold mb-2 text-gold group-hover:text-gold-light transition-colors duration-300">
                    New Password
                  </label>
                  <input
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    value={passwordData.newPassword}
                    onChange={handlePasswordChange}
                    className="w-full p-3 text-lg border border-gold/20 rounded-lg bg-black/50 text-white focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your new password"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-gold to-gold-dark text-black text-lg font-bold rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02]"
              >
                Update Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;