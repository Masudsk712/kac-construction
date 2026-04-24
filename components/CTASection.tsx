export default function CTASection() {
  return (
    <section className="py-24 text-center relative overflow-hidden">

      {/* Glow */}
      <div className="absolute inset-0 -z-10 opacity-30 blur-3xl bg-gradient-to-r from-cyan-400 to-blue-500" />

      <h2 className="text-4xl font-bold">
        Ready to Work With Us?
      </h2>

      <button
        className="
          mt-8 px-8 py-4 rounded-full
          bg-gradient-to-r from-cyan-400 to-blue-500
          text-black font-semibold
          hover:scale-110
          hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]
          transition duration-300
        "
      >
        Contact Us
      </button>

    </section>
  )
}