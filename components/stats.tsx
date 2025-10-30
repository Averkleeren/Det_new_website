export function Stats() {
  const stats = [
    {
      number: "150+",
      label: "Active Cadets",
    },
    {
      number: "95%",
      label: "Commission Rate",
    },
    {
      number: "$45K",
      label: "Average Scholarship",
    },
    {
      number: "75+",
      label: "Years of Excellence",
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-foreground mb-2">{stat.number}</div>
              <div className="text-base md:text-lg text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
