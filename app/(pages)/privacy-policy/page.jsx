import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 text-gray-800 text-[14px]">
      <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
      <p className="text-sm mb-8 text-center italic">
        Effective Date: 01/01/2025.
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p>
          Welcome to <strong>SYSTEMAR.co.zw</strong>, a cloud-based school
          management system designed to streamline educational administration
          for institutions at all levels. SYSTEMAR.co.zw (“we”, “our”, or “us”) is
          owned and operated by <strong>Tech Pundit (Pty) Ltd</strong>, with office in Harare, Zimbabwe.
        </p>
        <p>
          This Privacy Policy outlines how we collect, use, store, share, and
          protect your personal information when you use our services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Compliance</h2>
        <p>
          We are committed to protecting your privacy in accordance with the{" "}
          <strong>Protection of Personal Information Act (POPIA)</strong> and
          other applicable data protection laws in South Africa and
          internationally.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          3. Information We Collect
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>User Information:</strong> Names, contact details (email,
            phone), user roles (e.g., admin, teacher, student, parent).
          </li>
          <li>
            <strong>Institutional Data:</strong> School names, addresses, staff
            records, student records, academic performance, attendance logs,
            financial records.
          </li>
          <li>
            <strong>Device & Usage Data:</strong> IP address, browser type,
            operating system, device identifiers, and system usage logs.
          </li>
          <li>
            <strong>Communication Records:</strong> Messages, support requests,
            feedback, or queries submitted through our platform.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          4. How We Use Your Information
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Provide and improve our school management services.</li>
          <li>Facilitate user authentication and role-based access.</li>
          <li>
            Store and process academic, financial, and operational records.
          </li>
          <li>
            Communicate with users regarding system updates, support, and
            notifications.
          </li>
          <li>Ensure the security and integrity of our system.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          5. Sharing of Information
        </h2>
        <p>
          We do not sell your personal information. Your data may be shared
          with:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Authorized personnel</strong> within your institution, based
            on user role.
          </li>
          <li>
            <strong>Third-party service providers</strong> who assist us in
            operating our platform (e.g., cloud hosting, backup services), under
            strict confidentiality agreements.
          </li>
          <li>
            <strong>Legal authorities</strong>, if required by law or to comply
            with legal processes.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          6. Data Storage and Security
        </h2>
        <p>
          Your data is securely stored in encrypted cloud servers. We implement
          industry-standard security practices, including:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Data encryption (at rest and in transit).</li>
          <li>Role-based access controls.</li>
          <li>Regular backups and system updates.</li>
          <li>Ongoing monitoring for unauthorized access.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Your Rights</h2>
        <p>As a data subject, you have the right to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Access the personal information we hold about you.</li>
          <li>Request corrections or updates to your information.</li>
          <li>Withdraw consent (where applicable).</li>
          <li>
            Lodge a complaint with the Information Regulator of South Africa.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          8. Retention of Information
        </h2>
        <p>
          We retain personal and institutional data for as long as necessary to
          fulfill the purposes outlined in this policy, or as required by law or
          institutional agreements.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          9. Cookies and Tracking Technologies
        </h2>
        <p>
          Our website may use cookies and similar technologies to enhance user
          experience, analyze traffic, and improve functionality. You can
          control cookie preferences through your browser settings.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">10. Third-Party Links</h2>
        <p>
          Our system may contain links to external sites. We are not responsible
          for the privacy practices or content of those third-party websites.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          11. Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page with an updated effective date. Where applicable,
          we will also notify registered subscribers via email. Continued use of
          SYSTEMAR.co.zw after such changes indicates your acceptance of the
          revised policy.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">12. Contact Us</h2>
        <p>
          If you have questions or concerns regarding this Privacy Policy, or if
          you wish to exercise your rights, please contact us at:
        </p>
        <div className="mt-4 space-y-1">
          <p>
            <strong>Tech Pundit (Pty) Ltd</strong>
          </p>
          <p>Email: sales@systemar.co.zw</p>
          <p>Phone: +263 77 486 7068</p>
          <p>
           Office 1, Highfield Post Office,
            <br />
            Digital Information Center, Harare
            <br />
            Zimbabwe
          </p>
          <p>
            Website:{" "}
            <a href="https://systemar.co.zw" className="text-blue-600 underline">
              https://systemar.co.zw
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
