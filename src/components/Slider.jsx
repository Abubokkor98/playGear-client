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
                <h1 className="mb-5 text-4xl md:text-5xl font-bold dark:text-white">
                  Experience the Thrill of Football
                </h1>
                <p className="mb-5 dark:text-gray-300">
                  Step onto the field where dreams come alive! Football ignites
                  passion, strengthens bonds, and tests your skill with every
                  pass, tackle, and goal. Whether you're playing or cheering,
                  the game connects hearts across the globe.
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
                <h1 className="mb-5 text-4xl md:text-5xl font-bold dark:text-white">
                  Embrace the Elegance of Tennis
                </h1>
                <p className="mb-5 dark:text-gray-300">
                  From the sound of the racket striking the ball to the thrill
                  of match points, tennis is a blend of agility, strategy, and
                  precision. Step into the court and let the game inspire your
                  competitive spirit.
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
                <h1 className="mb-5 text-4xl md:text-5xl font-bold dark:text-white">
                  Feel the Spirit of Cricket
                </h1>
                <p className="mb-5 dark:text-gray-300">
                  The gentleman's game, cricket, is more than just a sport—it's
                  a tradition. With every boundary, every wicket, and every run,
                  experience the camaraderie, strategy, and grace that make
                  cricket timeless.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
