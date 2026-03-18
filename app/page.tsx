import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Mission } from "@/components/mission"
import { Programs } from "@/components/programs"
import { News } from "@/components/news"
import { Footer } from "@/components/footer"
import { Newsletter } from "@/components/newsletter"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Mission />
      <Programs />
      <Newsletter />
      <Footer />
    </main>
  )
}
