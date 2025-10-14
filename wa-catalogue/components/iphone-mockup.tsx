"use client"

import { motion } from "framer-motion"
import { Search, Send } from "lucide-react"

export function IPhoneMockup() {
  return (
    <div className="relative w-full max-w-[320px] mx-auto">
      {/* iPhone 15 Pro Frame */}
      <div className="relative bg-[#1f1f1f] rounded-[3rem] p-3 shadow-2xl">
        {/* Dynamic Island */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-20" />

        {/* Screen */}
        <div className="relative bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
          {/* WhatsApp Header */}
          <div className="bg-[#075E54] text-white px-4 py-3 flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="font-semibold text-sm">Wa-Catalog Bot</div>
              <div className="text-xs text-white/80">En ligne</div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="bg-[#ECE5DD] p-4 space-y-3 h-[calc(100%-120px)] overflow-y-auto">
            {/* User Message */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="flex justify-end"
            >
              <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none px-3 py-2 max-w-[80%] shadow-sm">
                <p className="text-xs text-gray-800">Bonjour, je cherche un iPhone 13</p>
                <div className="text-[10px] text-gray-500 text-right mt-1">14:32</div>
              </div>
            </motion.div>

            {/* Bot Response */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="flex justify-start"
            >
              <div className="bg-white rounded-lg rounded-tl-none px-3 py-2 max-w-[85%] shadow-sm">
                <p className="text-xs text-gray-800 mb-2">J'ai trouvé 3 vendeurs avec iPhone 13 disponible :</p>

                {/* Product Card 1 */}
                <div className="bg-gray-50 rounded-lg p-2 mb-2 border border-gray-200">
                  <div className="flex gap-2">
                    <div className="w-12 h-12 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center">
                      <span className="text-xl">📱</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] font-semibold text-gray-900 truncate">iPhone 13 128GB</div>
                      <div className="text-[10px] text-primary font-bold">450,000 FCFA</div>
                      <div className="text-[9px] text-gray-500">TechStore Cotonou</div>
                    </div>
                  </div>
                </div>

                {/* Product Card 2 */}
                <div className="bg-gray-50 rounded-lg p-2 mb-2 border border-gray-200">
                  <div className="flex gap-2">
                    <div className="w-12 h-12 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center">
                      <span className="text-xl">📱</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] font-semibold text-gray-900 truncate">iPhone 13 Pro 256GB</div>
                      <div className="text-[10px] text-primary font-bold">580,000 FCFA</div>
                      <div className="text-[9px] text-gray-500">Mobile Plus</div>
                    </div>
                  </div>
                </div>

                {/* Product Card 3 */}
                <div className="bg-gray-50 rounded-lg p-2 border border-gray-200">
                  <div className="flex gap-2">
                    <div className="w-12 h-12 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center">
                      <span className="text-xl">📱</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] font-semibold text-gray-900 truncate">iPhone 13 64GB</div>
                      <div className="text-[10px] text-primary font-bold">420,000 FCFA</div>
                      <div className="text-[9px] text-gray-500">Gadget World</div>
                    </div>
                  </div>
                </div>

                <div className="text-[10px] text-gray-500 text-right mt-2">14:32</div>
              </div>
            </motion.div>

            {/* Typing Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              className="flex justify-start"
            >
              <div className="bg-white rounded-lg rounded-tl-none px-4 py-2 shadow-sm">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  />
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Input Bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-3 py-2 flex items-center gap-2">
            <div className="flex-1 bg-gray-100 rounded-full px-3 py-2 flex items-center gap-2">
              <Search size={14} className="text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher..."
                className="flex-1 bg-transparent text-xs outline-none"
                disabled
              />
            </div>
            <button className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Send size={14} className="text-white" />
            </button>
          </div>
        </div>

        {/* Side Buttons */}
        <div className="absolute right-0 top-24 w-1 h-12 bg-[#1f1f1f] rounded-l" />
        <div className="absolute right-0 top-40 w-1 h-16 bg-[#1f1f1f] rounded-l" />
        <div className="absolute left-0 top-32 w-1 h-8 bg-[#1f1f1f] rounded-r" />
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10 scale-90" />
    </div>
  )
}
