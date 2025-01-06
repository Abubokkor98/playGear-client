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
    <div className="bg-gray-100 py-12 px-4 dark:bg-gray-800">
      <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
        Your Game, Our Passion
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mb-10">
      At PlayGear, we’re committed to empowering athletes with top-notch sports gear and exceptional support. Choose us for quality, reliability, and a partner dedicated to your success.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="p-6 bg-white dark:bg-gray-700 shadow-lg rounded-lg text-center flex flex-col items-center hover:scale-105 transform transition duration-300"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2 dark:text-white">{feature.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
