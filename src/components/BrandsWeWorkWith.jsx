import React from "react";
import { FaApple } from "react-icons/fa";
import {
  SiAdidas,
  SiNike,
  SiPuma,
  SiReebok,
  SiUnderarmour,
} from "react-icons/si";

export default function BrandsWeWorkWith() {
  const brands = [
    {
      id: 1,
      name: "Apple",
      icon: <FaApple className="text-4xl text-gray-800" />,
    },
    {
      id: 2,
      name: "Nike",
      icon: <SiNike className="text-4xl text-gray-800" />,
    },
    {
      id: 3,
      name: "Adidas",
      icon: <SiAdidas className="text-4xl text-gray-800" />,
    },
    {
      id: 4,
      name: "Puma",
      icon: <SiPuma className="text-4xl text-gray-800" />,
    },
    {
      id: 5,
      name: "Reebok",
      icon: <SiReebok className="text-4xl text-gray-800" />,
    },
    {
      id: 6,
      name: "Under Armour",
      icon: <SiUnderarmour className="text-4xl text-gray-800" />,
    },
  ];

  return (
    <div className="bg-gray-100 py-12 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
        Brands We Work With
      </h2>
      <p className="text-lg text-gray-600 mb-12">
        Our trusted partnerships with top global brands bring you the best in
        sports gear and equipment.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="flex justify-center items-center p-6 bg-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="flex justify-center items-center">{brand.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
