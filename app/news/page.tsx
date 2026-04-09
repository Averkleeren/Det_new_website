import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function CadetLifePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
          <Image 
            src="/news/debrief.jpg" 
            alt="News" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">News</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Recent news and events from Detachment 550
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Approach Memorial Plaque</h2>
              
              {/* Approach Memorial Plaque */}
              <div className="mb-20">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <p className="text-lg text-secondary-foreground leading-relaxed">
                      The Approach and Beyond Foundation, LLC, the nonprofit which maintains the 
                      Approach, in conjunction with Rensselaer Polytechnic Institute and the Army, Navy, and 
                      Air Force ROTC programs, commissioned a memorial plaque to serve as a tribute to the 
                      bravery and sacrifice of Rensselaer Polytechnic Institute veterans and those killed and 
                      wounded in the line of duty since World War II. The plaque will be mounted on the 
                      Approach, adjacent to memorials for RPI alumni who died in service during the first and 
                      second world wars.
                    </p>
                    <p className="text-lg text-secondary-foreground leading-relaxed">
                      Funds are being raised to pay for the construction and installation of the plaque, which 
                      is going to be unveiled at the Approach on Veterans Day – November 11, 2026. For more
                      information or to make a donation visit{" "}
                      <a 
                        href="https://giving.rpi.edu/memorial-plaque-to-honor-fallen-rpi-classmates/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 underline font-medium"
                      >
                         this link
                      </a>
                      .
                    </p>
                  </div>

                    <div className="relative h-96 sm:h-[500px] rounded-xl overflow-hidden">
                      <Image 
                      src="/RPI Veterans.png" 
                      alt="Plaque" 
                      fill 
                      className="object-contain"
                      />
                    </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Contracting</h2>
              
              {/* Drill Teams - Featured Section with Grid */}
              <div className="mb-20">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <p className="text-lg text-secondary-foreground leading-relaxed">
                      This March, Det 550 contracted four sophomores at LLAB. After a 100% selection rate of all third class cadets for field training, four out of seven of these cadets were newly contracted. This is a pivotal step in their journey to become officers. This is the one time these cadets will take the oath of enlistment in their career before they later take the oath as an officer. Congratulations C/3C Blanco, C/3C Hascup, C/3C Laporto, and C/3C Verklereen!
                    </p>
                  </div>
                  <div className="w-full grid grid-cols-2 gap-4">
                    <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-lg">
                      <Image 
                        src="/news/com_photo.jpg" 
                        alt="commissioning" 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-lg">
                      <Image 
                        src="/news/com_2.jpg" 
                        alt="commissioning2" 
                        fill 
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
                <div className="space-y-4">
                <h3 className="text-3xl font-bold text-foreground">Cadet of the Month</h3>
                <p className="text-lg mb-4 text-secondary-foreground leading-relaxed">
                    Featuring the Cadets of the Month for March, we had a tie for GMC this March in this semester.
                </p>
                </div>
              
              {/* POC - Text Left, Image Right */}
              <div className="mb-16">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-primary">POC of the Month - Cadet Perala</h3>
                    <p className="text-lg text-secondary-foreground leading-relaxed">
                      Always supportive and leads by example in PT; effectively coordinates help events between Det 550 and RPI, benefiting the detachment financially.
                    </p>
                  </div>
                  <div className="relative h-64 lg:h-80 rounded-xl overflow-hidden shadow-lg">
                    <Image 
                      src="/perala.jpg" 
                      alt="POC1" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* GMC1 - Image Left, Text Right */}
              <div className="mb-16">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="relative h-64 lg:h-80 rounded-xl overflow-hidden shadow-lg order-2 lg:order-1">
                    <Image 
                      src="/news/lin_photo.jpg" 
                      alt="GMC1" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-4 order-1 lg:order-2">
                    <h3 className="text-2xl font-bold text-primary">GMC of the Month - Cadet Lin</h3>
                    <p className="text-lg text-secondary-foreground leading-relaxed">
                      Reliable guide, active in PT, takes initiative, demonstrates strong problem-solving; communicates well and organizes events like the GMC takeover.
                    </p>
                  </div>
                </div>
              </div>

              {/* GMC2 - Text Left, Image Right */}
              <div className="mb-16">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-primary">GMC of the Month - Cadet Verkleeren</h3>
                    <p className="text-lg text-secondary-foreground leading-relaxed">
                      Stepped up and helped develop the mentoring Discord server with roles and channels; improved the detachment website by adding a newsletter feature for prospective cadets.
                    </p>
                  </div>
                  <div className="relative h-64 lg:h-80 rounded-xl overflow-hidden shadow-lg">
                    <Image 
                      src="/verkleeren.jpg" 
                      alt="GMC2" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
