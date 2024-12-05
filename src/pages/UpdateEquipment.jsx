import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

export default function UpdateEquipment() {
  const equipment = useLoaderData();
  const {
    _id,
    image,
    itemName,
    category,
    description,
    price,
    rating,
    customization,
    processingTime,
    stockStatus
  } = equipment;


  const handleUpdate = (e) => {
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

    const UpdatedEquipment = {
      image,
      itemName,
      category,
      description,
      price,
      rating,
      customization,
      processingTime,
      stockStatus
    };

    console.log(UpdatedEquipment);

    // send data to the server
    fetch(`http://localhost:5000/equipments/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdatedEquipment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount>0) {
          Swal.fire({
            title: "Success!",
            text: "Equipment updated successfully",
            icon: "success",
            confirmButtonText: "ok",
          });
        }
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 my-10 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Update {itemName}</h1>
      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Image URL
          </label>
          <input
            type="text"
            name="image"
            defaultValue={image}
            placeholder="Enter image URL"
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Item Name
          </label>
          <input
            type="text"
            name="itemName"
            defaultValue={itemName}
            placeholder="Enter item name"
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category Name
          </label>
          <input
            type="text"
            name="categoryName"
            defaultValue={category}
            placeholder="Enter category name"
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            name="description"
            defaultValue={description}
            placeholder="Enter description"
            className="w-full p-3 border border-gray-300 rounded-md"
            rows="4"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price
          </label>
          <input
            type="text"
            name="price"
            defaultValue={price}
            placeholder="Enter price"
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Rating
          </label>
          <input
            type="text"
            name="rating"
            defaultValue={rating}
            placeholder="Enter rating (1-5)"
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Customization
          </label>
          <input
            type="text"
            name="customization"
            defaultValue={customization}
            placeholder="Customization options"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Processing Time
          </label>
          <input
            type="text"
            name="processingTime"
            defaultValue={processingTime}
            placeholder="Enter delivery time"
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Stock Status
          </label>
          <input
            type="number"
            name="stockStatus"
            defaultValue={stockStatus}
            placeholder="Enter stock quantity"
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition duration-300"
        >
          Update Equipment
        </button>
      </form>
    </div>
  );
}
