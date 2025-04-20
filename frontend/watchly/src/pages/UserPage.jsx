import { useEffect, useState } from "react";

const UserPage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem("jwt");

    if (!token) {
      alert("Please log in to view your profile.");
      return;
    }

    // Fetch user details from the backend
    fetch("http://localhost:8000/api/auth/user", {
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
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user details:", error));
  }, []);

  if (!user) {
    return <div className="text-center text-lg text-gray-700">Loading...</div>;
  }

  return (
    <div className="bg-black-rich min-h-screen py-12 px-6 text-white-off">
      <h1 className="text-4xl font-bold text-center text-gold mb-12">
        User Profile
      </h1>
      <div className="max-w-3xl mx-auto bg-black border border-gold-dark rounded-xl p-6 shadow-lg">
        <p className="text-xl text-gold mb-4">
          <strong>Name:</strong> {user.name}
        </p>
        <p className="text-xl text-gold">
          <strong>Email:</strong> {user.email}
        </p>
      </div>
    </div>
  );
};

export default UserPage;