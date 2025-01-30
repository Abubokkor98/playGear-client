import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Loading from "../components/Loading";
import EquipmentCard from "../utilities/EquipmentCard";

export default function AllEquipment() {
  const [equipments, setEquipments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://assignment-10-server-ab.vercel.app/equipments`)
      .then((res) => res.json())
      .then((data) => {
        setEquipments(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching equipment:", error);
        setLoading(false);
      });
  }, []);

  const handleSortChange = (event) => {
    const sortOption = event.target.value;

    if (sortOption === "asc") {
      const sortedEquipment = [...equipments].sort((a, b) => a.price - b.price);
      setEquipments(sortedEquipment);
    } else if (sortOption === "desc") {
      const sortedEquipment = [...equipments].sort((a, b) => b.price - a.price);
      setEquipments(sortedEquipment);
    }
  };

  return (
    <div className="py-10 dark:text-white bg-gray-50 dark:bg-gray-800 transition-colors duration-300 px-4 md:px-10">
      <Helmet>
        <title>AllEquipment | PlayGear</title>
      </Helmet>

      {loading ? (
        <Loading />
      ) : (
        <>
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
            Explore Our Sports Equipment!
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
            Explore our extensive collection of sports equipment. Whether you're
            a professional athlete or a hobbyist, we have the perfect gear to
            suit your needs.
          </p>

          <div className="text-center mb-6">
            <label htmlFor="sort" className="mr-4 font-semibold">
              Sort By:
            </label>
            <select
              id="sort"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600"
              onChange={handleSortChange}
            >
              <option value="">Default</option>
              <option value="asc">Price (Low &gt; High)</option>
              <option value="desc">Price (High&gt; Low )</option>
            </select>
          </div>

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
        </>
      )}
    </div>
  );
}
