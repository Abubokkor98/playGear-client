import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function FeaturedEquipCard({ product }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-xl flex flex-col items-center dark:bg-gray-800 dark:text-white">
      <img
        src={product.image}
        alt={product.itemName}
        className="w-full h-56 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white transition-colors duration-300">
        {product.itemName}
      </h3>
      <p className="text-gray-600 mb-2 dark:text-gray-300 text-sm leading-relaxed  text-center">
        {product.description}
      </p>
      <p className="text-green-500 text-lg mb-4 dark:text-green-400">
        {`$${product.price}`}
      </p>
      <Link to={`/details/${product._id}`}>
        <button className="bg-blue-500 text-white py-2 px-6 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 dark:bg-blue-700 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
          <span>View Details</span>
          <FaArrowRight className="ml-2 text-xl" />
        </button>
      </Link>
    </div>
  );
}
