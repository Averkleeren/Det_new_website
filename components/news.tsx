"use client"

import { useState, useEffect } from "react"

export function News() {
  const newsItems = [
    {
      title: "Run to Remember 5K",
      date: "October 25, 2025",
      excerpt:
        "Run to Remember is our annual community event honoring fallen service members through a 5K run. All proceeds were donated to Mission 22, a non-profit aimed at preventing veteran suicide and supporting military families.",
      images: [
        "/news/Run2Rem2025.JPG",
        "/news/Run2Rem2025_2.JPG",
        "/news/Run2Rem2025_3.JPG"
      ],
    },
    {
      title: "Family Weekend",
      date: "October 24, 2025",
      excerpt:
        "Families gathered at RPI to experience a day in the life of AFROTC cadets. They Toured the campus and cadet lounge, met cadets and cadre, and participated in a BBQ at the 87' gym.",
      images: [
        "/news/Fam_weekend.JPG",
        "/news/fam_weekend2.JPG",
        "/news/fam_weekend3.JPG",
        "/news/fam_weekend4.JPG"
      ],
    },
    {
      title: "9/11 Memorial Stair Climb",
      date: "September 11, 2025",
      excerpt:
        "Cadets from all ROTC branches joined togething in climbing 2,211 steps in honor of the heroic firefighters who paid the ultimate sacrifice on September 11th, 2001. ",
      images: [
        "/news/stair_climb1.jpg",
        "/news/stair_climb2.JPG",
        "/news/stair_climb3.jpg"
      ],
    },
    
  ]

  // Create state for each news item's image rotation
  const [imageIndices, setImageIndices] = useState<number[]>([0, 0, 0])

  useEffect(() => {
    const intervals = newsItems.map((item, itemIndex) => {
      return setInterval(() => {
        setImageIndices((prevIndices) => {
          const newIndices = [...prevIndices]
          newIndices[itemIndex] = (newIndices[itemIndex] + 1) % item.images.length
          return newIndices
        })
      }, 5000) // Change image every 5 seconds
    })

    return () => {
      intervals.forEach(interval => clearInterval(interval))
    }
  }, [])

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">News</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article key={index}>
              <div className="aspect-video overflow-hidden rounded-sm mb-4 relative">
                {item.images.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={image || "/placeholder.svg"}
                    alt={item.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      imgIndex === imageIndices[index] ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>
              <time className="text-sm text-muted-foreground font-medium">{item.date}</time>
              <h3 className="text-xl font-bold mt-2 mb-3 text-foreground">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{item.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
