"use client"

import { useFadeIn } from "@/hooks/use-fade-in"

const archiveItems = [
  {
    year: "2023",
    title: "Threshold Collection",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80",
  },
  {
    year: "2023",
    title: "The Quiet Room",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=600&q=80",
  },
  {
    year: "2022",
    title: "Meridian Series",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
  },
  {
    year: "2022",
    title: "Form & Ground",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80",
  },
  {
    year: "2021",
    title: "Origin Objects",
    image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&q=80",
  },
  {
    year: "2020",
    title: "Brutalist Domestic",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
]

export function Archive() {
  const { ref: headerRef, visible: headerVisible } = useFadeIn()

  return (
    <section id="archive" className="py-24 bg-secondary">
      <div className="px-6 md:px-10 max-w-screen-xl mx-auto">
        <div
          ref={headerRef}
          className={`flex items-end justify-between mb-14 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div>
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted-foreground mb-3">
              Past Work
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground tracking-tight">
              Archive
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:inline-block font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground border-b border-current pb-0.5 transition-colors"
          >
            Full Archive
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {archiveItems.map((item, i) => (
            <ArchiveCard key={item.title} {...item} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ArchiveCard({
  year,
  title,
  image,
  delay,
}: {
  year: string
  title: string
  image: string
  delay: number
}) {
  const { ref, visible } = useFadeIn(0.05)

  return (
    <div
      ref={ref}
      className={`group cursor-pointer transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="overflow-hidden aspect-[3/4] mb-3">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover saturate-50 group-hover:saturate-100 group-hover:scale-105 transition-all duration-700"
        />
      </div>
      <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-muted-foreground mb-1">
        {year}
      </p>
      <p className="font-serif text-sm font-light text-foreground leading-tight group-hover:opacity-70 transition-opacity">
        {title}
      </p>
    </div>
  )
}
