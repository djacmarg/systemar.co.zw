"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const sections = [
  {
    title: "1. Overview",
    content: `
At SYSTEMAR.co.zw, we are committed to customer satisfaction. If you are not entirely satisfied with your subscription, we're here to help.

This Refund & Cancellation Policy applies exclusively to services purchased through SYSTEMAR.CO.ZW and SYSTEMAR
    `,
  },
  {
    title: "2. 30-Day Money-Back Guarantee",
    content:
      "We offer a 100% refund within 30 days of purchase if you are dissatisfied with our service for any reason, with any applicable processing fees deducted from the refunded amount as necessary.",
    list: [
      "Refund requests must be submitted within 30 calendar days of the original purchase.",
      "Partially used subscriptions remain eligible for review.",
      "Refunds are returned through the original payment method whenever possible.",
      "Requests should include account details and the reason for cancellation.",
    ],
  },
  {
    title: "3. Cancellation of Services",
    content:
      "You may cancel your subscription at any time through your SYSTEMAR account or by contacting our support team.",
    list: [
      "Cancellations after the 30-day period are not eligible for refunds.",
      "Future billing will stop after cancellation.",
      "Past payments outside the refund window are non-refundable.",
    ],
  },
  {
    title: "4. Non-Refundable Services",
    content: `
Certain professional services are non-refundable unless otherwise stated in a written agreement.

Examples include custom software development, onboarding services, consulting, training, data migration projects, and specialized integrations.
    `,
  },
  {
    title: "5. Refund Processing Time",
    content: `
Approved refunds are typically processed within 7–10 business days, depending on your bank, card issuer, or payment provider.
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
          </div>
        </div>
      </div>
    </div>
  );
};

const RefundPolicy = () => {
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
            Refund & Cancellation Policy
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-slate-600">
            We believe in transparency and customer satisfaction. This policy
            explains how refunds, cancellations, and subscription changes are
            handled for SYSTEMAR services.
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
            Need Help With a Refund?
          </h2>

          <p className="mt-4 text-white/90">
            Our support team is available to assist you with refund requests,
            subscription cancellations, and billing inquiries.
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

export default RefundPolicy;