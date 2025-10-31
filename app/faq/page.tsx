import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image";

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
          <Image 
            src="/faq.jpg" 
            alt="Cadre Head" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Get answers to common questions about AFROTC
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">General Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="what-is-afrotc">
                  <AccordionTrigger>What is Air Force ROTC?</AccordionTrigger>
                  <AccordionContent>
                    Air Force Reserve Officer Training Corps (AFROTC) is a college program that develops leaders for
                    service as officers in the U.S. Air Force and U.S. Space Force through academics, leadership labs,
                    physical training, and professional development.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="time-commitment">
                  <AccordionTrigger>What's the time commitment to RPI's ROTC program?</AccordionTrigger>
                  <AccordionContent>
                    Plan for about 5-7 hours per week: Leadership Laboratory (~2 hrs), Physical Training (~2 hrs),
                   Aerospace Studies (~1–2 hrs), and Extracurriculars (~1-2 hrs). Extra time may be needed for events, mentoring, and activities.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="majors">
                  <AccordionTrigger>Do I have to major in Aeronautical Science to become a pilot?</AccordionTrigger>
                  <AccordionContent>
                    No. All majors are eligible. Technical majors are in demand, but pilot selection evaluates the
                    whole-person concept: academics, fitness, aptitude, leadership, and needs of the Air Force.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="contact">
                  <AccordionTrigger>Who do I contact for more information?</AccordionTrigger>
                  <AccordionContent>
                    Email afrotc@rpi.edu or call (518) 276-6236. We’re happy to answer questions and schedule a visit.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Enrollment & Scholarships</h2>
              <Accordion type="multiple" className="w-full">
                <AccordionItem value="how-enroll">
                  <AccordionTrigger>How do I enroll?</AccordionTrigger>
                  <AccordionContent>
                    Contact Det 550 at afrotc@rpi.edu to receive onboarding steps. Create a WINGS account, complete
                    initial forms, and register for Aerospace Studies (AS) courses through SIS.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="join-late">
                  <AccordionTrigger>Can I enroll if I didn't take Air Force ROTC as a freshman?</AccordionTrigger>
                  <AccordionContent>
                    Yes. Many cadets join as sophomores or transfer students. We’ll map an academic plan to keep you on
                    track, which may include taking additional AS courses.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="after-sophomore">
                  <AccordionTrigger>Am I still eligible after my freshman and sophomore years?</AccordionTrigger>
                  <AccordionContent>
                    Potentially. Eligibility depends on projected time-to-graduate, medical, fitness, and program needs.
                    Contact us early so we can evaluate options.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="transfer-student">
                  <AccordionTrigger>I'm a transfer student with no ROTC experience. Should I join the GMC?</AccordionTrigger>
                  <AccordionContent>
                    Yes. Most transfers begin in the General Military Course (GMC) while we assess credit and timeline.
                    An advisor will tailor a plan for Field Training eligibility.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="scholarship-when">
                  <AccordionTrigger>When should I apply for a scholarship?</AccordionTrigger>
                  <AccordionContent>
                    High school seniors should apply to the HSSP window. In-college scholarships (ICSP/CMLA) are
                    awarded based on performance, academics, fitness, and detachment needs.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="scholarship-miss">
                  <AccordionTrigger>What if I don't get a scholarship?</AccordionTrigger>
                  <AccordionContent>
                    You can still join AFROTC and compete in-college. Many cadets earn scholarships after demonstrating
                    strong academic, fitness, and leadership performance.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="scholarship-room-board">
                  <AccordionTrigger>Does the scholarship cover room and board?</AccordionTrigger>
                  <AccordionContent>
                    Tuition and fees are covered (type-dependent) with a book allowance and stipend. Room and board are
                    generally not covered.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Training, Careers, and Service</h2>
              <Accordion type="multiple" className="w-full">
                <AccordionItem value="learn-to-fly">
                  <AccordionTrigger>Can I learn to fly?</AccordionTrigger>
                  <AccordionContent>
                    AFROTC does not provide flight lessons, but it is a commissioning path to compete for pilot slots.
                    Pilot candidates attend Undergraduate Pilot Training (UPT) after commissioning.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="pilot-training-length">
                  <AccordionTrigger>How long is pilot training and where?</AccordionTrigger>
                  <AccordionContent>
                    UPT is ~12–18 months depending on airframe and syllabus, conducted at Air Force training bases such
                    as Columbus AFB, Laughlin AFB, or Vance AFB.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="afoqt">
                  <AccordionTrigger>What is the Air Force Officer Qualifying Test (AFOQT)?</AccordionTrigger>
                  <AccordionContent>
                    The AFOQT is a standardized test measuring verbal, quantitative, and aviation-related aptitudes for
                    officer and rated career selection.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="afoqt-frequency">
                  <AccordionTrigger>How often can I take the AFOQT?</AccordionTrigger>
                  <AccordionContent>
                    You may take it twice lifetime. A minimum waiting period applies between attempts; your best
                    composite scores are considered.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="career-selection">
                  <AccordionTrigger>When do I know my Air Force job?</AccordionTrigger>
                  <AccordionContent>
                    During your junior year, you’ll compete for career fields based on academics, fitness, commander’s
                    ranking, aptitude scores, and service needs. Results are released prior to senior year.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="pt-requirements">
                  <AccordionTrigger>How much physical training is there?</AccordionTrigger>
                  <AccordionContent>
                    Detachments conduct PT ~2–3 times per week. You must meet Air Force fitness standards measured by a
                    periodic fitness assessment.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="uniform-issue">
                  <AccordionTrigger>How do I get my uniforms and when do I wear them?</AccordionTrigger>
                  <AccordionContent>
                    Uniforms are issued by the detachment after onboarding. You’ll wear them to Leadership Lab and other
                    specified events per guidance from cadre.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="service-commitment">
                  <AccordionTrigger>What's my obligation after commissioning?</AccordionTrigger>
                  <AccordionContent>
                    Most officers serve a 4-year active-duty commitment (longer for rated careers; pilots are typically
                    10 years after flight training). Exact obligations vary by career field and policy.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="benefits">
                  <AccordionTrigger>What are the benefits of Air Force service?</AccordionTrigger>
                  <AccordionContent>
                    Competitive pay, healthcare, tuition assistance, VA benefits, leadership experience, and worldwide
                    career opportunities across cutting-edge mission areas.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="orgs">
                  <AccordionTrigger>Are there any special organizations I can join?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer Arnold Air Society, Silver Wings, Honor Guard/Drill Teams, and even Intramural Sports Teams 
                  </AccordionContent>
                </AccordionItem>

              </Accordion>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Still Have Questions?</h2>
              <Card className="p-8 bg-primary text-primary-foreground text-center">
                <p className="text-xl mb-4">Contact our detachment for personalized answers</p>
                <p className="text-lg">Email: afrotc@rpi.edu | Phone: (518) 276-6236</p>
              </Card>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
