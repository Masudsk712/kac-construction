"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Building2,
  Hammer,
  ShieldCheck,
  Truck,
} from "lucide-react";

const processes = [
  {
    icon: <Hammer size={28} />,
    title: "Excavation Work",
    desc: "Precision excavation and ground preparation for transmission tower foundations.",
  },
  {
    icon: <Building2 size={28} />,
    title: "Concrete Foundation",
    desc: "Heavy-duty reinforced concrete foundations ensuring long-term structural stability.",
  },
  {
    icon: <Truck size={28} />,
    title: "Material Handling",
    desc: "Efficient logistics and material management using advanced construction practices.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Quality Assurance",
    desc: "Strict adherence to safety, quality and engineering compliance standards.",
  },
];

const stats = [
  {
    number: "1200+",
    label: "Tower Foundations",
  },
  {
    number: "24x7",
    label: "Execution Capability",
  },
  {
    number: "99%",
    label: "Structural Reliability",
  },
];

export default function Foundation() {
  return (
    <section
      id="foundation"
      className="
      relative py-32 overflow-hidden
      bg-[#06111f]
      text-white
      "
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* TOP GRID */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >

            <p className="
            uppercase tracking-[5px]
            text-cyan-400 text-sm mb-5
            ">
              Foundation Services
            </p>

            <h2 className="
            text-4xl sm:text-5xl md:text-6xl
            font-bold leading-tight
            mb-8
            ">
              Building Strong
              <span className="block text-cyan-400">
                Structural Foundations
              </span>
            </h2>

            <p className="
            text-gray-300 leading-relaxed
            text-lg mb-12
            ">
              KAC Construction specializes in robust transmission
              tower foundation works designed to withstand diverse
              terrain and environmental conditions while ensuring
              maximum structural integrity and long-term reliability.
            </p>

            {/* PROCESS CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              {processes.map((item, i) => (

                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  className="
                  group
                  rounded-3xl
                  border border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  p-7
                  hover:border-cyan-400/30
                  hover:bg-cyan-400/[0.04]
                  transition-all duration-500
                  "
                >

                  {/* ICON */}
                  <div className="
                  w-14 h-14 rounded-2xl
                  bg-cyan-400/10
                  flex items-center justify-center
                  text-cyan-400
                  mb-6
                  group-hover:scale-110
                  transition
                  ">
                    {item.icon}
                  </div>

                  {/* TITLE */}
                  <h3 className="
                  text-xl font-semibold
                  mb-3
                  ">
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p className="
                  text-gray-400
                  leading-relaxed text-sm
                  ">
                    {item.desc}
                  </p>

                </motion.div>

              ))}

            </div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >

            {/* MAIN IMAGE */}
            <div className="
           relative h-[350px] sm:h-[500px] lg:h-[650px]
            rounded-3xl overflow-hidden
            border border-white/10
            ">

              <Image
                src="/placeholder.jpg"
                alt="Foundation Work"
                fill
                className="object-cover"
              />

              {/* OVERLAY */}
              <div className="
              absolute inset-0
              bg-gradient-to-t
              from-[#06111f]
              via-transparent
              to-transparent
              " />

            </div>

            {/* FLOATING CARD */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="
              absolute bottom-10 left-4 sm:left-[-20px]
              w-[220px] sm:w-[250px]
              rounded-3xl
              border border-white/10
              bg-white/10
              backdrop-blur-xl
              p-5 sm:p-6
              shadow-[0_0_50px_rgba(34,211,238,0.15)]
              "
            >

              <h3 className="
              text-3xl sm:text-4xl font-bold
              text-cyan-400 mb-3
              ">
                500k+
              </h3>

              <p className="
              text-gray-300 leading-relaxed
              ">
                Cubic meters of concrete executed across
                multiple transmission infrastructure projects.
              </p>

            </motion.div>

          </motion.div>

        </div>

        {/* STATS */}
        <div className="
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6
        mt-28
        ">

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

              <h3 className="
              text-5xl font-bold
              text-cyan-400 mb-4
              ">
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