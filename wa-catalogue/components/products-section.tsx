"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Smartphone, Shirt, Home, Utensils } from "lucide-react"

const products = [
  {
    icon: Smartphone,
    title: "Électronique & accessoires",
    items: [
      "Téléphones, ordinateurs, tablettes",
      "Accessoires (écouteurs, chargeurs, coques)",
      "TV, audio, gaming",
    ],
  },
  {
    icon: Shirt,
    title: "Mode & accessoires",
    items: [
      "Vêtements homme/femme/enfant",
      "Chaussures, sacs, bijoux",
      "Beauté, parfums, soins",
    ],
  },
  {
    icon: Home,
    title: "Maison & décoration",
    items: [
      "Meubles, électroménager",
      "Ustensiles, literie, luminaires",
      "Rangement, entretien",
    ],
  },
  {
    icon: Utensils,
    title: "Alimentation & boissons",
    items: [
      "Produits frais, épicerie",
      "Plats cuisinés, pâtisserie",
      "Boissons, jus, café/thé",
    ],
  },
]

export function ProductsSection() {
  const scrollToForm = () => {
    const element = document.getElementById("form")
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="products" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)] mb-4 text-balance">
            Des catégories produits simples et efficaces
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Référencez vos produits avec des catégories claires pour apparaître plus facilement dans les recherches WhatsApp.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full border-2 hover:border-primary/50 transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <product.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-[family-name:var(--font-poppins)] mb-3">{product.title}</h3>
                <ul className="text-muted-foreground space-y-1">
                  {product.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button onClick={scrollToForm} className="bg-primary text-primary-foreground">
            Je suis vendeur — m'inscrire
          </Button>
        </div>
      </div>
    </section>
  )
}
