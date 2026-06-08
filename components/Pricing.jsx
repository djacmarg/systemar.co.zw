import React from "react";
import { CustomButton, CustomLink } from "./CustomButtonLink";

// DATA: This array holds all the information for the pricing plans.
// You can easily update prices, features, or descriptions here.
const plansData = [
  {
    name: "SILVER",
    description: "Just a starter to see what is obtainable",
    price: "7,500",
    isPopular: false,
    hasUpgradeBanner: false,
    features: [
      { text: "6+ Dashboards", included: true },
      { text: "10+ Modules", included: true },
      { text: "Max Num Students 120", included: true },
      { text: "Data Storage (35 GB)", included: true },
      { text: "Cloud Hosting", included: true },
      { text: "Secure Server (SSL)", included: true },
      { text: "Bulk Email Msg", included: true },
      { text: "Bulk SMS Integration (1,500)", included: true },
      { text: "Bulk Students Enrolment", included: true },
      { text: "Customization (Basic: Logo & School Name)", included: true },
      { text: "Staff Payroll", included: false },
      { text: "Timetable Manager", included: false },
      { text: "Report Card Manager", included: false },
      { text: "Tabulation Sheet", included: false },
      { text: "Grading Manager", included: false },
      { text: "Expense Manager", included: false },
      { text: "Mass Invoicing", included: false },
      { text: "Attendance Manager", included: false },
      { text: "After Sale Support", included: false },
      { text: "Maintenance fee (R200/Student/Term)", included: false },
      { text: "System Upgrade (Not Free)", included: false },
    ],
  },
  {
    name: "GOLD",
    description: "Appropriate for moderate users.",
    isPopular: true,
    hasUpgradeBanner: false,
    price: "10,500",
    features: [
      { text: "6+ Dashboards", included: true },
      { text: "10+ Modules", included: true },
      { text: "Max Num Students 550", included: true },
      { text: "Data Storage (100 GB)", included: true },
      { text: "Cloud Hosting", included: true },
      { text: "Secure Server (SSL)", included: true },
      { text: "Bulk Email Msg", included: true },
      { text: "Bulk SMS Integration (2,500)", included: true },
      { text: "Bulk Students Enrolment", included: true },
      { text: "Customization (Basic+)", included: true },
      { text: "Staff Payroll", included: true },
      { text: "Timetable Manager", included: true },
      { text: "Report Card Manager", included: true },
      { text: "Tabulation Sheet", included: true },
      { text: "Grading Manager", included: true },
      { text: "Expense Manager", included: true },
      { text: "Mass Invoicing", included: true },
      { text: "Attendance Manager", included: true },
      { text: "After Sale Support", included: true },
      { text: "Maintenance fee (R200/Student/Term)", included: true },
      { text: "System Upgrade (Free)", included: true },
    ],
  },
  {
    name: "PLATINUM",
    description: "Maximum Potentials including free Version Upgrades",
    price: "14,500",
    isPopular: false,
    hasUpgradeBanner: true,
    features: [
      { text: "6+ Dashboards", included: true },
      { text: "10+ Modules", included: true },
      { text: "Max Num Students (Unlimited)", included: true },
      { text: "Data Storage (Unlimited)", included: true },
      { text: "Cloud Hosting", included: true },
      { text: "Secure Server (SSL)", included: true },
      { text: "Bulk Email Msg", included: true },
      { text: "Bulk SMS Integration (5,500)", included: true },
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
      { text: "Expense Manager", included: true },
      { text: "Mass Invoicing", included: true },
      { text: "Attendance Manager", included: true },
      { text: "After Sale Support", included: true },
      { text: "Maintenance fee (R200/Student/Term)", included: true },
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

// Card Component: Renders a single pricing card.
const PricingCard = ({ plan }) => {
  const { name, description, price, isPopular, hasUpgradeBanner, features } =
    plan;

  // Conditionally applies styles for the "Most Popular" plan
  const cardClasses = `
    bg-white rounded-xl p-4 flex flex-col w-full max-w-md transition-all duration-300
    ${
      isPopular
        ? "border-2 border-orange-500 shadow-xl lg:scale-105"
        : "border border-gray-200 shadow-lg"
    }
    relative overflow-hidden
  `;

  return (
    <div className={cardClasses}>
      {isPopular && (
        <div className="absolute -right-18 top-4 w-56 text-center bg-orange-500 text-white text-xs font-semibold py-1 transform rotate-45 z-10">
          Popular
        </div>
      )}
      {hasUpgradeBanner && (
        <div className="absolute -right-18 top-4 w-56 text-center bg-orange-500 text-white text-xs font-semibold py-1 transform rotate-45 z-10">
          Best Value
        </div>
      )}

      <div className="text-center">
        <h3 className="text-[17px] font-semibold text-gray-700 tracking-wider">
          {name}
        </h3>
        <p className="mt-2 text-[14px] text-gray-500 h-10 text-wrap px-5">
          {description}
        </p>
      </div>

      <div className="text-center">
        <span className="text-4xl font-bold text-orange-500">
          <span className="text-xl align-top mr-1">$US</span>
          {price}
        </span>
        <p className="text-base font-small text-gray-500 border-b-1 py-3">
          Annually
        </p>
      </div>

      <ul className="mt-2 space-y-0.5 flex-grow text-[14px]">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            {feature.included ? (
              <CheckIcon className="h-4 w-4 text-orange-500 flex-shrink-0 mt-0.5" />
            ) : (
              <CrossIcon className="h-4 w-4 text-gray-400 flex-shrink-0 mt-0.5" />
            )}
            <span className="ml-2 text-gray-700">{feature.text}</span>
          </li>
        ))}
      </ul>

      <CustomLink
        href={`https://paystack.com/pay/systemar_${plan.name.toLowerCase()}`}
        className="mt-4 w-full flex justify-center"
      >
        ORDER NOW
      </CustomLink>
    </div>
  );
};

// Main Component: Assembles the entire pricing section.
const Pricing = () => {
  return (
    <div
      id="pricing"
      className="bg-gray-50 font-sans py-16 px-4 md:px[10%] lg:px-[15%]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="font-extrabold  text-[#00BFD8]  sm:text-5xl md:text-3xl">
            Multiple Pricing Options
          </h2>
          <p className="mt-4 text-[13px] text-gray-600 max-w-2xl mx-auto">
            We've prepared pricing plans for all budgets so you can get started
            right away. They're great for all sizes of schools and institutions.
          </p>
        </div>

        {/* Grid container for the pricing cards */}
        <div className="mt-16 flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-10">
          {plansData.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
