"use client"

import { useFadeIn } from "@/hooks/use-fade-in"

export function FinalCTA() {
  const { ref, visible } = useFadeIn()

  return (
    <section className="py-40 px-6">
      <div
        ref={ref}
        className={`max-w-xl mx-auto text-center transition-all duration-1000 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted-foreground mb-6">
          Commission a Piece
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight leading-[1.1] text-balance mb-8">
          Start a Conversation
        </h2>
        <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-12 max-w-sm mx-auto">
          Each Studio Form piece is made to order. We work closely with clients
          to ensure every object belongs exactly where it will live.
        </p>
        <a
          href="#contact"
          className="inline-block font-sans text-xs tracking-[0.25em] uppercase bg-foreground text-primary-foreground px-10 py-4 hover:bg-accent transition-colors duration-300"
        >
          Inquire
        </a>
      </div>
    </section>
  )
}
