import React, { useEffect, useState } from 'react'

export default function SportsCategories() {
    const [categories, setCategories] = useState([]);
  const [filteredEquipments, setFilteredEquipments] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/equipments")
      .then((res) => res.json())
      .then((data) => {
        const uniqueCategories = [];

        data.forEach((item) => {
          if (!uniqueCategories.includes(item.category)) {
            uniqueCategories.push(item.category);
          }
        });

        setCategories(uniqueCategories);
      });
  }, []);

  const handleCategoryClick = (category) => {
    setLoading(true);
    setSelectedCategory(category);
    fetch(`http://localhost:5000/equipments?category=${category}`)
      .then((res) => res.json())
      .then((data) => {
        setFilteredEquipments(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  };
  return (
    <div className="text-center py-12 bg-gray-100">
      <h2 className="text-4xl font-bold mb-6">
        Explore Our Sports Equipment Categories
      </h2>
      <p className="text-lg mb-12">
        Click on a category to view a variety of sports equipment tailored to
        your needs!
      </p>
      {/* category btns */}
      <div className="flex justify-center gap-6 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            {category}
          </button>
        ))}
      </div>
      {/* selected category's equipment */}
      {selectedCategory && (
        <div className="py-12">
          <h2 className="text-4xl font-bold text-center mb-8">
            {selectedCategory} Equipment
          </h2>

          {loading ? (
            <div className="flex justify-center items-center py-6">
              <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
              {filteredEquipments.length > 0 ? (
                filteredEquipments.map((item) => (
                  <div
                    key={item._id}
                    className="bg-white p-6 rounded-lg shadow-lg text-center"
                  >
                    <img
                      src={item.image}
                      alt={item.itemName}
                      className="w-full h-56 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2">
                      {item.itemName}
                    </h3>
                    <p className="text-gray-600 mb-2">{item.description}</p>
                    <p className="text-green-500 text-lg mb-4">
                      Price: ${item.price}
                    </p>
                    <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
                      View Details
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-center text-xl text-gray-500">
                  No equipment found in this category.
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
