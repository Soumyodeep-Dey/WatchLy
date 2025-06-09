import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddtoWishListButton from "../buttons/AddtoWishListButtom";
import RemoveFromCartButton from "../buttons/RemoveFromCartButtom";
import { useCartWishlist } from "../context/CartWishlistContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CartPage() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { updateCartCount } = useCartWishlist();

  const fetchCartItems = async () => {
    const token = sessionStorage.getItem("jwt");

    if (!token) {
      toast.error('Please log in to view your cart', {
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

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (res.ok) {
        setCartItems(data.cartItems);
        updateCartCount(data.cartItems.length);
      } else {
        setError("Failed to fetch cart items. Please try again.");
        return;
      }
    } catch (error) {
      console.error("Error fetching cart items:", error);
      setCartItems([]);
      updateCartCount(0);
    } finally {
      setLoading(false);
    }
  };

  const handleQuantityChange = async (productId, quantityChange) => {
    const token = sessionStorage.getItem("jwt");

    if (!token) {
      toast.error('Please log in to update cart items', {
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
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/cart/${productId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ quantityChange }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success('Cart updated successfully', {
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
        fetchCartItems();
      } else {
        toast.error('Failed to update cart', {
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
      console.error("Error updating cart item:", error);
      toast.error('Error updating cart', {
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
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  // Calculate the total price
  const totalPrice = cartItems.reduce((total, item) => {
    const itemPrice = parseFloat(item.productId.price.replace(/[^0-9.-]+/g, "")); // Remove currency symbols
    return total + itemPrice * item.quantity;
  }, 0);

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
          Your Cart
          <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></span>
        </h1>

        {error && (
          <div className="max-w-2xl mx-auto mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-center">
            {error}
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="w-16 h-16 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : cartItems.length > 0 ? (
          <div className="max-w-6xl mx-auto space-y-8">
            {cartItems.map((item) => (
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
                    <div className="flex flex-col md:flex-row items-center gap-4">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => handleQuantityChange(item.productId._id, -1)}
                          className="w-10 h-10 flex items-center justify-center bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors duration-300"
                        >
                          -
                        </button>
                        <span className="text-xl font-semibold text-gold">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.productId._id, 1)}
                          className="w-10 h-10 flex items-center justify-center bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors duration-300"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <RemoveFromCartButton
                      productId={item.productId._id}
                      onCartUpdate={fetchCartItems}
                    />
                    <AddtoWishListButton productId={item.productId._id} />
                  </div>
                </div>
              </div>
            ))}

            {/* Total Price Section */}
            <div className="mt-12 p-6 bg-gray-900/40 backdrop-blur-md border border-gold/20 rounded-2xl">
              <div className="flex justify-between items-center">
                <span className="text-2xl text-gray-300">Total Amount:</span>
                <span className="text-3xl font-bold text-gold">${totalPrice.toFixed(2)}</span>
              </div>
              <button
                className="w-full mt-6 py-3 bg-gradient-to-r from-gold to-gold-dark text-black font-semibold rounded-lg hover:opacity-90 transition-opacity duration-300"
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <svg className="w-24 h-24 mx-auto text-gold/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <p className="text-xl text-gray-400 mb-8">
              Your cart is empty. Discover our collection of premium timepieces!
            </p>
            <button
              className="px-8 py-3 bg-gradient-to-r from-gold to-gold-dark text-black font-semibold rounded-lg hover:opacity-90 transition-opacity duration-300"
              onClick={() => navigate("/products")}
            >
              Explore Watches
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;
