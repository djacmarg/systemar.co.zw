"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const sections = [
  {
    title: "1. Introduction",
    content: `
Welcome to SYSTEMAR, a cloud-based school management platform designed to streamline educational administration for institutions at all levels.

This Privacy Policy explains how we collect, use, store, share, and protect your personal information when you use our services.
    `,
  },
  {
    title: "2. Compliance",
    content: `
We are committed to protecting your privacy in accordance with applicable data protection laws and international privacy standards where applicable.
    `,
  },
  {
    title: "3. Information We Collect",
    list: [
      "User Information (names, emails, phone numbers, user roles)",
      "Institutional Data (student records, staff records, attendance, finances)",
      "Device & Usage Data (IP address, browser type, operating system)",
      "Communication Records (support requests, feedback, enquiries)",
    ],
  },
  {
    title: "4. How We Use Your Information",
    list: [
      "Provide and improve our services",
      "Authenticate users and manage access rights",
      "Process academic and administrative records",
      "Send updates, alerts, and notifications",
      "Maintain system security and reliability",
    ],
  },
  {
    title: "5. Sharing of Information",
    list: [
      "Authorized personnel within your institution",
      "Trusted service providers operating under confidentiality agreements",
      "Legal authorities when required by law",
    ],
  },
  {
    title: "6. Data Storage & Security",
    list: [
      "Encryption in transit and at rest",
      "Role-based access controls",
      "Regular backups",
      "Continuous security monitoring",
      "System updates and vulnerability management",
    ],
  },
  {
    title: "7. Your Rights",
    list: [
      "Access personal information we hold",
      "Request corrections or updates",
      "Withdraw consent where applicable",
      "Lodge complaints with relevant authorities",
    ],
  },
  {
    title: "8. Retention of Information",
    content: `
We retain information only as long as necessary to provide services, fulfill contractual obligations, comply with legal requirements, and support institutional record-keeping obligations.
    `,
  },
  {
    title: "9. Cookies & Tracking Technologies",
    content: `
We may use cookies and similar technologies to improve website functionality, analyze traffic, and enhance user experience.
    `,
  },
  {
    title: "10. Third-Party Links",
    content: `
Our services may contain links to external websites. We are not responsible for the privacy practices of those third-party websites.
    `,
  },
  {
    title: "11. Changes to this Policy",
    content: `
We may update this Privacy Policy periodically. Changes will be published on this page together with the revised effective date. Continued use of the platform constitutes acceptance of the updated policy.
    `,
  },
];

const AccordionItem = ({
  title,
  content,
  list,
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
              <ul className="space-y-3">
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
          </div>
        </div>
      </div>
    </div>
  );
};

const PrivacyPolicy = () => {
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
            Privacy Policy
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-slate-600">
            Your privacy and data security are important to us. This policy
            explains how SYSTEMAR collects, uses, stores, and protects
            information entrusted to us.
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

        {/* Policy Sections */}
        <div className="mt-16 space-y-4">
          {sections.map((section, index) => (
            <AccordionItem
              key={section.title}
              title={section.title}
              content={section.content}
              list={section.list}
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
            Contact Us
          </h2>

          <p className="mt-4 text-white/90">
            If you have any questions regarding this Privacy Policy or wish
            to exercise your rights, please contact us.
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

export default PrivacyPolicy;