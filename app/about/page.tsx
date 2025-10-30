import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
          <Image 
            src="/flag.JPG" 
            alt="Cadet Life" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">About DET 550</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Building leaders of character for the United States Air Force and Space Force
            </p>
          </div>
        </div>
        

        {/* Content Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Our History</h2>
              <p className="text-lg leading-relaxed text-secondary-foreground mb-4">
              Detachment 550 at Rensselaer Polytechnic Institute was established in 1949, only two years after the Army Air Corps
              officially became its own military branch, the United States Air Force. The detachment, under the command of Major 
              Edward M. Rex, organized a group of fewer than 100 cadets.
              </p>
              <p className="text-lg leading-relaxed text-secondary-foreground">
              Today, we combine RPI’s legacy of engineering excellence with the demands of modern aerospace and cyber domains. 
              Cadets are immersed in leadership labs, team training, and mission-oriented exercises that reflect our founding 
              emphasis on “warrior leaders” and service beyond the classroom. From the first class of 1949 to the newest aerospace 
              officers of today, our tradition is clear: develop professionals of character, intellect and skill who are ready to 
              lead in the skies or space.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Core Values</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="text-xl font-bold mb-3 text-primary">Integrity First</h3>
                  <p className="text-secondary-foreground">
                    We hold ourselves to the highest ethical standards, doing what is right even when no one is
                    watching.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="text-xl font-bold mb-3 text-primary">Service Before Self</h3>
                  <p className="text-secondary-foreground">
                    We put the mission and our team ahead of personal interests, serving with dedication and
                    selflessness.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="text-xl font-bold mb-3 text-primary">Excellence in All We Do</h3>
                  <p className="text-secondary-foreground">
                    We strive for continuous improvement and maintain the highest standards in everything we undertake.
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-16 mb-12" id="schools">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Our Schools</h2>
              <p className="text-lg text-secondary-foreground mb-8 max-w-3xl">
                Detachment 550 is hosted at Rensselaer Polytechnic Institute (RPI) in Troy, NY, and
                proudly serves students from partner cross-town institutions across the Capital Region.
                Cadets attend aerospace studies at RPI while completing degrees at their home universities.
              </p>

              {/* Host School */}
              <div className="bg-card border rounded-xl p-6 mb-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <span className="inline-block px-2 py-1 text-xs rounded-full bg-primary/10 text-primary font-semibold mb-2">
                      Host Institution
                    </span>
                    <h3 className="text-2xl font-bold">Rensselaer Polytechnic Institute</h3>
                    <p className="text-secondary-foreground">Troy, New York</p>
                  </div>
                  <a
                    href="https://www.rpi.edu"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-lg border px-4 py-2 text-sm font-medium hover:bg-accent"
                  >
                    Visit RPI
                  </a>
                </div>
              </div>

              {/* Cross-Town Schools */}
              <h3 className="text-xl font-semibold mb-4">Cross-Town Partners</h3>
              <p className="text-secondary-foreground mb-6">
                Students from these institutions participate in AFROTC at Det 550 while enrolled at their home campus.
              </p>

              {(() => {
                // TODO: Replace this list with your complete, up-to-date partner schools.
                const crosstown = [
                  { name: "Adirondack Community College (SUNY Adirondack)", city: "Queensbury, NY", url: "https://www.sunyacc.edu" },
                  { name: "Albany College of Pharmacy and Health Sciences", city: "Albany, NY", url: "https://www.acphs.edu" },
                  { name: "Albany Law School", city: "Albany, NY", url: "https://www.albanylaw.edu" },
                  { name: "Albany Medical College", city: "Albany, NY", url: "https://www.amc.edu" },
                  { name: "Columbia–Greene Community College", city: "Hudson, NY", url: "https://www.sunycgcc.edu" },
                  { name: "SUNY Empire State (Empire State University)", city: "Saratoga Springs, NY", url: "https://www.sunyempire.edu" },
                  { name: "Fulton–Montgomery Community College", city: "Johnstown, NY", url: "https://www.fmcc.edu" },
                  { name: "Hartwick College", city: "Oneonta, NY", url: "https://www.hartwick.edu" },
                  { name: "Hudson Valley Community College", city: "Troy, NY", url: "https://www.hvcc.edu" },
                  { name: "Massachusetts College of Liberal Arts", city: "North Adams, MA", url: "https://www.mcla.edu" },
                  { name: "Russell Sage College", city: "Troy/Albany, NY", url: "https://www.sage.edu" },
                  { name: "Sage College of Albany (historical)", city: "Albany, NY", url: "https://www.sage.edu" },
                  { name: "Schenectady County Community College (SUNY Schenectady)", city: "Schenectady, NY", url: "https://www.sunysccc.edu" },
                  { name: "Siena College", city: "Loudonville, NY", url: "https://www.siena.edu" },
                  { name: "Skidmore College", city: "Saratoga Springs, NY", url: "https://www.skidmore.edu" },
                ];

                return (
                  <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {crosstown.map((s) => (
                      <li key={s.name} className="bg-card border rounded-lg p-4">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h4 className="font-semibold leading-tight">{s.name}</h4>
                            <p className="text-sm text-secondary-foreground">{s.city}</p>
                          </div>
                          {s.url && (
                            <a
                              href={s.url}
                              target="_blank"
                              rel="noreferrer"
                              className="text-sm text-primary underline underline-offset-4 hover:opacity-90"
                            >
                              Website
                            </a>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                );
              })()}
            </section>


          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
