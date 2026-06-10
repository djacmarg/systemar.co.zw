"use client";
import Image from "next/image";
import Link from "next/link";
import logo_botton from "@/public/images/systemar_logo_big.png";
import ScrollUp from "./ScrollUp";
import WhatsAppChat from "./WhatsAppChat";
import { CustomLink } from "./CustomButtonLink";
import { ScrollToView } from "./ScrollToView";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="
        relative
        overflow-hidden
        bg-slate-950
        text-white
      "
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-gray-900" />

      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      {/* CTA Section */}
      <div className="relative z-10 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <span
            className="
              inline-flex
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-500/10
              px-4
              py-1
              text-sm
              font-medium
              text-cyan-300
            "
          >
            Ready to Get Started?
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold">
            Transform the way
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              your school operates
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Join institutions using SYSTEMAR to streamline administration,
            improve communication, and enhance educational outcomes.
          </p>

          

            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
                        <CustomLink
                          href="/#demo_requisition"
                          onClick={ScrollToView}
                          className="
                            px-8
                            py-4
                            text-base
                            rounded-full
                            font-semibold
                            "
                        >
                          Request Free Demo
                        </CustomLink>
                        </div>    
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Image
                src={logo_botton}
                alt="SYSTEMAR Logo"
                className="w-56"
              />

              <p className="mt-6 max-w-md text-slate-400 leading-8 text-lg">
                SYSTEMAR School Management System empowers schools with
                cloud-based tools for admissions, finance, communication,
                reporting, attendance, and administration.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <WhatsAppChat
                  phoneNumber="263774867068"
                  message="Hi SYSTEMAR Team, I'd like to learn more about your School Management System."
                />

                <ScrollUp />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl uppercase font-semibold text-white">
                Navigation
              </h3>

              <ul className="mt-6 space-y-4 text-lg">
                {[
                  ["Home", "/"],
                  ["About", "/about"],
                  ["Services", "/#services"],
                  ["Pricing", "/#pricing"],
                  ["Contact", "/#contact"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="
                        text-slate-400
                        transition
                        hover:text-cyan-300
                      "
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl uppercase font-semibold text-white">
                Contact
              </h3>

              <div className="mt-6 space-y-4 text-slate-400 text-lg">
                <p>+263 77 486 7068</p>

                <p>sales@systemar.co.zw</p>

                <p>www.systemar.co.zw</p>

                <p>
                  Office 1, Highfield Post Office
                  <br />
                  Digital Information Center
                  <br />
                  Harare, Zimbabwe
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-12 h-px bg-white/10" />

          {/* Bottom Bar */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-slate-500">
              © 2020 - {new Date().getFullYear()} SYSTEMAR. All rights
              reserved.
            </p>

            <div className="flex gap-6 text-lg text-slate-500">
              <Link
                href="/terms-of-use"
                className="hover:text-cyan-300 transition"
              >
                Terms
              </Link>

              <Link
                href="/privacy-policy"
                className="hover:text-cyan-300 transition"
              >
                Privacy
              </Link>

              <Link
                href="/refund-policy"
                className="hover:text-cyan-300 transition"
              >
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;