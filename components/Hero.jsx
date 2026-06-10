"use client";

import React from "react";
import { CustomLink } from "./CustomButtonLink";
import { ScrollToView } from "./ScrollToView";

const Hero = () => {
  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        flex
        items-center
        justify-center
        pt-[100px]
      "
      style={{
        backgroundImage: "url('/images/systemar_hero_section.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/60" />

      {/* Decorative Blur */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-4xl text-center mx-auto">
          {/* Badge */}
          <div
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-cyan-400/30
              bg-cyan-500/10
              px-4
              py-2
              text-sm
              font-medium
              text-cyan-300
              backdrop-blur-sm
            "
          >
            With Systemar You can
          </div>

          {/* Heading */}
          <h1
            className="
              mt-8
              text-5xl
              font-bold
              leading-tight
              text-white
              md:text-7xl
            "
          >
            Manage Your School
            <span className="block bg-gradient-to-r from-cyan-100 to-blue-600 bg-clip-text text-transparent">
              Smarter & Faster
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-lg
              leading-8
              text-slate-300
              md:text-xl
            "
          >
            Streamline admissions, attendance, reporting, communication,
            invoicing, and administration with a powerful cloud-based School
            Management System built for modern educational institutions.
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <CustomLink
              href="/#demo_requisition"
              onClick={ScrollToView}
              className="
                px-8
                py-4
                text-base
                rounded-xl
                font-semibold
              "
            >
              Request Free Demo
            </CustomLink>

            <CustomLink
              href="/#services"
              onClick={ScrollToView}
              className="
                px-8
                py-4
                text-base
                rounded-xl
                border
                border-white/20
                bg-white/10
                backdrop-blur-sm
                hover:bg-white/20
              "
            >
              Explore Features
            </CustomLink>
          </div>

          {/* Stats */}
          <div
            className="
              mt-10
              mb-20
              grid
              gap-6
              rounded-3xl
              border
              border-white/10
              bg-white/5
              px-2 py-4
              backdrop-blur-md
              md:grid-cols-3
            "
          >
            <div>
              <h3 className="text-3xl font-bold text-white">100%</h3>
              <p className="mt-2 text-slate-300">
                Cloud Based Platform
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">24/7</h3>
              <p className="mt-2 text-slate-300">
                Access Anywhere
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">All-In-One</h3>
              <p className="mt-2 text-slate-300">
                School Management
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          text-white/70
        "
      >
        <div className="flex flex-col items-center">
          <span className="text-xs uppercase tracking-widest">
            Scroll
          </span>

          <div className="mt-2 h-10 w-6 rounded-full border border-white/30 flex justify-center">
            <div className="mt-2 h-2 w-2 rounded-full bg-white animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;