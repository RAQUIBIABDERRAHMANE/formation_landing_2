"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Play, BookOpen, Users, Award, Zap, Target } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    src: "/placeholder-ehr5s.png",
    alt: "Salle de classe virtuelle moderne",
    title: "Apprentissage interactif",
    description: "Des cours en direct avec interaction en temps réel",
    icon: Users,
  },
  {
    id: 2,
    src: "/professional-instructor-teaching-coding-on-multipl.jpg",
    alt: "Instructeur professionnel enseignant",
    title: "Experts reconnus",
    description: "Apprenez avec les meilleurs professionnels du secteur",
    icon: Award,
  },
  {
    id: 3,
    src: "/student-working-on-laptop-with-code-and-certificat.jpg",
    alt: "Étudiant travaillant sur des projets",
    title: "Projets pratiques",
    description: "Développez vos compétences avec des projets concrets",
    icon: Target,
  },
  {
    id: 4,
    src: "/diverse-group-of-professionals-in-video-conference.jpg",
    alt: "Groupe d'apprentissage collaboratif",
    title: "Communauté active",
    description: "Échangez et collaborez avec d'autres apprenants",
    icon: Users,
  },
  {
    id: 5,
    src: "/mobile-app-interface-showing-course-progress-and-a.jpg",
    alt: "Interface mobile de progression",
    title: "Apprentissage mobile",
    description: "Continuez à apprendre partout, sur tous vos appareils",
    icon: Zap,
  },
  {
    id: 6,
    src: "/graduation-ceremony-with-digital-certificates-and-.jpg",
    alt: "Cérémonie de remise de certificats",
    title: "Certifications reconnues",
    description: "Obtenez des certifications valorisées par les employeurs",
    icon: BookOpen,
  },
]

export function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(0)

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <div className="space-y-12">
      {/* Main Featured Image */}
      <div className="relative">
        <motion.div
          key={selectedImage}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-1"
        >
          <div className="relative overflow-hidden rounded-xl bg-background">
            <img
              src={galleryImages[selectedImage].src || "/placeholder.svg"}
              alt={galleryImages[selectedImage].alt}
              className="w-full h-[500px] object-cover"
            />

            {/* Overlay with content */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute bottom-0 left-0 right-0 p-8 text-white"
            >
              <div className="flex items-center mb-4">
                {(() => {
                  const IconComponent = galleryImages[selectedImage].icon
                  return <IconComponent className="h-8 w-8 text-primary mr-3" />
                })()}
                <h3 className="text-2xl md:text-3xl font-bold">{galleryImages[selectedImage].title}</h3>
              </div>
              <p className="text-lg text-white/90 max-w-2xl">{galleryImages[selectedImage].description}</p>
            </motion.div>

            {/* Play button overlay */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md rounded-full p-6 text-white hover:bg-white/30 transition-colors"
            >
              <Play className="h-8 w-8 ml-1" />
            </motion.button>
          </div>
        </motion.div>

        {/* Navigation arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md rounded-full p-3 text-white hover:bg-white/30 transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md rounded-full p-3 text-white hover:bg-white/30 transition-colors"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Thumbnail Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {galleryImages.map((image, index) => {
          const IconComponent = image.icon
          return (
            <motion.button
              key={image.id}
              onClick={() => setSelectedImage(index)}
              className={`relative overflow-hidden rounded-xl transition-all duration-300 ${
                selectedImage === index
                  ? "ring-4 ring-primary scale-105"
                  : "hover:scale-105 opacity-70 hover:opacity-100"
              }`}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="aspect-video relative">
                <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="flex items-center mb-1">
                    <IconComponent className="h-4 w-4 text-white mr-1" />
                  </div>
                  <h4 className="text-white text-sm font-semibold truncate">{image.title}</h4>
                </div>
              </div>
            </motion.button>
          )
        })}
      </div>

      {/* Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-border"
      >
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
          <div className="text-muted-foreground">Cours disponibles</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50k+</div>
          <div className="text-muted-foreground">Étudiants actifs</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-primary mb-2">95%</div>
          <div className="text-muted-foreground">Taux de satisfaction</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
          <div className="text-muted-foreground">Support disponible</div>
        </div>
      </motion.div>
    </div>
  )
}
