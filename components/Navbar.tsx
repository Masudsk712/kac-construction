"use client"

import { useCallback, useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

import ThemeToggle from "./ThemeToggle"

import {
  motion,
  AnimatePresence,
} from "framer-motion"

import {
  ChevronDown,
  Plus,
  Minus,
  X,
  ArrowUpRight,
  FolderKanban,
  Menu,
} from "lucide-react"

import { useBrand } from "@/components/BrandContext"

type MenuKey = "about" | "service" | "project"

const aboutLinks = [
  { name: "Overview", href: "/about#overview" },
  { name: "Mission & Vision", href: "/about#mission" },
  { name: "MD Message", href: "/about#md-message" },
  { name: "Leadership", href: "/about#leadership" },
  { name: "Awards", href: "/about#awards" },
]

const serviceLinks = [
  { name: "Survey Work", href: "/service#survey" },
  { name: "Foundation Work", href: "/service#foundation" },
  { name: "Tower Erection", href: "/service#erection" },
  { name: "Stringing Work", href: "/service#stringing" },
]

const projectLinks = [
  { name: "Completed Projects", href: "/projects#completed" },
  { name: "Ongoing Projects", href: "/projects#ongoing" },
  { name: "Transmission Projects", href: "/projects#transmission" },
  { name: "Tower Erection", href: "/projects#tower" },
  { name: "HTLS Reconductoring", href: "/projects#htls" },
]

const dropdownGroups: Array<{
  key: MenuKey
  name: string
  href: string
  links: typeof aboutLinks
}> = [
  { key: "about", name: "About", href: "/about", links: aboutLinks },
  { key: "service", name: "Services", href: "/service", links: serviceLinks },
  { key: "project", name: "Projects", href: "/projects", links: projectLinks },
]

const singleLinks = [
  { name: "Home", href: "/" },
  { name: "Media", href: "/media" },
  { name: "Career", href: "/career" },
  { name: "Contact", href: "/contact" },
]

const dropdownClass = `
  absolute left-0 top-[calc(100%+0.75rem)]
  rounded-3xl border border-black/10 dark:border-white/10
  bg-white/90 dark:bg-black/80
  p-3
  shadow-2xl
  backdrop-blur-2xl
`

const dropdownLink = `
  group flex items-center justify-between gap-4
  rounded-2xl px-4 py-3
  text-sm font-semibold
  text-slate-700 dark:text-white/75
  transition-all duration-300
  hover:bg-cyan-500/10 hover:text-cyan-700
  dark:hover:text-cyan-300
`

export default function Navbar() {
  const pathname = usePathname()
  const isHome = pathname === "/"

  const { config } = useBrand()

  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<MenuKey | null>(null)
  const [mobileGroups, setMobileGroups] = useState<Record<MenuKey, boolean>>({
    about: false,
    service: false,
    project: false,
  })

  const closeMenu = useCallback(() => {
    setIsOpen(false)
    setOpenDropdown(null)
    setMobileGroups({ about: false, service: false, project: false })
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!isOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, closeMenu])

  const isActivePath = (href: string) => {
    const path = href.split("#")[0]
    if (path === "/") return pathname === "/"
    return pathname === path || pathname.startsWith(`${path}/`)
  }

  const desktopLinkStyle = (href: string) =>
    `nav-link-pill ${
      isActivePath(href)
        ? "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300"
        : "text-slate-800 dark:text-white/85 hover:text-cyan-700 dark:hover:text-cyan-300"
    }`

  const mobileLinkStyle = (href: string) =>
    `mobile-nav-link ${
      isActivePath(href)
        ? "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300"
        : "text-slate-800 dark:text-white/85"
    }`

  const toggleMobileGroup = (key: MenuKey) => {
    setMobileGroups((current) => ({ ...current, [key]: !current[key] }))
  }

  return (
    <nav
      aria-label="Main navigation"
      className={`
        fixed left-0 top-0 z-[99999] w-full
        transition-all duration-500
        ${isHome && !scrolled ? "bg-transparent shadow-none border-transparent" : "nav-glass"}
        ${scrolled ? "shadow-2xl" : ""}
      `}
    >
      <div
        className={`
          pointer-events-none absolute inset-0
          bg-gradient-to-r from-cyan-500/[0.06] via-transparent to-blue-500/[0.06]
          transition-opacity duration-500
          ${isHome && !scrolled ? "opacity-0" : "opacity-100"}
        `}
      />

      <div
        className="
          container-premium relative
          flex min-h-[64px] items-center justify-between gap-3
          py-2 md:min-h-[72px]
        "
      >
        <Link
          href="/"
          aria-label={`${config.name} home`}
          onClick={() => {
            closeMenu()
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
          className="relative z-20 flex shrink-0 items-center"
        >
              <Image
                src={config.navbar.logoUrl}
                alt={config.navbar.logoAlt}
                width={64}
                height={64}
                priority
                className="
                  h-10 w-auto object-contain md:h-11
                  drop-shadow-[0_0_22px_rgba(34,211,238,0.32)]
                  transition-transform duration-300 hover:scale-105
                "
              />
              <span
                className="
                  hidden xl:inline-block ml-3 text-sm font-bold
                  text-slate-800 dark:text-white/90
                  tracking-tight
                "
              >
                {config.name}
              </span>
            </Link>

        <div className="hidden flex-1 items-center justify-center gap-1 md:flex xl:gap-2">
          <Link href="/" className={desktopLinkStyle("/")}>
            Home
          </Link>

          {dropdownGroups.map((group) => (
            <div
              key={group.key}
              className="relative"
              onMouseEnter={() => setOpenDropdown(group.key)}
              onMouseLeave={() => setOpenDropdown(null)}
              onFocus={() => setOpenDropdown(group.key)}
            >
              <Link
                href={group.href}
                className={`${desktopLinkStyle(group.href)} gap-1.5`}
                aria-expanded={openDropdown === group.key}
              >
                {group.name}
                <ChevronDown
                  size={15}
                  className={`
                    transition-transform duration-300
                    ${openDropdown === group.key ? "rotate-180" : ""}
                  `}
                />
              </Link>

              <AnimatePresence>
                {openDropdown === group.key && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.22 }}
                    className={`${dropdownClass} ${group.key === "project" ? "w-[360px]" : "w-80"}`}
                  >
                    {group.key === "project" && (
                      <div className="mb-3 flex items-center gap-3 rounded-2xl border border-black/5 bg-slate-50/70 p-3 dark:border-white/10 dark:bg-white/[0.04]">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-700 dark:text-cyan-300">
                          <FolderKanban size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 dark:text-white">
                            {config.navbar.dropdownLabel}
                          </h4>
                          <p className="text-xs text-slate-500 dark:text-white/50">
                            {config.navbar.dropdownSubtext}
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="space-y-1">
                      {group.links.map((item) => (
                        <Link key={item.href} href={item.href} className={dropdownLink}>
                          {item.name}
                          <ArrowUpRight
                            size={15}
                            className="
                              opacity-0 transition-all duration-300
                              group-hover:-translate-y-0.5 group-hover:translate-x-0.5
                              group-hover:opacity-100
                            "
                          />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {singleLinks.slice(1).map((item) => (
            <Link key={item.href} href={item.href} className={desktopLinkStyle(item.href)}>
              {item.name}
            </Link>
          ))}
        </div>

        <div className="relative z-20 flex shrink-0 items-center justify-end gap-2 sm:gap-3">
          <ThemeToggle />

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={isOpen}
            aria-controls="mobile-nav-panel"
            onClick={() => setIsOpen(true)}
            className="mobile-menu-trigger h-11 w-11"
          >
            <Menu size={21} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="
                fixed inset-0 z-[99998]
                bg-black/70 backdrop-blur-sm
                md:hidden
              "
            />

            <motion.div
              id="mobile-nav-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
              className="
                mobile-nav-panel fixed right-0 top-0 z-[99999]
                h-[100dvh] w-[90%] max-w-[390px]
                overflow-y-auto md:hidden
              "
            >
              <div
                className="
                  flex items-center justify-between gap-4
                  border-b border-black/5 px-5 py-5
                  dark:border-white/10
                "
              >
                <Link
                  href="/"
                  aria-label={`${config.name} home`}
                  onClick={() => {
                    closeMenu()
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }}
                  className="flex items-center"
                >
                      <Image
                        src={config.navbar.logoUrl}
                        alt={config.navbar.logoAltMobile}
                        width={68}
                        height={68}
                        className="h-12 w-auto object-contain"
                      />
                      <span className="ml-3 text-sm font-bold text-slate-800 dark:text-white/90">
                        {config.shortName}
                      </span>
                    </Link>

                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={closeMenu}
                  className="icon-button-premium h-11 w-11"
                >
                  <X size={21} />
                </button>
              </div>

              <div className="px-4 py-5">
                <div className="space-y-2">
                  <Link href="/" onClick={closeMenu} className={mobileLinkStyle("/")}>
                    <span>Home</span>
                    <ArrowUpRight size={16} />
                  </Link>

                  {dropdownGroups.map((group) => {
                    const isExpanded = mobileGroups[group.key]
                    const panelId = `mobile-${group.key}-links`

                    return (
                      <div
                        key={group.key}
                        className="
                          rounded-2xl border border-black/5 bg-white/45 p-1
                          dark:border-white/10 dark:bg-white/[0.04]
                        "
                      >
                        <button
                          type="button"
                          aria-expanded={isExpanded}
                          aria-controls={panelId}
                          onClick={() => toggleMobileGroup(group.key)}
                          className={mobileLinkStyle(group.href)}
                        >
                          <span>{group.name}</span>
                          {isExpanded ? <Minus size={18} /> : <Plus size={18} />}
                        </button>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              id={panelId}
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.26 }}
                              className="overflow-hidden"
                            >
                              <div className="space-y-1 px-2 pb-3 pt-1">
                                {group.links.map((item) => (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={closeMenu}
                                    className="
                                      block rounded-xl px-4 py-2.5 text-sm font-semibold
                                      text-slate-600 transition-colors duration-300
                                      hover:bg-cyan-500/10 hover:text-cyan-700
                                      dark:text-white/70 dark:hover:text-cyan-300
                                    "
                                  >
                                    {item.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  })}

                  {singleLinks.slice(1).map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className={mobileLinkStyle(item.href)}
                    >
                      <span>{item.name}</span>
                      <ArrowUpRight size={16} />
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}