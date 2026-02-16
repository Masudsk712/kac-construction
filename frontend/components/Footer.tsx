"use client"
import Reveal from "./Reveal"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-cyan-500/20 py-16 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        <Reveal>
          <div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              KAC CONSTRUCTION
            </h3>
            <p className="text-gray-400">
              High-voltage transmission infrastructure specialists.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-cyan-400 transition">Home</li>
              <li className="hover:text-cyan-400 transition">Services</li>
              <li className="hover:text-cyan-400 transition">Projects</li>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">India</p>
            <p className="text-gray-400">info@kacconstruction.com</p>
          </div>
        </Reveal>

      </div>

      <div className="text-center text-gray-600 mt-12 border-t border-gray-800 pt-6">
        © 2026 KAC Construction. All Rights Reserved.
      </div>
    </footer>
  )
}
