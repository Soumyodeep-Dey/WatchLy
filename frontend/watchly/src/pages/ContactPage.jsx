import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., sending data to an API
    console.log(formData);
  };

  return (
    <div className="py-12 px-4 bg-black-rich text-white min-h-screen flex flex-col justify-center">
      <h1 className="text-5xl font-bold text-center mb-12 text-gold">Contact Us</h1>

      <div className="w-full max-w-4xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-10 shadow-2xl rounded-lg space-y-8"
        >
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-semibold mb-3 text-gold"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 text-lg border border-gray-600 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-gold transition duration-200"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-semibold mb-3 text-gold"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 text-lg border border-gray-600 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-gold transition duration-200"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-lg font-semibold mb-3 text-gold"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 text-lg border border-gray-600 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-gold transition duration-200"
              rows="6"
              placeholder="Write your message"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-gold text-black text-lg font-bold rounded-lg hover:bg-yellow-500 transition duration-300 transform hover:scale-105"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-12 text-center text-gray-400 space-y-4">
          <p className="text-xl">Or reach us at:</p>
          <p className="font-semibold text-white text-lg">Email: contact@watchly.com</p>
          <p className="text-white text-lg">Phone: +1 800 123 4567</p>
        </div>
      </div>
    </div>
  );
}