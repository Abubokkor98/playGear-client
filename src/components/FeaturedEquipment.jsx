import React, { useEffect, useState } from "react";
import FeaturedEquipCard from "../utilities/FeaturedEquipCard";
import Loading from "./Loading";

import CartLottie from "../utilities/CartLottie";

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
    <section className="pb-12 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="">
        <CartLottie></CartLottie>
      </div>
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white transition-colors duration-300">
          Discover Our Top Picks
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2 lg:w-6/12 mx-auto">
          Explore the best of our sports equipment, handpicked just for you!
          From performance-enhancing gear to the latest innovations, find
          everything you need to elevate your game.
        </p>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 w-10/12 mx-auto">
          {products.map((product) => (
            <FeaturedEquipCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
