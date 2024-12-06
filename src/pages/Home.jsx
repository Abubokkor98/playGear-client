import React from "react";
import Slider from "../components/Slider";
import SportsCategories from "../components/SportsCategories";
import FeaturedEquipment from "../components/FeaturedEquipment";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <header>
        <Slider></Slider>
      </header>
      <main>
        <section>
          <FeaturedEquipment></FeaturedEquipment>
        </section>

        <section className="mt-10">
          <SportsCategories></SportsCategories>
        </section>
        <section>
          <WhyChooseUs></WhyChooseUs>
        </section>
      </main>
    </div>
  );
}
