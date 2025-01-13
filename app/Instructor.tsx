import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";
import Image from "next/image";

export default function Instructor() {
  return (
    <section
      id="instructor"
      aria-labelledby="instructor-heading"
      className="scroll-mt-16 py-16 bg-white"
    >
      <div className="container mx-auto px-6">
        <h2
          id="instructor-heading"
          className="text-3xl font-bold text-center mb-8"
        >
          Meet Your Instructor
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          <figure className="flex-shrink-0">
            <Image
              src="/scotty.jpg"
              alt="Scotty Braggins"
              width={300}
              height={300}
              className="rounded-full"
              priority={false}
              quality={75}
              style={{
                width: "300px",
                height: "auto",
              }}
            />
            <figcaption className="sr-only">Scotty Braggins</figcaption>
          </figure>
          <div className="text-gray-600">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Scotty (The Bear) Braggins
            </h3>
            <p className="mb-4">
              Scotty Braggins is a highly respected black belt under the
              legendary Roger Gracie. With over 15 years of experience in
              Brazilian Jiu-Jitsu, Scotty has dedicated his life to mastering
              and teaching the art. His teaching philosophy focuses on building
              a strong foundation in the fundamentals, allowing students to
              develop their own unique style.
            </p>
            <ul className="space-y-2" aria-label="Instructor's qualifications">
              <li className="flex items-center">
                <User
                  className="mr-2 text-gray-900"
                  aria-hidden="true"
                  size={20}
                />
                <span className="text-gray-900">
                  Black Belt under Roger Gracie
                </span>
              </li>
              <li className="flex items-center">
                <User
                  className="mr-2 text-gray-900"
                  aria-hidden="true"
                  size={20}
                />
                <span className="text-gray-900">
                  15+ years of BJJ experience
                </span>
              </li>
              <li className="flex items-center">
                <User
                  className="mr-2 text-gray-900"
                  aria-hidden="true"
                  size={20}
                />
                <span className="text-gray-900">
                  Multiple-time competition champion
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
