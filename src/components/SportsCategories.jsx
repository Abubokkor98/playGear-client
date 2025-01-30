import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import EquipmentCard from "../utilities/EquipmentCard";

export default function SportsCategories() {
  const [categories, setCategories] = useState([]);
  const [equipments, setEquipments] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://assignment-10-server-ab.vercel.app/equipments")
      .then((res) => res.json())
      .then((data) => {
        const allCategories = [];

        data.forEach((item) => {
          if (!allCategories.includes(item.category)) {
            allCategories.push(item.category);
          }
        });

        setCategories(allCategories);
      });
  }, []);

  const handleCategoryClick = (category) => {
    setLoading(true);
    setSelectedCategory(category);
    fetch(
      `https://assignment-10-server-ab.vercel.app/equipments/categories?category=${category}`
    )
      .then((res) => res.json())
      .then((data) => {
        setEquipments(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  };

  return (
    <div className="text-center py-12 bg-gray-100 dark:bg-gray-800 mb-10 px-4 lg:px-10">
      <h2 className="text-2xl md:text-4xl font-bold mb-4 dark:text-white ">
        Explore Our Sports Equipment Categories
      </h2>
      <p className="text-lg mb-10 dark:text-gray-300">
        Click on a category to view a variety of sports equipment tailored to
        your needs!
      </p>
      {/* category btns */}
      <div className="flex justify-center gap-6 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-600"
          >
            {category}
          </button>
        ))}
      </div>
      {/* selected category's equipment */}
      {selectedCategory && (
        <div className="py-12">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 dark:text-white">
            {selectedCategory} Equipment
          </h2>

          {loading ? (
            <Loading></Loading>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {equipments.length > 0 ? (
                equipments.map((equipment) => (
                  <EquipmentCard
                    key={equipment._id}
                    equipment={equipment}
                  ></EquipmentCard>
                ))
              ) : (
                <p className="text-center text-xl text-gray-500 dark:text-gray-400">
                  No equipment found in this category.
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
