"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Award, Zap, Shield, BarChart3, Headphones, Globe } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Cours interactifs",
    description: "Des milliers de cours avec vidéos HD, quiz et exercices pratiques pour un apprentissage optimal.",
  },
  {
    icon: Users,
    title: "Communauté active",
    description: "Échangez avec des experts et d'autres apprenants dans nos forums et groupes d'étude.",
  },
  {
    icon: Award,
    title: "Certifications reconnues",
    description: "Obtenez des certificats valorisés par les entreprises pour booster votre carrière.",
  },
  {
    icon: Zap,
    title: "IA personnalisée",
    description: "Notre IA adapte le contenu à votre rythme et style d'apprentissage pour maximiser vos résultats.",
  },
  {
    icon: Shield,
    title: "Sécurité garantie",
    description: "Vos données sont protégées avec un chiffrement de niveau bancaire et une conformité RGPD.",
  },
  {
    icon: BarChart3,
    title: "Suivi des progrès",
    description: "Tableaux de bord détaillés pour suivre votre progression et identifier vos points forts.",
  },
  {
    icon: Headphones,
    title: "Support 24/7",
    description: "Notre équipe d'experts est disponible 24h/24 pour vous accompagner dans votre apprentissage.",
  },
  {
    icon: Globe,
    title: "Accès mondial",
    description: "Apprenez où que vous soyez avec notre plateforme accessible sur tous vos appareils.",
  },
]

export function FeatureCards() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
        >
          <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <feature.icon className="h-8 w-8 text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
