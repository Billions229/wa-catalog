"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Comment fonctionne Wa-Catalog ?",
    answer:
      "Wa-Catalog est un bot WhatsApp intelligent qui met en relation des clients avec des vendeurs et prestataires. Vous référencez vos produits et/ou services dans notre système, et quand un client recherche une solution via WhatsApp, notre bot lui présente automatiquement vos offres ou prestations avec vos coordonnées.",
  },
  {
    question: "Combien coûte le service ?",
    answer:
      "L'inscription et le référencement de base sont gratuits. Nous proposons également des plans premium avec des fonctionnalités avancées comme la mise en avant de vos produits/services et des statistiques détaillées. Contactez-nous pour plus de détails sur les tarifs.",
  },
  {
    question: "Dans quels pays Wa-Catalog est-il disponible ?",
    answer:
      "Wa-Catalog est actuellement disponible au Bénin, Togo, Niger, Burkina Faso, Côte d'Ivoire et dans plusieurs autres pays de la CEDEAO. Nous étendons constamment notre couverture régionale.",
  },
  {
    question: "Ai-je besoin de compétences techniques ?",
    answer:
      "Absolument pas ! Wa-Catalog est conçu pour être simple. Il vous suffit de remplir le formulaire d'inscription avec les informations sur votre boutique/activité et vos produits ou services. Notre équipe s'occupe du reste et vous guide à chaque étape.",
  },
  {
    question: "Comment les clients me contactent-ils ?",
    answer:
      "Quand un client est intéressé par vos produits ou services, le bot lui fournit votre numéro WhatsApp. Le client peut alors vous contacter directement pour finaliser la commande ou convenir d'une prestation. Vous gardez le contrôle total de vos ventes et missions.",
  },
  {
    question: "Puis-je modifier mes produits/services après inscription ?",
    answer:
      "Oui, vous pouvez mettre à jour vos produits, services, prix et informations à tout moment. Contactez notre support via WhatsApp ou email, et nous effectuerons les modifications rapidement.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-secondary/30">
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
            Questions <span className="text-primary">Fréquentes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Tout ce que vous devez savoir sur Wa-Catalog
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold font-[family-name:var(--font-poppins)] hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
