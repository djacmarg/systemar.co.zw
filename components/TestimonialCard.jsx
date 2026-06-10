"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    initials: "B",
    name: "Benedict",
    title: "Proprietor, FutureKids Academy",
    text: "Systemar SMS has helped streamline our daily operations and provided a strong competitive advantage. The platform is reliable, intuitive, and backed by excellent support.",
  },
  {
    id: 2,
    initials: "F",
    name: "Fayes Miller",
    title: "Proprietor, Fayes Little Academy",
    text: "The automation tools have significantly reduced administrative workload. Communication, reporting, and student management are now much easier.",
  },
  {
    id: 3,
    initials: "H",
    name: "HS Ngandu",
    title: "Director, PTC Manzini",
    text: "After testing the demo, we made our purchase decision immediately. The platform exceeded expectations and the support team has been outstanding.",
  },
];

const TestimonialCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = testimonials[currentIndex];

  const next = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const previous = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const variants = {
    enter: {
      opacity: 0,
      y: 20,
    },
    center: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-slate-200
        bg-white/90
        p-8
        shadow-xl
        backdrop-blur-sm
      "
    >
      {/* Quote Icon */}
      <div className="mb-8">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100">
          <Quote className="h-7 w-7 text-cyan-600" />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
        >
          {/* Quote */}
          <p className="text-xl leading-9 text-slate-700">
            "{current.text}"
          </p>

          {/* Author */}
          <div className="mt-10 flex items-center gap-4">
            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                text-white
                font-bold
              "
            >
              {current.initials}
            </div>

            <div>
              <h4 className="font-semibold text-slate-900">
                {current.name}
              </h4>

              <p className="text-sm text-slate-500">
                {current.title}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="mt-10 flex items-center justify-between">
        <div className="flex gap-2">
          {testimonials.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(index)}
              className={`
                h-2.5
                rounded-full
                transition-all
                duration-300
                ${
                  currentIndex === index
                    ? "w-8 bg-cyan-500"
                    : "w-2.5 bg-slate-300"
                }
              `}
            />
          ))}
        </div>

        <div className="flex gap-3">
          <button
            onClick={previous}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-slate-200
              hover:bg-slate-100
              transition
            "
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={next}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-slate-200
              hover:bg-slate-100
              transition
            "
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;