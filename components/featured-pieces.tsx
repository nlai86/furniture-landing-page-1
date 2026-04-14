"use client"

import { useFadeIn } from "@/hooks/use-fade-in"

const pieces = [
  {
    id: 1,
    name: "Monolith Lounge Chair",
    material: "Travertine & Bouclé",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80",
    size: "large",
  },
  {
    id: 2,
    name: "Arc Floor Lamp",
    material: "Brushed Brass",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    size: "small",
  },
  {
    id: 3,
    name: "Slab Coffee Table",
    material: "Honed Marble & Steel",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=700&q=80",
    size: "medium",
  },
  {
    id: 4,
    name: "Vessel Side Table",
    material: "White Oak",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=600&q=80",
    size: "small",
  },
]

function PieceCard({
  name,
  material,
  image,
  delay = 0,
}: {
  name: string
  material: string
  image: string
  delay?: number
}) {
  const { ref, visible } = useFadeIn(0.1)

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden cursor-pointer transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      {/* Reveal overlay */}
      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-500 flex items-end p-6">
        <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
          <p className="font-serif text-xl text-white font-light">{name}</p>
          <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-white/70 mt-1">
            {material}
          </p>
        </div>
      </div>
    </div>
  )
}

export function FeaturedPieces() {
  const { ref: titleRef, visible: titleVisible } = useFadeIn()

  return (
    <section id="collection" className="py-24 px-6 md:px-10 max-w-screen-xl mx-auto">
      {/* Section header */}
      <div
        ref={titleRef}
        className={`flex items-end justify-between mb-14 transition-all duration-700 ${
          titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div>
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted-foreground mb-3">
            Featured Pieces
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground tracking-tight">
            Current Collection
          </h2>
        </div>
        <a
          href="#"
          className="hidden md:inline-block font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground border-b border-current pb-0.5 transition-colors"
        >
          View All
        </a>
      </div>

      {/* Asymmetric grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
        {/* Large hero piece */}
        <div className="md:col-span-7 aspect-[4/5]">
          <PieceCard {...pieces[0]} delay={0} />
        </div>

        {/* Right column — stacked */}
        <div className="md:col-span-5 flex flex-col gap-4 md:gap-5">
          <div className="aspect-[4/3]">
            <PieceCard {...pieces[1]} delay={100} />
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4 md:gap-5">
            <div className="aspect-square">
              <PieceCard {...pieces[2]} delay={200} />
            </div>
            <div className="aspect-square">
              <PieceCard {...pieces[3]} delay={300} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
