import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function EquipmentCard({ equipment }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center dark:bg-gray-800 dark:text-white">
      <img
        src={equipment.image}
        alt={equipment.itemName}
        className="w-full h-56 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{equipment.itemName}</h3>
      <p className="text-gray-600 mb-2  text-center dark:text-gray-300">
        {equipment.description}
      </p>
      <p className="text-green-500 text-lg mb-4 dark:text-green-400">
        Price: ${equipment.price}
      </p>
      <Link to={`/details/${equipment._id}`}>
        <button className="bg-blue-500 text-white py-2 px-6 rounded-lg flex items-center justify-center hover:bg-blue-600 transition duration-300 dark:bg-blue-700 dark:hover:bg-blue-600">
          <span>View Details</span>
          <FaArrowRight className="ml-2 text-xl" />
        </button>
      </Link>
    </div>
  );
}
