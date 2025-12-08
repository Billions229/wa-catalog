"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Loader2, CheckCircle2, XCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Checkbox } from "@/components/ui/checkbox"

const formSchema = z.object({
  shopName: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  whatsappType: z.enum(["business", "simple"], {
    required_error: "Veuillez sélectionner le type de WhatsApp",
  }),
  phoneNumber: z
    .string()
    .min(8, "Le numéro de téléphone doit contenir au moins 8 chiffres")
    .regex(/^[\d\s+()-]+$/, "Le numéro de téléphone n'est pas valide"),
  city: z.string().min(2, "La ville est requise"),
  categories: z.array(z.string()).min(1, "Veuillez sélectionner au moins une catégorie"),
  keywords: z.string().min(5, "Veuillez ajouter des mots-clés pour vos produits"),
})

type FormData = z.infer<typeof formSchema>

const productCategories = [
  "Mode & Vêtements",
  "Technologie & Électronique",
  "Beauté & Cosmétique",
  "Art & Artisanat",
  "Alimentation & Boissons",
  "Services",
  "Maison & Décoration",
  "Sport & Fitness",
  "Santé & Bien-être",
  "Bijoux & Accessoires",
  "Enfants & Bébés",
  "Automobile",
  "Livres & Éducation",
  "Animaux",
]

export function FormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [successInfo, setSuccessInfo] = useState<{ shopName?: string; phoneNumber?: string } | null>(null)
  const { toast } = useToast()
  const [validationErrors, setValidationErrors] = useState<string[] | null>(null)

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      categories: [],
      whatsappType: undefined,
    },
  })

  const selectedCategories = watch("categories")

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)

    try {
      // Attach a human-readable timestamp computed in the user's browser
      const now = new Date()
      const submittedAtHuman = now.toLocaleString('fr-FR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      })

      const payload = { ...data, submittedAtHuman }

      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const json = await res.json()

      if (!res.ok) {
        console.error('Submit error', json)
        toast({
          title: 'Erreur lors de l\'envoi',
          description: json?.error || 'Impossible d\'envoyer le formulaire',
          variant: 'destructive',
        })
        return
      }

      if (json?.ok) {
        // Capture some info to show a personalized success message (no toast)
        setSuccessInfo({ shopName: data.shopName, phoneNumber: data.phoneNumber })
        setIsSuccess(true)
        reset()
        // Do NOT auto-close the success popup — user should close it explicitly
      } else {
        toast({
          title: "Erreur",
          description: json?.error || 'Une erreur est survenue.',
          variant: 'destructive',
        })
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="form" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)] mb-4 text-balance">
              Rejoignez <span className="text-primary">Wa-Catalog</span> Aujourd'hui
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Remplissez le formulaire ci-dessous et commencez à vendre plus dès demain
            </p>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 md:p-12">
              {isSuccess ? (
                <>
                  {/* Backdrop */}
                  <div
                    className="fixed inset-0 bg-black/40 z-40"
                    onClick={() => {
                      setIsSuccess(false)
                      setSuccessInfo(null)
                    }}
                  />

                  {/* Centered popup */}
                  <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.35 }}
                      className="max-w-xl w-full"
                    >
                      <Card className="p-6">
                        <div className="text-center">
                          <motion.div
                            initial={{ rotate: -8, scale: 0.85 }}
                            animate={{ rotate: 0, scale: 1 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            className="mx-auto mb-3 w-16 h-16 flex items-center justify-center rounded-full bg-primary/10"
                          >
                            <CheckCircle2 className="w-8 h-8 text-primary" />
                          </motion.div>

                          <h3 className="text-lg md:text-xl font-bold font-[family-name:var(--font-poppins)] mb-2">
                            Vous êtes désormais inscrit comme vendeur !
                          </h3>

                          <p className="text-sm text-muted-foreground max-w-md mx-auto px-2">
                            {successInfo?.shopName ? (
                              <>
                                Merci <span className="font-semibold">{successInfo.shopName}</span> — nous avons bien
                                reçu votre demande.
                              </>
                            ) : (
                              <>Merci — nous avons bien reçu votre demande.</>
                            )}
                          </p>

                          <p className="text-sm text-muted-foreground max-w-md mx-auto mt-2 px-2">
                            Pour accélérer la suite, rejoignez notre groupe WhatsApp des vendeurs :
                          </p>

                          <div className="mt-5 flex flex-col sm:flex-row justify-center gap-3">
                            <a
                              href="https://chat.whatsapp.com/KEXSEk8oNXC4me06ZvB2oV?mode=hqrt2"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block w-full sm:w-auto"
                            >
                              <Button className="bg-emerald-600 text-white w-full sm:w-auto">Rejoindre le groupe WhatsApp</Button>
                            </a>

                            <div className="flex gap-2">
                              <Button
                                variant="ghost"
                                onClick={() => {
                                  setIsSuccess(false)
                                  setSuccessInfo(null)
                                }}
                              >
                                Fermer
                              </Button>

                              <a href="/">
                                <Button className="bg-primary text-primary-foreground">Retour à l'accueil</Button>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  </div>
                </>
              ) : (
                <>
                  {validationErrors && (
                    <>
                      <div
                        className="fixed inset-0 bg-black/30 z-40"
                        onClick={() => setValidationErrors(null)}
                      />

                      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.25 }}
                          className="max-w-md w-full"
                        >
                          <Card className="p-4 border-destructive">
                            <div className="flex items-start gap-3">
                              <div className="mt-1">
                                <XCircle className="w-8 h-8 text-destructive" />
                              </div>
                              <div>
                                <h4 className="font-semibold">Veuillez corriger les erreurs suivantes</h4>
                                <ul className="mt-2 list-disc list-inside text-sm text-destructive">
                                  {validationErrors.map((m, i) => (
                                    <li key={i}>{m}</li>
                                  ))}
                                </ul>
                                <div className="mt-3 flex justify-end">
                                  <Button variant="ghost" onClick={() => setValidationErrors(null)}>
                                    Fermer
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </Card>
                        </motion.div>
                      </div>
                    </>
                  )}
                <form onSubmit={handleSubmit(onSubmit, (errs) => {
                  // Build a clear list of validation messages to show in a popup
                  const msgs = Object.values(errs).map((e: any) => e?.message).filter(Boolean) as string[]
                  setValidationErrors(msgs.length ? msgs : ["Veuillez remplir tous les champs requis correctement."])
                })} className="space-y-6">
                  {/* Shop Name */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Nom de votre boutique <span className="text-destructive">*</span>
                    </label>
                    <Input
                      {...register("shopName")}
                      placeholder="Ex: TechStore Cotonou"
                      className={errors.shopName ? "border-destructive" : ""}
                    />
                    {errors.shopName && <p className="text-sm text-destructive mt-1">{errors.shopName.message}</p>}
                  </div>

                  {/* WhatsApp Type */}
                  <div>
                    <label className="block text-sm font-medium mb-3">
                      Type de compte WhatsApp <span className="text-destructive">*</span>
                    </label>
                    <Controller
                      name="whatsappType"
                      control={control}
                      render={({ field }) => (
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-accent/50 cursor-pointer">
                            <Checkbox
                              id="business"
                              checked={field.value === "business"}
                              onCheckedChange={(checked) => {
                                if (checked) field.onChange("business")
                              }}
                            />
                            <label
                              htmlFor="business"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer flex-1"
                            >
                              J'ai un WhatsApp Business pour mes produits
                            </label>
                          </div>
                          <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-accent/50 cursor-pointer">
                            <Checkbox
                              id="simple"
                              checked={field.value === "simple"}
                              onCheckedChange={(checked) => {
                                if (checked) field.onChange("simple")
                              }}
                            />
                            <label
                              htmlFor="simple"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer flex-1"
                            >
                              J'ai un WhatsApp simple pour mes produits
                            </label>
                          </div>
                        </div>
                      )}
                    />
                    {errors.whatsappType && (
                      <p className="text-sm text-destructive mt-1">{errors.whatsappType.message}</p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Numéro WhatsApp <span className="text-destructive">*</span>
                    </label>
                    <Input
                      {...register("phoneNumber")}
                      placeholder="Ex: +229 53 21 10 30"
                      className={errors.phoneNumber ? "border-destructive" : ""}
                    />
                    {errors.phoneNumber && (
                      <p className="text-sm text-destructive mt-1">{errors.phoneNumber.message}</p>
                    )}
                    <p className="text-sm text-muted-foreground mt-2">Entrez votre numéro avec l'indicatif pays</p>
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Ville <span className="text-destructive">*</span>
                    </label>
                    <Input
                      {...register("city")}
                      placeholder="Ex: Cotonou, Lomé, Niamey..."
                      className={errors.city ? "border-destructive" : ""}
                    />
                    {errors.city && <p className="text-sm text-destructive mt-1">{errors.city.message}</p>}
                  </div>

                  {/* Categories - Multi-select */}
                  <div>
                    <label className="block text-sm font-medium mb-3">
                      Catégories de produits <span className="text-destructive">*</span>
                    </label>
                    <Controller
                      name="categories"
                      control={control}
                      render={({ field }) => (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 border rounded-lg">
                          {productCategories.map((category) => (
                            <div key={category} className="flex items-center space-x-2">
                              <Checkbox
                                id={category}
                                checked={field.value?.includes(category)}
                                onCheckedChange={(checked) => {
                                  const updatedCategories = checked
                                    ? [...(field.value || []), category]
                                    : field.value?.filter((c) => c !== category) || []
                                  field.onChange(updatedCategories)
                                }}
                              />
                              <label
                                htmlFor={category}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                              >
                                {category}
                              </label>
                            </div>
                          ))}
                        </div>
                      )}
                    />
                    {errors.categories && <p className="text-sm text-destructive mt-1">{errors.categories.message}</p>}
                    {selectedCategories && selectedCategories.length > 0 && (
                      <p className="text-sm text-muted-foreground mt-2">
                        {selectedCategories.length} catégorie(s) sélectionnée(s)
                      </p>
                    )}
                  </div>

                  {/* Keywords */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Mots-clés de vos produits <span className="text-destructive">*</span>
                    </label>
                    <Textarea
                      {...register("keywords")}
                      placeholder="Ex: iPhone, Samsung, ordinateur portable, chaussures Nike, parfum..."
                      rows={4}
                      className={errors.keywords ? "border-destructive" : ""}
                    />
                    {errors.keywords && <p className="text-sm text-destructive mt-1">{errors.keywords.message}</p>}
                    <p className="text-sm text-muted-foreground mt-2">
                      Listez les produits que vous vendez pour que les clients vous trouvent facilement
                    </p>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Inscription en cours...
                      </>
                    ) : (
                      "Rejoindre Wa-Catalog Gratuitement"
                    )}
                  </Button>
                </form>
                </>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
