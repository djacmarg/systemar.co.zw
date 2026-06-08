"use client";
import { ArrowBigUp } from "lucide-react";

const ScrollUp = () => {
  const scrollToView = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div onClick={scrollToView} className="scroll-up z-10">
      <div className="flex justify-center items-center align-middle w-[30px] h-[30px] bg-cyan-500 rounded-full z-0 hover:bg-amber-500 shadow transition duration-700 ">
        <ArrowBigUp
          size={50}
          className="h-[15px] text-white hover:text-black"
        />
      </div>
    </div>
  );
};

export default ScrollUp;
