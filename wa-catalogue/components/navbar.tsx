"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  useEffect(() => {
    if (typeof document === "undefined") return
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white text-slate-900 ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative w-10 h-10">
              <Image
                src="https://res.cloudinary.com/dysfocdyw/image/upload/v1760459930/WaMarket_Store_3_scfjzv.png"
                alt="Wa-Catalog Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl md:text-2xl font-bold font-[family-name:var(--font-poppins)]">Wa-Catalog</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
            >
              Fonctionnalités
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
            >
              Témoignages
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
            >
              FAQ
            </button>
            <Button
              onClick={() => scrollToSection("form")}
              className="bg-primary text-primary-foreground hover:opacity-90"
            >
              Rejoindre
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setIsMobileMenuOpen((v) => !v)
            }}
            className="md:hidden p-2 text-slate-900 no-anim-hamburger"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? <X size={24} className="animate-none" /> : <Menu size={24} className="animate-none" />}
          </button>
        </div>
      </div>

      {/* Keep overlay and panel mounted to avoid mount/unmount click races */}
      <div
        className={`fixed inset-0 z-40 md:hidden bg-black/20 ${isMobileMenuOpen ? "block pointer-events-auto" : "hidden pointer-events-none"}`}
        onClick={() => setIsMobileMenuOpen(false)}
        style={{ transition: 'none' }}
      />

      <div
        className={`md:hidden fixed left-0 right-0 top-[var(--navbar-height)] bg-white border-t border-gray-200 overflow-auto z-50 max-h-[calc(100vh-var(--navbar-height))] ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
        onClick={(e) => e.stopPropagation()}
        aria-hidden={!isMobileMenuOpen}
        style={{ transition: 'none' }}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
          <button onClick={() => scrollToSection("features")} className="text-left py-2 text-slate-700 hover:text-slate-900 transition-all">
            Fonctionnalités
          </button>
          <button onClick={() => scrollToSection("testimonials")} className="text-left py-2 text-slate-700 hover:text-slate-900 transition-all">
            Témoignages
          </button>
          <button onClick={() => scrollToSection("faq")} className="text-left py-2 text-slate-700 hover:text-slate-900 transition-all">
            FAQ
          </button>
          <Button onClick={() => scrollToSection("form")} className="bg-primary text-primary-foreground w-full hover:opacity-90">
            Rejoindre
          </Button>
        </div>
      </div>
    </nav>
  )
}
