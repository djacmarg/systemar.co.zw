import React from "react";

const RefundPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 text-gray-800 text-[14px]">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Refund & Cancellation Policy
      </h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Overview</h2>
        <p>
          At <strong>SYSTEMAR.ORG</strong>, we are committed to customer
          satisfaction. If you are not entirely satisfied with your subscription
          to our SMS services, we’re here to help.
        </p>
        <p>
          This Refund & Cancellation Policy applies exclusively to SMS service
          subscriptions purchased through SYSTEMAR.ORG and operated by{" "}
          <strong>Tech Pundit (Pty) Ltd</strong>, South Africa.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          2. 30-Day Money-Back Guarantee (SMS Subscriptions)
        </h2>
        <p>
          We offer a <strong>100% refund within 30 days</strong> of your SMS
          subscription purchase if you are unhappy with the service for any
          reason.
        </p>
        <p className="mt-2 font-semibold">To qualify:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            The refund request must be made within 30 calendar days of the
            initial purchase.
          </li>
          <li>
            The SMS package must not have been used in full (partially used
            packages are eligible).
          </li>
          <li>Refunds will be processed to the original payment method.</li>
        </ul>
        <p className="mt-2">
          To request a refund, please contact us at{" "}
          <span className="text-blue-600 underline">info@systemar.org</span>{" "}
          with your account details and reason for cancellation.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          3. Cancellation of Services
        </h2>
        <p>
          You may cancel your subscription to the SMS service at any time via
          your SYSTEMAR account or by contacting support.
        </p>
        <p className="mt-2 font-semibold">Please note:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Cancellations made after 30 days will not be eligible for a refund.
          </li>
          <li>
            Cancellation will stop any future billings, but past payments will
            not be refunded unless they fall within the 30-day window.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          4. Non-Refundable Services
        </h2>
        <p>
          Other paid services on SYSTEMAR.ORG outside of the SMS subscription
          (e.g., custom development, onboarding, or consultancy) are
          non-refundable unless explicitly stated otherwise in a service
          agreement.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Processing Time</h2>
        <p>
          Refunds are typically processed within{" "}
          <strong>7–10 business days</strong> after approval, depending on your
          bank or payment provider.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">6. Contact Us</h2>
        <p>
          If you have any questions about this Refund & Cancellation Policy or
          need assistance with a refund request, please contact us:
        </p>
        <div className="mt-4 space-y-1">
          <p>
            <strong>Tech Pundit (Pty) Ltd</strong>
          </p>
          <p>
            Email:{" "}
            <span className="text-blue-600 underline">info@systemar.org</span>
          </p>
          <p>
            Phone:{" "}
            <span className="text-blue-600 underline">+27 6059 15114</span>
          </p>
          <p>
            Website:{" "}
            <a href="https://systemar.org" className="text-blue-600 underline">
              https://systemar.org
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default RefundPolicy;
