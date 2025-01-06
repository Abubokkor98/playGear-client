import React from "react";
import Slider from "../components/Slider";
import SportsCategories from "../components/SportsCategories";
import FeaturedEquipment from "../components/FeaturedEquipment";
import WhyChooseUs from "../components/WhyChooseUs";
import BrandsWeWorkWith from "../components/BrandsWeWorkWith";
import { Helmet } from "react-helmet-async";
import LottiAnimation from "../utilities/LottiAnimation";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Home | PlayGear</title>
      </Helmet>
      <header>
        <Slider></Slider>
      </header>

      <main>
        <section>
          <FeaturedEquipment></FeaturedEquipment>
        </section>
        <section>
          <SportsCategories></SportsCategories>
        </section>
        <section>
          <LottiAnimation></LottiAnimation>
        </section>
        <section>
          <WhyChooseUs></WhyChooseUs>
        </section>
        <section>
          <BrandsWeWorkWith></BrandsWeWorkWith>
        </section>
      </main>
    </div>
  );
}
