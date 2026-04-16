export default function CTASection() {
  return (
    <section className="py-24 text-center bg-cyan-500 text-black">
      <h2 className="text-4xl font-bold">
        Ready to Work With Us?
      </h2>

      <button
        className="px-6 py-3 rounded-full 
  bg-gradient-to-r from-cyan-400 to-blue-500 
  text-black font-semibold 
  hover:scale-110 
  hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] 
  transition duration-300"
      >
        Contact Us
      </button>
    </section>
  );
}