import React from "react";

export default function MyEquipCard({equipment}) {
    const {image, itemName, category, price,stockStatus} = equipment;
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img
        className="h-40 w-full object-cover rounded-md mb-4"
        src={image}
        alt="Equipment"
      />
      <h3 className="text-lg font-semibold mb-2">{itemName}</h3>
      <p className="text-gray-700 text-sm mb-2">
        <strong>Category:</strong> {category}
      </p>
      <p className="text-gray-700 text-sm mb-2">
        <strong>Price:</strong> ${price}
      </p>
      <p className="text-gray-700 text-sm mb-4">
        <strong>Stock:</strong> {stockStatus} available
      </p>
      <div className="flex justify-between">
        <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded">
          Update
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded">
          Delete
        </button>
      </div>
    </div>
  );
}
