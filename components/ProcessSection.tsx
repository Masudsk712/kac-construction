"use client"
import { motion } from "framer-motion"

const steps = [
  { title: "Planning", desc: "Project analysis & route design" },
  { title: "Foundation", desc: "Strong base & civil work" },
  { title: "Installation", desc: "Tower erection & stringing" },
  { title: "Testing", desc: "Final inspection & activation" },
]

export default function ProcessSection() {
  return (
    <section className="bg-[#020617] text-white relative overflow-hidden">

      <div className="container-custom text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-20">
          Our Process
        </h2>

        <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-8">

          {steps.map((step, i) => (
            <div key={i} className="flex items-center">

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass p-6 rounded-2xl w-[180px] text-left"
              >
                <p className="text-cyan-400 text-sm">
                  Step {i + 1}
                </p>

                <h3 className="mt-2 font-bold">
                  {step.title}
                </h3>

                <p className="text-gray-400 text-sm mt-1">
                  {step.desc}
                </p>
              </motion.div>

              {i < steps.length - 1 && (
                <div className="hidden md:block w-8 h-[2px] bg-cyan-400 mx-2" />
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}