"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo_icon from "@/public/images/favicon2.png";
import Image from "next/image";
import Link from "next/link";
import { CustomLink } from "./CustomButtonLink";
import { ScrollToView } from "./ScrollToView";
import { Menu, X } from "lucide-react"; // Optional icons

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    initial: {
      height: "70px",
      background: "#00BCD4",
    },
    scrolled: {
      height: "55px",
      background: "#0097A7",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.nav
      variants={navVariants}
      animate={scrolled ? "scrolled" : "initial"}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full px-6 py-3">
        {/* Left: Logo */}
        <Link href="/" className="flex gap-x-2 items-center">
          <Image src={logo_icon} alt="logo" className="h-5 w-5" />
          <span className="text-white text-lg font-semibold">SYSTEMAR</span>
        </Link>

        {/* Middle: Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-white text-sm font-medium">
          <Link onClick={ScrollToView} href="/" className="cta-btn group">
            <span className="cta-anim"></span>
            <span className="relative">Home</span>
          </Link>
          <Link onClick={ScrollToView} href="/about" className="cta-btn group">
            <span className="cta-anim"></span>
            <span className="relative">About Us</span>
          </Link>
          <Link
            onClick={ScrollToView}
            href="/#services"
            className="cta-btn group"
          >
            <span className="cta-anim"></span>
            <span className="relative">Services</span>
          </Link>
          <Link
            onClick={ScrollToView}
            href="/#pricing"
            className="cta-btn group"
          >
            <span className="cta-anim"></span>
            <span className="relative">Pricing</span>
          </Link>
          <Link
            onClick={ScrollToView}
            href="/#contact"
            className="cta-btn group"
          >
            <span className="cta-anim"></span>
            <span className="relative">Contact</span>
          </Link>
        </div>

        {/* Right: CTA Button (Desktop) */}
        <div className="hidden md:block">
          <CustomLink
            onClick={ScrollToView}
            href="/#demo_requisition"
            className="uppercase text-[14px] text-nowrap"
          >
            Request Demo
          </CustomLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0097A7] px-6 pb-4 pt-2 text-white text-sm space-y-2">
          <Link
            onClick={() => setMobileMenuOpen(false)}
            href="/"
            className="block"
          >
            Home
          </Link>
          <Link
            onClick={() => setMobileMenuOpen(false)}
            href="/about"
            className="block"
          >
            About Us
          </Link>
          <Link
            onClick={() => setMobileMenuOpen(false)}
            href="/#services"
            className="block"
          >
            Services
          </Link>
          <Link
            onClick={() => setMobileMenuOpen(false)}
            href="/#pricing"
            className="block"
          >
            Pricing
          </Link>
          <Link
            onClick={() => setMobileMenuOpen(false)}
            href="/#contact"
            className="block"
          >
            Contact
          </Link>
          <CustomLink
            onClick={() => setMobileMenuOpen(false)}
            href="/#demo_requisition"
            className="uppercase text-[14px] block mt-2 max-w-[130px] text-nowrap p-2"
          >
            Request Demo
          </CustomLink>
        </div>
      )}
    </motion.nav>
  );
};

export default Navigation;
