import Image from "next/image";
import logo_botton from "@/public/images/systemar_logo_big.png";
import Link from "next/link";
import ScrollUp from "./ScrollUp";
import WhatsAppChat from "./WhatsAppChat";

const Footer = () => {
return ( <footer
   id="contact"
   className="
     relative
     overflow-hidden
     bg-gradient-to-br
     from-[#00ACC1]
     via-[#0097A7]
     to-[#006064]
     text-white
     min-h-[50vh]
     px-6
     py-20
     md:px-[8%]
   "
 >
{/* Decorative Background Effects */} <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-300/10 rounded-full blur-3xl" /> <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

  {/* Dot Pattern */}
  <div
    className="absolute inset-0 opacity-5"
    style={{
      backgroundImage:
        "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
      backgroundSize: "30px 30px",
    }}
  />

  <div className="relative z-10 max-w-7xl mx-auto">
    {/* Main Footer Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Logo Section */}
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
        <Image
          src={logo_botton}
          alt="SYSTEMAR Logo"
          className="w-full max-w-[220px]"
        />

        <p className="mt-4 text-sm text-white/80 leading-relaxed">
          Empowering schools with modern digital solutions for administration,
          communication, finance, and academic management.
        </p>
      </div>

      {/* Contact Section */}
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
        <h4 className="pb-4 text-xl font-bold uppercase tracking-wider text-cyan-100">
          Contact
        </h4>

        <div className="space-y-3 text-sm text-white/85">
          <p>
            <span className="font-semibold">Phone:</span> +263 77 486 7068
          </p>

          <p>
            <span className="font-semibold">Email:</span>{" "}
            sales@systemar.co.zw
          </p>

          <p>
            <span className="font-semibold">Web:</span> www.systemar.co.zw
          </p>

          <p>
            Office 1, Highfield Post Office,
            <br />
            Highfield, Harare
            <br />
            Zimbabwe
          </p>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
        <h4 className="pb-4 text-xl font-bold uppercase tracking-wider text-cyan-100">
          Quick Links
        </h4>

        <ul className="space-y-3">
          <li>
            <Link
              href="/"
              className="text-sm text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="text-sm text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="/#services"
              className="text-sm text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
            >
              Services
            </Link>
          </li>

          <li>
            <Link
              href="/#pricing"
              className="text-sm text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
            >
              Pricing
            </Link>
          </li>

          <li>
            <Link
              href="/#contact"
              className="text-sm text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Legal */}
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
        <h4 className="pb-4 text-xl font-bold uppercase tracking-wider text-cyan-100">
          Legal
        </h4>

        <ul className="space-y-3">
          <li>
            <Link
              href="/terms-of-use"
              className="text-sm text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
            >
              Terms of Use
            </Link>
          </li>

          <li>
            <Link
              href="/privacy-policy"
              className="text-sm text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
            >
              Privacy Policy
            </Link>
          </li>

          <li>
            <Link
              href="/refund-policy"
              className="text-sm text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
            >
              Refund Policy
            </Link>
          </li>
        </ul>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="mt-16 border-t border-white/10 pt-8">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
        <div className="text-sm text-white/75 text-center lg:text-left">
          &copy; 2020 - {new Date().getFullYear()} SYSTEMAR, a proprietary
          service of Tech Pundit (Pty) Ltd. All rights reserved.
        </div>

        <div className="flex items-center gap-4">
          <WhatsAppChat
            phoneNumber="263774867068"
            message="Hi SYSTEMAR Team, I'll like to inquire about your School management system service"
          />

          <ScrollUp />
        </div>
      </div>
    </div>
  </div>
</footer>
);
};

export default Footer;
