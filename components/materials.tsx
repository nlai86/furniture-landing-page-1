"use client"

import { useFadeIn } from "@/hooks/use-fade-in"

const materials = [
  {
    name: "Travertine",
    descriptor: "Quarried in Tivoli, Italy",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
  {
    name: "White Oak",
    descriptor: "Sustainably sourced, air-dried",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80",
  },
  {
    name: "Brushed Brass",
    descriptor: "Hand-finished, unlacquered",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    name: "Bouclé Fabric",
    descriptor: "Woven in Belgium",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
  },
  {
    name: "Honed Marble",
    descriptor: "Nero Marquina & Bianco Carrara",
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&q=80",
  },
]

export function Materials() {
  const { ref, visible } = useFadeIn()

  return (
    <section className="py-24 bg-secondary overflow-hidden">
      <div
        ref={ref}
        className={`px-6 md:px-10 max-w-screen-xl mx-auto mb-12 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted-foreground mb-3">
          Materials & Craft
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground tracking-tight">
          Made to Endure
        </h2>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-4 px-6 md:px-10 overflow-x-auto scrollbar-none pb-2">
        {materials.map((mat, i) => (
          <MaterialCard key={mat.name} {...mat} delay={i * 80} />
        ))}
      </div>
    </section>
  )
}

function MaterialCard({
  name,
  descriptor,
  image,
  delay,
}: {
  name: string
  descriptor: string
  image: string
  delay: number
}) {
  const { ref, visible } = useFadeIn(0.05)

  return (
    <div
      ref={ref}
      className={`flex-shrink-0 w-56 md:w-72 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="overflow-hidden aspect-[3/4] mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>
      <p className="font-serif text-lg font-light text-foreground">{name}</p>
      <p className="font-sans text-[11px] tracking-[0.15em] uppercase text-muted-foreground mt-1">
        {descriptor}
      </p>
    </div>
  )
}
