import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../style.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";

export default function Slider() {
  return (
    <div className="pt-6 px-4 lg:px-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="hero min-h-[500px]"
            style={{
              backgroundImage: `url(${slider1})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60 dark:bg-opacity-70"></div>
            <div className="hero-content text-neutral-content text-center ">
              <div className="max-w-md">
                <h1 className="mb-5 text-2xl md:text-4xl font-bold dark:text-white">
                  Experience the Thrill of Football
                </h1>
                <p className="mb-5 dark:text-gray-300">
                  Step onto the field where dreams ignite! Football fuels
                  passion, builds bonds, and tests skill with every play.
                  Whether playing or cheering, the game unites hearts worldwide.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-[500px]"
            style={{
              backgroundImage: `url(${slider2})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60 dark:bg-opacity-70"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-2xl md:text-4xl font-bold dark:text-white">
                  Embrace the Elegance of Tennis
                </h1>
                <p className="mb-5 dark:text-gray-300">
                  From the racket's strike to match-point thrills, tennis blends
                  agility, strategy, and precision. Step onto the court and
                  embrace the competition!
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-[500px]"
            style={{
              backgroundImage: `url(${slider3})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60 dark:bg-opacity-70"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-2xl md:text-4xl font-bold dark:text-white">
                  Feel the Spirit of Cricket
                </h1>
                <p className="mb-5 dark:text-gray-300">
                  Cricket is more than a sport—it's a tradition. Every boundary,
                  wicket, and run embodies camaraderie, strategy, and timeless
                  grace.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
