"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Aminata Diallo",
    business: "Boutique Mode Cotonou",
    image: "👩🏾",
    rating: 5,
    text: "Depuis que j'utilise Wa-Catalog, mes ventes ont augmenté de 300%. Les clients me trouvent facilement et je reçois des commandes tous les jours !",
  },
  {
    name: "Kofi Mensah",
    business: "TechStore Lomé",
    image: "👨🏿",
    rating: 5,
    text: "Le bot répond automatiquement aux questions des clients. Je peux me concentrer sur la livraison pendant que Wa-Catalog gère les demandes.",
  },
  {
    name: "Fatou Sow",
    business: "Cosmétiques & Beauté",
    image: "👩🏿",
    rating: 5,
    text: "Interface simple, résultats incroyables. Mes produits sont maintenant visibles par des milliers de personnes. Merci Wa-Catalog !",
  },
  {
    name: "Ibrahim Traoré",
    business: "Électronique Porto-Novo",
    image: "👨🏾",
    rating: 5,
    text: "J'ai doublé mon chiffre d'affaires en 2 mois. Les clients apprécient la rapidité des réponses et la facilité de recherche.",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header (animations removed) */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)] mb-4 text-balance">
            Ce Que Disent Nos <span className="text-primary">Vendeurs</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Rejoignez des centaines de vendeurs satisfaits qui transforment leur business
          </p>
  </div>

        {/* Testimonials Carousel (static, animations removed) */}
        <div className="relative max-w-4xl mx-auto">
          <div key={currentIndex}>
            <Card className="p-8 md:p-12">
                {/* Stars */}
                <div className="flex gap-1 mb-6 justify-center">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-lg md:text-xl text-center mb-8 leading-relaxed text-pretty">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-3xl">
                    {testimonials[currentIndex].image}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold font-[family-name:var(--font-poppins)]">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-sm text-muted-foreground">{testimonials[currentIndex].business}</div>
                  </div>
                </div>
              </Card>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button onClick={prev} variant="outline" size="icon" className="rounded-full bg-transparent">
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            <Button onClick={next} variant="outline" size="icon" className="rounded-full bg-transparent">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
