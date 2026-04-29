"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "What services do you provide?",
      a: "We specialize in tower foundation, erection, stringing work and power grid infrastructure projects across India.",
    },
    {
      q: "Do you work across India?",
      a: "Yes, we operate in multiple states and handle large-scale transmission projects nationwide.",
    },
    {
      q: "What voltage capacity do you handle?",
      a: "We work on high voltage transmission lines up to 765kV with modern engineering standards.",
    },
  ];

  return (
    <section className="bg-[#020617] text-white relative overflow-hidden">

      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 blur-3xl opacity-30" />

      <div className="container-custom max-w-3xl relative z-10">

        <h2 className="text-center text-4xl md:text-5xl font-bold text-cyan-400 mb-16">
          FAQs
        </h2>

        <div className="space-y-4">
          {faqs.map((item, i) => {
            const isOpen = open === i;

            return (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden"
              >

                {/* Question */}
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex justify-between items-center p-5 text-left"
                >
                  <span className="text-lg">{item.q}</span>

                  <span className="text-cyan-400">
                    {isOpen ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-5 text-gray-400 text-sm"
                    >
                      {item.a}
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}