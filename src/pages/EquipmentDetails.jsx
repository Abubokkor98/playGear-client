import React from "react";
import { Helmet } from "react-helmet-async";
import { IoCloseSharp } from "react-icons/io5";
import { useLoaderData, useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>{itemName} | PlayGear</title>
      </Helmet>
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden relative">
        {/* Back button */}
        <button
          onClick={handleBack}
          className="absolute top-4 right-4 p-2 bg-red-500 rounded-full text-white hover:bg-red-600 transition-colors"
        >
          <IoCloseSharp className="w-6 h-6" />
        </button>

        {/* Image and Details */}
        <div className="flex flex-col lg:flex-row">
          <img
            src={image}
            alt={itemName}
            className="w-full lg:w-1/2 h-96 object-cover lg:rounded-l-xl"
          />
          <div className="p-8 lg:w-1/2">
            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              {itemName}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {description}
            </p>

            {/* Grid for details */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-sm font-semibold text-gray-500">Category</p>
                <p className="text-lg text-gray-900 dark:text-gray-100">
                  {category}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-500">Price</p>
                <p className="text-lg font-semibold text-green-500">${price}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-500">Rating</p>
                <p className="text-lg text-gray-900 dark:text-gray-100">
                  {rating}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-500">
                  Stock Status
                </p>
                <p className="text-lg font-semibold text-green-500">
                  {stockStatus} Available
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-500">
                  Customization
                </p>
                <p className="text-sm md:text-lg text-gray-900 dark:text-gray-100">
                  {customization}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-500">
                  Processing Time
                </p>
                <p className="text-lg text-gray-900 dark:text-gray-100">
                  {processingTime}
                </p>
              </div>
            </div>

            {/* Posted By */}
            <div className="mt-6">
              <p className="text-sm font-semibold text-gray-500">Posted By</p>
              <p className="text-lg text-blue-500 hover:text-blue-600 transition-colors">
                {email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
