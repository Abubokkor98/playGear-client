import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import SportsCategoryCard from "../utilities/SportsCategoryCard";

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
    fetch(`https://assignment-10-server-ab.vercel.app/equipments/categories?category=${category}`)
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
            <Loading></Loading>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
              {equipments.length > 0 ? (
                equipments.map((equipment) => (
                  <SportsCategoryCard
                    key={equipment._id}
                    equipment={equipment}
                  ></SportsCategoryCard>
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
  );
}
