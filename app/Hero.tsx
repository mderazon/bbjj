"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Bebas_Neue } from "next/font/google";
import Link from "next/link";
import { useScrollToSection } from "../hooks/use-scroll-to-section";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const heroImages = [
  { src: "/academy1.jpg", alt: "Jiujitsu academy Image 1" },
  { src: "/academy2.jpg", alt: "Jiujitsu academy Image 2" },
  { src: "/academy3.jpg", alt: "Jiujitsu academy Image 3" },
  { src: "/academy4.jpg", alt: "Jiujitsu academy Image 4" },
];

const useHeroSlider = (totalSlides: number) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  return currentSlide;
};

const Hero = () => {
  const currentSlide = useHeroSlider(heroImages.length);
  const scrollToSection = useScrollToSection();
  return (
    <section
      id="home"
      className="scroll-mt-16 relative h-screen flex items-center justify-center text-white overflow-hidden"
    >
      <div className="absolute top-8 left-8 z-20">
        <Image
          src="/logo.png"
          alt="Logo"
          width={120}
          height={120}
          className="hover:opacity-90 transition-opacity duration-200"
        />
      </div>
      {heroImages.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          fill
          style={{ objectFit: "cover" }}
          className={`absolute z-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="relative z-10 text-center">
        <h1 className={`${bebasNeue.className} text-5xl font-bold mb-4`}>
          Bear Bones Jiujitsu
        </h1>
        <p className="text-2xl mb-8">
          Master the Fundamentals. Unleash Your Potential.
        </p>
        <Button size="lg" asChild>
          <Link
            href="#schedule"
            onClick={scrollToSection}
            className="scroll-smooth"
          >
            Start your free trial
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
