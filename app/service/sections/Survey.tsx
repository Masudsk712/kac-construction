"use client";

import { motion } from "framer-motion";

export default function Survey() {
  return (
    <section id="survey" className="py-28 px-6 md:px-20">

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl text-cyan-400 mb-8"
      >
        Survey Work
      </motion.h2>

      <ul className="space-y-3 text-gray-300 text-lg">
        <li>• Preliminary Survey</li>
        <li>• Detailed Survey</li>
        <li>• Check Survey</li>
      </ul>

    </section>
  );
}