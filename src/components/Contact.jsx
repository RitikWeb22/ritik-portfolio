import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div
      id="contact"
      className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center justify-center bg-gray-100 py-10 px-4 sm:px-6 lg:px-8"
    >
      {/* Animated Form Container */}
      <motion.div
        className="max-w-3xl w-full bg-white shadow-md rounded-lg p-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h2>
        <motion.form
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          action="https://formspree.io/f/xbldbkvb"
          method="POST"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Your message..."
            ></textarea>
          </div>
          <div className="flex justify-center">
            <motion.button
              type="submit"
              className="px-6 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </motion.div>

      {/* Animated Image Container */}
      <motion.div
        className="mt-10 md:mt-0 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 2, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/bg.png"
          alt="Contact Background"
          className="w-full max-w-md"
        />
      </motion.div>
    </div>
  );
};

export default Contact;
