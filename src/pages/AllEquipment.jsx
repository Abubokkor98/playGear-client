import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";

export default function AllEquipment() {
  const loadedEquipment = useLoaderData();
  const [equipment, setEquipment] = useState(loadedEquipment);

  const handleSortAsc = () => {
    const sortedEquipment = [...equipment].sort((a, b) => a.price - b.price);
    setEquipment(sortedEquipment);
  };
  const handleSortDes = () => {
    const sortedEquipment = [...equipment].sort((a, b) => b.price - a.price);
    setEquipment(sortedEquipment);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Helmet>
        <title>AllEquipment | PlayGear</title>
      </Helmet>
      <h2 className="text-3xl font-semibold text-center mb-6">
        All Sports Equipment {equipment.length}
      </h2>
      <div className="mb-4 flex justify-start flex-col gap-2">
        <div>
          <button
            onClick={handleSortDes}
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
          >
            Sort by Price (Desc)
          </button>
        </div>
        <div className="">
          <button
            onClick={handleSortAsc}
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
          >
            Sort by Price(Asc)
          </button>
        </div>
      </div>

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
            {equipment.map((equipment) => (
              <tr key={equipment._id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">
                  <img
                    src={equipment.image}
                    alt="Equipment"
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-2 border">{equipment.itemName}</td>
                <td className="px-4 py-2 border">{equipment.category}</td>
                <td className="px-4 py-2 border">${equipment.price}</td>
                <td className="px-4 py-2 border">
                  <Link
                    to={`/details/${equipment._id}`}
                  >
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
