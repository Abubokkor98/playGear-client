import Lottie from "lottie-react";
import cart from "../assets/cart.json";

export default function CartLottie() {
  return (
    <div className="flex justify-center items-cente">
      <div className=" h-[100px] w-[100px]  rounded-lg flex justify-center items-center">
        <Lottie animationData={cart} loop={true} />
      </div>
    </div>
  );
}
