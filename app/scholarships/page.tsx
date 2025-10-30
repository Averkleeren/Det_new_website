import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import Image from "next/image";

export default function ScholarshipsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
          <Image 
            src="/scholarship.JPG" 
            alt="Cadre Head" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Scholarships & Benefits</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Invest in your future with comprehensive financial support
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Scholarship Types</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-primary">High School Scholarships</h3>
                  <p className="text-secondary-foreground mb-4">
                    Available to high school seniors planning to attend college. Covers full tuition and fees for 4
                    years.
                  </p>
                  <ul className="space-y-2 text-secondary-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Type 1: Full tuition at any institution</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Type 2: Tuition capped at $18,000/year</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Type 7: Tuition at in-state public institutions</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-primary">In-College Scholarships</h3>
                  <p className="text-secondary-foreground mb-4">
                    Available to current college students. Covers tuition for 2-3.5 years depending on when awarded.
                  </p>
                  <ul className="space-y-2 text-secondary-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Available to freshmen and sophomores</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Competitive selection process</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Based on GPA and fitness scores</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Additional Benefits</h2>
              <div className="space-y-4">
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">Monthly Stipend</h3>
                  <p className="text-secondary-foreground">
                    All contracted cadets receive a tax-free monthly stipend ranging from $300-$500 depending on year in
                    the program.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">Book Allowance</h3>
                  <p className="text-secondary-foreground">
                    Scholarship recipients receive up to $900 per year for textbooks and course materials.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">Flight Training</h3>
                  <p className="text-secondary-foreground">
                    Selected cadets can receive funding to get private pilot training through the Flight Training Scholarships.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">Summer Training</h3>
                  <p className="text-secondary-foreground">
                    Attend fully-funded summer training programs including Field Training and specialized
                    courses.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">Career Guarantee</h3>
                  <p className="text-secondary-foreground">
                    Upon graduation, receive a commission as a Second Lieutenant with guaranteed employment and
                    competitive salary.
                  </p>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Learn More</h2>
              <Card className="p-6">
                <p className="text-lg text-secondary-foreground mb-4">
                  Interested in learning more about AFROTC Scholarships? {" "}
                  <a 
                    href="https://www.afrotc.com/scholarships/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 underline font-medium"
                  >
                    click here
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
