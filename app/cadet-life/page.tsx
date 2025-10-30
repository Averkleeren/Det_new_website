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
            src="/Tug_of_war.JPG" 
            alt="Cadet Life" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Cadet Life</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Experience leadership, camaraderie, and personal growth
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Weekly Schedule</h2>
              <Card className="p-6 mb-6">
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h3 className="text-xl font-bold mb-2 text-primary">Leadership Laboratory (LLAB)</h3>
                    <p className="text-secondary-foreground mb-2">
                      <strong>When:</strong> Tuesdays, 8:00 AM - 10:00 AM
                    </p>
                    <p className="text-secondary-foreground">
                      Hands-on leadership training where cadets practice drill and ceremony, learn military customs and
                      courtesies, and develop leadership skills through practical exercises.
                    </p>
                  </div>

                  <div className="border-b pb-4">
                    <h3 className="text-xl font-bold mb-2 text-primary">Physical Training (PT)</h3>
                    <p className="text-secondary-foreground mb-2">
                      <strong>When:</strong> Tuesdays & Thursdays, 6:00 AM - 7:00 AM
                    </p>
                    <p className="text-secondary-foreground">
                      Group fitness sessions focusing on cardiovascular endurance, muscular strength, and preparing for
                      the Air Force Physical Fitness Test.
                    </p>
                  </div>

                  <div className="pb-4">
                    <h3 className="text-xl font-bold mb-2 text-primary">Aerospace Studies Classes</h3>
                    <p className="text-secondary-foreground mb-2">
                      <strong>When:</strong> Varies by year group
                    </p>
                    <p className="text-secondary-foreground">
                      Academic courses covering Air Force history, leadership theory, national security, and preparation
                      for active duty service.
                    </p>
                  </div>
                </div>
              </Card>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-12 text-foreground">Training & Development</h2>
              
              {/* Base Visits - Text Left, Image Right */}
              <div className="mb-16">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-primary">Base Visits</h3>
                    <p className="text-lg text-secondary-foreground leading-relaxed">
                    Tour active Air Force and Space Force installations to see operations firsthand and meet with
                      officers in various career fields. Gain insight into real-world military operations and explore future
                      career opportunities.
                    </p>
                  </div>
                  <div className="relative h-64 lg:h-80 rounded-xl overflow-hidden shadow-lg">
                    <Image 
                      src="/cadet_life/Base_visit.JPG" 
                      alt="Base Visits" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* ODTs - Image Left, Text Right */}
              <div className="mb-16">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="relative h-64 lg:h-80 rounded-xl overflow-hidden shadow-lg order-2 lg:order-1">
                    <Image 
                      src="/cadet_life/Parachute.JPG" 
                      alt="ODTs" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-4 order-1 lg:order-2">
                    <h3 className="text-2xl font-bold text-primary">ODTs (Officer Development Training)</h3>
                    <p className="text-lg text-secondary-foreground leading-relaxed">
                      Attend trainings at the Air Force Academy 
                    </p>
                  </div>
                </div>
              </div>

              {/* ELLABs - Text Left, Image Right */}
              <div className="mb-16">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-primary">Extended LLABs</h3>
                    <p className="text-lg text-secondary-foreground leading-relaxed">
                      Extended leadership laboratory sessions that provide in-depth training on advanced military topics,
                      land navigation, or leadership preparation for field training and active duty.
                    </p>
                  </div>
                  <div className="relative h-64 lg:h-80 rounded-xl overflow-hidden shadow-lg">
                    <Image 
                      src="/cadet_life/ELLAB.jpg" 
                      alt="Extended LLAB" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-12 text-foreground">Organizations</h2>
              
              {/* Drill Teams - Featured Section with Grid */}
              <div className="mb-20">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  <div className="lg:w-1/3 space-y-6">
                    <h3 className="text-3xl font-bold text-primary">Drill Teams</h3>
                    <p className="text-lg text-secondary-foreground leading-relaxed">
                      Join our competitive drill teams including Unarmed Drill Team (UDT), Armed Drill Team (ADT), and Honor Guard. Compete at regional and national competitions while developing precision, discipline, and teamwork.
                    </p>
                  </div>
                  <div className="lg:w-2/3 grid grid-cols-2 gap-4">
                    <div className="relative h-72 rounded-xl overflow-hidden shadow-lg">
                      <Image 
                        src="/cadet_life/Drill.jpg" 
                        alt="Drill Teams" 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-72 rounded-xl overflow-hidden shadow-lg">
                      <Image 
                        src="/cadet_life/Color1.JPG" 
                        alt="Drill Teams" 
                        fill 
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Silver Wings & AAS - Combined Organization */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Silver Wings & Arnold Air Society</h3>
                  <p className="text-lg text-secondary-foreground leading-relaxed mb-4">
                    Join our professional development organizations: Silver Wings focuses on aerospace education and community service, while Arnold Air Society is the professional honor society for Air Force ROTC cadets. Both organizations emphasize service projects, leadership development, and embodying core values of integrity, service, and excellence.
                  </p>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="relative h-56 rounded-lg overflow-hidden shadow-lg">
                    <Image 
                      src="/cadet_life/SW1.jpg" 
                      alt="Silver Wings" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-56 rounded-lg overflow-hidden shadow-lg">
                    <Image 
                      src="/cadet_life/SW.JPG" 
                      alt="Silver Wings" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-56 rounded-lg overflow-hidden shadow-lg">
                    <Image 
                      src="/cadet_life/Casino1.jpg" 
                      alt="Arnold Air Society" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-56 rounded-lg overflow-hidden shadow-lg">
                    <Image 
                      src="/cadet_life/goofy.jpg" 
                      alt="Arnold Air Society" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-12 text-foreground">Activities</h2>
              
              {/* Taylor Trophy - Text Left, Image Right */}
              <div className="mb-16">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-primary">Taylor Trophy</h3>
                    <p className="text-lg text-secondary-foreground leading-relaxed">
                      An annual joint service fitness competition where cadets and cadre compete in events ranging from frisbee to relay races. The winner is 
                    </p>
                  </div>
                  <div className="relative h-64 lg:h-80 rounded-xl overflow-hidden shadow-lg">
                    <Image 
                      src="/cadet_life/Taylor_trophy.png" 
                      alt="Taylor Trophy" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* MillBall - Image Left, Text Right */}
              <div className="mb-16">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="relative h-64 lg:h-80 rounded-xl overflow-hidden shadow-lg order-2 lg:order-1">
                    <Image 
                      src="/cadet_life/millball.jpg" 
                      alt="MillBall" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-4 order-1 lg:order-2">
                    <h3 className="text-2xl font-bold text-primary">Military Ball</h3>
                    <p className="text-lg text-secondary-foreground leading-relaxed">
                      A formal evening event celebrating cadet achievements and Air Force traditions. Enjoy dinner, dancing,
                      and recognition ceremonies in a distinguished military atmosphere.
                    </p>
                  </div>
                </div>
              </div>

              {/* Run to Remember - Text Left, Image Right */}
              <div className="mb-16">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-primary">Run to Remember</h3>
                    <p className="text-lg text-secondary-foreground leading-relaxed">
                      A meaningful community event honoring fallen service members through a commemorative run. All funds raised throught this event are donated to a 
                      non-profit aimed at preventing veteran suicide.
                    </p>
                  </div>
                  <div className="relative h-64 lg:h-80 rounded-xl overflow-hidden shadow-lg">
                    <Image 
                      src="/cadet_life/R2R.JPG" 
                      alt="Run to Remember" 
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
