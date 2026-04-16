"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-black/70 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        <h1 className="text-xl font-bold text-cyan-400">
          KAC Construction
        </h1>

        <div className="hidden md:flex space-x-8">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}