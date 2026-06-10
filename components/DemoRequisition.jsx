"use client";

import { useState } from "react";
import {CustomButton} from "./CustomButtonLink"
import toast from "react-hot-toast";

const DemoRequisition = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    nameOfSchool: "",
    numberOfStudents: "",
    phone: "",
    servicePlan: "",
    humanCheck: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [num1, setNum1] = useState(() => Math.floor(Math.random() * 10) + 1);
  const [num2, setNum2] = useState(() => Math.floor(Math.random() * 10) + 1);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullname.trim()) newErrors.fullname = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.nameOfSchool.trim())
      newErrors.nameOfSchool = "School name is required";
    if (!formData.numberOfStudents || formData.numberOfStudents <= 0) {
      newErrors.numberOfStudents = "Valid number of students is required";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    if (!formData.servicePlan)
      newErrors.servicePlan = "Please select a service plan";
    if (!formData.terms)
      newErrors.terms = "You must agree to the terms and conditions";

    if (Number(formData.humanAnswer) !== num1 + num2) {
      newErrors.humanAnswer = "Empty or Incorrect answer";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to submit request");

      const data = await res.json();
      toast.success("Demo request submitted successfully!");
      setFormData({
        fullname: "",
        email: "",
        nameOfSchool: "",
        numberOfStudents: "",
        phone: "",
        servicePlan: "",
        terms: false,
      });
      setNum1(Math.floor(Math.random() * 10) + 1);
      setNum2(Math.floor(Math.random() * 10) + 1);
      setErrors({});
    } catch (error) {
      toast.error("Error submitting request. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
   <section
  id="demo_requisition"
  className="relative overflow-hidden py-24 px-6 md:px-[10%]"
>
  {/* Background */}
  <div className="absolute inset-0 -z-20 bg-gradient-to-b from-cyan-50 via-white to-white" />

  {/* Decorative Blobs */}
  <div className="absolute top-20 left-0 -z-10 h-80 w-80 rounded-full bg-cyan-100 opacity-40 blur-3xl" />
  <div className="absolute bottom-20 right-0 -z-10 h-96 w-96 rounded-full bg-sky-100 opacity-40 blur-3xl" />

  <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-2 items-start">
    {/* Left Content */}
    <div>
      <div className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1 text-sm font-medium text-cyan-700">
        Free School Management Demo
      </div>

      <h2 className="mt-6 text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
        See how SYSTEMAR can transform your school.
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        Discover how schools are simplifying admissions, attendance,
        communication, reporting, and administration with SYSTEMAR School
        Management System.
      </p>

      <div className="mt-10 space-y-4">
        {[
          "Bulk student admissions and enrollment",
          "Automated attendance and reporting",
          "Role-based access for all parties, teachers, students, parents and staff",
          "Powerful communication and invoicing tools",
        ].map((item, index) => (
          <div
            key={index}
            className="
              flex
              items-start
              gap-4
              rounded-2xl
              border
              border-slate-200
              bg-white/80
              p-4
              shadow-sm
              backdrop-blur-sm
            "
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 font-bold">
              ✓
            </div>

            <p className="text-slate-600">{item}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Form Card */}
    <div
      className="
        rounded-[32px]
        border
        border-slate-200
        bg-white/90
        p-8
        shadow-2xl
        backdrop-blur-sm
      "
    >
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900">
          Request Your Free Demo
        </h3>

        <p className="mt-2 text-slate-600">
          Complete the form and our team will contact you shortly.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Full Name */}
        <div>
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            value={formData.fullname}
            onChange={handleChange}
            className="
              w-full
              rounded-xl
              border
              border-slate-200
              px-4
              py-4
              outline-none
              transition
              focus:border-cyan-400
              focus:ring-4
              focus:ring-cyan-100
            "
          />

          {errors.fullname && (
            <p className="mt-2 text-sm text-red-500">
              {errors.fullname}
            </p>
          )}
        </div>

        {/* Email + Phone */}
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 px-4 py-4 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100 outline-none"
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 px-4 py-4 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100 outline-none"
            />
            {errors.phone && (
              <p className="mt-2 text-sm text-red-500">{errors.phone}</p>
            )}
          </div>
        </div>

        {/* School + Students */}
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <input
              type="text"
              name="nameOfSchool"
              placeholder="School Name"
              value={formData.nameOfSchool}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 px-4 py-4 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100 outline-none"
            />
            {errors.nameOfSchool && (
              <p className="mt-2 text-sm text-red-500">
                {errors.nameOfSchool}
              </p>
            )}
          </div>

          <div>
            <input
              type="number"
              name="numberOfStudents"
              placeholder="Number of Students"
              value={formData.numberOfStudents}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 px-4 py-4 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100 outline-none"
            />
            {errors.numberOfStudents && (
              <p className="mt-2 text-sm text-red-500">
                {errors.numberOfStudents}
              </p>
            )}
          </div>
        </div>

        {/* Plan */}
        <div>
          <select
            name="servicePlan"
            value={formData.servicePlan}
            onChange={handleChange}
            className="
              w-full
              rounded-xl
              border
              border-slate-200
              px-4
              py-4
              outline-none
              focus:border-cyan-400
              focus:ring-4
              focus:ring-cyan-100
            "
          >
            <option value="">Select a Package</option>
            <option value="Silver $500">SMS Silver ($500)</option>
            <option value="Gold $650">SMS Gold ($650)</option>
            <option value="Platinum $900">SMS Platinum ($900)</option>
            <option value="Custom SMS Package">
              Custom SMS Package
            </option>
          </select>
        </div>

        {/* Human Verification */}
        <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-5">
          <p className="mb-3 text-sm font-medium text-slate-700">
            Security Check
          </p>

          <div className="mb-4 text-2xl font-bold text-cyan-600">
            {num1} + {num2} = ?
          </div>

          <input
            type="text"
            name="humanAnswer"
            value={formData.humanAnswer || ""}
            onChange={handleChange}
            placeholder="Enter answer"
            className="w-full rounded-xl border border-cyan-200 px-4 py-3 outline-none focus:border-cyan-400"
          />
        </div>

        {/* Terms */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
            className="mt-1"
          />

          <p className="text-sm text-slate-600">
            I agree to the Privacy Policy and Terms & Conditions.
          </p>
        </div>

        {/* Submit */}
        <CustomButton
          type="submit"
          disabled={isLoading}
          className="
            w-full
            rounded-full
            py-4
            text-white
            font-semibold
            shadow-lg
            transition-all
            duration-300
            hover:scale-[1.02]
            hover:shadow-xl
          "
        >
          {isLoading ? "Submitting..." : "Request Free Demo"}
        </CustomButton>
      </form>
    </div>
  </div>
</section>
  );
};

export default DemoRequisition;
