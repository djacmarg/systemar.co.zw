import React from "react";
import Link from "next/link";

const CustomButton = ({ children, type, onClick, className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} px-2 py-1 font-normal text-white bg-orange-500 border-1 border-orange-500 rounded cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:border-orange-500 hover:scale-105`}
    >
      {children}
    </button>
  );
};

const CustomLink = ({ children, href, onClick, className = "" }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${className} font-normal px-2 py-1 text-white bg-orange-600 border-1 border-orange-600 rounded transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:border-orange-500 hover:scale-105`}
    >
      {children}
    </Link>
  );
};

export { CustomButton, CustomLink };
