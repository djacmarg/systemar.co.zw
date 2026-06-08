import Image from "next/image";

const ReportAnalysis = () => {
  return (
    <section id="services" className="py-20 px-4 md:px-[15%] bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-2xl font-bold  text-[#00BFD8]">
          Capture, access, and analyze student and school data—faster and more
          accurately than ever before.
        </h2>
        <p className="mt-4 text-gray-700 text-[14px]">
          Whether you’re a well-established institution with thousands of
          students or a growing school with fewer than 50 learners, SYSTEMAR
          School Management System is built to serve your needs with
          reliability, scalability, and efficiency. Our platform adapts
          seamlessly to institutions of all sizes—offering powerful tools that
          grow with you, no matter where you are on your educational journey.
        </p>
      </div>

      <div className="mt-16 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="border rounded-lg p-8 text-center shadow hover:shadow-md transition">
          <Image
            src="/images/services-icon-1.svg" // Replace with actual icon
            alt="Report Icon"
            width={60}
            height={60}
            className="mx-auto mb-4"
          />
          <h3 className="text-[14px] font-semibold mt-4 text-gray-800">
            Report Analysis
          </h3>
          <p className="text-gray-600 text-[14px] mt-4">
            Class teachers can easily analyze their students' performance with
            just a few clicks. Parents, too, can conveniently access their
            children’s reports from the comfort of their homes or offices.
          </p>
        </div>

        {/* Card 2 */}
        <div className="border rounded-lg p-8 text-center shadow hover:shadow-md transition">
          <Image
            src="/images/services-icon-2.svg"
            alt="Modules Icon"
            width={60}
            height={60}
            className="mx-auto mb-4"
          />
          <h3 className="text-[14px] font-semibold mt-4 text-gray-800">
            Uniqueness in Modules
          </h3>

          <p className="text-gray-600 text-[14px] mt-4">
            Teachers can access and manage only the classes and students
            assigned to them—just as every user is granted access based on their
            specific role and responsibilities.
          </p>
        </div>

        {/* Card 3 */}
        <div className="border rounded-lg p-8 text-center shadow hover:shadow-md transition">
          <Image
            src="/images/services-icon-3.svg"
            alt="Admin Icon"
            width={60}
            height={60}
            className="mx-auto mb-4"
          />
          <h3 className="text-[14px] font-semibold mt-4 text-gray-800">
            Administration
          </h3>
          <p className="text-gray-600 text-[14px] mt-4">
            Simplify the unique tasks of admission and enrollment with our
            powerful bulk admission and promotion tool. Manage everything from
            admissions to invoicing and communication.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReportAnalysis;
