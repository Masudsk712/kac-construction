"use client";

import { motion } from "framer-motion";
import {
  FaTools,
  FaHardHat,
  FaBolt,
  FaIndustry,
} from "react-icons/fa";

const services = [
  {
    title: "Tower Foundation Work",
    desc: "Strong & durable foundations for high voltage transmission towers.",
    icon: <FaHardHat />,
  },
  {
    title: "Tower Erection",
    desc: "High precision tower installation with safety and efficiency.",
    icon: <FaTools />,
  },
  {
    title: "Stringing Work",
    desc: "Efficient conductor stringing for reliable power transmission.",
    icon: <FaBolt />,
  },
  {
    title: "Power Grid Projects",
    desc: "Complete transmission infrastructure and grid solutions.",
    icon: <FaIndustry />,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-28 bg-[#020617] text-center text-white">
      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-cyan-400 mb-16"
      >
        Our Core Services
      </motion.h2>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 w-[90%] mx-auto">

        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative p-8 rounded-2xl bg-[#111827] border border-white/10 overflow-hidden cursor-pointer"
          >

            {/* Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-xl" />

            {/* Icon */}
            <div className="text-4xl text-cyan-400 mb-6 group-hover:scale-110 transition duration-300">
              {s.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-white mb-3">
              {s.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed">
              {s.desc}
            </p>

          </motion.div>
        ))}

      </div>
    </section>
  );
}