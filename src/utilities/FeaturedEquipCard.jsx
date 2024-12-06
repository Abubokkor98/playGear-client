import React from "react";

export default function FeaturedEquipCard({product}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col">
      <img
        src={product.image}
        alt={product.itemName}
        className="w-full h-56 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{product.itemName}</h3>
      <p className="text-gray-600 mb-2 flex-grow">{product.description}</p>
      <p className="text-green-500 text-lg mb-4">Price: ${product.price}</p>
      <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
        View Details
      </button>
    </div>
  );
}
