import React from "react";

export default function EquipmentDetails() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-center mb-6">
        Equipment Details
      </h2>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src="https://example.com/basketball.jpg"
          alt="Professional Basketball"
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">Professional Basketball</h3>
          <p className="text-gray-600 mb-4">
            High-quality professional basketball made from premium composite
            leather for durability and superior grip.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-500">Category</p>
              <p className="text-base text-gray-700">Basketball</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-500">Price</p>
              <p className="text-base text-gray-700">$29.99</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-500">Rating</p>
              <p className="text-base text-gray-700">4.8/5</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-500">
                Stock Status
              </p>
              <p className="text-base text-gray-700">20 Available</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-500">
                Customization
              </p>
              <p className="text-base text-gray-700">
                Includes personalized engraving
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-500">
                Processing Time
              </p>
              <p className="text-base text-gray-700">2-3 days</p>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-sm font-semibold text-gray-500">Posted By</p>
            <p className="text-base text-gray-700">
              John Doe (user1@example.com)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
