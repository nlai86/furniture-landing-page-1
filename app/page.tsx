import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { BrandStatement } from "@/components/brand-statement"
import { FeaturedPieces } from "@/components/featured-pieces"
import { Materials } from "@/components/materials"
import { InYourSpace } from "@/components/in-your-space"
import { Archive } from "@/components/archive"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BrandStatement />
      <FeaturedPieces />
      <Materials />
      <InYourSpace />
      <Archive />
      <FinalCTA />
      <Footer />
    </main>
  )
}
