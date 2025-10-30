"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"


export default function AlumniPage() {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeUNpWxT6Y--_MzcLjnymO41e7_AqtjpY97ZzKcqSjT51g3Cw/viewform?embedded=true"
  const googleFormOpenUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeUNpWxT6Y--_MzcLjnymO41e7_AqtjpY97ZzKcqSjT51g3Cw/viewform"

  const upcomingEvents = [
   
    {
      title: "Change of Command/Award Ceremony",
      date: "December 9th, 2025",
      description: "Celebrate the end of semester accomplishments and witness the transition of cadet leadership during Det 550’s Change of Command and Awards Ceremony.",
    },
    {
      title: "Military Ball",
      date: "TBD",
      description: "Alumni are encouraged to attend and reconnect with fellow graduates and current cadets.",
    },
    {
      title: "Commissioning Ceremony Support",
      date: "May 20, 2026",
      description: "Attend or participate in spring commissioning. All alumni and families welcome.",
    },
  ]

  const alumniNews = [
    {
      title: "Placeholder",
      excerpt: "Placeholder",
      image: "/CAP.jpg",
    },
    
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <div className="relative h-[360px] flex items-center justify-center overflow-hidden">
          <Image src="/Seniors.JPG" alt="Alumni" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Alumni</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">Stay connected. Give back. Lead the next generation.</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left column: Events + News */}
            <div className="lg:col-span-2 space-y-12">
              {/* Upcoming Events */}
              <section>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Upcoming Events</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {upcomingEvents.map((ev, idx) => (
                    <Card key={idx}>
                      <CardHeader>
                        <CardTitle>{ev.title}</CardTitle>
                        <CardDescription>{ev.date}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-secondary-foreground">{ev.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Alumni News */}
              <section>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Alumni News</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {alumniNews.map((n, idx) => (
                    <Card key={idx} className="overflow-hidden">
                      <div className="aspect-video overflow-hidden">
                        <img src={n.image} alt={n.title} className="w-full h-full object-cover" />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg">{n.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-secondary-foreground text-sm">{n.excerpt}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </div>

            {/* Right column: Alumni Form */}
            <div className="lg:col-span-1">
              <section>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Alumni Database</h2>
                <Card>
                  <CardHeader>
                    <CardTitle>Update Your Information</CardTitle>
                    <CardDescription>Help us keep the network current.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="w-full">
                      <iframe
                        src={googleFormUrl}
                        className="w-full h-[70vh] rounded-sm border"
                        loading="lazy"
                        title="Alumni Database Form"
                      />
                      <div className="mt-4">
                        <a href={googleFormOpenUrl} target="_blank" rel="noopener noreferrer">
                          <Button className="w-full">Open Form in New Tab</Button>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}


