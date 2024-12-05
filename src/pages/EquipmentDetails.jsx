import React from "react";
import { useLoaderData } from "react-router-dom";

export default function EquipmentDetails() {
  const {
    image,
    itemName,
    category,
    description,
    price,
    rating,
    customization,
    processingTime,
    stockStatus,
    email,
  } = useLoaderData();
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-center mb-6">
        Equipment Details
      </h2>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row">
        <img src={image} alt={itemName} className="lg:max-w-sm lg:max-h-full object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">{itemName}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-500">Category</p>
              <p className="text-base text-gray-700">{category}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-500">Price</p>
              <p className="text-base text-gray-700">${price}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-500">Rating</p>
              <p className="text-base text-gray-700">{rating}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-500">
                Stock Status
              </p>
              <p className="text-base text-gray-700">{stockStatus} Available</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-500">
                Customization
              </p>
              <p className="text-base text-gray-700">{customization}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-500">
                Processing Time
              </p>
              <p className="text-base text-gray-700">{processingTime}</p>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-sm font-semibold text-gray-500">Posted By</p>
            <p className="text-base text-gray-700">{email}</p>
          </div>
        </div>
      </div>
    </div>
    

  );
}
