"use client";
import Image from "next/image";
import { CustomLink } from "./CustomButtonLink";
import { ScrollToView } from "./ScrollToView";

const Migration = () => {
  return (
    <section className="py-20 px-4 bg-white px-auto md:px-[15%]">
      {/* Installation Section */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left: Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold  text-[#00BFD8]  mb-4">
            Installation, Setup and <br /> Data Migration
          </h2>
          <p className="text-gray-600 mb-6 text-sm">
            Once your demo request is submitted and approved, we'll assist you
            with the installation and setup of your SYSTEMAR SMS. If your
            request is made with at least 3 working hours remaining in the day,
            our technical team will get started immediately—ensuring your system
            goes live before the end of the day. Otherwise, it will be activated
            the following business day.
          </p>

          <CustomLink
            className="py-2 text-normal"
            href={"/#demo_requisition"}
            onClick={ScrollToView}
          >
            Request Free Demo
          </CustomLink>
        </div>

        {/* Right: Illustration */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/images/details-1-office-worker.svg"
            alt="Setup Illustration"
            width={500}
            height={400}
            className="max-w-full h-auto"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="my-20 border-t border-gray-200"></div>

      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left: Illustration */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/images/details-2-office-team-work.svg"
            alt="Setup Illustration"
            width={500}
            height={400}
            className="max-w-full h-auto"
          />
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold  text-[#00BFD8]  mb-4">
            Optimization is Possible
          </h2>
          <p className="text-gray-600 mb-6 text-[14px]">
            More control means more power and that's exactly what SYSTEMAR SMS
            gives you. Work smarter, work better, enhance quality and get
            results <br />
            Take your school to new heights with everyone in your team...
          </p>
          <CustomLink
            className="text-normal"
            href={`/#demo_requisition`}
            onClick={ScrollToView}
          >
            Request Free Demo
          </CustomLink>
        </div>
      </div>
    </section>
  );
};

export default Migration;
