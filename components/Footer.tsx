"use client";

import Link from "next/link";

import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  RadioTower,
} from "lucide-react";

const quickLinks = [
  {
    title: "Home",
    href: "/",
  },

  {
    title: "About",
    href: "/about",
  },

  {
    title: "Services",
    href: "/service",
  },

  {
    title: "Projects",
    href: "/projects",
  },

  {
    title: "Career",
    href: "/career",
  },

  {
    title: "Contact",
    href: "/contact",
  },
];

const services = [
  "Transmission Line",
  "Tower Erection",
  "HTLS Reconductoring",
  "Foundation Work",
  "Hotline Stringing",
  "Survey Services",
];

export default function Footer() {

  return (
    <footer
      className="
      relative
      overflow-hidden

      bg-[#020617]
      text-white

      border-t border-white/10
      "
    >

      {/* BG GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[150px]" />

      {/* GRID */}
      <div
        className="
        absolute inset-0

        opacity-[0.04]

        [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]

        [background-size:60px_60px]
        "
      />

      <div
        className="
        container-premium

        relative z-10

        pt-24
        pb-10
        "
      >

        {/* TOP GRID */}
        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4

          gap-14

          pb-16
          "
        >

          {/* COMPANY */}
          <div>

            {/* LOGO */}
            <div
              className="
              flex items-center
              gap-4

              mb-8
              "
            >

              <div
                className="
                w-14 h-14

                rounded-2xl

                bg-cyan-400/10

                flex items-center justify-center

                text-cyan-400
                "
              >

                <RadioTower size={28} />

              </div>

              <div>

                <h2
                  className="
                  text-2xl
                  font-black
                  "
                >
                  KAC Construction
                </h2>

                <p className="text-sm text-gray-400">
                  EPC Infrastructure Solutions
                </p>

              </div>

            </div>

            {/* TEXT */}
            <p
              className="
              text-gray-400
              leading-relaxed

              mb-8
              "
            >

              KAC Construction delivers advanced
              transmission infrastructure solutions
              including tower erection, HTLS
              reconductoring, hotline stringing
              and EPC execution across India.

            </p>

            {/* SOCIAL */}
            <div className="flex items-center gap-4">

              {[

                {
                  icon: <Facebook size={18} />,
                  href: "#",
                },

                {
                  icon: <Instagram size={18} />,
                  href: "#",
                },

                {
                  icon: <Linkedin size={18} />,
                  href: "#",
                },

              ].map((item, i) => (

                <Link
                  key={i}
                  href={item.href}

                  className="
                  w-11 h-11

                  rounded-xl

                  border border-white/10

                  bg-white/[0.03]
                  backdrop-blur-xl

                  flex items-center justify-center

                  text-gray-300

                  transition-all duration-300

                  hover:border-cyan-400/30
                  hover:text-cyan-400
                  hover:-translate-y-1
                  "
                >

                  {item.icon}

                </Link>

              ))}

            </div>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h3
              className="
              text-xl
              font-bold

              mb-8
              "
            >
              Quick Links
            </h3>

            <div className="space-y-4">

              {quickLinks.map((item, i) => (

                <Link
                  key={i}
                  href={item.href}

                  className="
                  group

                  flex items-center
                  justify-between

                  text-gray-400

                  transition-all duration-300

                  hover:text-cyan-400
                  "
                >

                  {item.title}

                  <ArrowUpRight
                    size={16}

                    className="
                    opacity-0

                    transition-all duration-300

                    group-hover:opacity-100
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                    "
                  />

                </Link>

              ))}

            </div>

          </div>

          {/* SERVICES */}
          <div>

            <h3
              className="
              text-xl
              font-bold

              mb-8
              "
            >
              Core Services
            </h3>

            <div className="space-y-4">

              {services.map((item, i) => (

                <div
                  key={i}

                  className="
                  flex items-center
                  gap-3

                  text-gray-400
                  "
                >

                  <div
                    className="
                    w-2 h-2

                    rounded-full

                    bg-cyan-400
                    "
                  />

                  {item}

                </div>

              ))}

            </div>

          </div>

          {/* CONTACT */}
          <div>

            <h3
              className="
              text-xl
              font-bold

              mb-8
              "
            >
              Contact Info
            </h3>

            <div className="space-y-6">

              {/* PHONE */}
              <div className="flex gap-4">

                <div
                  className="
                  w-12 h-12

                  rounded-xl

                  bg-cyan-400/10

                  flex items-center justify-center

                  text-cyan-400
                  "
                >

                  <Phone size={20} />

                </div>

                <div>

                  <p className="text-sm text-gray-400 mb-1">
                    Phone Number
                  </p>

                  <h4 className="font-semibold">
                    +91 XXXXX XXXXX
                  </h4>

                </div>

              </div>

              {/* EMAIL */}
              <div className="flex gap-4">

                <div
                  className="
                  w-12 h-12

                  rounded-xl

                  bg-cyan-400/10

                  flex items-center justify-center

                  text-cyan-400
                  "
                >

                  <Mail size={20} />

                </div>

                <div>

                  <p className="text-sm text-gray-400 mb-1">
                    Email Address
                  </p>

                  <h4 className="font-semibold break-all">
                    info@kacconstruction.com
                  </h4>

                </div>

              </div>

              {/* LOCATION */}
              <div className="flex gap-4">

                <div
                  className="
                  w-12 h-12

                  rounded-xl

                  bg-cyan-400/10

                  flex items-center justify-center

                  text-cyan-400
                  "
                >

                  <MapPin size={20} />

                </div>

                <div>

                  <p className="text-sm text-gray-400 mb-1">
                    Office Location
                  </p>

                  <h4 className="font-semibold">
                    India
                  </h4>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div
          className="
          pt-8

          border-t border-white/10

          flex
          flex-col
          md:flex-row

          items-center
          justify-between

          gap-5
          "
        >

          <p
            className="
            text-gray-500
            text-sm

            text-center md:text-left
            "
          >
            © 2026 KAC Construction. All Rights Reserved.
          </p>

          <div
            className="
            flex
            flex-wrap

            items-center
            justify-center

            gap-6

            text-sm
            text-gray-500
            "
          >

            <Link
              href="#"

              className="
              transition hover:text-cyan-400
              "
            >
              Privacy Policy
            </Link>

            <Link
              href="#"

              className="
              transition hover:text-cyan-400
              "
            >
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}