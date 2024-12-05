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
    <div className="py-12 px-4">
      <h1 className="text-3xl font-semibold text-center mb-8">Contact Us</h1>

      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg rounded-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              rows="4"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 text-center text-gray-600">
          <p>Or reach us at:</p>
          <p className="font-semibold">Email: contact@watchly.com</p>
          <p>Phone: +1 800 123 4567</p>
        </div>
      </div>
    </div>
  );
}
