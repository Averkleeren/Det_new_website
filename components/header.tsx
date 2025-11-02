"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "HOW TO JOIN", href: "/how-to-join" },
    { label: "SCHOLARSHIP AND BENEFITS", href: "/scholarships" },
    { label: "CADRE AND CONTACT", href: "/cadre" },
    { label: "CADET LIFE", href: "/cadet-life" },
    { label: "FAQ", href: "/faq" },
    { label: "ALUMNI", href: "/alumni" },
  ]

  return (
    <header className="w-full bg-primary text-primary-foreground">
      <div className="border-b border-primary-foreground/20">
        <div className="container mx-auto px-1 py-1">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center hover:opacity-90 transition-opacity p-0">
              <Image
                src="/cleaner_det_logo.png"
                alt="Det 550 Logo"
                width={120}
                height={120}
                className="h-32 w-auto object-contain"
              />
            </Link>

            {/* Social Media Icons */}
            <div className="flex items-center gap-1">
              <a
                href="https://www.facebook.com/p/Air-Force-ROTC-Detachment-550-100070239636743/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Det 550 Facebook"
              >
                <Button
                  variant="ghost"
                  className="text-primary-foreground hover:text-black hover:bg-transparent p-0 [&_svg]:h-6 [&_svg]:w-6"
                >
                  <Facebook />
                </Button>
              </a>
              <a
                href="https://www.instagram.com/det550/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Det 550 Instagram"
              >
                <Button
                  variant="ghost"
                  className="text-primary-foreground hover:text-black hover:bg-transparent p-0 [&_svg]:h-6 [&_svg]:w-6"
                >
                  <Instagram />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  className="text-primary-foreground hover:bg-primary-foreground/10 font-medium text-sm"
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-primary-foreground ml-auto"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  className="text-primary-foreground hover:bg-primary-foreground/10 font-medium justify-start w-full"
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
