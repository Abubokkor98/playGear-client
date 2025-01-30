import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-4 lg:px-10">
        <div className="flex flex-wrap justify-between items-center mb-6">
          <div className="">
            <h2 className="text-2xl font-bold mb-1">PlayGear</h2>
            <p className="text-sm text-gray-400 mb-2 dark:text-gray-300">
              Your ultimate destination for sports accessories.
            </p>
          </div>

          <div className="flex space-x-4">
            <Link
              href=""
              className="text-gray-400 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-500"
            >
              <FaFacebook size={24} />
            </Link>
            <Link className="text-gray-400 hover:text-blue-400 dark:text-gray-300 dark:hover:text-blue-400">
              <FaTwitter size={24} />
            </Link>
            <Link className="text-gray-400 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-500">
              <FaInstagram size={24} />
            </Link>
            <Link className="text-gray-400 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-700">
              <FaLinkedin size={24} />
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4 dark:border-gray-600">
          <div className="flex flex-wrap justify-between items-center">
            <div className="text-sm text-gray-400 dark:text-gray-300">
              <p>Email: contact@playgear.com</p>
              <p>Phone: +880 123-45678</p>
            </div>

            <div className="text-sm text-gray-400 dark:text-gray-300">
              &copy; {new Date().getFullYear()} PlayGear. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
