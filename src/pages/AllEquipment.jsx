import React from "react";
import { Link, useLoaderData } from "react-router-dom";

export default function AllEquipment() {
  const loadedEquipment = useLoaderData();
  const { image, itemName, category, price } = loadedEquipment;
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-center mb-6">
        All Sports Equipment {loadedEquipment.length}
      </h2>
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="table-auto w-full bg-white text-sm text-left border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">Image</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Category</th>
              <th className="px-4 py-2 border">Price</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loadedEquipment.map((equipment) => (
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border">
                  <img
                    src={equipment.image}
                    alt="Professional Basketball"
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-2 border">{equipment.itemName}</td>
                <td className="px-4 py-2 border">{equipment.category}</td>
                <td className="px-4 py-2 border">${equipment.price}</td>
                <td className="px-4 py-2 border">
                  <Link to={`/details/${equipment._id}`}>
                    <button className="inline-block px-4 py-2 bg-blue-500 text-white text-xs font-semibold rounded hover:bg-blue-600">
                      View Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
