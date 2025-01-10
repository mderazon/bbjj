import React from "react";
import Image from "next/image";
import { Heart, Brain, BarChart2, Users } from "lucide-react";
import { motion } from "framer-motion";

const aboutVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="scroll-mt-16 py-16 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={aboutVariants}
        >
          <div className="prose lg:prose-xl text-gray-700">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Welcome to Bear Bones Jiujitsu
            </h2>
            <p className="leading-relaxed">
              Nestled in the heart of Aljezur, a charming town on the Algarve
              coast, you'll find Bear Bones Jiujitsu. Our academy provides a
              unique and inspiring environment to learn and grow in the art of
              Brazilian Jiu-Jitsu.
            </p>
            <p className="mb-8 leading-relaxed">
              Training BJJ offers more than just self-defense skills.
            </p>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              {[
                { icon: Heart, title: "Physical Fitness" },
                { icon: Brain, title: "Mental Well-being" },
                { icon: BarChart2, title: "Personal Growth" },
                { icon: Users, title: "Community" },
              ].map((item, index) => (
                <motion.li
                  key={item.title}
                  className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <item.icon
                    className="h-10 w-10 mb-3 text-blue-600"
                    aria-hidden="true"
                  />
                  <strong className="text-gray-900">{item.title}</strong>
                </motion.li>
              ))}
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
        </motion.div>
      </div>
    </section>
  );
};

export default About;
