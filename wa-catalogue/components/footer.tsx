import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    // Use the same primary background as navbar when scrolled: bg-background with a top border and primary accents
    <footer className="bg-background text-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="https://res.cloudinary.com/dysfocdyw/image/upload/v1760459930/WaMarket_Store_3_scfjzv.png"
                  alt="Wa-Catalog Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold font-[family-name:var(--font-poppins)]">Wa-Catalog</span>
            </div>
            <p className="text-sm text-background/80 leading-relaxed">
              Connectez acheteurs et vendeurs via WhatsApp. La solution de commerce conversationnel pour l'Afrique de
              l'Ouest.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold font-[family-name:var(--font-poppins)] mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-background/80">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+229 XX XX XX XX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>contact@wa-catalog.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Cotonou, Bénin</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold font-[family-name:var(--font-poppins)] mb-4">Liens Rapides</h3>
            <div className="space-y-2 text-sm text-background/80">
              <div>
                <a href="#features" className="hover:text-primary transition-colors">
                  Fonctionnalités
                </a>
              </div>
              <div>
                <a href="#testimonials" className="hover:text-primary transition-colors">
                  Témoignages
                </a>
              </div>
              <div>
                <a href="#faq" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </div>
              <div>
                <a href="#form" className="hover:text-primary transition-colors">
                  Rejoindre
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Wa-Catalog. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
