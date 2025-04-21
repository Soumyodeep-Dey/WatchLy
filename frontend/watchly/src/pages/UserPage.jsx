import { useEffect, useState } from "react";

const UserPage = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", address: "", phone: "" });
  const [passwordData, setPasswordData] = useState({ currentPassword: "", newPassword: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const token = sessionStorage.getItem("jwt");

    if (!token) {
      alert("Please log in to view your profile.");
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
      .catch((error) => console.error("Error fetching user details:", error));
  }, []);

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

  if (!user) {
    return <div className="text-center text-lg text-gray-700">Loading...</div>;
  }

  return (
    <div className="bg-black-rich min-h-screen py-12 px-6 text-white-off">
      <h1 className="text-4xl font-bold text-center text-gold mb-12">User Profile</h1>

      <div className="max-w-3xl mx-auto bg-black border border-gold-dark rounded-xl p-6 shadow-lg">
        {message && <p className="text-green-500 text-center mb-4">{message}</p>}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* User Details */}
        <h2 className="text-2xl font-bold text-gold mb-6">Your Details</h2>
        <form onSubmit={handleUpdateDetails} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-semibold mb-2 text-gold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 text-lg border border-gray-600 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-gold"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-semibold mb-2 text-gold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 text-lg border border-gray-600 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-gold"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-lg font-semibold mb-2 text-gold">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full p-3 text-lg border border-gray-600 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-gold"
              placeholder="Enter your address"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-lg font-semibold mb-2 text-gold">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-3 text-lg border border-gray-600 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-gold"
              placeholder="Enter your phone number"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gold text-black text-lg font-bold rounded-lg hover:bg-yellow-500 transition duration-300 transform hover:scale-105"
          >
            Update Details
          </button>
        </form>

        {/* Update Password */}
        <h2 className="text-2xl font-bold text-gold mt-12 mb-6">Update Password</h2>
        <form onSubmit={handleUpdatePassword} className="space-y-6">
          <div>
            <label htmlFor="currentPassword" className="block text-lg font-semibold mb-2 text-gold">
              Current Password
            </label>
            <input
              type="password"
              id="currentPassword"
              name="currentPassword"
              value={passwordData.currentPassword}
              onChange={handlePasswordChange}
              className="w-full p-3 text-lg border border-gray-600 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-gold"
              placeholder="Enter your current password"
              required
            />
          </div>
          <div>
            <label htmlFor="newPassword" className="block text-lg font-semibold mb-2 text-gold">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={passwordData.newPassword}
              onChange={handlePasswordChange}
              className="w-full p-3 text-lg border border-gray-600 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-gold"
              placeholder="Enter your new password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gold text-black text-lg font-bold rounded-lg hover:bg-yellow-500 transition duration-300 transform hover:scale-105"
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserPage;