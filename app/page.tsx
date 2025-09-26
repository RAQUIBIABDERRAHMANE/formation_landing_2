"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Star, Users, ArrowRight, Menu, X, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { ParticleBackground } from "@/components/particle-background"
import { TypewriterText } from "@/components/typewriter-text"
import { LaptopMockup } from "@/components/laptop-mockup"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { PricingCards } from "@/components/pricing-cards"
import { FeatureCards } from "@/components/feature-cards"
import { ImageGallery } from "@/components/image-gallery"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <motion.div className="text-2xl font-bold text-primary" whileHover={{ scale: 1.05 }}>
            LearnPro
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Fonctionnalités
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">
              Témoignages
            </a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors">
              Tarifs
            </a>
            <Button variant="outline" className="mr-2 bg-transparent">
              Se connecter
            </Button>
            <Button className="bg-primary hover:bg-primary/90">Essai gratuit</Button>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-background border-t"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <a href="#features" className="block text-foreground hover:text-primary">
                Fonctionnalités
              </a>
              <a href="#testimonials" className="block text-foreground hover:text-primary">
                Témoignages
              </a>
              <a href="#pricing" className="block text-foreground hover:text-primary">
                Tarifs
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline">Se connecter</Button>
                <Button className="bg-primary hover:bg-primary/90">Essai gratuit</Button>
              </div>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleBackground />

        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <Badge className="mb-6 bg-accent/20 text-accent border-accent/30">Nouveau: Cours IA intégrés</Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              <TypewriterText
                text="Apprenez plus vite avec notre plateforme moderne"
                className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent"
              />
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty">
              Découvrez des milliers de cours interactifs, des outils d'apprentissage avancés et une communauté
              d'experts pour accélérer votre développement professionnel.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg animate-pulse-glow"
                >
                  Commencer maintenant
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg bg-transparent">
                  <Play className="mr-2 h-5 w-5" />
                  Voir la démo
                </Button>
              </motion.div>
            </div>

            <div className="flex items-center justify-center lg:justify-start mt-8 space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-500 mr-1" />
                <span>4.9/5 (2,847 avis)</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 text-primary mr-1" />
                <span>50,000+ étudiants</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <LaptopMockup />
          </motion.div>
        </div>

        {/* Trust Indicators */}
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Fonctionnalités qui font la différence</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Notre plateforme combine technologie avancée et pédagogie moderne pour vous offrir la meilleure expérience
              d'apprentissage.
            </p>
          </motion.div>

          <FeatureCards />
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
              Découvrez notre univers d'apprentissage
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Plongez dans un environnement d'apprentissage moderne où chaque détail est pensé pour votre réussite.
              Explorez nos espaces virtuels, rencontrez notre communauté et découvrez les outils qui feront la
              différence.
            </p>
          </motion.div>

          <ImageGallery />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Ce que disent nos étudiants</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Découvrez les témoignages de milliers d'apprenants qui ont transformé leur carrière grâce à LearnPro.
            </p>
          </motion.div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Choisissez votre plan</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Des options flexibles pour tous les besoins, des étudiants individuels aux grandes entreprises.
            </p>
          </motion.div>

          <PricingCards />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">LearnPro</h3>
              <p className="text-background/80 mb-4">
                La plateforme de formation en ligne qui révolutionne l'apprentissage.
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-5 w-5 text-background/60 hover:text-background cursor-pointer" />
                <Twitter className="h-5 w-5 text-background/60 hover:text-background cursor-pointer" />
                <Instagram className="h-5 w-5 text-background/60 hover:text-background cursor-pointer" />
                <Linkedin className="h-5 w-5 text-background/60 hover:text-background cursor-pointer" />
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Produit</h4>
              <ul className="space-y-2 text-background/80">
                <li>
                  <a href="#" className="hover:text-background">
                    Fonctionnalités
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background">
                    Tarifs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background">
                    Intégrations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Ressources</h4>
              <ul className="space-y-2 text-background/80">
                <li>
                  <a href="#" className="hover:text-background">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background">
                    Guides
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Entreprise</h4>
              <ul className="space-y-2 text-background/80">
                <li>
                  <a href="#" className="hover:text-background">
                    À propos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background">
                    Carrières
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background">
                    Presse
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm">© 2025 LearnPro. Tous droits réservés.</p>
            <div className="flex space-x-6 text-sm text-background/60 mt-4 md:mt-0">
              <a href="#" className="hover:text-background">
                Confidentialité
              </a>
              <a href="#" className="hover:text-background">
                Conditions
              </a>
              <a href="#" className="hover:text-background">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
