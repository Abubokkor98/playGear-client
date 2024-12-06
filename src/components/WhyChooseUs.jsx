import React from "react";
import {
  FaCheckCircle,
  FaTruck,
  FaHeadset,
  FaDollarSign,
} from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    {
      id: 1,
      icon: <FaCheckCircle className="text-blue-500 text-4xl" />,
      title: "Quality Products",
      description:
        "We offer top-notch sports gear to ensure the best performance.",
    },
    {
      id: 2,
      icon: <FaTruck className="text-green-500 text-4xl" />,
      title: "Fast Delivery",
      description: "Get your products delivered quickly and hassle-free.",
    },
    {
      id: 3,
      icon: <FaHeadset className="text-yellow-500 text-4xl" />,
      title: "24/7 Support",
      description: "Our team is always here to assist you with your needs.",
    },
    {
      id: 4,
      icon: <FaDollarSign className="text-red-500 text-4xl" />,
      title: "Affordable Prices",
      description: "Enjoy premium quality sports gear at the best prices.",
    },
  ];

  return (
    <div className="bg-gray-100 py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="p-6 bg-white shadow-lg rounded-lg text-center flex flex-col items-center"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
