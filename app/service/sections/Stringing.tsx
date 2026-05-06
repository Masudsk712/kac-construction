"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Cable,
  RadioTower,
  ShieldCheck,
  Zap,
} from "lucide-react";

const workflow = [
  {
    icon: <Cable size={28} />,
    title: "Conductor Pulling",
    desc: "Advanced conductor pulling techniques for smooth and efficient installation.",
  },
  {
    icon: <RadioTower size={28} />,
    title: "Transmission Alignment",
    desc: "Precision alignment and tension balancing across long-distance transmission corridors.",
  },
  {
    icon: <Zap size={28} />,
    title: "HTLS Reconductoring",
    desc: "Upgradation and reconductoring using modern HTLS technologies.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Safety & Quality",
    desc: "Strict safety procedures with high-quality execution standards.",
  },
];

const stats = [
  {
    number: "5000+ KM",
    label: "Transmission Line Stringing",
  },
  {
    number: "765kV",
    label: "Voltage Handling Capacity",
  },
  {
    number: "99.9%",
    label: "Execution Reliability",
  },
];

export default function Stringing() {
  return (
    <section
      id="stringing"
      className="
      relative overflow-hidden
      py-32
      bg-[#020617]
      text-white
      "
    >

      {/* BACKGROUND LIGHT EFFECTS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* TOP GRID */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >

            <p
              className="
              uppercase tracking-[5px]
              text-cyan-400 text-sm mb-5
              "
            >
              Stringing Services
            </p>

            <h2
              className="
              text-5xl md:text-6xl
              font-bold leading-tight
              mb-8
              "
            >
              Reliable Power
              <span className="block text-cyan-400">
                Transmission Execution
              </span>
            </h2>

            <p
              className="
              text-gray-300 text-lg
              leading-relaxed mb-12
              "
            >
              KAC Construction delivers high-performance
              stringing solutions for ultra-high voltage
              transmission lines using advanced machinery,
              precision engineering, and highly skilled teams
              ensuring efficient and reliable power delivery.
            </p>

            {/* WORKFLOW CARDS */}
            <div className="space-y-6">

              {workflow.map((item, i) => (

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

          {/* RIGHT IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >

            {/* MAIN IMAGE */}
            <div
              className="
              relative h-[720px]
              rounded-3xl overflow-hidden
              border border-white/10
              "
            >

              <Image
                src="/placeholder.jpg"
                alt="Stringing Work"
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

            {/* FLOATING CARD */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="
              absolute bottom-10 left-[-30px]
              w-[280px]
              rounded-3xl
              border border-white/10
              bg-white/10
              backdrop-blur-xl
              p-7
              shadow-[0_0_50px_rgba(34,211,238,0.2)]
              "
            >

              <h3 className="text-4xl font-bold text-cyan-400 mb-3">
                Ultra High Voltage
              </h3>

              <p className="text-gray-300 leading-relaxed">
                Reliable conductor stringing and
                HTLS reconductoring with advanced
                transmission engineering capabilities.
              </p>

            </motion.div>

          </motion.div>

        </div>

        {/* STATS */}
        <div
          className="
          grid md:grid-cols-3 gap-8
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