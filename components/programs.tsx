import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Programs() {
  const programs = [
    {
      title: "SCHOLARSHIPS",
      description:
        "Full tuition scholarships available for qualified cadets. Cover tuition, fees, and provide monthly stipends.",
      image: "/awards.JPG",
      link: "/scholarships",
    },
    {
      title: "LEADERSHIP TRAINING",
      description:
        "Comprehensive leadership development through field training exercises, physical fitness, and academic excellence.",
      image: "/reporting.JPG",
      link: "/cadet-life",
    },
    {
      title: "CAREER OPPORTUNITIES",
      description:
        "Commission as a Second Lieutenant in the Air Force or Space Force with diverse career paths in aviation, space, cyber, and more.",
      image: "/CAP.jpg",
      link: "https://www.airforce.com/careers",
    },
  ]

  return (
    <section className="py-20 bg-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="group">
              <div className="bg-card rounded-sm overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1">
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-card-foreground">{program.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{program.description}</p>
                  <Link href={program.link}>
                    <Button variant="ghost" className="group/btn p-0 h-auto font-semibold">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
