"use client";
import { useState, useEffect } from "react";
import { Bebas_Neue } from "next/font/google";
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
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, User } from "lucide-react";
import {
  SiFacebook,
  SiInstagram,
  SiWhatsapp,
} from "@icons-pack/react-simple-icons";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-50 shadow-md">
        <nav className="container mx-auto px-8 py-4">
          <ul className="flex justify-center space-x-8">
            <li>
              <a
                href="#home"
                className="text-gray-700 hover:text-blue-600 text-lg font-medium transition-colors duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-blue-600 text-lg font-medium transition-colors duration-200"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#schedule"
                className="text-gray-700 hover:text-blue-600 text-lg font-medium transition-colors duration-200"
              >
                Schedule
              </a>
            </li>
            <li>
              <a
                href="#instructor"
                className="text-gray-700 hover:text-blue-600 text-lg font-medium transition-colors duration-200"
              >
                Instructor
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 text-lg font-medium transition-colors duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section
          id="home"
          className="relative h-screen flex items-center justify-center text-white overflow-hidden"
        >
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
            <Image
              src="/logo.png"
              alt="Logo"
              width={150}
              height={150}
              className="mx-auto mb-4"
            />
            <p className="text-2xl mb-8">
              Master the Fundamentals. Unleash Your Potential.
            </p>
            <Button size="lg">Pick your first free class</Button>
          </div>
        </section>
        {/* About Us Section */}
        <section id="about" className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="prose lg:prose-xl text-gray-700">
                Nestled in the heart of Aljezur, a charming town on the stunning
                Costa Vicentina in the Algarve, you'll find Bear Bones Jiujitsu.
                Surrounded by breathtaking beaches and lush landscapes, our
                academy provides a unique and inspiring environment to learn and
                grow in the art of Brazilian Jiu-Jitsu.
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
        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">
              What Our Students Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4">
                      "Bear Bones Jiujitsu has transformed my life. The
                      instructors are top-notch and the community is amazing!"
                    </p>
                    <p className="font-semibold">- Happy Student {i}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Class Schedule Section */}
        <section id="schedule" className="py-16 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">
              Class Schedule
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-blue-600">
                    Adults Classes
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    All classes are 90 minutes long
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Clock className="mr-2" size={20} /> Mon-Thu: 6:30 PM (Gi)
                    </li>
                    <li className="flex items-center">
                      <Clock className="mr-2" size={20} /> Fri: 6:00 PM (No-Gi)
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-green-600">
                    Little Bears Kids Classes
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    All classes are 60 minutes long
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Clock className="mr-2" size={20} /> Mon, Tue, Thu: 4:00
                      PM
                    </li>
                    <li className="flex items-center">
                      <Clock className="mr-2" size={20} /> Mon, Tue, Thu: 5:00
                      PM
                    </li>
                    <li className="flex items-center">
                      <Clock className="mr-2" size={20} /> Wed: 5:30 PM
                    </li>
                    <li className="flex items-center">
                      <Clock className="mr-2" size={20} /> Fri: 5:00 PM
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Instructor Bio Section */}
        <section id="instructor" className="py-16 bg-white">
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
                  Brazilian Jiu-Jitsu, Scotty has dedicated his life to
                  mastering and teaching the art. His teaching philosophy
                  focuses on building a strong foundation in the fundamentals,
                  allowing students to develop their own unique style.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <User className="mr-2" size={20} /> Black Belt under Roger
                    Gracie
                  </li>
                  <li className="flex items-center">
                    <User className="mr-2" size={20} /> 15+ years of BJJ
                    experience
                  </li>
                  <li className="flex items-center">
                    <User className="mr-2" size={20} /> Multiple-time
                    competition champion
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact/Location Section */}
        <section id="contact" className="py-16 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <Phone className="mr-2" size={20} />{" "}
                      <a
                        href="https://wa.me/351962772568"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        (+351) 962-772-568
                      </a>
                    </li>
                    <li className="flex items-center">
                      <Mail className="mr-2" size={20} />{" "}
                      <a
                        href="mailto:info@bearbonesjiujitsu.com"
                        className="hover:underline"
                      >
                        info@bearbonesjiujitsu.com
                      </a>
                    </li>
                    <li className="flex items-center">
                      <MapPin className="mr-2" size={20} />{" "}
                      <a
                        href="https://maps.app.goo.gl/vhi3uPFR1CyTpUNh8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        Rua 29 de Agosto
                        <br />
                        Loja S, 8670-113 Aljezur, Portugal
                      </a>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="flex gap-4">
                        <a
                          href="https://instagram.com/bearbones_jiu_jitsu"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opacity-80"
                        >
                          <SiInstagram size={20} />
                        </a>
                        <a
                          href="https://facebook.com/bearbonesjiujitsu"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opacity-80"
                        >
                          <SiFacebook size={20} />
                        </a>
                        <a
                          href="https://wa.me/351962772568"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opacity-80"
                        >
                          <SiWhatsapp size={20} />
                        </a>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="overflow-hidden h-[300px]">
                <CardContent className="p-0 h-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6346.166116675269!2d-8.7945153!3d37.31686020000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1b15000fcdcf6d%3A0x8f0130e9d9a74903!2sBear%20Bones%20Jiujitsu!5e0!3m2!1sen!2sus!4v1736339573349!5m2!1sen!2sus"
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                  ></iframe>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Bear Bones Jiujitsu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
