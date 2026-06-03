"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Zap } from "lucide-react";
import { ease, spring as sp } from "@/lib/animations";
import { useBrand } from "@/components/BrandContext";

const cardIconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck size={22} />,
  Zap: <Zap size={22} />,
  ArrowUpRight: <ArrowUpRight size={22} />,
};

export default function ClientsSection() {
  const { config: c } = useBrand();

  return (
    <section className="relative overflow-hidden bg-[var(--bg-soft)] section-surface text-slate-900 dark:text-white py-32 md:py-44">
      <div className="absolute inset-0 bg-cover bg-center opacity-[0.05]" style={{ backgroundImage: `url('${c.clients.backgroundImage}')` }} />
      <div className="absolute inset-0 bg-white/95 dark:bg-[#020617]/92" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-140px] left-[-140px] w-[420px] h-[420px] md:w-[520px] md:h-[520px] bg-cyan-500/8 dark:bg-cyan-500/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-[-140px] right-[-140px] w-[420px] h-[420px] md:w-[520px] md:h-[520px] bg-blue-500/8 dark:bg-blue-500/10 blur-[130px] rounded-full" />
      </div>
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.08)_1px,transparent_1px)] dark:[background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:60px_60px]" />
      <div className="pointer-events-none absolute left-0 top-0 h-full w-10 md:w-24 bg-gradient-to-r from-slate-50 dark:from-[#020617] to-transparent z-20" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-10 md:w-24 bg-gradient-to-l from-slate-50 dark:from-[#020617] to-transparent z-20" />

      <div className="container-premium relative z-10">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: ease.premiumOut }} viewport={{ once: true }} className="text-center max-w-4xl mx-auto mb-14 md:mb-20">
          <p className="uppercase tracking-[5px] md:tracking-[6px] section-label text-[11px] md:text-sm mb-4 md:mb-5">{c.clients.label}</p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black leading-[1.08] mb-5 md:mb-6">
            <span className="accent-heading">{c.clients.heading}</span>
          </h2>
          <p className="text-slate-600 dark:text-white/60 text-sm md:text-base leading-[1.9] md:leading-[2] max-w-3xl mx-auto">{c.clients.description}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-14 md:mb-16">
          {c.clients.featureCards.map((card, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1, ease: ease.premiumOut }} viewport={{ once: true }} className={`rounded-[24px] md:rounded-[28px] border p-5 md:p-7 backdrop-blur-2xl ${i === 1 ? "border-cyan-400/20 bg-cyan-400/[0.05]" : "border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03]"}`}>
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-cyan-400/10 flex items-center justify-center accent-link mb-4 md:mb-5">
                {cardIconMap[card.icon] || <ShieldCheck size={22} />}
              </div>
              <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-3">{card.title}</h3>
              <p className="text-slate-600 dark:text-white/60 text-sm md:text-base leading-[1.8]">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="overflow-hidden mb-5 md:mb-8">
          <div className="scroll-left flex gap-4 md:gap-8 w-max">
            {[...c.clients.logos, ...c.clients.logos].map((logo, i) => (
              <ClientCard key={i} logo={logo} />
            ))}
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="scroll-right flex gap-4 md:gap-8 w-max">
            {[...c.clients.logos, ...c.clients.logos].map((logo, i) => (
              <ClientCard key={i} logo={logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientCard({ logo }: { logo: string }) {
  return (
    <motion.div whileHover={{ y: -6, transition: sp.soft }} className="group relative min-w-[120px] min-h-[120px] sm:min-w-[150px] sm:min-h-[150px] md:min-w-[170px] md:h-[170px] rounded-[22px] md:rounded-[28px] overflow-hidden border border-slate-200 dark:border-white/10 bg-white/[0.95] backdrop-blur-xl shadow-[0_10px_40px_rgba(15,23,42,0.08)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_10px_50px_rgba(34,211,238,0.18)]">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-400/10 to-blue-400/10" />
      <div className="relative w-full h-full">
        <Image src={logo} alt={`${logo.replace('/clients/', '').replace('.webp', '')} - Client`} fill sizes="(max-width: 640px) 120px, (max-width: 768px) 150px, 170px" loading="lazy" className="object-contain p-4 md:p-6 transition duration-500 group-hover:scale-105" />
      </div>
      <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
}