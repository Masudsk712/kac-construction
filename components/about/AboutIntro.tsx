"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function AboutIntro() {
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const ctx = gsap.context(() => {

            // 🔥 title reveal animation
            gsap.fromTo(
                ".about-title",
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    },
                }
            )

            // 🔥 paragraph animation
            gsap.from(".about-text", {
                y: 60,
                opacity: 0,
                duration: 1,
                delay: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
            })

            // 🔥 image animation
            gsap.from(".about-img", {
                scale: 0.9,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
            })

        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="bg-white text-black min-h-screen flex items-center py-24">
            <div className="container-custom grid md:grid-cols-2 gap-12 items-center">

                {/* LEFT CONTENT */}
                <div>
                    <p className="about-title text-sm tracking-widest text-gray-500 mb-4">
                        ABOUT KAC CONSTRUCTION
                    </p>

                    <h2 className="about-title text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        Charting the Future of Energy:
                        <br />
                        Inside KAC’s Journey
                    </h2>

                    <p className="about-text text-gray-600 leading-relaxed">
                        KAC Construction is a fast-growing engineering and infrastructure company,
                        delivering high-quality solutions across power transmission, foundation,
                        and EPC services. We focus on innovation, safety, and timely execution.
                    </p>
                </div>

                {/* RIGHT IMAGE */}
                <div className="about-img">
                    <img
                        src="/team.jpg" // 👈 apni image daal
                        alt="team"
                        className="rounded-2xl shadow-xl"
                    />
                </div>

            </div>
        </section>
    )
}