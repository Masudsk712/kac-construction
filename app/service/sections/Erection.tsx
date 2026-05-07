"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  TowerControl,
  ShieldCheck,
  Wrench,
  RadioTower,
} from "lucide-react";

const erectionSteps = [
  {
    icon: <TowerControl size={30} />,
    title: "Tower Assembly",
    desc: "Complete tower member assembly with precision engineering and safety compliance.",
  },
  {
    icon: <Wrench size={30} />,
    title: "Structural Installation",
    desc: "Accurate erection and alignment of transmission tower structures.",
  },
  {
    icon: <RadioTower size={30} />,
    title: "Height Operations",
    desc: "Advanced high-altitude execution using modern erection methodologies.",
  },
  {
    icon: <ShieldCheck size={30} />,
    title: "Safety Assurance",
    desc: "Strict quality checks and zero-compromise safety implementation.",
  },
];

const stats = [
  {
    number: "2500+",
    label: "Tower Erection Completed",
  },
  {
    number: "765kV",
    label: "High Voltage Capability",
  },
  {
    number: "15+",
    label: "States Executed",
  },
];

export default function Erection() {
  return (
    <section
      id="erection"
      className="
      relative py-32 overflow-hidden
      bg-[#020617]
      text-white
      "
    >

      {/* BACKGROUND LIGHTS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >

            {/* MAIN IMAGE */}
            <div
              className="
              relative h-[350px] sm:h-[500px] lg:h-[650px]
              rounded-3xl overflow-hidden
              border border-white/10
              "
            >

              <Image
                src="/placeholder.jpg"
                alt="Tower Erection"
                fill
                className="object-cover"
              />

              {/* OVERLAY */}
              <div
                className="
                absolute inset-0
                bg-gradient-to-t
                from-[#020617]
                via-transparent
                to-transparent
                "
              />

            </div>

            {/* FLOATING GLASS CARD */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="
              absolute top-10 right-4 sm:right-[-20px]
              w-[220px] sm:w-[240px]
              rounded-3xl
              border border-white/10
              bg-white/10
              backdrop-blur-xl
              p-5 sm:p-6
              shadow-[0_0_50px_rgba(34,211,238,0.2)]
              "
            >

              <h3 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-3">
                100%
              </h3>

              <p className="text-gray-300 leading-relaxed">
                Precision tower alignment and erection
                with advanced engineering standards.
              </p>

            </motion.div>

          </motion.div>

          {/* CONTENT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >

            <p
              className="
              uppercase tracking-[5px]
              text-cyan-400 text-sm mb-5
              "
            >
              Tower Erection Services
            </p>

            <h2
              className="
              text-4xl sm:text-5xl md:text-6xl
              font-bold leading-tight
              mb-8
              "
            >
              Precision Execution
              <span className="block text-cyan-400">
                At Every Height
              </span>
            </h2>

            <p
              className="
              text-gray-300 leading-relaxed
              text-lg mb-12
              "
            >
              KAC Construction delivers reliable and
              large-scale tower erection solutions with
              unmatched execution expertise, safety
              standards, and modern erection methodologies
              across complex terrains and high-voltage
              transmission projects.
            </p>

            {/* PROCESS CARDS */}
            <div className="space-y-6">

              {erectionSteps.map((item, i) => (

                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{
                    x: 10,
                    scale: 1.02,
                  }}
                  className="
                  group
                  flex gap-5
                  rounded-3xl
                  border border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  p-6
                  hover:border-cyan-400/30
                  hover:bg-cyan-400/[0.04]
                  transition-all duration-500
                  "
                >

                  {/* ICON */}
                  <div
                    className="
                    min-w-[60px] h-[60px]
                    rounded-2xl
                    bg-cyan-400/10
                    flex items-center justify-center
                    text-cyan-400
                    group-hover:scale-110
                    transition
                    "
                  >
                    {item.icon}
                  </div>

                  {/* TEXT */}
                  <div>

                    <h3 className="text-xl font-semibold mb-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>

                  </div>

                </motion.div>

              ))}

            </div>

          </motion.div>

        </div>

        {/* STATS */}
        <div
          className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6
          mt-28
          "
        >

          {stats.map((item, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -8 }}
              className="
              text-center
              rounded-3xl
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              p-10
              hover:border-cyan-400/30
              transition-all duration-500
              "
            >

              <h3
                className="
                text-5xl font-bold
                text-cyan-400 mb-4
                "
              >
                {item.number}
              </h3>

              <p className="text-gray-300 text-lg">
                {item.label}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}