"use client";

import { motion } from "framer-motion";
import {
  FaUserTie,
  FaShieldAlt,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

const features = [
  {
    title: "Experienced Team",
    desc: "Skilled engineers & technicians with years of industry expertise.",
    icon: <FaUserTie />,
  },
  {
    title: "Safety First",
    desc: "Strict safety standards followed in every project execution.",
    icon: <FaShieldAlt />,
  },
  {
    title: "On-Time Delivery",
    desc: "Projects completed within deadlines without compromising quality.",
    icon: <FaClock />,
  },
  {
    title: "Govt Approved Projects",
    desc: "Trusted contractor working with major government & private sectors.",
    icon: <FaCheckCircle />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-28 bg-[#020617] text-white text-center">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-cyan-400 mb-16"
      >
        Why Choose Us
      </motion.h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 w-[90%] mx-auto">

        {features.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.08 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="group relative p-8 rounded-2xl bg-[#111827] border border-white/10 overflow-hidden cursor-pointer"
          >

            {/* Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-xl" />

            {/* Icon */}
            <div className="text-4xl text-cyan-400 mb-5 group-hover:scale-110 transition duration-300">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-white mb-2">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed">
              {item.desc}
            </p>

          </motion.div>
        ))}

      </div>
    </section>
  );
}