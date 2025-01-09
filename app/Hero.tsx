"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Bebas_Neue } from "next/font/google";
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

interface HeroImage {
  src: string;
  alt: string;
}

interface HeroProps {
  heroImages: HeroImage[];
  currentSlide: number;
}

const Hero = ({ heroImages, currentSlide }: HeroProps) => {
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
          layout="fill"
          objectFit="cover"
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
        <Button size="lg">Pick your first free class</Button>
      </div>
    </section>
  );
};

export default Hero;
