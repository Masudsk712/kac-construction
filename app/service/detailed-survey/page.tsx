"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  ClipboardCheck,
  Map,
  Ruler,
  Database,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import CTASection from "@/components/CTASection";

const process = [
  {
    title: "Coordinate Collection",
    desc: "Accurate geo-coordinate and elevation data collection for engineering precision.",
    icon: <Map size={28} />,
  },
  {
    title: "Alignment Verification",
    desc: "Detailed route alignment verification ensuring optimal transmission corridor planning.",
    icon: <Ruler size={28} />,
  },
  {
    title: "Engineering Documentation",
    desc: "Comprehensive survey documentation and profile generation for execution teams.",
    icon: <Database size={28} />,
  },
];

const highlights = [
  "Advanced GIS & survey equipment",
  "Precise route alignment verification",
  "Engineering profile generation",
  "High-voltage transmission expertise",
];

const gallery = [
  "/placeholder.jpg",
  "/placeholder.jpg",
  "/placeholder.jpg",
];

export default function DetailedSurveyPage() {
  return (
    <main className="bg-[#020617] text-white overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">

        <Image
          src="/placeholder.jpg"
          alt="Detailed Survey"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/75" />

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            <p className="uppercase tracking-[6px] text-cyan-400 text-sm mb-6">
              Survey Engineering
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">

              Detailed
              <span className="block text-cyan-400">
                Survey Solutions
              </span>

            </h1>

            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-10">
              Kuddus Ali Construction delivers high-accuracy detailed survey
              services with advanced data collection, route profiling
              and engineering validation for transmission infrastructure.
            </p>

            <div className="flex flex-wrap gap-5">

              <button
                className="
                px-8 py-4 rounded-full
                bg-gradient-to-r from-cyan-400 to-blue-500
                text-black font-semibold
                hover:scale-105 transition
                "
              >
                Explore Process
              </button>

              <button
                className="
                px-8 py-4 rounded-full
                border border-white/20
                hover:border-cyan-400
                hover:bg-cyan-400/10
                transition
                "
              >
                Contact Team
              </button>

            </div>

          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <div
              className="
              relative overflow-hidden
              rounded-3xl
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              p-8
              "
            >

              <Image
                src="/placeholder.jpg"
                alt="Detailed Survey"
                width={700}
                height={500}
                className="rounded-2xl object-cover"
              />

            </div>

          </motion.div>

        </div>

      </section>

      {/* OVERVIEW */}
      <section className="py-28">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >

            <Image
              src="/placeholder.jpg"
              alt="Detailed Overview"
              width={700}
              height={550}
              className="
              rounded-3xl
              border border-white/10
              object-cover
              "
            />

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >

            <p className="uppercase tracking-[5px] text-cyan-400 text-sm mb-5">
              Survey Accuracy
            </p>

            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-8">
              High Precision
              <span className="block text-cyan-400">
                Engineering Data
              </span>
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg mb-10">
              Our detailed surveys ensure transmission projects are
              engineered with precise terrain data, alignment
              validation and optimized route planning.
            </p>

            <div className="space-y-5">

              {highlights.map((item, i) => (

                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="
                  flex items-center gap-4
                  p-5 rounded-2xl
                  border border-white/10
                  bg-white/[0.03]
                  "
                >

                  <CheckCircle2
                    className="text-cyan-400"
                    size={24}
                  />

                  <p className="text-gray-200">
                    {item}
                  </p>

                </motion.div>

              ))}

            </div>

          </motion.div>

        </div>

      </section>

      {/* PROCESS */}
      <section className="py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[6px] text-cyan-400 text-sm mb-5">
              Workflow
            </p>

            <h2 className="text-4xl md:text-6xl font-black">
              Detailed Survey
              <span className="block text-cyan-400">
                Execution Process
              </span>
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {process.map((item, i) => (

              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -10 }}
                className="
                rounded-3xl
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                p-8
                hover:border-cyan-400/30
                transition-all duration-500
                "
              >

                <div
                  className="
                  w-16 h-16 rounded-2xl
                  bg-cyan-400/10
                  flex items-center justify-center
                  text-cyan-400 mb-8
                  "
                >
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold mb-5">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-8">
                  {item.desc}
                </p>

                <button
                  className="
                  flex items-center gap-2
                  text-cyan-400
                  hover:gap-3
                  transition-all
                  "
                >
                  Learn More
                  <ArrowRight size={18} />
                </button>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* GALLERY */}
      <section className="py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[6px] text-cyan-400 text-sm mb-5">
              Project Media
            </p>

            <h2 className="text-4xl md:text-5xl font-black">
              Detailed Survey
              <span className="block text-cyan-400">
                Operations
              </span>
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {gallery.map((img, i) => (

              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ scale: 1.03 }}
                className="
                relative overflow-hidden
                rounded-3xl
                border border-white/10
                "
              >

                <Image
                  src={img}
                  alt="Detailed Survey"
                  width={500}
                  height={400}
                  className="
                  object-cover
                  h-[350px] w-full
                  hover:scale-110
                  transition duration-700
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      <CTASection />

    </main>
  );
}