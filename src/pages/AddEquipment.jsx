import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

export default function AddEquipment() {
  const { user } = useContext(AuthContext);
  const email = user.email;
  const userName = user.displayName;

  const handleAddEquipment = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const image = form.get("image");
    const itemName = form.get("itemName");
    const category = form.get("categoryName");
    const description = form.get("description");
    const price = form.get("price");
    const rating = form.get("rating");
    const customization = form.get("customization");
    const processingTime = form.get("processingTime");
    const stockStatus = form.get("stockStatus");

    const newEquipment = {
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
      userName,
    };

    console.log(newEquipment);

    // send data to the server
    fetch("https://assignment-10-server-ab.vercel.app/equipments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newEquipment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Equipment added successfully",
            icon: "success",
            confirmButtonText: "ok",
          });
        }
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white shadow-md rounded-lg dark:bg-gray-900 dark:text-white mb-10">
      <Helmet>
        <title>AddEquipment | PlayGear</title>
      </Helmet>
      <h1 className="text-2xl font-bold text-center mb-6">Add New Equipment</h1>
      <form onSubmit={handleAddEquipment} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
            Image URL
          </label>
          <input
            type="text"
            name="image"
            className="w-full p-3 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter image URL"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
            Item Name
          </label>
          <input
            type="text"
            name="itemName"
            className="w-full p-3 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter item name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
            Category Name
          </label>
          <input
            type="text"
            name="categoryName"
            className="w-full p-3 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter category name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
            Description
          </label>
          <textarea
            name="description"
            className="w-full p-3 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter description"
            rows="4"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
            Price
          </label>
          <input
            type="text"
            name="price"
            className="w-full p-3 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter price"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
            Rating
          </label>
          <input
            type="text"
            name="rating"
            className="w-full p-3 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter rating (1-5)"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
            Customization
          </label>
          <input
            type="text"
            name="customization"
            className="w-full p-3 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Customization options"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
            Processing Time
          </label>
          <input
            type="text"
            name="processingTime"
            className="w-full p-3 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter delivery time"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
            Stock Status
          </label>
          <input
            type="number"
            name="stockStatus"
            className="w-full p-3 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter stock quantity"
            required
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600"
          >
            Add Equipment
          </button>
        </div>
      </form>
    </div>
  );
}
