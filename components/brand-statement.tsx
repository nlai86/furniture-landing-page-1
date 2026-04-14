"use client"

import { useFadeIn } from "@/hooks/use-fade-in"

export function BrandStatement() {
  const { ref, visible } = useFadeIn()

  return (
    <section className="py-32 md:py-40 px-6">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto text-center transition-all duration-1000 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted-foreground mb-10">
          Our Philosophy
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-[1.3] tracking-tight text-balance">
          We believe furniture is the{" "}
          <em>architecture of intimacy</em> — objects that hold memory,
          presence, and the quiet geometry of daily life.
        </h2>
        <div className="mt-12 flex justify-center">
          <div className="w-12 h-px bg-accent" />
        </div>
      </div>
    </section>
  )
}
