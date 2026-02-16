"use client"
import { motion } from "framer-motion"

export default function CTASection() {
  return (
    <section className="py-24 relative bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-xl text-center">

      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-white mb-8"
      >
        Ready To Power The Next Grid?
      </motion.h2>

      <motion.button
        whileHover={{ scale: 1.1 }}
        className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold shadow-xl"
      >
        Contact Our Team
      </motion.button>

    </section>
  )
}
