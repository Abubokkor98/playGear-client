import React from 'react';
import Lottie from 'lottie-react';
import Animation from "../assets/lotti.json";
import football from "../assets/football.json";
import hockey from "../assets/hockey.json";

export default function LottiAnimation() {
  return (
    <div className="flex justify-center items-center">
      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
        <div className="h-[350px] w-[350px]">
          <Lottie animationData={Animation} loop={true}></Lottie>
        </div>
        <div className="h-[350px] w-[350px]">
          <Lottie animationData={football} loop={true}></Lottie>
        </div>
        <div className="h-[350px] w-[350px]">
          <Lottie animationData={hockey} loop={true}></Lottie>
        </div>
      </div>
    </div>
  );
}
