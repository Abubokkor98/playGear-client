import React, { useEffect, useState } from "react";
import Loading from "./Loading";

import CartLottie from "../utilities/CartLottie";
import { Zoom } from "react-awesome-reveal";
import EquipmentCard from "../utilities/EquipmentCard";

export default function FeaturedEquipment() {
  const [equipments, setEquipments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://assignment-10-server-ab.vercel.app/equipments/featured")
      .then((res) => res.json())
      .then((data) => {
        setEquipments(data);
        setLoading(false);
      });
  }, []);

  return (
    <section className="pb-12 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="">
        <CartLottie></CartLottie>
      </div>

      <h2 className="text-4xl text-center font-bold text-gray-800 dark:text-white transition-colors duration-300 mb-4">
        Discover Our Top Picks
      </h2>
      <p className="text-lg text-gray-600 text-center dark:text-gray-300 lg:w-6/12 mx-auto mb-10">
        Explore the best of our sports equipment, handpicked just for you! From
        performance-enhancing gear to the latest innovations, find everything
        you need to elevate your game.
      </p>

      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 ">
          <Zoom cascade damping={0.1}>
            {equipments.map((equipment) => (
              <EquipmentCard
                key={equipment._id}
                equipment={equipment}
              ></EquipmentCard>
            ))}
          </Zoom>
        </div>
      )}
    </section>
  );
}
