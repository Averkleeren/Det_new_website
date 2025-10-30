"use client"

import { useState, useEffect } from "react"

const heroImages = [
  "/ORI.JPG",
  "/Briefing.JPG",
  "/GLP.JPG"
]

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <img
            key={image}
            src={image || "/placeholder.svg"}
            alt="AFROTC Cadets"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance">DETACHMENT 550</h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed text-pretty">
            Forging Warrior Leaders
          </p>
        </div>
      </div>
    </section>
  )
}
