import HeroLottie from "./HeroLottie";

export default function HeroSection() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 h-36 p-4 m-8">
        <div className="flex flex-col flex-wrap justify-center items-center">
          <h1 className="text-4xl font-bold font-sans text-sky-300">Hi, I'm</h1>
        </div>
        <div className=" flex justify-center items-center">
          <HeroLottie />
        </div>
      </div>
    </>
  );
}
