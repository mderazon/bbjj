import React from "react";
import Image from "next/image";
import { Heart, Brain, BarChart2, Users } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-16 py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="prose lg:prose-xl text-gray-700">
            <p>
              Nestled in the heart of Aljezur, a charming town on the Algarve
              coast, you'll find Bear Bones Jiujitsu. Our academy provides a
              unique and inspiring environment to learn and grow in the art of
              Brazilian Jiu-Jitsu.
            </p>
            <p className="mb-8">
              Training BJJ offers more than just self-defense skills.
            </p>
            <ul className="grid grid-cols-4 gap-8 mt-8">
              <li className="flex flex-col items-center text-center">
                <Heart className="h-8 w-8 mb-2" />
                <strong>Physical Fitness</strong>
              </li>
              <li className="flex flex-col items-center text-center">
                <Brain className="h-8 w-8 mb-2" />
                <strong>Mental Well-being</strong>
              </li>
              <li className="flex flex-col items-center text-center">
                <BarChart2 className="h-8 w-8 mb-2" />
                <strong>Personal Growth</strong>
              </li>
              <li className="flex flex-col items-center text-center">
                <Users className="h-8 w-8 mb-2" />
                <strong>Community</strong>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <Image
              src="/aljezur.jpg"
              alt="Aljezur, Portugal"
              width={700}
              height={450}
              className="rounded-lg shadow-lg object-cover w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
