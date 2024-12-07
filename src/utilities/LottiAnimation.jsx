import React from 'react';
import Lottie from 'lottie-react';
import football from "../assets/football.json";
import hockey from "../assets/hockey.json";

export default function LottiAnimation() {
  return (
    <div className="flex justify-center items-center pb-10">

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-24">
        
        <div className="h-[350px] w-[350px] dark:bg-gray-700 rounded-lg flex justify-center items-center">
          <Lottie animationData={football} loop={true} />
        </div>

        <div className="h-[350px] w-[350px] dark:bg-gray-700 rounded-lg flex justify-center items-center">
          <Lottie animationData={hockey} loop={true} />
        </div>
        
      </div>
    </div>
  );
}
