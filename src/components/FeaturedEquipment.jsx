import React, { useEffect, useState } from "react";
import FeaturedEquipCard from "../utilities/FeaturedEquipCard";
import Loading from "./Loading";

export default function FeaturedEquipment() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://assignment-10-server-ab.vercel.app/equipments/featured")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Discover Our Top Picks</h2>
        <p className="text-lg text-gray-600 mt-2 lg:w-6/12 mx-auto">
        Explore the best of our sports equipment, handpicked just for you! From performance-enhancing gear to the latest innovations, find everything you need to elevate your game.
        </p>
      </div>

      {loading ? <Loading></Loading>
       : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {products.map((product) => (
            <FeaturedEquipCard
              key={product._id}
              product={product}
            ></FeaturedEquipCard>
          ))}
        </div>
      )}
    </section>
  );
}
