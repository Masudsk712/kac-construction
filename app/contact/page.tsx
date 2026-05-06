"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import CTASection from "@/components/CTASection";

export default function ContactPage() {
  return (
    <main className="bg-[#020617] text-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">

        {/* Background Glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-cyan-400 uppercase tracking-[5px] text-sm font-semibold">
              KAC Construction
            </p>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
              Let’s Build The
              <span className="block text-cyan-400">
                Future Together
              </span>
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-gray-400 text-base sm:text-lg leading-relaxed">
              Get in touch with our expert infrastructure team for tower
              erection, transmission line, stringing, foundation, and power
              grid projects across India.
            </p>
          </motion.div>

          {/* Main Grid */}
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* LEFT INFO SECTION */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >

              {/* Card */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 hover:border-cyan-400/40 transition duration-500">

                <div className="flex items-start gap-4">
                  <div className="bg-cyan-500/10 p-4 rounded-2xl">
                    <Phone className="text-cyan-400" size={28} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold">
                      Call Us
                    </h3>

                    <p className="mt-2 text-gray-400">
                      +91 9330758804
                    </p>
                  </div>
                </div>

              </div>

              {/* Card */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 hover:border-cyan-400/40 transition duration-500">

                <div className="flex items-start gap-4">
                  <div className="bg-cyan-500/10 p-4 rounded-2xl">
                    <Mail className="text-cyan-400" size={28} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold">
                      Email Address
                    </h3>

                    <p className="mt-2 text-gray-400 break-words">
                      kacconstruction@gmail.com
                    </p>
                  </div>
                </div>

              </div>

              {/* Card */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 hover:border-cyan-400/40 transition duration-500">

                <div className="flex items-start gap-4">
                  <div className="bg-cyan-500/10 p-4 rounded-2xl">
                    <MapPin className="text-cyan-400" size={28} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold">
                      Office Location
                    </h3>

                    <p className="mt-2 text-gray-400">
                      Malda, West Bengal, India
                    </p>
                  </div>
                </div>

              </div>

            </motion.div>

            {/* CONTACT FORM */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >

              <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[32px] p-6 sm:p-8 lg:p-10 shadow-2xl">

                <div className="mb-8">
                  <h2 className="text-3xl sm:text-4xl font-bold">
                    Send Message
                  </h2>

                  <p className="mt-3 text-gray-400">
                    Our team will get back to you shortly.
                  </p>
                </div>

                <form className="space-y-6">

                  {/* Name */}
                  <div>
                    <label className="text-sm text-gray-300">
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="mt-2 w-full bg-[#0f172a] border border-white/10 focus:border-cyan-400 rounded-2xl px-5 py-4 outline-none transition duration-300"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-sm text-gray-300">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="mt-2 w-full bg-[#0f172a] border border-white/10 focus:border-cyan-400 rounded-2xl px-5 py-4 outline-none transition duration-300"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-sm text-gray-300">
                      Phone Number
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your phone number"
                      className="mt-2 w-full bg-[#0f172a] border border-white/10 focus:border-cyan-400 rounded-2xl px-5 py-4 outline-none transition duration-300"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-sm text-gray-300">
                      Message
                    </label>

                    <textarea
                      rows={5}
                      placeholder="Tell us about your project..."
                      className="mt-2 w-full bg-[#0f172a] border border-white/10 focus:border-cyan-400 rounded-2xl px-5 py-4 outline-none transition duration-300 resize-none"
                    />
                  </div>

                  {/* Button */}
                  <button
                    type="submit"
                    className="group w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 rounded-2xl transition duration-300 flex items-center justify-center gap-3"
                  >
                    Send Message
                    <Send
                      size={18}
                      className="group-hover:translate-x-1 transition duration-300"
                    />
                  </button>

                </form>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* CTA SECTION */}
      <CTASection />

    </main>
  );
}