"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

const services = [
  {
    title: "Survey Work",
    desc: "Preliminary, Detailed & Check Survey with precision planning.",
    image: "/placeholder.jpg",
    link: "/services#survey",
  },
  {
    title: "Foundation Work",
    desc: "Strong civil foundations for long-lasting tower stability.",
    image: "/placeholder.jpg",
    link: "/services#foundation",
  },
  {
    title: "Tower Erection",
    desc: "Efficient and safe erection of transmission towers.",
    image: "/placeholder.jpg",
    link: "/services#erection",
  },
  {
    title: "Stringing Work",
    desc: "High-quality conductor stringing with modern equipment.",
    image: "/placeholder.jpg",
    link: "/services#stringing",
  },
];

export default function ServicesSection() {
  const router = useRouter();

  return (
    <section className="py-28 bg-[#020617] text-white text-center">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-cyan-400 mb-16"
      >
        Our Services
      </motion.h2>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 w-[90%] mx-auto">

        {services.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => {
              window.location.href = s.link;
            }}
            className="group cursor-pointer rounded-2xl overflow-hidden bg-[#111827] border border-white/10"
          >

            {/* IMAGE */}
            <div className="relative h-48">
              <Image src={s.image} alt={s.title} fill className="object-cover group-hover:scale-110 transition duration-500" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />
            </div>

            {/* CONTENT */}
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                {s.title}
              </h3>
              <p className="text-gray-400 text-sm">{s.desc}</p>

              <button className="mt-4 text-sm text-white border-b border-cyan-400 hover:text-cyan-300">
                Know More →
              </button>
            </div>

          </motion.div>
        ))}

      </div>

      {/* Explore More */}
      <div className="mt-14">
        <button
          onClick={() => router.push("/services")}
          className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold hover:scale-105 transition"
        >
          Explore All Services
        </button>
      </div>

    </section>
  );
}