import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const staff = [
  { name: "Lieutenant Colonel Ryan Coughlan", role: "Detachment Commander", img: "/staff/coughlan.png" },
  { name: "Captain Zachary Rutledge", role: "Operations Flight Commander", img: "/staff/zachary-rutledge.jpg" },
  { name: "Captain Jennifer Beckley", role: "Recruiting Officer", img: "/staff/jennifer-beckley.jpg" },
  { name: "Technical Sergeant Richard Major-Oliphant", role: "NCOIC, Administration", img: "/staff/major-oliphant.jpg" },
  { name: "Technical Sergeant Daryl Moua", role: "Training Instructor", img: "/staff/daryl-moua.jpg" },
];

export default function CadrePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
          <Image 
            src="/change_of_command.jpg" 
            alt="Cadre Head" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Cadre & Contact</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Meet our dedicated team of Air Force professionals
            </p>
          </div>
        </div>


        {/* Content Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-foreground">Our Leadership</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {staff.map((p) => (
                  <Card key={p.name} className="p-6">
                    <div className="relative mx-auto mb-4 aspect-[3/4] w-60 overflow-hidden rounded-lg border-2 border-primary/20 shadow-lg">
                      <Image src={p.img} alt={p.name} fill className="object-cover object-top" />
                    </div>

                    <CardContent className="p-0 text-center">
                      <h3 className="text-2xl font-bold mb-2 text-primary">{p.name}</h3>
                      <p className="text-lg font-semibold text-foreground">{p.role}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Contact Information</h2>
              <Card className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-primary">Detachment Office</h3>
                    <div className="space-y-2 text-secondary-foreground">
                      <p>
                        <strong>Address:</strong>
                      </p>
                      <p>AFROTC Detachment 550</p>
                      <p>Alumni Sports & Recreation Center</p>
                      <p>Room 321</p>
                      <p>1686 15th Street</p>
                      <p>Troy, NY 12180</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-primary">Office Hours</h3>
                    <div className="space-y-2 text-secondary-foreground">
                      <p>
                        <strong>Monday - Friday:</strong> 8:00 AM - 4:00 PM
                      </p>
                      <p>
                        <strong>Saturday - Sunday:</strong> Closed
                      </p>
                      <p className="mt-4">
                        <strong>Phone:</strong> (518) 276-6236
                      </p>
                      <p>
                        <strong>Email:</strong> afrotc@rpi.edu
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Visit Us</h2>
              <Card className="p-6">
                <p className="text-lg text-secondary-foreground mb-4">
                  Interested in learning more about AFROTC? Please fill out the{" "}
                  <a 
                    href="https://webforms.rpi.edu/afrotc-information-request-form" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 underline font-medium"
                  >
                    contact form
                  </a>
                  .
                </p>
              </Card>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
