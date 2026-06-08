"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const TestimonialCard = () => {
  const testimonials = [
    {
      id: 1,
      image: "https://placehold.co/100x100/1e293b/f8fafc?text=B",
      name: "Benedict",
      title: "Proprietor FutureKids Academy",
      text: "Sytemar SMS has helped streamlined my college daily task and put us in a more competitive hedge. You will not regret a partnership with them.",
    },
    {
      id: 2,
      image: "https://placehold.co/100x100/1e293b/f8fafc?text=F",
      name: "Fayes Miller",
      title: "Proprietor Fayes'Little Academy",
      text: "Systemar SMS has streamlined my academy's daily operations and given us a stronger competitive edge. Partnering with them is a decision you won't regret.",
    },

    {
      id: 3,
      image: "https://placehold.co/100x100/1e293b/f8fafc?text=H",
      name: "HS Ngandu",
      title: "Director, PTC Manzini",
      text: "We tested out the demo and made purchase decision without any hesitation. We were so amazed with the result and the support given.",
    },
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const currentTestimonial = testimonials[currentTestimonialIndex];

  const handlePrevious = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  const handleNext = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Animation variants for the testimonial content
  const variants = {
    enter: {
      x: 100,
      opacity: 0,
    },
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: {
      x: -100,
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="flex items-center justify-center sm:p-6 lg:p-8 font-[Inter]">
      <div className="w-full max-w-2xl bg-white p-6 md:p-3 rounded-2xl shadow-xl flex flex-col items-center text-center space-y-8">
        <h2 className="text-2xl md:text-lg font-bold text-gray-800">
          Testimonials
        </h2>

        {/* Testimonial content container */}
        <div className="relative w-full flex items-center justify-center">
          {/* Previous button */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 p-2 md:p-3 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors duration-200 transform -translate-x-1/2 md:translate-x-0 z-10"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="h-3 w-3 text-gray-600" />
          </button>

          {/* Main testimonial display with animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex flex-col items-center space-y-6 max-w-md w-full"
            >
              {/* Testimonial image */}
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="w-12 h-12 rounded-full object-cover border-4 border-gray-100 shadow-md"
                onError={(e) => {
                  e.target.onerror = null; // prevents infinite loop
                  e.target.src =
                    "https://placehold.co/100x100/1e293b/f8fafc?text=User";
                }}
              />

              {/* Testimonial text */}
              <p className="text-lg italic text-gray-600 leading-relaxed px-6">
                "{currentTestimonial.text}"
              </p>

              {/* Testimonial author and title */}
              <div>
                <p className="font-semibold text-gray-800 text-lg">
                  {currentTestimonial.name}
                </p>
                <p className="text-sm text-gray-500">
                  {currentTestimonial.title}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Next button */}
          <button
            onClick={handleNext}
            className="absolute right-0 p-2 md:p-3 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors duration-200 transform translate-x-1/2 md:translate-x-0 z-10"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="h-3 w-3 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
