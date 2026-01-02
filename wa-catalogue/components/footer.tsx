import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
  // Footer with white background and dark text
  <footer className="bg-white text-slate-900 py-12">
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
              <span className="text-xl font-bold text-slate-900 font-[family-name:var(--font-poppins)]">Wa-Catalog</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Connectez acheteurs et vendeurs via WhatsApp. La solution de commerce conversationnel pour l'Afrique de
              l'Ouest.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-slate-900 font-[family-name:var(--font-poppins)] mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <a
                  href="https://kloo.me/bot-wa-catalogue"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  https://kloo.me/bot-wa-catalogue
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <a href="mailto:contact@innovyxworks.com" className="text-sm text-primary hover:underline">
                  contact@innovyxworks.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-slate-500" />
                <span className="text-slate-600">Cotonou, Bénin</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-slate-900 font-[family-name:var(--font-poppins)] mb-4">Liens Rapides</h3>
            <div className="space-y-2 text-sm text-slate-700">
              <div>
                  <a href="#features" className="text-slate-700 hover:text-primary transition-colors">
                  Fonctionnalités
                </a>
              </div>
              <div>
                  <a href="#testimonials" className="text-slate-700 hover:text-primary transition-colors">
                  Témoignages
                </a>
              </div>
              <div>
                  <a href="#faq" className="text-slate-700 hover:text-primary transition-colors">
                  FAQ
                </a>
              </div>
              <div>
                  <a href="#form" className="text-slate-700 hover:text-primary transition-colors">
                  Rejoindre
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Wa-Catalog. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
