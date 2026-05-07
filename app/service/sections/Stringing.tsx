"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

import {
  Cable,
  RadioTower,
  Zap,
  Flame,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: <Cable size={26} />,
    title: "Conductor Stringing",
    desc: "High-performance conductor pulling and installation across transmission corridors.",
    image: "/placeholder.jpg",
    link: "/service/stringing/conductor",
  },

  {
    icon: <RadioTower size={26} />,
    title: "Transmission Alignment",
    desc: "Accurate alignment and tension balancing for ultra high voltage lines.",
    image: "/placeholder.jpg",
    link: "/service/stringing/alignment",
  },

  {
    icon: <Zap size={26} />,
    title: "HTLS Reconductoring",
    desc: "Modern HTLS upgradation for improved transmission efficiency.",
    image: "/placeholder.jpg",
    link: "/service/stringing/htls",
  },

  {
    icon: <Flame size={26} />,
    title: "Hot Line Stringing",
    desc: "Advanced hot line execution without interrupting live power transmission.",
    image: "/placeholder.jpg",
    link: "/service/stringing/hotline",
  },
];

const stats = [
  {
    number: "5000+ KM",
    label: "Transmission Line Stringing",
  },

  {
    number: "765kV",
    label: "Voltage Capability",
  },

  {
    number: "99.9%",
    label: "Execution Reliability",
  },
];

export default function Stringing() {
  const router = useRouter();

  return (
    <section
      id="stringing"
      className="
      relative overflow-hidden
      py-24 sm:py-32
      bg-[#020617]
      text-white
      "
    >

      {/* BG LIGHT */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >

            {/* IMAGE */}
            <div
              className="
              relative
              h-[350px]
              sm:h-[500px]
              lg:h-[650px]
              rounded-3xl
              overflow-hidden
              border border-white/10
              "
            >

              <Image
                src="/placeholder.jpg"
                alt="Stringing Work"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-transparent to-transparent" />

            </div>

            {/* FLOAT CARD */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="
              absolute bottom-5 right-5
              bg-black/50
              backdrop-blur-2xl
              border border-cyan-400/20
              rounded-2xl
              px-5 py-4
              shadow-[0_0_40px_rgba(34,211,238,0.25)]
              "
            >

              <div className="flex items-center gap-4">

                <div
                  className="
                  w-12 h-12
                  rounded-full
                  bg-cyan-400/10
                  flex items-center justify-center
                  text-cyan-400
                  "
                >
                  <Zap size={22} />
                </div>

                <div>

                  <h4 className="text-lg font-bold">
                    Ultra High Voltage
                  </h4>

                  <p className="text-xs text-gray-300">
                    Advanced Stringing Execution
                  </p>

                </div>

              </div>

            </motion.div>

          </motion.div>

          {/* RIGHT */}
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
              Stringing Services
            </p>

            <h2
              className="
              text-4xl sm:text-5xl md:text-6xl
              font-black leading-tight
              mb-7
              "
            >
              Reliable Power

              <span className="block text-cyan-400">
                Transmission Execution
              </span>

            </h2>

            <p
              className="
              text-gray-300 leading-relaxed
              text-base sm:text-lg mb-10
              "
            >
              KAC Construction provides advanced stringing
              solutions for high-voltage transmission projects
              with precision engineering and modern equipment.
            </p>

            {/* CLICKABLE CARDS */}
            <div className="space-y-5">

              {services.map((item, i) => (

                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{
                    x: 8,
                    scale: 1.01,
                  }}
                  onClick={() => router.push(item.link)}
                  className="
                  cursor-pointer
                  group
                  flex items-center justify-between
                  gap-4
                  p-4
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  hover:border-cyan-400/40
                  hover:bg-cyan-400/[0.04]
                  transition-all duration-500
                  "
                >

                  <div className="flex gap-4 items-center">

                    {/* IMAGE */}
                    <div
                      className="
                      relative
                      min-w-[90px]
                      h-[90px]
                      rounded-2xl
                      overflow-hidden
                      "
                    >

                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />

                    </div>

                    {/* CONTENT */}
                    <div>

                      <h3 className="text-lg sm:text-xl font-semibold mb-2">
                        {item.title}
                      </h3>

                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.desc}
                      </p>

                    </div>

                  </div>

                  {/* ARROW */}
                  <ArrowUpRight
                    className="
                    text-cyan-400
                    min-w-[22px]
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                    transition
                    "
                  />

                </motion.div>

              ))}

            </div>

          </motion.div>

        </div>

        {/* STATS */}
        <div
          className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-6
          mt-20
          "
        >

          {stats.map((item, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="
              relative overflow-hidden
              text-center
              rounded-3xl
              border border-cyan-400/10
              bg-white/[0.03]
              backdrop-blur-xl
              py-10 px-5
              hover:border-cyan-400/40
              transition-all duration-500
              "
            >

              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-cyan-400/5 blur-3xl" />

              <h3
                className="
                relative z-10
                text-4xl sm:text-5xl
                font-black
                text-cyan-400 mb-3
                "
              >
                {item.number}
              </h3>

              <p className="relative z-10 text-gray-300 text-sm tracking-wide">
                {item.label}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}