"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import CTASection from "@/components/CTASection";

interface ProcessItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface Props {
  badge: string;
  title: string;
  highlight: string;
  description: string;

  heroImage: string;
  overviewImage: string;

  floatingStat: string;
  floatingText: string;

  process: ProcessItem[];

  highlights: string[];

  gallery: string[];
}

export default function StringingServicePage({
  badge,
  title,
  highlight,
  description,
  heroImage,
  overviewImage,
  floatingStat,
  floatingText,
  process,
  highlights,
  gallery,
}: Props) {
  return (
    <main className="bg-[var(--bg)] text-[var(--text)] overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">

        <Image
          src={heroImage}
          alt={title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            <p className="uppercase tracking-[6px] text-cyan-400 text-sm mb-6">
              STRINGING SERVICES
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">

              {title}

              <span className="block text-cyan-400">
                {highlight}
              </span>

            </h1>

            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-10">
              {description}
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >

            <div
              className="
              relative overflow-hidden
              rounded-3xl
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              p-8
              "
            >

              <Image
                src={overviewImage}
                alt={title}
                width={700}
                height={500}
                className="rounded-2xl object-cover"
              />

              <div
                className="
                absolute bottom-6 left-6
                bg-black/50 backdrop-blur-xl
                border border-cyan-400/20
                rounded-2xl
                px-6 py-4
                "
              >

                <h3 className="text-4xl font-black text-cyan-400">
                  {floatingStat}
                </h3>

                <p className="text-gray-300 text-sm">
                  {floatingText}
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* OVERVIEW */}
      <section className="py-28">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          <Image
            src={overviewImage}
            alt={title}
            width={700}
            height={550}
            className="rounded-3xl border border-white/10 object-cover"
          />

          <div>

            <p className="uppercase tracking-[5px] text-cyan-400 text-sm mb-5">
              {badge}
            </p>

            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-8">

              Advanced
              <span className="block text-cyan-400">
                Power Infrastructure
              </span>

            </h2>

            <div className="space-y-5">

              {highlights.map((item, i) => (

                <div
                  key={i}
                  className="
                  flex items-center gap-4
                  p-5 rounded-2xl
                  border border-white/10
                  bg-white/[0.03]
                  "
                >

                  <CheckCircle2
                    className="text-cyan-400 min-w-[24px]"
                    size={24}
                  />

                  <p className="text-gray-200">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* PROCESS */}
      <section className="py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[6px] text-cyan-400 text-sm mb-5">
              Execution Workflow
            </p>

            <h2 className="text-4xl md:text-6xl font-black">

              Professional
              <span className="block text-cyan-400">
                Execution Process
              </span>

            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {process.map((item, i) => (

              <motion.div
                key={i}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="
                rounded-3xl
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                p-8
                "
              >

                <div className="text-cyan-400 mb-8">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold mb-5">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-8">
                  {item.desc}
                </p>

                <button className="flex items-center gap-2 text-cyan-400">

                  Learn More

                  <ArrowRight size={18} />

                </button>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* GALLERY */}
      <section className="py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-8">

            {gallery.map((img, i) => (

              <div
                key={i}
                className="
                relative overflow-hidden
                rounded-3xl
                border border-white/10
                "
              >

                <Image
                  src={img}
                  alt="Gallery"
                  width={500}
                  height={400}
                  className="object-cover h-[350px] w-full"
                />

              </div>

            ))}

          </div>

        </div>

      </section>

      <CTASection />

    </main>
  );
}