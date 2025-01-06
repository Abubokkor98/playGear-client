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

  const handleSortAsc = () => {
    const sortedEquipment = [...equipments].sort((a, b) => a.price - b.price);
    setEquipments(sortedEquipment);
  };
  const handleSortDes = () => {
    const sortedEquipment = [...equipments].sort((a, b) => b.price - a.price);
    setEquipments(sortedEquipment);
  };

  return (
    <div className="py-10 dark:text-white bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <Helmet>
        <title>AllEquipment | PlayGear</title>
      </Helmet>

      {loading ? (
        <Loading></Loading>
      ) : (
        <>
          <h2 className="text-4xl font-bold text-center mb-6">
            All Equipments: {equipments.length}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
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
