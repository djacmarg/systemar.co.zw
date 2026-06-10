"use client";

import Image from "next/image";
import { CustomLink } from "./CustomButtonLink";
import { ScrollToView } from "./ScrollToView";

const features = [
  {
    title: "Installation, Setup & Data Migration",
    description:
      "Once your demo request is approved, our technical team handles the complete installation and setup of your SYSTEMAR SMS. Requests submitted during business hours are often activated the same day, ensuring a fast and seamless onboarding experience.",
    image: "/images/details-1-office-worker.svg",
    reverse: false,
  },
  {
    title: "Optimization is Possible",
    description:
      "Gain complete control over your institution with powerful automation and management tools. Improve efficiency, streamline workflows, enhance collaboration, and empower every member of your team to achieve better results.",
    image: "/images/details-2-office-team-work.svg",
    reverse: true,
  },
];

const Migration = () => {
  return (
    <section className="relative overflow-hidden py-24 px-6 md:px-[10%]">
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-white via-cyan-50/30 to-white" />

      {/* Decorative Blobs */}
      <div className="absolute top-20 left-0 -z-10 h-72 w-72 rounded-full bg-cyan-100 opacity-40 blur-3xl" />
      <div className="absolute bottom-20 right-0 -z-10 h-96 w-96 rounded-full bg-sky-100 opacity-40 blur-3xl" />

      <div className="mx-auto max-w-7xl space-y-32">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`grid items-center gap-16 lg:grid-cols-2 ${
              feature.reverse ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            {/* Content */}
            <div>
              <div className="mb-4 inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1 text-sm font-medium text-cyan-700">
                {index === 0 ? "Quick Onboarding" : "Maximum Efficiency"}
              </div>

              <h2 className="text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
                {feature.title}
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                {feature.description}
              </p>

              <div className="mt-8">
                <CustomLink
                  href="/#demo_requisition"
                  onClick={ScrollToView}
                  className="
                    px-8
                            py-4
                            text-base
                            rounded-full
                            font-semibold
                  "
                >
                  Request Free Demo
                </CustomLink>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-cyan-200/40 to-blue-200/40 blur-3xl" />

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-slate-200
                  bg-white/80
                  p-8
                  shadow-xl
                  backdrop-blur-sm
                  transition-all
                  duration-500
                  hover:-translate-y-2
                "
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={600}
                  height={500}
                  className="
                    h-auto
                    w-full
                    transition-transform
                    duration-500
                    hover:scale-105
                  "
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Migration;