import React from "react";
import { FaApple } from "react-icons/fa";
import {
  SiAdidas,
  SiNike,
  SiPuma,
  SiReebok,
  SiUnderarmour,
} from "react-icons/si";
import { Fade, Zoom } from "react-awesome-reveal";

export default function BrandsWeWorkWith() {
  const brands = [
    {
      id: 1,
      name: "Apple",
      icon: <FaApple className="text-5xl text-gray-800" />,
    },
    {
      id: 2,
      name: "Nike",
      icon: <SiNike className="text-5xl text-gray-800" />,
    },
    {
      id: 3,
      name: "Adidas",
      icon: <SiAdidas className="text-5xl text-gray-800" />,
    },
    {
      id: 4,
      name: "Puma",
      icon: <SiPuma className="text-5xl text-gray-800" />,
    },
    {
      id: 5,
      name: "Reebok",
      icon: <SiReebok className="text-5xl text-gray-800" />,
    },
    {
      id: 6,
      name: "Under Armour",
      icon: <SiUnderarmour className="text-5xl text-gray-800" />,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 py-16 px-6 text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400 opacity-30 rounded-full blur-3xl transform -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-pink-400 opacity-20 rounded-full blur-3xl transform translate-x-16 translate-y-16"></div>

      <Fade cascade>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Brands We Work With
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-10">
          Collaborating with top brands to deliver premium sports gear and
          accessories.
        </p>
      </Fade>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 z-10 relative">
        <Zoom cascade damping={0.1}>
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg transform transition duration-500 hover:scale-110 hover:shadow-2xl"
            >
              <div className="flex justify-center items-center mb-4">
                {brand.icon}
              </div>
              <span className="text-sm md:text-base font-semibold text-gray-700">
                {brand.name}
              </span>
            </div>
          ))}
        </Zoom>
      </div>
    </div>
  );
}
