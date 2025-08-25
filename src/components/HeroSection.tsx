import HeroLottie from "./HeroLottie";

export default function HeroSection() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 h-36 p-4 m-8">
        <div className="flex flex-col flex-wrap justify-center items-center">
          <h1 className="text-4xl font-medium font-sans text-sky-400">
            Hi, I'm
          </h1>
          <h1 className="text-4xl font-bold font-mono text-sky-100">
            ALLYSON PHILIPE{" "}
          </h1>
        </div>
        <div className=" flex justify-center items-center">
          <HeroLottie />
        </div>
      </div>
    </>
  );
}
