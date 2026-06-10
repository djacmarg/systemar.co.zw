import Image from "next/image";

const services = [
  {
    title: "Report Analysis",
    icon: "/images/services-icon-1.svg",
    description:
      "Class teachers can easily analyze student performance with just a few clicks. Parents can also access their children's academic reports anytime, anywhere.",
  },
  {
    title: "Role-Based Access",
    icon: "/images/services-icon-2.svg",
    description:
      "Teachers and staff can access only the classes, students, and modules assigned to them, ensuring adequate security, privacy and streamlined workflows",
  },
  {
    title: "Administration",
    icon: "/images/services-icon-3.svg",
    description:
      "Manage admissions, promotions, invoicing, communication, timetable, class tabulation sheet, attendance and student records from one centralized platform.",
  },
];

const ReportAnalysis = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-24 px-6 md:px-[10%]"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-cyan-50 via-white to-white" />

      {/* Decorative Blur Effects */}
      <div className="absolute top-0 left-0 -z-10 h-72 w-72 rounded-full bg-cyan-100 opacity-40 blur-3xl" />
      <div className="absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-sky-100 opacity-40 blur-3xl" />

      {/* Header */}
      <div className="mx-auto max-w-4xl text-center">
        <span className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1 text-sm font-medium text-cyan-700">
          School Management Solution
        </span>

        <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
          Capture, access, and analyze{" "}
          <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
            student and school data
          </span>{" "}
          faster and more accurately than ever before.
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
        Whether your school is a large, well-established institution with thousands of students or a growing one with under 50 learners, SYSTEMAR is engineered to deliver seamless reliability, scalability, and efficiency throughout your entire educational journey.
        </p>
      </div>

      {/* Cards */}
      <div className="mx-auto mt-20 grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-slate-200
              bg-white/80
              p-8
              shadow-sm
              backdrop-blur-sm
              transition-all
              duration-500
              hover:-translate-y-3
              hover:border-cyan-300
              hover:shadow-2xl
            "
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
                opacity-0
                blur-3xl
                transition-all
                duration-500
                group-hover:opacity-80
              "
            />

            <div className="relative z-10">
              {/* Icon */}
              <div
                className="
                  mx-auto
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-2xl
                  bg-cyan-50
                  transition-all
                  duration-300
                  group-hover:scale-110
                  group-hover:bg-cyan-100
                "
              >
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={50}
                  height={50}
                />
              </div>

              {/* Title */}
              <h3 className="mt-6 text-center text-xl font-semibold text-slate-900">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-center leading-7 text-slate-600">
                {service.description}
              </p>

              {/* Accent Line */}
              <div className="mt-8 flex justify-center">
                <div className="h-1 w-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-20" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReportAnalysis;