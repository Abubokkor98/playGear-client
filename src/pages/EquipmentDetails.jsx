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
    <div className="max-w-3xl mx-auto px-4 py-8 dark:text-white">
      <Helmet>
        <title>{itemName} | PlayGear</title>
      </Helmet>
      {/* <h2 className="text-3xl font-semibold text-center mb-6">
        Equipment Details
      </h2> */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row relative dark:bg-gray-800 dark:border dark:border-gray-700 my-12">
        {/* Back button */}
        <button
          onClick={handleBack}
          className="text-2xl bg-red-500 rounded-full text-white absolute top-4 left-4 p-2"
        >
          <IoCloseSharp />
        </button>
        <img
          src={image}
          alt={itemName}
          className="lg:max-w-sm lg:max-h-full object-cover w-full h-64 sm:h-80 lg:h-auto"
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">{itemName}</h3>
          <p className="text-gray-600 mb-4 dark:text-gray-300">{description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-500">Category</p>
              <p className="text-base text-gray-700 dark:text-gray-300">
                {category}
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-500">Price</p>
              <p className="text-base text-gray-700 dark:text-gray-300">
                ${price}
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-500">Rating</p>
              <p className="text-base text-gray-700 dark:text-gray-300">
                {rating}
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-500">
                Stock Status
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300">
                {stockStatus} Available
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-500">
                Customization
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300">
                {customization}
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-500">
                Processing Time
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300">
                {processingTime}
              </p>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-sm font-semibold text-gray-500">Posted By</p>
            <p className="text-base text-gray-700 dark:text-gray-300">
              {email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
