"use client"

import { useEffect, useRef } from "react"

export function Hero() {
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current) return
      const offset = window.scrollY * 0.35
      imgRef.current.style.transform = `scale(1.08) translateY(${offset}px)`
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background image with parallax */}
      <div
        ref={imgRef}
        className="absolute inset-0 scale-110 will-change-transform transition-transform duration-100"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1800&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        role="img"
        aria-label="Sculptural sofa in a bright, modern interior"
      />

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-foreground/30" />

      {/* Hero content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-white/70 mb-6">
          Est. 2019 — Milan / New York
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[1.05] tracking-tight text-balance mb-6">
          Where Art<br />Meets Living
        </h1>
        <p className="font-sans text-sm md:text-base text-white/75 tracking-widest uppercase mb-12 font-light">
          Sculptural furniture designed for modern spaces
        </p>
        <a
          href="#collection"
          className="inline-block font-sans text-xs tracking-[0.25em] uppercase border border-white/80 text-white px-9 py-4 hover:bg-white hover:text-foreground transition-all duration-400"
        >
          View Collection
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-white/60">Scroll</span>
        <div className="w-px h-10 bg-white/40 animate-pulse" />
      </div>
    </section>
  )
}
