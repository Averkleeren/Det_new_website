export function Footer() {
  const footerSections = [
    {
      title: "About",
      links: [{name: "Mission", refs: "https://www.afrotc.com/about/what-defines-us/mission/"}, 
              {name: "History", refs: "https://www.afrotc.com/about/what-defines-us/history/"}, 
              {name: "Leadership", refs: "https://www.afrotc.com/about/more-than-an-education/leadership/"}],
    },

    {
      title: "Programs",
      links: [{name: "Scholarships", refs: "https://search.brave.com/search?q=afrotc+scholarships"}, 
              {name: "Training", refs: "https://www.afrotc.com/campus-life/courses/curriculum/"}, 
              {name: "Careers", refs: "https://www.airforce.com/careers"}],
    },
    {
      title: "Resources",
      links: [{name: "Cadet Handbook", refs: "https://pub-46545811d32149afaebfc16652be9b7a.r2.dev/Cadet_Handbook_v2.pdf"}, 
              {name: "Interest Form", refs: "https://webforms.rpi.edu/afrotc-information-request-form"}, 
              {name: "FAQ", refs: "/faq"}],
    },
    {
      title: "Connect",
      links: [{name: "Facebook", refs: "https://www.facebook.com/p/Air-Force-ROTC-Detachment-550-100070239636743/"}, 
              {name: "Instagram", refs: "https://www.instagram.com/det550/"}],
    }
  ]


  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.refs}
                      target={link.refs?.startsWith('http') ? '_blank' : undefined}
                      rel={link.refs?.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm hover:underline opacity-90 hover:opacity-100"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-3xl font-bold">DET 550</div>
            <div className="text-sm opacity-90 text-center md:text-right">
              <p>Air Force Reserve Officer Training Corps</p>
              <p className="mt-1">© 2025 Detachment 550. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
