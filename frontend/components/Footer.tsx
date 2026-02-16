export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-16">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        <div>
          <h3 className="text-white text-xl font-bold">
            KAC CONSTRUCTION
          </h3>
          <p className="mt-4">
            High-voltage transmission infrastructure specialists.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2">
            <li>Home</li>
            <li>Services</li>
            <li>Projects</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold">Contact</h4>
          <p className="mt-4">India</p>
          <p>Email: info@kacconstruction.com</p>
        </div>

      </div>

      <div className="text-center mt-12 text-sm">
        © 2026 KAC Construction. All Rights Reserved.
      </div>

    </footer>
  )
}
