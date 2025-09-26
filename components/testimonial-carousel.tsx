"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Marie Dubois",
    role: "Développeuse Full-Stack",
    company: "TechCorp",
    content:
      "LearnPro a complètement transformé ma carrière. Les cours sont exceptionnels et la communauté très active. J'ai obtenu une promotion 6 mois après avoir commencé !",
    rating: 5,
    avatar: "/professional-woman-developer.png",
  },
  {
    name: "Thomas Martin",
    role: "Chef de Projet",
    company: "InnovateLab",
    content:
      "La qualité des formations est remarquable. L'approche pédagogique moderne et les outils interactifs rendent l'apprentissage vraiment efficace et plaisant.",
    rating: 5,
    avatar: "/professional-project-manager.png",
  },
  {
    name: "Sophie Laurent",
    role: "Data Scientist",
    company: "DataFlow",
    content:
      "J'ai essayé plusieurs plateformes, mais LearnPro se démarque vraiment. Les certifications sont reconnues et m'ont aidée à décrocher mon poste de rêve.",
    rating: 5,
    avatar: "/professional-woman-data-scientist.png",
  },
  {
    name: "Alexandre Petit",
    role: "Designer UX/UI",
    company: "CreativeStudio",
    content:
      "Les cours de design sont fantastiques ! Les projets pratiques et les retours des mentors m'ont permis de développer un portfolio solide.",
    rating: 5,
    avatar: "/professional-man-designer.jpg",
  },
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full bg-transparent">
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-primary" : "bg-muted"}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full bg-transparent">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="relative h-80 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Card className="h-full border-0 shadow-xl bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8 h-full flex flex-col justify-center text-center">
                <div className="flex justify-center mb-4">
                  {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>

                <blockquote className="text-lg md:text-xl text-foreground mb-6 italic leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-foreground">{testimonials[currentIndex].name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].role} • {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
