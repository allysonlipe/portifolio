import Lottie from "lottie-react";
import animationData from "../assets/animation.json";

export default function HeroLottie() {
  return (
    <div style={{ width: 300, height: 300 }}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
}
