"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Survey Work",
    desc: "Preliminary, Detailed & Check Survey with high precision planning and route optimization.",
    image: "/placeholder.jpg",
    link: "/service#survey",
  },
  {
    title: "Foundation Work",
    desc: "Strong civil foundations engineered for long-lasting transmission tower stability.",
    image: "/placeholder.jpg",
    link: "/service#foundation",
  },
  {
    title: "Tower Erection",
    desc: "Efficient and safe erection of transmission towers using advanced methodologies.",
    image: "/placeholder.jpg",
    link: "/service#erection",
  },
  {
    title: "Stringing Work",
    desc: "High-quality conductor stringing with modern equipment and safety compliance.",
    image: "/placeholder.jpg",
    link: "/service#stringing",
  },
];

export default function ServicesSection() {

  return (
    <section className="relative py-28 bg-[#020617] overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >

          <p className="uppercase tracking-[5px] text-cyan-400 text-sm mb-4">
            What We Do
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Our Core <span className="text-cyan-400">Services</span>
          </h2>

          <div className="w-24 h-[3px] bg-cyan-400 mx-auto mt-6 rounded-full" />

        </motion.div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {services.map((service, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
              }}
              whileHover={{ y: -12 }}
              onClick={() => {
                window.location.href = service.link;
              }}
              className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              cursor-pointer
              transition-all duration-500
              hover:border-cyan-400/40
              hover:shadow-[0_0_40px_rgba(34,211,238,0.18)]
              "
            >

              {/* IMAGE */}
              <div className="relative h-64 overflow-hidden">

                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="
                  object-cover
                  transition duration-700
                  group-hover:scale-110
                  "
                />

                {/* DARK OVERLAY */}
                <div className="
                absolute inset-0
                bg-gradient-to-t
                from-[#020617]
                via-[#020617]/40
                to-transparent
                " />

                {/* TOP LABEL */}
                <div className="
                absolute top-5 left-5
                px-4 py-1
                rounded-full
                bg-black/40
                backdrop-blur-md
                border border-white/10
                text-xs tracking-widest
                text-cyan-300
                uppercase
                ">
                  KAC SERVICE
                </div>

              </div>

              {/* CONTENT */}
              <div className="p-7">

                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="
                  text-2xl font-bold
                  text-white
                  mb-4
                  group-hover:text-cyan-400
                  transition
                  "
                >
                  {service.title}
                </motion.h3>

                <p className="text-gray-400 leading-relaxed text-sm mb-8">
                  {service.desc}
                </p>

                {/* BUTTON */}
                <div className="flex items-center justify-between">

                  <button
                    className="
                    text-cyan-400
                    font-medium
                    flex items-center gap-2
                    group-hover:gap-4
                    transition-all duration-300
                    "
                  >
                    Know More
                    <ArrowUpRight size={18} />
                  </button>

                  {/* GLOW DOT */}
                  <div className="
                  w-3 h-3 rounded-full
                  bg-cyan-400
                  shadow-[0_0_20px_rgba(34,211,238,1)]
                  " />

                </div>

              </div>

              {/* HOVER LINE */}
              <div className="
              absolute bottom-0 left-0
              h-[3px] w-0
              bg-cyan-400
              group-hover:w-full
              transition-all duration-500
              " />

            </motion.div>

          ))}

        </div>

        {/* EXPLORE BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-20"
        >

          <button
            onClick={() => {
              window.location.href = "/service";
            }}
            className="
            relative overflow-hidden
            px-10 py-4
            rounded-full
            bg-gradient-to-r from-cyan-400 to-blue-500
            text-black
            font-bold
            text-lg
            hover:scale-105
            transition duration-300
            shadow-[0_0_40px_rgba(34,211,238,0.35)]
            "
          >
            Explore All Services
          </button>

        </motion.div>

      </div>

    </section>
  );
}