"use client";
import { useState, useEffect, useCallback } from "react";

const heroImages = [
  { src: "/academy1.jpg", alt: "Jiujitsu academy Image 1" },
  { src: "/academy2.jpg", alt: "Jiujitsu academy Image 2" },
  { src: "/academy3.jpg", alt: "Jiujitsu academy Image 3" },
  { src: "/academy4.jpg", alt: "Jiujitsu academy Image 4" },
];
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  User,
  Menu,
  X,
  Heart,
  Brain,
  BarChart2,
  Users,
} from "lucide-react";
import {
  SiFacebook,
  SiInstagram,
  SiWhatsapp,
} from "@icons-pack/react-simple-icons";
import Hero from "./Hero";
import About from "./About";
import Testimonials from "./Testimonials";
import Schedule from "./Schedule";
import Instructor from "./Instructor";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute("href");
      if (!href?.startsWith("#")) return;
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    },
    []
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-50 shadow-md">
        <nav className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            <ul
              className={`
  md:flex md:space-x-8 md:items-center
  ${
    isMenuOpen
      ? "opacity-100 max-h-[400px] translate-y-0"
      : "opacity-0 max-h-0 -translate-y-2 pointer-events-none md:pointer-events-auto"
  }
  absolute md:relative
  top-16 md:top-0
  left-0 md:left-auto
  right-0 md:right-auto
  bg-gray-50 md:bg-transparent
  p-4 md:p-0
  shadow-md md:shadow-none
  z-50
  transition-all duration-300 ease-in-out
  overflow-hidden
  md:transform-none md:opacity-100 md:max-h-full
`}
            >
              <li>
                <a
                  href="#home"
                  onClick={scrollToSection}
                  className="block py-2 md:py-0 text-gray-700 hover:text-blue-600 text-lg font-medium transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={scrollToSection}
                  className="block py-2 md:py-0 text-gray-700 hover:text-blue-600 text-lg font-medium transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  onClick={scrollToSection}
                  className="block py-2 md:py-0 text-gray-700 hover:text-blue-600 text-lg font-medium transition-colors duration-200"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#schedule"
                  onClick={scrollToSection}
                  className="block py-2 md:py-0 text-gray-700 hover:text-blue-600 text-lg font-medium transition-colors duration-200"
                >
                  Schedule
                </a>
              </li>
              <li>
                <a
                  href="#instructor"
                  onClick={scrollToSection}
                  className="block py-2 md:py-0 text-gray-700 hover:text-blue-600 text-lg font-medium transition-colors duration-200"
                >
                  Instructor
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={scrollToSection}
                  className="block py-2 md:py-0 text-gray-700 hover:text-blue-600 text-lg font-medium transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <Hero heroImages={heroImages} currentSlide={currentSlide} />
        <About />
        <Testimonials />
        <Schedule />
        <Instructor />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
