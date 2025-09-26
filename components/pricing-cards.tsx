"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star } from "lucide-react"

const plans = [
  {
    name: "Étudiant",
    price: "19",
    period: "/mois",
    description: "Parfait pour débuter votre apprentissage",
    features: [
      "Accès à 100+ cours",
      "Certificats de base",
      "Support communautaire",
      "Accès mobile",
      "Projets pratiques",
    ],
    popular: false,
    buttonText: "Commencer gratuitement",
  },
  {
    name: "Professionnel",
    price: "49",
    period: "/mois",
    description: "Idéal pour accélérer votre carrière",
    features: [
      "Accès à tous les cours",
      "Certificats professionnels",
      "Mentorat personnalisé",
      "Projets avancés",
      "Support prioritaire",
      "Accès aux masterclass",
      "Outils collaboratifs",
    ],
    popular: true,
    buttonText: "Essai gratuit 14 jours",
  },
  {
    name: "Entreprise",
    price: "99",
    period: "/utilisateur/mois",
    description: "Solution complète pour les équipes",
    features: [
      "Tout du plan Professionnel",
      "Tableau de bord admin",
      "Rapports détaillés",
      "Intégrations SSO",
      "Support dédié 24/7",
      "Formations sur mesure",
      "API complète",
    ],
    popular: false,
    buttonText: "Contacter les ventes",
  },
]

export function PricingCards() {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {plans.map((plan, index) => (
        <motion.div
          key={plan.name}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
          className="relative"
        >
          {plan.popular && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <Badge className="bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold">
                <Star className="h-3 w-3 mr-1" />
                Plus populaire
              </Badge>
            </div>
          )}

          <Card
            className={`h-full relative overflow-hidden ${
              plan.popular
                ? "border-primary shadow-2xl scale-105 bg-card/90 backdrop-blur-sm"
                : "border-border shadow-lg bg-card/50 backdrop-blur-sm"
            }`}
          >
            {plan.popular && <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />}

            <CardHeader className="text-center pb-8 relative z-10">
              <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
              <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
              <div className="flex items-baseline justify-center">
                <span className="text-4xl font-bold text-foreground">{plan.price}€</span>
                <span className="text-muted-foreground ml-1">{plan.period}</span>
              </div>
            </CardHeader>

            <CardContent className="relative z-10">
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center text-sm"
                  >
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  }`}
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
