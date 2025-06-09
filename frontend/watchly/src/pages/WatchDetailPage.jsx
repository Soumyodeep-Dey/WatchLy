import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddToCartButton from "../buttons/AddToCartButton";
import AddtoWishListButtom from "../buttons/AddtoWishListButtom";

const WatchDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [watch, setWatch] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWatch = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/watches/${id}`);
        if (!response.ok) {
          throw new Error('Watch not found');
        }
        const data = await response.json();
        setWatch(data);
      } catch (error) {
        console.error('Error fetching watch:', error);
        toast.error('Failed to load watch details', {
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
        });
        navigate('/products');
      } finally {
        setLoading(false);
      }
    };

    fetchWatch();
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gold"></div>
      </div>
    );
  }

  if (!watch) {
    return null;
  }

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 md:px-8">
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
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* Watch Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black p-4"
          >
            <img
              src={watch.imageUrl}
              alt={watch.name}
              className="w-full h-[600px] object-cover rounded-xl transform hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Watch Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gold mb-4">{watch.name}</h1>
              <p className="text-2xl text-white mb-6">{watch.price}</p>
              <p className="text-gray-300 leading-relaxed">{watch.description}</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-gold">Brand:</span>
                <span className="text-white">{watch.brand}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gold">Category:</span>
                <span className="text-white">{watch.category}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <div className="flex-1">
                <AddToCartButton productId={watch._id} />
              </div>
              <div className="flex-1">
                <AddtoWishListButtom productId={watch._id} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default WatchDetailPage; 