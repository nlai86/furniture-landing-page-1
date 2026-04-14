"use client"

import { useFadeIn } from "@/hooks/use-fade-in"

const spaces = [
  {
    image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&q=80",
    caption: "The Lorenzen Residence, Oslo",
  },
  {
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    caption: "Studio Apartment, New York",
  },
  {
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80",
    caption: "The Nakamura Home, Kyoto",
  },
]

export function InYourSpace() {
  const { ref: headerRef, visible: headerVisible } = useFadeIn()

  return (
    <section className="py-24 px-6 md:px-10 max-w-screen-xl mx-auto">
      <div
        ref={headerRef}
        className={`text-center mb-16 transition-all duration-700 ${
          headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted-foreground mb-3">
          In Your Space
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground tracking-tight">
          Designed for Living
        </h2>
        <p className="font-sans text-sm text-muted-foreground mt-4 max-w-md mx-auto leading-relaxed">
          Each piece is conceived not as decoration, but as a presence —
          something to live alongside and grow fond of.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {spaces.map((space, i) => (
          <SpaceCard key={space.caption} {...space} delay={i * 120} />
        ))}
      </div>
    </section>
  )
}

function SpaceCard({
  image,
  caption,
  delay,
}: {
  image: string
  caption: string
  delay: number
}) {
  const { ref, visible } = useFadeIn(0.1)

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="overflow-hidden aspect-[3/4]">
        <img
          src={image}
          alt={caption}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>
      <p className="font-sans text-[11px] tracking-[0.15em] uppercase text-muted-foreground mt-3">
        {caption}
      </p>
    </div>
  )
}
