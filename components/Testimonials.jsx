import Image from "next/image";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-24 px-6 md:px-[10%]"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-white via-cyan-50/40 to-white" />

      {/* Decorative Blur */}
      <div className="absolute top-20 left-0 -z-10 h-72 w-72 rounded-full bg-cyan-100 opacity-40 blur-3xl" />
      <div className="absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-sky-100 opacity-40 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1 text-sm font-medium text-cyan-700">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
            Trusted by schools
            <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              across the region
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Discover how institutions are simplifying administration and
            improving efficiency with SYSTEMAR School Management System.
          </p>
        </div>

        {/* Content */}
        <div className="mt-20 grid items-center gap-12 lg:grid-cols-2">
          {/* Illustration */}
          <div className="relative">
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-cyan-200/30 to-blue-200/30 blur-3xl" />

            <div className="relative rounded-[32px] border border-slate-200 bg-white/80 p-8 shadow-xl backdrop-blur-sm">
              <Image
                src="/images/testimonials-2-men-talking.svg"
                alt="Customer Testimonials"
                width={600}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Testimonial Slider */}
          <TestimonialCard />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;