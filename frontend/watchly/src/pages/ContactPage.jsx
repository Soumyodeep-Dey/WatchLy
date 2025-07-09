import { useState } from 'react';

const socials = [
  {
    name: 'Portfolio',
    url: 'https://soumyodeep-dey.vercel.app/',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 14L21 3m0 0v7m0-7h-7M7 7v10a4 4 0 004 4h6" />
      </svg>
    ),
    aria: 'Portfolio of Soumyodeep Dey',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Soumyodeep-Dey',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
      </svg>
    ),
    aria: 'GitHub profile of Soumyodeep Dey',
  },
  {
    name: 'Twitter',
    url: 'https://x.com/Soumyodeep2003',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
      </svg>
    ),
    aria: 'Twitter profile of Soumyodeep Dey',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., sending data to an API
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="py-12 px-4 bg-black-rich text-white min-h-screen flex flex-col justify-center">
      <h1 className="text-5xl font-bold text-center mb-12 text-gold">Contact Me</h1>

      <div className="w-full max-w-4xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-10 shadow-2xl rounded-lg space-y-8"
          aria-label="Contact form"
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
              aria-required="true"
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
              aria-required="true"
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
              aria-required="true"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-gold text-black text-lg font-bold rounded-lg hover:bg-yellow-500 transition duration-300 transform hover:scale-105"
          >
            Send Message
          </button>

          {/* Success Message */}
          {submitted && (
            <div className="mt-4 text-center text-green-400 font-semibold animate-fade-in">
              Thank you for reaching out! I will get back to you soon.
            </div>
          )}
        </form>

        {/* Divider */}
        <div className="flex items-center my-12">
          <div className="flex-grow border-t border-gold/30"></div>
          <span className="mx-4 text-gold/70 font-semibold">OR</span>
          <div className="flex-grow border-t border-gold/30"></div>
        </div>

        {/* Contact & Social Info */}
        <div className="text-center text-gray-400 space-y-4">
          <p className="text-xl">You can also connect with me directly:</p>
          <p className="font-semibold text-white text-lg">Email: <a href="mailto:soumyodeepdey2003@gmail.com" className="underline hover:text-gold transition-colors">soumyodeepdey2003@gmail.com</a></p>
          <div className="flex justify-center gap-6 mt-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="text-gold/60 hover:text-gold transition-colors duration-300"
                aria-label={social.aria}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p className="text-white text-lg mt-4">Solo Founder: Soumyodeep Dey</p>
        </div>
      </div>
    </div>
  );
}