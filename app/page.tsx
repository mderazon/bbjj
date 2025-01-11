"use client";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Testimonials from "./Testimonials";
import Schedule from "./Schedule";
import Instructor from "./Instructor";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <Hero />
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
