import React from "react";

const TermsOfUsage = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 text-gray-800 text-[14px]">
      <h1 className="text-3xl font-bold mb-6 text-center">Terms of Usage</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p>
          SYSTEMAR, developed by <strong>Tech Pundit (Pty) Ltd</strong>, is a
          powerful and flexible cloud-based management system designed for use
          in <strong>schools</strong> at <strong>various levels</strong>. Our
          system offers out-of-the-box tools for efficient data handling,
          records management, and administrative automation.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          2. Scalability and Adaptability
        </h2>
        <p>
          Our School Management System (SMS) is highly scalable, catering to
          institutions of all sizes—from small private schools to large
          multi-campus facilities. SYSTEMAR is designed to accommodate
          individual school needs right out of the box, with the flexibility to
          be customized further to suit your institution’s specific
          requirements.
        </p>
        <p className="mt-2">
          We believe that no two institutions are the same. SYSTEMAR's modular
          architecture allows for personalized features, workflows, and
          integrations to be added based on your administrative or academic
          environment.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Ease of Use</h2>
        <p>
          While SYSTEMAR is designed to be user-friendly and intuitive for
          anyone who can read and write, we go the extra mile to ensure smooth
          onboarding and usage. Users can easily navigate through features like
          student and staff management, attendance tracking, academic reports,
          billing, and more.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Training and Support</h2>
        <p>
          Every SYSTEMAR subscription includes{" "}
          <strong>comprehensive onboarding training</strong> to help your team
          understand how to get the best out of the system. This includes:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Initial system setup guidance</li>
          <li>Feature-specific tutorials</li>
          <li>Live walkthroughs (when applicable)</li>
          <li>Ongoing support via email or phone</li>
        </ul>
        <p className="mt-2">
          Even though SYSTEMAR is easy to use, our team is available to guide
          you through system functionalities and provide assistance as needed.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Demo and Trial Access</h2>
        <p>
          All demo or trial packages of SYSTEMAR come with a{" "}
          <strong>brief training session</strong> to help users get started
          quickly. This ensures that even during your evaluation period, your
          team can explore the key functionalities effectively and make an
          informed decision.
        </p>
        <p className="mt-2">
          We encourage trial users to fully explore the system’s potential and
          contact us with any questions or customization requests.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">6. Acceptance of Terms</h2>
        <p>
          By accessing or using SYSTEMAR, whether via a trial or a full
          subscription, you agree to abide by these Terms of Usage. These terms
          may be updated periodically to reflect system enhancements or policy
          changes. Continued use of the platform after updates constitutes
          acceptance of the revised terms.
        </p>
      </section>
    </div>
  );
};

export default TermsOfUsage;
