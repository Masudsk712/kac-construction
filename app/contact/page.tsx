"use client";
import { motion } from "framer-motion";

import {
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
  Sparkles,
  Clock3,
  Building2,
  RadioTower,
} from "lucide-react";
import { useBrand } from "@/components/BrandContext";
import ContactForm from "@/components/ContactForm";

const contactCards = [
  {
    icon: Phone,
    title: "Mobile",
    value: "+91 9735067595",
    value2: "+91 9933638309",
    desc:
      "Available for project enquiries, EPC discussions and infrastructure coordination.",
  },
  {
    icon: Mail,
    title: "Email Address",
    value: "kuddusali45@gmail.com",
    desc:
      "Send us your transmission, foundation or infrastructure requirements anytime.",
  },
  {
    icon: MapPin,
    title: "Office Address",
    value:
      "Kuddus Ali Construction, Mahisbathani Baluatola, PO Barkol, Malda - 732128, India",
    desc:
      "Corporate infrastructure & transmission project office.",
  },
];

export default function ContactPage() {
  const { config: c, domain } = useBrand();

  return (
    <div className="relative z-10 bg-[var(--bg)] text-[var(--text)]">
      {/* BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute -left-[180px] -top-[220px] h-[650px] w-[650px] rounded-full bg-cyan-500/10 blur-[160px]" />
      <div className="pointer-events-none absolute -bottom-[240px] -right-[180px] h-[650px] w-[650px] rounded-full bg-blue-500/10 blur-[170px]" />

      {/* ======================================== */}
      {/* HERO */}
      {/* ======================================== */}
      <section className="page-hero relative flex min-h-screen items-center overflow-hidden">
        {/* BG IMAGE */}
        <div className="absolute inset-0 scale-105 bg-cover bg-center" style={{ backgroundImage: `url(/${domain}/contact/Contact1.webp)` }} />

        {/* OVERLAY */}
        <div className="absolute inset-0 hero-page-overlay" />

        {/* GRADIENT */}
        <div className="absolute inset-0 hero-page-gradient" />

        {/* CONTENT */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-36 md:px-10">
          {/* TOP BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-10 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 backdrop-blur-2xl shadow-[0_0_30px_rgba(34,211,238,0.08)]"
          >
            <Sparkles size={14} className="text-cyan-300" />
            <span className="text-xs tracking-[4px] text-cyan-200">
              CONTACT {c.name.toUpperCase()}
            </span>
          </motion.div>

          {/* HERO GRID */}
          <div className="grid items-center gap-20 lg:grid-cols-[1.1fr_0.9fr]">
            {/* LEFT */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-[48px] font-black leading-[0.92] tracking-[-4px] text-[var(--text)] sm:text-[68px] lg:text-[96px]"
              >
                Let's Build India's
                <span className="mt-4 block text-cyan-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.35)]">
                  Future Together
                </span>
              </motion.h1>

              {/* LINE */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "140px" }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="mb-10 mt-10 h-[4px] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
              />

              {/* TEXT */}
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="max-w-3xl text-lg leading-[2] text-[var(--text-soft)] md:text-xl"
              >
                Reach out to {c.name} for
                transmission line, tower erection,
                stringing, foundation, EPC infrastructure
                and high-voltage power projects across India.
              </motion.p>

              {/* BUTTONS */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-14 flex flex-wrap gap-5"
              >
                <a
                  href={`tel:${c.contact.phone}`}
                  className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 font-semibold text-black shadow-[0_0_40px_rgba(34,211,238,0.35)] transition-all duration-500 hover:scale-105"
                >
                  Call Now
                  <Phone size={18} />
                </a>

                <a
                  href={`mailto:${c.contact.email}`}
                  className="inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--glass)] px-8 py-4 backdrop-blur-2xl text-[var(--text)] transition-all duration-500 hover:border-cyan-400/30 hover:bg-cyan-400/[0.08]"
                >
                  Send Email
                  <ArrowUpRight size={18} />
                </a>
              </motion.div>
            </div>

            {/* RIGHT PREMIUM CARD */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="relative"
            >
              {/* MAIN CARD */}
              <div className="relative overflow-hidden rounded-[36px] border border-[var(--border)] bg-[var(--card)] p-6 backdrop-blur-3xl">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />

                <div className="relative z-10 space-y-5">
                  {/* ITEM */}
                  <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-5">
                    <div className="mb-4 flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                        <RadioTower size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[var(--text)]">
                          Transmission Projects
                        </h3>
                        <p className="text-sm text-[var(--text-soft)]">
                          EPC Infrastructure Solutions
                        </p>
                      </div>
                    </div>
                    <p className="text-sm leading-[1.8] text-[var(--text-soft)]">
                      Specialized in foundation, erection,
                      stringing and transmission line execution
                      across India.
                    </p>
                  </div>

                  {/* STATS */}
                  <div className="grid grid-cols-2 gap-5">
                    {[
                      { number: "500+", label: "Projects" },
                      { number: "24/7", label: "Support" },
                      { number: "20+", label: "States" },
                      { number: "765kV", label: "Expertise" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 text-center"
                      >
                        <h3 className="mb-2 text-2xl font-black text-cyan-400">
                          {item.number}
                        </h3>
                        <p className="text-sm text-[var(--text-soft)]">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* BOTTOM FADE */}
        <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-b from-transparent to-[var(--bg)]" />
      </section>

      {/* ======================================== */}
      {/* CONTACT SECTION */}
      {/* ======================================== */}
      <section className="relative overflow-hidden py-28">
        {/* GLOW */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-0 h-[500px] w-[500px] bg-cyan-500/10 blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-[420px] w-[420px] bg-blue-500/10 blur-[110px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          {/* HEADING */}
          <div className="mx-auto mb-20 max-w-4xl text-center">
            <p className="mb-3 text-sm tracking-widest text-[var(--text-soft)]">
              GET IN TOUCH
            </p>
            <h2 className="text-4xl font-black text-[var(--text)] md:text-5xl">
              <span className="gradient-text">
                Contact Our Infrastructure Team
              </span>
            </h2>
          </div>

          {/* GRID */}
          <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* INTRO */}
              <div className="relative overflow-hidden rounded-[32px] border border-[var(--border)] bg-[var(--card)] p-8 backdrop-blur-3xl">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />

                <div className="relative z-10">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-cyan-400/20 bg-cyan-500/10">
                      <Building2 className="text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-[var(--text)]">
                        {c.name}
                      </h3>
                      <p className="mt-1 text-sm text-[var(--text-soft)]">
                        Powering India's Infrastructure
                      </p>
                    </div>
                  </div>

                  <p className="leading-[1.9] text-[var(--text-soft)]">
                    Reach out for project enquiries,
                    transmission infrastructure, EPC
                    solutions and partnership discussions.
                  </p>

                  <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-300">
                    <Clock3 size={16} />
                    Monday - Saturday | 9 AM - 7 PM
                  </div>
                </div>
              </div>

              {/* CONTACT CARDS */}
              {contactCards.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8, scale: 1.01 }}
                  className="group relative overflow-hidden rounded-[30px] border border-[var(--border)] bg-[var(--card)] p-7 backdrop-blur-3xl transition-all duration-500 hover:border-cyan-400/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="relative z-10 flex items-start gap-5">
                    {/* ICON */}
                    <div className="flex h-[62px] min-w-[62px] items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-500/10 text-cyan-400 transition group-hover:scale-110">
                      <item.icon size={24} />
                    </div>

                    {/* CONTENT */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-2xl font-bold text-[var(--text)]">
                          {item.title}
                        </h3>
                        <ArrowUpRight className="text-cyan-400" />
                      </div>

                      <p className="mt-4 break-words text-lg text-[var(--text)]">
                        {item.value}
                      </p>

                      {item.value2 && (
                        <p className="mt-2 break-words text-lg text-[var(--text)]">
                          {item.value2}
                        </p>
                      )}

                      <p className="mt-4 text-sm leading-relaxed text-[var(--text-soft)]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* RIGHT - CONTACT FORM */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ======================================== */}
      {/* MAP SECTION */}
      {/* ======================================== */}
      <section className="relative overflow-hidden py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-[36px] border border-[var(--border)] bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 px-8 py-14 text-center backdrop-blur-3xl md:px-14 md:py-20">
            <p className="mb-6 text-sm uppercase tracking-widest text-cyan-400">
              WE ARE HERE
            </p>

            <h2 className="mb-6 text-4xl font-black leading-tight text-[var(--text)] md:text-5xl">
              Visit Our Office
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[var(--text-soft)]">
              {c.name}, {c.contact.address.street},
              PO {c.contact.address.postalCode.split(" ")[0] || "Barkol"}, {c.contact.address.locality} - {c.contact.address.postalCode}, India
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">
              <a
                href={`tel:${c.contact.phone}`}
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 font-bold text-black transition-all duration-300 hover:scale-105"
              >
                <Phone size={18} />
                Call Now
              </a>

              <a
                href="https://maps.google.com/?q=25.081566,88.103746"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--card)] px-8 py-4 text-[var(--text)] transition-all duration-300 hover:border-cyan-400/30"
              >
                <MapPin size={18} />
                Open In Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}