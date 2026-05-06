"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import CountUp from "react-countup";

import {
  MapPinned,
  ClipboardCheck,
  Route,
  Ruler,
  ArrowUpRight,
} from "lucide-react";

/* 🔥 AUTO IMAGE SLIDER */
const images = [
  "/placeholder.jpg",
  "/placeholder.jpg",
  "/placeholder.jpg",
];

const surveyServices = [
  {
    icon: <MapPinned size={24} />,
    title: "Preliminary Survey",
    desc: "Initial route identification and terrain analysis for optimized project planning.",
    image: "/placeholder.jpg",
    link: "/service/preliminary-survey",
  },
  {
    icon: <ClipboardCheck size={24} />,
    title: "Detailed Survey",
    desc: "Comprehensive data collection including coordinates, profiles and alignment verification.",
    image: "/placeholder.jpg",
    link: "/service/detailed-survey",
  },
  {
    icon: <Route size={24} />,
    title: "Check Survey",
    desc: "Final validation survey ensuring engineering accuracy and project compliance.",
    image: "/placeholder.jpg",
    link: "/service/check-survey",
  },
];

const stats = [
  {
    number: 500,
    suffix: "+",
    label: "Routes Completed",
  },
  {
    number: 15,
    suffix: "+",
    label: "States Covered",
  },
  {
    number: 100,
    suffix: "%",
    label: "Precision Planning",
  },
];

export default function Survey() {
  const router = useRouter();

  const [currentImage, setCurrentImage] = useState(0);

  /* AUTO IMAGE CHANGE */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="survey"
      className="
      relative py-24 overflow-hidden
      bg-[#020617]
      text-white
      "
    >

      {/* BG GLOW */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >

            {/* MAIN IMAGE */}
            <div
              className="
              relative
              h-[350px]
              md:h-[500px]
              rounded-3xl
              overflow-hidden
              border border-white/10
              "
            >

              <Image
                src={images[currentImage]}
                alt="Survey Work"
                fill
                className="
                object-cover
                transition-all duration-1000
                "
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-transparent to-transparent" />

            </div>

            {/* FLOATING CARD */}
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
                  <Ruler size={24} />
                </div>

                <div>

                  <h4 className="text-xl font-bold">
                    Accurate
                  </h4>

                  <p className="text-xs text-gray-300">
                    Route & Terrain Mapping
                  </p>

                </div>

              </div>

            </motion.div>

          </motion.div>

          {/* RIGHT CONTENT */}
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
              Survey Services
            </p>

            <h2
              className="
              text-4xl md:text-6xl
              font-black leading-tight
              mb-7
              "
            >
              Engineering Precision

              <span className="block text-cyan-400">
                Starts Here
              </span>

            </h2>

            <p
              className="
              text-gray-300 leading-relaxed
              text-lg mb-10
              "
            >
              KAC Construction delivers high-precision survey services
              for transmission line infrastructure projects across India.
            </p>

            {/* SERVICE CARDS */}
            <div className="space-y-5">

              {surveyServices.map((item, i) => (

                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
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
                  hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]
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

                      <h3 className="text-xl font-semibold mb-2">
                        {item.title}
                      </h3>

                      <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
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

        {/* PREMIUM STATS */}
        <div
          className="
          grid md:grid-cols-3
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

              {/* GLOW */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-cyan-400/5 blur-3xl" />

              <h3
                className="
                relative z-10
                text-5xl font-black
                text-cyan-400 mb-3
                drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]
                "
              >
                <CountUp
                  end={item.number}
                  duration={2.5}
                />
                {item.suffix}
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