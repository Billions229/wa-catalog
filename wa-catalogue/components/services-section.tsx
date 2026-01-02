"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Sparkles, PartyPopper, Wifi } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Pour votre maison",
    items: [
      "Plomberie, électricité, climatisation",
      "Petit bricolage, sécurité & caméras",
      "Gardiennage, jardinage",
    ],
  },
  {
    icon: Sparkles,
    title: "Pour votre confort",
    items: [
      "Nettoyage pro, pressing à domicile",
      "Aide au déménagement, manutention",
    ],
  },
  {
    icon: PartyPopper,
    title: "Pour vos événements",
    items: [
      "Traiteur, décoration",
      "Organisation d'événements",
    ],
  },
  {
    icon: Wifi,
    title: "Pour votre vie numérique",
    items: [
      "WiFi & réseaux",
      "Dépannage informatique, cours d'informatique",
    ],
  },
]

export function ServicesSection() {
  const scrollToForm = () => {
    const element = document.getElementById("form")
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)] mb-4 text-balance">
            Des services pour toutes vos situations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Trouvez rapidement un prestataire fiable près de chez vous. Tout commence par un message sur WhatsApp.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full border-2 hover:border-primary/50 transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-[family-name:var(--font-poppins)] mb-3">{service.title}</h3>
                <ul className="text-muted-foreground space-y-1">
                  {service.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button onClick={scrollToForm} className="bg-primary text-primary-foreground">
            Je suis prestataire — m'inscrire
          </Button>
        </div>
      </div>
    </section>
  )
}
