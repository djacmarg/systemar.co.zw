import React from "react";
import { CustomLink } from "@/components/CustomButtonLink";

const modules = [
  "Admission & Enrollment",
  "Fee Management",
  "Timetable Management",
  "Academic Management",
  "Student Reports",
  "Hostel Management",
  "Communication Tools",
  "Accounts Management",
  "Examinations",
  "Record Management",
  "Student Progress Tracking",
  "ID Card Generation",
  "Library Management",
  "Transport Management",
  "Role-Based Access",
];

const About = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 px-6 md:px-[10%]">
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-cyan-50 via-white to-white" />

      <div className="absolute top-0 left-0 -z-10 h-72 w-72 rounded-full bg-cyan-100 opacity-40 blur-3xl" />

      <div className="absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-sky-100 opacity-40 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        {/* Hero */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1 text-sm font-medium text-cyan-700">
            About SYSTEMAR
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold text-slate-900">
            Modern School Management
            <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Built For Growth
            </span>
          </h1>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            SYSTEMAR empowers schools, colleges, and educational institutions
            with a modern cloud-based platform that simplifies administration,
            improves communication, and enhances academic management.
          </p>
        </div>

        {/* Story Section */}
        <div className="mt-24 grid gap-10 lg:grid-cols-2">
          <div className="rounded-[32px] border border-slate-200 bg-white/80 p-10 shadow-xl backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Why Schools Choose SYSTEMAR
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              We understand the challenges educational institutions face every
              day—from managing admissions and student records to tracking
              academic performance, communication, and finances.
            </p>

            <p className="mt-6 leading-8 text-slate-600">
              SYSTEMAR centralizes these processes into one powerful platform,
              helping schools reduce administrative burden, increase efficiency,
              and focus on what matters most: delivering quality education.
            </p>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white/80 p-10 shadow-xl backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Designed For Every Institution
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Whether you're running a preschool, primary school, secondary
              school, college, university, or training center, SYSTEMAR scales
              effortlessly to meet your needs.
            </p>

            <p className="mt-6 leading-8 text-slate-600">
              Our flexible architecture supports institutions of all sizes,
              allowing you to start small and expand as your organization grows.
            </p>
          </div>
        </div>

        {/* Modules Section */}
        <div className="mt-24">
          <div className="text-center">
            <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1 text-sm font-medium text-cyan-700">
              Platform Modules
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              Everything Your School Needs
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              A comprehensive suite of tools designed to simplify school
              operations.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((module) => (
              <div
                key={module}
                className="
                  group
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-5
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-cyan-300
                  hover:shadow-lg
                "
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      h-3
                      w-3
                      rounded-full
                      bg-gradient-to-r
                      from-cyan-500
                      to-blue-600
                    "
                  />

                  <span className="font-medium text-slate-700">
                    {module}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="
            mt-24
            rounded-[40px]
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            px-8
            py-16
            text-center
            text-white
          "
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Transform Your School?
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-white/90">
            Discover how SYSTEMAR can streamline administration, improve
            communication, and help your institution achieve more with less.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <CustomLink
              href="/#demo_requisition"
              className="
                text-slate-900
                hover:bg-slate-100
                px-8
                py-4
              "
            >
              Request Demo
            </CustomLink>

            <CustomLink
              href="/"
              className="
                border
                border-white
                bg-transparent
                px-8
                py-4
              "
            >
              Back Home
            </CustomLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;