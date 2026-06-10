"use client"
import {useState} from "react";
import { CustomLink } from "./CustomButtonLink";

const plansData = [
  {
    name: "SILVER",
    description: "Just a starter to see what is obtainable",
    price: "500.00",
    isPopular: false,
    hasUpgradeBanner: false,
    features: [
      { text: "6+ Dashboards", included: true },
      { text: "10+ Modules", included: true },
      { text: "Max Num Students 120", included: true },
      { text: "Data Storage (35 GB)", included: true },
      { text: "Cloud Hosting", included: true },
      { text: "Secure Server (SSL)", included: true },
      { text: "Bulk Email Messaging", included: true },
      { text: "Bulk Students Enrolment", included: true },
      { text: "Customization (Basic: Logo & School Name)", included: true },
      { text: "Staff Payroll", included: false },
      { text: "Timetable Manager", included: false },
      { text: "Report Card Manager", included: false },
      { text: "Tabulation Sheet", included: false },
      { text: "Grading Manager", included: false },
      { text: "Mass Invoicing", included: false },
      { text: "Attendance Manager", included: false },
      { text: "After Sale Support", included: false },
      { text: "Maintenance fee ($US13/Student/Term)", included: true },
      { text: "System Upgrade (Not Free)", included: false },
    ],
  },
  {
    name: "GOLD",
    description: "Appropriate for moderate users.",
    isPopular: true,
    hasUpgradeBanner: false,
    price: "650.00",
    features: [
      { text: "6+ Dashboards", included: true },
      { text: "10+ Modules", included: true },
      { text: "Max Num Students 550", included: true },
      { text: "Data Storage (100 GB)", included: true },
      { text: "Cloud Hosting", included: true },
      { text: "Secure Server (SSL)", included: true },
      { text: "Bulk Email Messaging", included: true },
      { text: "Bulk Students Enrolment", included: true },
      { text: "Customization (Basic+)", included: true },
      { text: "Staff Payroll", included: true },
      { text: "Timetable Manager", included: true },
      { text: "Report Card Manager", included: true },
      { text: "Tabulation Sheet", included: true },
      { text: "Grading Manager", included: true },
      { text: "Mass Invoicing", included: true },
      { text: "Attendance Manager", included: true },
      { text: "After Sale Support", included: true },
      { text: "Maintenance fee ($US13/Student/Term)", included: true },
      { text: "System Upgrade (Free)", included: true },
    ],
  },
  {
    name: "PLATINUM",
    description: "Maximum Potentials including free Version Upgrades",
    price: "900.00",
    isPopular: false,
    hasUpgradeBanner: true,
    features: [
      { text: "6+ Dashboards", included: true },
      { text: "10+ Modules", included: true },
      { text: "Max Num Students (Unlimited)", included: true },
      { text: "Data Storage (Unlimited)", included: true },
      { text: "Cloud Hosting", included: true },
      { text: "Secure Server (SSL)", included: true },
      { text: "Bulk Email Messaging", included: true },
      { text: "Bulk Students Enrolment", included: true },
      {
        text: "Customization (Basic + Report Design + Certificate)",
        included: true,
      },
      { text: "Staff Payroll", included: true },
      { text: "Timetable Manager", included: true },
      { text: "Report Card Manager", included: true },
      { text: "Tabulation Sheet", included: true },
      { text: "Grading Manager", included: true },
      { text: "Mass Invoicing", included: true },
      { text: "Attendance Manager", included: true },
      { text: "After Sale Support", included: true },
      { text: "Maintenance fee ($US13/Student/Term)", included: true },
      { text: "System Upgrade (Free)", included: true },
    ],
  },
];

// Helper component for the checkmark icon
const CheckIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

// Helper component for the cross icon
const CrossIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const PricingCard = ({ plan }) => {
  const [expanded, setExpanded] = useState(false);

  const {
    name,
    description,
    price,
    isPopular,
    hasUpgradeBanner,
    features,
  } = plan;

  const initialFeatures = 8;

  const visibleFeatures = expanded
    ? features
    : features.slice(0, initialFeatures);

  const hiddenCount = features.length - initialFeatures;

  return (
    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        p-8
        flex
        flex-col
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-2xl
        bg-white/90
        backdrop-blur-sm
        ${
          isPopular
            ? "border-cyan-400 shadow-2xl scale-[1.03] bg-gradient-to-b from-cyan-50 to-white"
            : "border-slate-200 shadow-md"
        }
      `}
    >
      {/* Hover Glow */}
      <div
        className="
          absolute
          -top-20
          -right-20
          h-40
          w-40
          rounded-full
          bg-cyan-100
          blur-3xl
          opacity-0
          transition
          duration-500
          group-hover:opacity-70
        "
      />

      {/* Badge */}
      {isPopular && (
        <div className="absolute top-6 right-6">
          <span className="rounded-full bg-cyan-100 px-4 py-1 text-xs font-semibold text-cyan-700">
            Most Popular
          </span>
        </div>
      )}

      {hasUpgradeBanner && (
        <div className="absolute top-6 right-6">
          <span className="rounded-full bg-purple-100 px-4 py-1 text-xs font-semibold text-purple-700">
            Best Value
          </span>
        </div>
      )}

      <div className="relative z-10 flex flex-col h-full">
        {/* Plan Name */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-slate-900">
            {name}
          </h3>

          <p className="mt-3 text-sm text-slate-500 min-h-[48px]">
            {description}
          </p>
        </div>

        {/* Price */}
        <div className="mt-8 text-center">
          <div className="flex items-start justify-center">
            <span className="mt-2 text-lg text-slate-500">
              $US
            </span>

            <span className="text-6xl font-bold text-slate-900">
              {price}
            </span>
          </div>

          <p className="mt-2 text-slate-500">
            Annual Subscription
          </p>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-slate-200" />

        {/* Features */}
        <div className="flex-grow">
          <ul className="space-y-3">
            {visibleFeatures.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-3"
              >
                {feature.included ? (
                  <CheckIcon className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                ) : (
                  <CrossIcon className="h-5 w-5 text-slate-300 mt-0.5 flex-shrink-0" />
                )}

                <span
                  className={`text-sm ${
                    feature.included
                      ? "text-slate-700"
                      : "text-slate-400"
                  }`}
                >
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>

          {/* Show More Button */}
          {features.length > initialFeatures && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="
                mt-6
                inline-flex
                items-center
                rounded-full
                border
                border-cyan-200
                bg-cyan-50
                px-4
                py-2
                text-sm
                font-medium
                text-cyan-700
                transition
                hover:bg-cyan-100
              "
            >
              {expanded
                ? "Show Less"
                : `View ${hiddenCount} More Features`}
            </button>
          )}
        </div>

        {/* CTA */}
        <CustomLink
          href="/#demo_requisition"
          className="
            mt-8
            w-full
            justify-center
            flex
            py-4
            rounded-full
            text-base
            font-semibold
          "
        >
          Get Started
        </CustomLink>
      </div>
    </div>
  );
};

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden py-24 px-6 md:px-[10%]"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-cyan-50 via-white to-white" />

      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 -z-10 h-72 w-72 rounded-full bg-cyan-100 opacity-40 blur-3xl" />
      <div className="absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-sky-100 opacity-40 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1 text-sm font-medium text-cyan-700">
            Pricing Plans
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
            Simple pricing for every
            <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              school size
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Whether you're a growing institution or a large educational
            organization, we have a package tailored to your needs.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {plansData.map((plan) => (
            <PricingCard
              key={plan.name}
              plan={plan}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-8">
            Need a custom solution for your institution?
          </p>

          <CustomLink
            href="/#demo_requisition"
            className="mt-6 px-8 py-4 text-base font-semibold"
          >
            Request Custom Quote
          </CustomLink>
        </div>
      </div>
    </section>
  );
};

export default Pricing;