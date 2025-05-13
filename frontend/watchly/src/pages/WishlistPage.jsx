import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RemoveFromWIshListButton from "../buttons/RemoveFromWIshListButton";
import MoveToCartButton from "../buttons/MoveToCartButton";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchWishlistItems = async () => {
    const token = sessionStorage.getItem("jwt");

    if (!token) {
      toast.error('Please log in to view your wishlist', {
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
      return;
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/wishlist`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (res.ok) {
        setWishlistItems(data.wishlistItems);
      } else {
        toast.error('Failed to fetch wishlist items', {
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
      }
    } catch (error) {
      console.error("Error fetching wishlist items:", error);
      toast.error('Error loading wishlist', {
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
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWishlistItems();
  }, []);

  return (
    <div className="min-h-screen py-16 px-6 bg-black-rich text-white-off relative overflow-hidden">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        toastStyle={{
          background: 'rgba(17, 24, 39, 0.95)',
          border: '1px solid rgba(212, 175, 55, 0.2)',
          color: '#fff',
        }}
      />
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-95"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gold opacity-5 animate-spin-slow"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gold opacity-5 animate-spin-slow-reverse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gold relative">
          Your Wishlist
          <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></span>
        </h1>

        {loading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="w-16 h-16 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : wishlistItems.length > 0 ? (
          <div className="max-w-6xl mx-auto space-y-8">
            {wishlistItems.map((item) => (
              <div
                key={item._id}
                className="group bg-gray-900/40 backdrop-blur-md border border-gold/20 rounded-2xl p-6 shadow-lg transform hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="relative w-48 h-48 overflow-hidden rounded-xl group-hover:shadow-2xl transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img
                      src={item.productId.imageUrl}
                      alt={item.productId.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                      onClick={() => navigate(`/${item.productId.path}`)}
                    />
                  </div>
                  
                  <div className="flex-grow text-center md:text-left">
                    <h2 className="text-2xl font-semibold text-gold mb-3 group-hover:text-gold-light transition-colors duration-300">
                      {item.productId.name}
                    </h2>
                    <p className="text-xl text-gray-300 mb-4">
                      Price: <span className="text-gold">{item.productId.price}</span>
                    </p>
                    <p className="text-lg text-gray-400">
                      Quantity: <span className="text-gold">{item.quantity}</span>
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <MoveToCartButton
                      productId={item.productId._id}
                      quantity={item.quantity}
                      onCartUpdate={() => console.log("Cart updated")}
                      onWishlistUpdate={fetchWishlistItems}
                    />
                    <RemoveFromWIshListButton
                      productId={item.productId._id}
                      onWishlistUpdate={fetchWishlistItems}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <svg className="w-24 h-24 mx-auto text-gold/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <p className="text-xl text-gray-400 mb-8">
              Your wishlist is empty. Start adding your favorite timepieces!
            </p>
            <button
              className="px-8 py-3 bg-gradient-to-r from-gold to-gold-dark text-black font-semibold rounded-lg hover:opacity-90 transition-opacity duration-300"
              onClick={() => navigate("/products")}
            >
              Browse Collection
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default WishlistPage;
