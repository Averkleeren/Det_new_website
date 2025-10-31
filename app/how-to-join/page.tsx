import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function HowToJoinPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
          <Image 
            src="/htj.jpg" 
            alt="How to Join AFROTC" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">How to Join</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Start your journey to becoming an Air Force or Space Force officer
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto space-y-16">
            
            {/* Eligibility Requirements */}
            <section>
              <h2 className="text-4xl font-bold mb-8 text-foreground">Student Qualifications</h2>
              <Card>
                <CardHeader>
                  <CardTitle>Who Can Join?</CardTitle>
                  <CardDescription>General requirements to be eligible for AFROTC</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid md:grid-cols-2 gap-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Undergraduate Freshman with 4+ years until graduation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Undergraduate Sophomore with 3+ years until graduation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">First-Year Graduate student in a 3-year program (Two-Year programs do not qualify)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Enrolled in an accredited college that hosts or has a crosstown agreement with an AFROTC detachment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">United States citizen or actively pursuing citizenship obtainable by commissioning date</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Good academic standing (2.0+ GPA)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Good physical condition (medical approval required)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Of good moral character</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">14 years or older (must be 17 to receive a scholarship)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Committed to attending Air Science classes and Leadership Lab each semester until graduation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Application Process */}
            <section>
              <h2 className="text-4xl font-bold mb-8 text-foreground">Application Process</h2>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                        1
                      </div>
                      <CardTitle>Create a WINGS Account</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground">
                      Visit the <a href="https://wings.holmcenter.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">WINGS Home Portal</a> and click &ldquo;Apply for AFROTC&rdquo; under the ROTC section.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                        2
                      </div>
                      <CardTitle>Complete Required Sections and Forms</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground mb-4">Fill out application questions and questionnaire. Print, sign, and email to afrotc@rpi.edu:</p>
                    <ul className="space-y-2 text-foreground">
                      <li>• <a href="https://rpi.app.box.com/file/1238008872631?s=zx97ulaos964jueno62umgtsqt9ps7px" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Sports Physical Documentation (Form 28)</a></li>
                      <li>• <a href="https://rpi.app.box.com/file/1228774145456?s=qz55owz0lbgai921d0dfnztifrh7lchc" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Record of Emergency Data (DD Form 93)</a></li>
                      <li>• <a href="https://rpi.app.box.com/file/1228776458968?s=2m0kuwshbz4pbqk4qrc32tea1ls6mk6x" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Health Records Release (DD Form 2005)</a></li>
                      <li>• <a href="https://rpi.app.box.com/file/1238009331070?s=3oxhfd93rbc8h0qbvh2iio6874her8yu" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">USAF Drug and Alcohol Abuse Certificate</a></li>
                      <li>• <a href="https://rpi.app.box.com/file/1228773699532?s=w9q6tdl760ou7sskqtslrlljxou4x86d" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mail Access Authorization</a></li>
                      <li>• <a href="https://rpi.app.box.com/file/1228773816127?s=afvbovlm6rbphnvcamex4r8qgbyqsowe" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Release of Student Records</a></li>
                      <li>• <a href="https://rpi.app.box.com/file/1228773014585?s=tby56fdai4yvziy09dobq0zvsipvf42a" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Drug Testing Policy for ROTC Cadets</a></li>
                      <li>• <a href="https://rpi.app.box.com/file/1228774467553?s=asoigocukdcib5pzrf9zuoelu1nwvvio" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">DoDMETS Personal Information Form</a></li>
                      <li>• <a href="https://rpi.app.box.com/file/1228776252313?s=s7xcvoj5llki65pqtlbfrfpylzcrym4i" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Recruit and Trainee Prohibited Activities Acknowledgement Form</a></li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                        3
                      </div>
                      <CardTitle>Attend ACOP</CardTitle>                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground mb-4">Attend the AFROTC Cadet Orientation Program (ACOP). Bring required items:</p>
                    <ul className="space-y-2 text-foreground">
                      <li>• Government Photo ID</li>
                      <li>• SAT/ACT scores</li>
                      <li>• Transcripts from any college credit received</li>
                      <li>• Birth Certificate/Naturalization Certificate</li>
                      <li>• Social Security Card</li>
                      <li>• Selective Service Number (males only)</li>
                      <li>• DD Form 214 (prior service members only)</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Course Registration */}
            <section>
              <h2 className="text-4xl font-bold mb-8 text-foreground">Course Registration</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>RPI and Crosstown Students</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground">
                      All RPI and crosstown students must apply for Aerospace Studies (AS) classes through <a href="https://experience.elluciancloud.com/rpi224/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">SIS</a>. Attend classes in person at RPI.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Contact Section */}
            <section>
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
                    <p className="text-xl">Contact us today to begin your application process</p>
                    <p className="text-lg">Email: afrotc@rpi.edu | Phone: (518) 276-6236</p>
                  </div>
                </CardContent>
              </Card>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
