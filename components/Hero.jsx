"use client";

import React from "react";
import { CustomLink } from "./CustomButtonLink";
import { ScrollToView } from "./ScrollToView";

const Hero = () => {
  return (
    <section
      className="mt-[-50px] h-auto md:h-screen flex flex-col justify-center items-center relative bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/images/systemar_hero_section_2.webp')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black/10"></div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-4xl text-center px-4 py-20 sm:py-28 md:py-32">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          SYSTEMAR::.
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-100 px-2 sm:px-8 md:px-20 lg:px-40">
          Enhance the efficiency of your school with our module-rich,
          cloud-based Electronic Record System Solutions.{" "}
          <br className="hidden md:block" />
          With Systemar SMS, you will achieve more with less.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <CustomLink
            href="/#services"
            className="py-2 px-6 text-sm"
            onClick={ScrollToView}
          >
            Discover More
          </CustomLink>
          <CustomLink
            href="/#demo_requisition"
            className="py-2 px-6 text-sm"
            onClick={ScrollToView}
          >
            Request a Demo
          </CustomLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
