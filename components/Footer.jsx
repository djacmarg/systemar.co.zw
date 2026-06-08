import Image from "next/image";
import logo_botton from "@/public/images/systemar_logo_big.png";
import Link from "next/link";
import ScrollUp from "./ScrollUp";
import WhatsAppChat from "./WhatsAppChat";

const Footer = () => {
  return (
    <div
      id="contact"
      className="bg-gradient-to-b from-[#0097A7] to-[#0097A7] text-white min-h-[50vh] h-auto px-10 py-20 md:px-[8%]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex flex-col items-start">
          <Image src={logo_botton} alt="logo" className="w-100 pb-6" />
        </div>

        {/* Contact Section */}
        <div className="flex flex-col">
          <h4 className="pb-4 text-xl font-semibold uppercase">Contact</h4>
          <p className="text-sm ">
            <span className="font-medium">Phone:</span> +27 6059 15114
          </p>
          <p className="mt-2 text-sm ">
            <span className="font-medium">Email:</span> info@SYSTEMAR.org
          </p>
          <p className="mt-2 text-sm ">
            <span className="font-medium">Web:</span> www.SYSTEMAR.org
          </p>

          <p className="mt-2 text-sm ">
            279 President Street,
            <br /> Germiston, 1401, Gauteng
            <br /> South Africa
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col">
          <h4 className="pb-4 text-xl font-semibold uppercase">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="text-sm  hover:text-white hover:underline transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-sm  hover:text-white hover:underline transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/#services"
                className="text-sm  hover:text-white hover:underline transition duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/#pricing"
                className="text-sm  hover:text-white hover:underline transition duration-300"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="text-sm  hover:text-white hover:underline transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal Section */}
        <div className="flex flex-col">
          <h4 className="pb-4 text-xl font-semibold uppercase">Legal</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/terms-of-use"
                className="text-sm  hover:text-white hover:underline transition duration-300"
              >
                Terms of Use
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="text-sm  hover:text-white hover:underline transition duration-300"
              >
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link
                href="/refund-policy"
                className="text-sm  hover:text-white hover:underline transition duration-300"
              >
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="mt-12 pt-6 text-center text-sm  z-50">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-[14px] text-center md:text-left mb-4 md:mb-0">
            &copy; 2020 - {new Date().getFullYear()} 2025 SYSTEMAR, a
            proprietary service of Tech Pundit (Pty) Ltd. All rights reserved.
          </div>
          <WhatsAppChat
            phoneNumber="27605915114"
            message="Hi SYSTEMAR Team, I'll like to inquire about your School management system service"
          />
          <ScrollUp />
        </div>
      </div>
    </div>
  );
};

export default Footer;
