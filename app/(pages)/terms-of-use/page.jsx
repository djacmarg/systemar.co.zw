"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const sections = [
  {
    title: "1. Introduction",
    content: `
SYSTEMAR is a cloud-based school management system designed for institutions of all levels. It provides out-of-the-box tools for efficient data handling, records management, and administrative automation.
    `,
  },
  {
    title: "2. Scalability and Adaptability",
    content: `
Our School Management System (SMS) scales from small private schools to large multi-campus institutions. SYSTEMAR adapts to each school’s needs while remaining flexible for further customization.

Its modular architecture allows institutions to configure workflows, features, and integrations based on their operational requirements.
    `,
  },
  {
    title: "3. Ease of Use",
    content: `
SYSTEMAR is designed to be intuitive and accessible. Users can easily manage students, staff, attendance, academic reports, billing, and more through a simple and structured interface.
    `,
  },
  {
    title: "4. Training and Support",
    content: `
Every subscription includes comprehensive onboarding to ensure smooth adoption of the system.
    `,
    list: [
      "Initial system setup guidance",
      "Feature walkthroughs and tutorials",
      "Live onboarding sessions (where applicable)",
      "Ongoing email and phone support",
    ],
    extraContent: `
Our team remains available to assist with system usage and customization support whenever needed.
    `,
  },
  {
    title: "5. Demo and Trial Access",
    content: `
Trial users receive a short onboarding session to help them explore SYSTEMAR effectively during evaluation.

We encourage full exploration of the platform and welcome any questions or customization requests during the trial period.
    `,
  },
  {
    title: "6. Acceptance of Terms",
    content: `
By using SYSTEMAR (trial or subscription), you agree to these Terms of Usage. We may update these terms periodically, and continued use signifies acceptance of any revisions.
    `,
  },
];

const AccordionItem = ({
  title,
  content,
  list,
  extraContent,
  isOpen,
  onClick,
}) => {
  return (
    <div
      className="
        overflow-hidden
        rounded-[24px]
        border
        border-slate-200
        bg-white/90
        shadow-md
        backdrop-blur-sm
      "
    >
      <button
        onClick={onClick}
        className="
          flex
          w-full
          items-center
          justify-between
          p-6
          text-left
        "
      >
        <h2 className="text-lg md:text-xl font-semibold text-slate-900">
          {title}
        </h2>

        <ChevronDown
          className={`h-5 w-5 text-slate-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr]"
            : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6">
            {content && (
              <p className="leading-8 text-slate-600 whitespace-pre-line">
                {content}
              </p>
            )}

            {list && (
              <ul className="mt-4 space-y-3">
                {list.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-slate-600"
                  >
                    <div className="mt-2 h-2 w-2 rounded-full bg-cyan-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {extraContent && (
              <p className="mt-4 leading-8 text-slate-600 whitespace-pre-line">
                {extraContent}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const TermsOfUsage = () => {
  const [openSections, setOpenSections] = useState([0]);

  const toggleSection = (index) => {
    setOpenSections((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const expandAll = () => {
    setOpenSections(sections.map((_, index) => index));
  };

  const collapseAll = () => {
    setOpenSections([]);
  };

  return (
    <section className="relative overflow-hidden pt-32 pb-24 px-6 md:px-[10%]">
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-cyan-50 via-white to-white" />

      <div className="absolute top-0 left-0 -z-10 h-72 w-72 rounded-full bg-cyan-100 opacity-40 blur-3xl" />

      <div className="absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-sky-100 opacity-40 blur-3xl" />

      <div className="mx-auto max-w-5xl">
        {/* Hero */}
        <div className="text-center">
          <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1 text-sm font-medium text-cyan-700">
            Legal Information
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold text-slate-900">
            Terms of Usage
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-slate-600">
            Please read these Terms of Usage carefully before using SYSTEMAR. 
            These terms govern your access to and use of our school management platform.
          </p>

          <div className="mt-8 inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-600">
            Effective Date: January 01, 2025
          </div>

          {/* Controls */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              onClick={expandAll}
              className="
                rounded-full
                border
                border-cyan-200
                bg-cyan-50
                px-5
                py-2
                text-sm
                font-medium
                text-cyan-700
                transition
                hover:bg-cyan-100
              "
            >
              Expand All
            </button>

            <button
              onClick={collapseAll}
              className="
                rounded-full
                border
                border-slate-200
                bg-white
                px-5
                py-2
                text-sm
                font-medium
                text-slate-600
                transition
                hover:bg-slate-50
              "
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Sections */}
        <div className="mt-16 space-y-4">
          {sections.map((section, index) => (
            <AccordionItem
              key={section.title}
              title={section.title}
              content={section.content}
              list={section.list}
              extraContent={section.extraContent}
              isOpen={openSections.includes(index)}
              onClick={() => toggleSection(index)}
            />
          ))}
        </div>

        {/* Contact Card */}
        <div
          className="
            mt-16
            rounded-[36px]
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            p-10
            text-white
          "
        >
          <h2 className="text-3xl font-bold">
            Questions About These Terms?
          </h2>

          <p className="mt-4 text-white/90">
            Our support team is happy to clarify any part of these Terms of Usage 
            or help you understand how they apply to your school.
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold">
                SYSTEMAR
              </h3>

              <p className="mt-3 text-white/90 leading-7">
                Office 1, Highfield Post Office
                <br />
                Digital Information Center
                <br />
                Harare, Zimbabwe
              </p>
            </div>

            <div className="space-y-3">
              <p>
                <strong>Email:</strong> sales@systemar.co.zw
              </p>

              <p>
                <strong>Phone:</strong> +263 77 486 7068
              </p>

              <p>
                <strong>Website:</strong> systemar.co.zw
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfUsage;