"use client"

import { motion } from "framer-motion"
import { Search, Zap, Shield, TrendingUp, Users, Globe } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: Search,
    title: "Recherche Intelligente",
    description: "Les clients trouvent vos produits instantanément via WhatsApp avec notre IA de recherche avancée.",
  },
  {
    icon: Zap,
    title: "Réponses Instantanées",
    description: "Notre bot répond 24/7 aux demandes clients, même pendant votre sommeil.",
  },
  {
    icon: Shield,
    title: "Sécurisé & Fiable",
    description: "Vos données et celles de vos clients sont protégées avec un chiffrement de bout en bout.",
  },
  {
    icon: TrendingUp,
    title: "Augmentez vos Ventes",
    description: "Atteignez des milliers de clients potentiels qui cherchent activement vos produits.",
  },
  {
    icon: Users,
    title: "Base Client Élargie",
    description: "Connectez-vous à une communauté grandissante d'acheteurs en Afrique de l'Ouest.",
  },
  {
    icon: Globe,
    title: "Portée Régionale",
    description: "Vendez au Bénin, Togo, Niger et dans toute la région CEDEAO depuis une seule plateforme.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)] mb-4 text-balance">
            Pourquoi Choisir <span className="text-primary">Wa-Catalog</span> ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Une solution complète pour transformer WhatsApp en votre meilleur vendeur
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/50">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-[family-name:var(--font-poppins)] mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
