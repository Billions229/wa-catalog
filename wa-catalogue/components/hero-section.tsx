"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  const scrollToForm = () => {
    const element = document.getElementById("form")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12 md:pt-24 md:pb-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Sparkles size={16} />
              <span>Nouveau : Bot WhatsApp Intelligent</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-[family-name:var(--font-poppins)] leading-tight mb-6 text-balance">
              Le Google des produits et services sur <span className="text-primary">WhatsApp</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed text-pretty max-w-2xl mx-auto lg:mx-0">
              Multipliez vos ventes ou missions sans quitter WhatsApp. Ajoutez votre catalogue ou votre activité gratuitement et recevez des
              leads qualifiés dès aujourd'hui.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={scrollToForm}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 group"
              >
                Commencer Gratuitement
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button
                onClick={() => {
                  const element = document.getElementById("features")
                  if (element) element.scrollIntoView({ behavior: "smooth" })
                }}
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6"
              >
                Découvrir
              </Button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start"
            >
              <div>
                <div className="text-3xl font-bold font-[family-name:var(--font-poppins)] text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Vendeurs & Prestataires Actifs</div>
              </div>
              <div>
                <div className="text-3xl font-bold font-[family-name:var(--font-poppins)] text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Recherches/Jour</div>
              </div>
              <div>
                <div className="text-3xl font-bold font-[family-name:var(--font-poppins)] text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md overflow-hidden rounded-3xl">
              <video
                autoPlay
                muted
                loop
                playsInline
                crossOrigin="anonymous"
                className="w-full h-auto block rounded-3xl shadow-2xl bg-white"
                style={{ pointerEvents: "none", display: "block" }}
              >
                <source
                  src="https://res.cloudinary.com/dysfocdyw/video/upload/v1765740876/Screenrecorder-2025-12-14-20-30-55-908_uvcijv.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
