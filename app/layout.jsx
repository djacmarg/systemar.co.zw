import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Script from "next/script";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Systemar SMS",
  description: "Systemar SMS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Testimonials />
        <Footer />

        <Toaster position="top-right" />
      </body>
    </html>
  );
}
