"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo_icon from "@/public/images/favicon2.png";
import Image from "next/image";
import Link from "next/link";
import { CustomLink } from "./CustomButtonLink";
import { ScrollToView } from "./ScrollToView";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/#contact" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.nav
        initial={false}
        animate={{
          top: scrolled ? 16 : 0,
          scale: scrolled ? 0.98 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="fixed left-0 right-0 z-50"
      >
        <div
          className={`
            mx-auto
            max-w-7xl
            transition-all
            duration-300
            ${
              scrolled
                ? "mx-4 rounded-2xl border border-white/10 bg-slate-900/75 backdrop-blur-xl shadow-2xl"
                : "bg-transparent text-cyan-900"
            }
          `}
        >
          <div className="flex h-20 items-center justify-between px-6 lg:px-8">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src={logo_icon}
                alt="Systemar"
                className="h-7 w-7"
              />

              <div>
                <span className="block text-lg font-bold text-white">
                  SYSTEMAR
                </span>

                <span className="text-xs text-cyan-300">
                  School Management System
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={ScrollToView}
                  className="
                    text-sm
                    font-medium
                    text-white/80
                    transition-all
                    duration-300
                    hover:text-cyan-300
                  "
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <CustomLink
                href="/#demo_requisition"
                onClick={ScrollToView}
                className="
                  px-6
                  py-3
                  rounded-full
                  text-sm
                  font-semibold
                "
              >
                Request Demo
              </CustomLink>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="
                md:hidden
                text-white
                p-2
                rounded-lg
                hover:bg-white/10
              "
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="
              fixed
              top-24
              left-4
              right-4
              z-40
              rounded-2xl
              border
              border-white/10
              bg-slate-900/95
              backdrop-blur-xl
              p-6
              shadow-2xl
              md:hidden
            "
          >
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    ScrollToView();
                    setMobileMenuOpen(false);
                  }}
                  className="
                    rounded-xl
                    px-4
                    py-3
                    text-white/80
                    transition
                    hover:bg-white/5
                    hover:text-cyan-300
                  "
                >
                  {link.label}
                </Link>
              ))}

              <CustomLink
                href="/#demo_requisition"
                onClick={() => setMobileMenuOpen(false)}
                className="
                  mt-2
                  w-full
                  justify-center
                  rounded-xl
                  py-3
                  text-center
                "
              >
                Request Demo
              </CustomLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;