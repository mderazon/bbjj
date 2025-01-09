import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";
import Image from "next/image";

export default function Instructor() {
  return (
    <section id="instructor" className="scroll-mt-16 py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Meet Your Instructor
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          <Image
            src="/scotty.jpg?height=300&width=300"
            alt="Scotty Braggins"
            width={300}
            height={300}
            className="rounded-full"
          />
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Scotty (The Bear) Braggins
            </h3>
            <p className="text-gray-600 mb-4">
              Scotty Braggins is a highly respected black belt under the
              legendary Roger Gracie. With over 15 years of experience in
              Brazilian Jiu-Jitsu, Scotty has dedicated his life to mastering
              and teaching the art. His teaching philosophy focuses on building
              a strong foundation in the fundamentals, allowing students to
              develop their own unique style.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <User className="mr-2" size={20} /> Black Belt under Roger
                Gracie
              </li>
              <li className="flex items-center">
                <User className="mr-2" size={20} /> 15+ years of BJJ experience
              </li>
              <li className="flex items-center">
                <User className="mr-2" size={20} /> Multiple-time competition
                champion
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
