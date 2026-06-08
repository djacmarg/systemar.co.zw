import Image from "next/image";
import TestimonialCard from "./TestimonialCard";
const Testimonials = () => {
  return (
    <section id="testimonials" className="px-4 bg-blue-200 px-auto md:px-[15%]">
      {/* Installation Section */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left Illustration */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/images/testimonials-2-men-talking.svg"
            alt="Setup Illustration"
            width={400}
            height={400}
            className="max-w-full h-auto"
          />
        </div>
        {/* Right Testimonials */}
        <div className="w-full md:w-1/2">
          <TestimonialCard />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
