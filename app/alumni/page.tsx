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
      date: "April 28th, 2026",
      description: "Celebrate the end of semester accomplishments and witness the transition of cadet leadership during Det 550’s Change of Command and Awards Ceremony.",
    },
    {
      title: "Lt Col Miller's Retirement Ceremony",
      date: "May 2nd, 2026",
      description: "Alumni are encouraged to attend and reconnect with fellow graduates and current cadets during the celebration of former Detachment 550 Commander, Lt Col Jake Miller.",
    },
    {
      title: "Commissioning Ceremony",
      date: "May 15th, 2026",
      description: "Attend or participate in spring commissioning. All alumni and families welcome.",
    },
  ]

  const alumniSpotlight = [
    {
      name: "Captain Carmen A. Lucci",
      image: "/spotlight/capt-lucci.jpg",
      bio: "Captain Lucci was the first female cadet at RPI and commissioned in 1975 as a distinguished graduate with a Bachelor of Science in aeronautical engineering. She pursued a Master of Science from the University of Tennessee Space Institute before becoming the fourth woman to attend the U.S. Air Force Test Pilot School as a flight test engineer in Class 80B. Nominated as a NASA astronaut candidate in 1979, Lucci's ambitions were tragically cut short when she perished in a B-26 test mission crash on March 3, 1981, making her the first female flight test engineer to lose her life in such a role. Her legacy is honored through the dedication of the Carmen A. Lucci Control Room at the Test Pilot School in 2012, inspiring future generations with her tenacity and contributions to aerospace innovation.",
    },
    {
      name: "Lieutenant (Ret.) General L. Scott Rice",
      image: "/spotlight/ltgen-rice2.jpg",
      bio: "Lieutenant General Rice commissioned in 1980 as a distinguished graduate from Detachment 550 with a Bachelor of Science in industrial engineering, followed by a Master of Science in the same field from RPI in 1981. He became a command pilot with over 4,300 flight hours in aircraft like the F-111 and A-10, serving as a squadron commander, operations group commander, and wing commander in the Massachusetts Air National Guard. Rice advanced to The Adjutant General of Massachusetts, overseeing joint National Guard operations, before his 2016 appointment as Director of the Air National Guard at the Pentagon, where he shaped policies for over 107,000 personnel across the U.S. His distinguished career included commanding Air Force Forces in international exercises and earning awards such as the Distinguished Service Medal, Legion of Merit, and Bronze Star.",
    },
    {
      name: "Major General (Ret.) Paul G. Schafer",
      image: "/spotlight/majgen-schafer.jpg",
      bio: "Major General Schafer commissioned in 1979 as a distinguished graduate from RPI's AFROTC program with a cum laude Bachelor of Science in aeronautical engineering. He became a command pilot with over 3,000 flight hours, primarily in the A-10 Thunderbolt II, and flew more than 40 combat missions over Iraq during Operations Southern Watch and Desert Fox. Schafer commanded key units including the 332nd Air Expeditionary Group and the 355th Wing, and held high-level staff roles such as Director of Plans and Policy at U.S. European Command. His decorations include the Distinguished Service Medal, Defense Superior Service Medal with two oak leaf clusters, and the Lance P. Sijan Leadership Award.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <div className="relative h-[360px] flex items-center justify-center overflow-hidden">
          <Image src="/seniors.jpg" alt="Alumni" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Alumni</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">Stay connected. Give back. Lead the next generation.</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left column: Alumni Spotlight */}
            <div className="lg:col-span-2">
              <section>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Alumni Spotlight</h2>
                <div className="space-y-6">
                  {alumniSpotlight.map((alumni, idx) => (
                    <Card key={idx} className="overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        {/* Image Section */}
                        <div className="md:w-1/3 w-full relative h-64 md:h-auto md:min-h-[200px]">
                          <Image
                            src={alumni.image}
                            alt={alumni.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        {/* Bio Section */}
                        <div className="md:w-2/3 w-full p-6 flex flex-col justify-center">
                          <h3 className="text-2xl font-bold mb-4 text-primary">{alumni.name}</h3>
                          <p className="text-secondary-foreground leading-relaxed text-base md:text-lg">
                            {alumni.bio}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </section>
            </div>

            {/* Right column: Upcoming Events + Alumni Form */}
            <div className="lg:col-span-1 space-y-8">
              {/* Upcoming Events */}
              <section>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Upcoming Events</h2>
                <div className="space-y-6">
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

              {/* Alumni Database Form */}
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


