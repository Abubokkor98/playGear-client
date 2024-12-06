import React from 'react'

export default function BrandsWeWorkWith() {
    const brands = [
        { id: 1, name: "Nike", logo: "https://i.ibb.co.com/vvGNR71/nike.jpg" },
        { id: 2, name: "Adidas", logo: "https://i.ibb.co.com/4WHfdk9/001-nike-logos-swoosh-black.png" },
        { id: 3, name: "Puma", logo: "https://via.placeholder.com/150" },
        { id: 4, name: "Reebok", logo: "https://via.placeholder.com/150" },
        { id: 5, name: "Under Armour", logo: "https://via.placeholder.com/150" },
        { id: 6, name: "Asics", logo: "https://via.placeholder.com/150" },
      ];
  return (
    <div className="bg-gray-100 py-10  px-4">
      <div className="">
        <h2 className="text-3xl font-bold text-center mb-6">
          Brands We Work With
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="p-4 bg-gray-700 rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="mx-auto w-24 h-24 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
