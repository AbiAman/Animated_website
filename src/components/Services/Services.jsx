/* eslint-disable no-unused-vars */
import React from "react";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaCode } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { motion } from "framer-motion";
import { SildeLeft } from "../../utility/animation";
const ServiceData = [
  {
    id: 1,
    title: "Website Development",
    desc: "We develop attractive beautfull, user firendly UI Websites",
    icon: <TbWorld />,
    delay: 0.3,
  },
  {
    id: 2,
    title: "React js",
    desc: "React is a JavaScript-based UI development library. Although React is a library rather than a language, it is widely used in web development",
    icon: <FaReact />,
    delay: 0.3,
  },
  {
    id: 3,
    title: "Tailwind",
    desc: "Tailwind CSS is a utility-first CSS framework with predefined classes that you can use to build and design web pages directly in your markup.",
    icon: <RiTailwindCssFill />,
    delay: 0.3,
  },
];
const Services = () => {
  return (
    <div className="container py-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-playfair">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-semibold">Our Services</h1>
          <p className="text-gray-500">
            We creating modern, responsive, and user-friendly websites tailored
            to meet your unique business needs
          </p>
        </div>
        {ServiceData.map((item) => {
          return (
            <motion.div
              variants={SildeLeft(item.delay)}
              initial="hidden"
              whileInView="visible"
              key={item.id}
              className="space-y-4 p-6 bg-[#fbfbfb] hover:bg-white rounded-xl hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)]"
            >
              <div className="text-4xl">{item.icon}</div>
              <p className="text-2xl font-semibold">{item.title}</p>
              <p className="text-gray-500">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
