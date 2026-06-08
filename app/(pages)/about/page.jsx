import { CustomLink } from "@/components/CustomButtonLink";
import React from "react";

const About = () => {
  return (
    <div className="mt-20 flex flex-col min-h-screen justify-center items-center max-w-4xl mx-auto p-6 text-gray-800">
      <div className="w-full md:max-w-[750px] justify-center my-10 text-[14px]">
        <h2 className="text-2xl md:text-[20px] font-bold text-[#00BFD8] mb-4">
          SYSTEMAR – Expert in School Management Systems
        </h2>
        <p className="mb-6">
          At SYSTEMAR, we are passionate about empowering schools and
          institutions of learning with smart, efficient, and fully integrated
          management solutions. From early childhood centers and primary schools
          to high schools, colleges, and universities, our platform is designed
          to meet the unique needs of every educational level.
        </p>
        <p className="mb-6">
          We understand the daily challenges faced by educators, administrators,
          and school owners—from managing student records and academic
          performance to streamlining admissions, attendance, communication, and
          financial operations. SYSTEMAR simplifies these tasks by providing a
          centralized, easy-to-use school management system that transforms
          routine administration into a smooth and effortless experience.
        </p>
      </div>

      <div className="w-full md:max-w-[750px] justify-center text-[14px]">
        <h2 className="text-2xl md:text-[18px] font-bold text-[#00BFD8] mb-4 uppercase">
          Systemar Modules at a glance
        </h2>
        <div className="flex">
          <div className="w-1/2">
            <ul className="list-disc list-inside text-[14px]">
              <li>Admission and Enrolment of Students</li>
              <li>Fee Management</li>
              <li>Routing (Timetable)</li>
              <li>Academic Management</li>
              <li>Students Reports</li>
              <li>Hostel Management</li>
              <li>Communication</li>
              <li>Accounts (Income and Expenditure Management)</li>
            </ul>
          </div>
          <div className="w-1/2">
            <ul className="list-disc list-inside text-[14px]">
              <li>Examination</li>
              <li>Record Management</li>
              <li>Students Progress Monitoring</li>
              <li>Identity Card (ID) Generation</li>
              <li>Library Management</li>
              <li>Transport Management</li>
              <li>
                Administrator, Parents, teachers, students are all able to
                access information that concerns them
              </li>
            </ul>
          </div>
        </div>
        <CustomLink href={`/`} className="mt-10 w-[60px] flex justify-center">
          Back
        </CustomLink>
      </div>
    </div>
  );
};

export default About;
