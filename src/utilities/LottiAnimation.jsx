import React from 'react';
import Lottie from 'lottie-react';
import Animation from "../assets/lotti.json";
import football from "../assets/football.json";
import hockey from "../assets/hockey.json";

export default function LottiAnimation() {
  return (
    <div className="flex justify-center items-center pb-10">
      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
        <div className="h-[350px] w-[350px] dark:bg-gray-700 rounded-lg">
          <Lottie animationData={Animation} loop={true}></Lottie>
        </div>
        <div className="h-[350px] w-[350px]0 dark:bg-gray-700 rounded-lg">
          <Lottie animationData={football} loop={true}></Lottie>
        </div>
        <div className="h-[350px] w-[350px] dark:bg-gray-700 rounded-lg">
          <Lottie animationData={hockey} loop={true}></Lottie>
        </div>
      </div>
    </div>
  );
}
