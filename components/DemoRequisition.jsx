"use client";

import { useState } from "react";
import { CustomButton } from "./CustomButtonLink";
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
      className="w-full py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-white"
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start gap-12">
        {/* Left: Illustration / Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00BFD8] mb-4">
            Request free Demo
          </h2>
          <p className="text-gray-600 mb-4 text-sm">
            Systerm Records Professionals SMS is one of the easiest and fun way
            to automate and streamline all your school administrative
            workflow...
          </p>
          <ul className="space-y-4 text-sm text-gray-600">
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✔</span>
              <span>
                Admit and enroll your students at one go—you can enroll multiple
                students into same class at once
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✔</span>
              <span>
                Automate daily routing and work flow. Take daily class
                attendance with a click and generate monthly attendance report
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✔</span>
              <span>Work better, work smarter, get more done</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✔</span>
              <span>
                Save precious time. Stop wasting hours on tasks that could be
                done in minutes and much better
              </span>
            </li>
          </ul>
        </div>

        {/* Right: Form */}
        <div className="w-full md:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="fullname"
                placeholder="Full name"
                value={formData.fullname}
                onChange={handleChange}
                className="w-full p-3 border rounded"
              />
              {errors.fullname && (
                <p className="text-red-500 text-sm mt-1">{errors.fullname}</p>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border rounded"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone: 27 00 000 0000"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border rounded"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name of school */}
              <div>
                <input
                  type="text"
                  name="nameOfSchool"
                  placeholder="Name of School"
                  value={formData.nameOfSchool}
                  onChange={handleChange}
                  className="w-full p-3 border rounded"
                />
                {errors.nameOfSchool && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.nameOfSchool}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="number"
                  name="numberOfStudents"
                  placeholder="No of Students (Numbers only)"
                  value={formData.numberOfStudents}
                  onChange={handleChange}
                  className="w-full p-3 border rounded"
                />
                {errors.numberOfStudents && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.numberOfStudents}
                  </p>
                )}
              </div>
            </div>
            <div>
              <select
                name="servicePlan"
                value={formData.servicePlan}
                onChange={handleChange}
                className="w-full p-3 border rounded"
              >
                <option value="">Interested in...</option>
                <option value="Silver">SMS Silver (R7,500)</option>
                <option value="Gold">SMS Gold (R10,500)</option>
                <option value="Platinum">SMS Platinum (R14,500)</option>
                <option value="Custom Software Development">
                  Custom Software Development
                </option>
                <option value="Other Services">Other Services</option>
              </select>
              {errors.servicePlan && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.servicePlan}
                </p>
              )}
            </div>

            {/* Human Check */}
            <div className="bg-blue-500/40 p-5 rounded-lg border border-blue-500/30">
              <p className="text-blue-900 text-sm mb-3 font-medium">
                Human check: What is{" "}
                <span className="font-bold text-blue-400 text-xl">
                  {num1} + {num2}
                </span>
                ?
              </p>
              <input
                type="text"
                name="humanAnswer"
                value={formData.humanAnswer || ""}
                onChange={handleChange}
                placeholder="Type answer here!"
                className={`w-full px-4 py-3 bg-blue/50 border ${
                  errors.humanAnswer ? "border-red-500" : "border-blue-500/80"
                } text-gray-800 rounded focus:outline-none focus:border-blue-400 transition`}
              />
              {errors.humanAnswer && (
                <p className="text-red-400 text-xs mt-2">
                  {errors.humanAnswer}
                </p>
              )}
            </div>
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                name="terms"
                id="terms"
                checked={formData.terms}
                onChange={handleChange}
                className="mt-1"
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree with Systerm's stated Privacy Policy and Terms &
                Conditions
              </label>
            </div>
            {errors.terms && (
              <p className="text-red-500 text-sm">{errors.terms}</p>
            )}
            <CustomButton type="submit" disabled={isLoading}>
              {isLoading ? "Submitting..." : "Submit Request"}
            </CustomButton>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DemoRequisition;
