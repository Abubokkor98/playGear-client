import React from "react";
import { Link } from "react-router-dom";

export default function SportsCategoryCard({equipment}) {
  return (
    <div
      key={equipment._id}
      className="bg-white p-6 rounded-lg shadow-lg text-center"
    >
      <img
        src={equipment.image}
        alt={equipment.itemName}
        className="w-full h-56 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{equipment.itemName}</h3>
      <p className="text-gray-600 mb-2">{equipment.description}</p>
      <p className="text-green-500 text-lg mb-4">Price: ${equipment.price}</p>
      <Link to={`/details/${equipment._id}`}>
      <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
        View Details
      </button>
      </Link>
    </div>
  );
}
