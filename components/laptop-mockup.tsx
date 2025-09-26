"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Play, Pause, Volume2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LaptopMockup() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / 20
    const y = (e.clientY - rect.top - rect.height / 2) / 20
    setMousePosition({ x, y })
  }

  return (
    <motion.div
      className="relative animate-float"
      onMouseMove={handleMouseMove}
      style={{
        transform: `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
      }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
    >
      {/* Laptop Base */}
      <div className="relative bg-gray-800 rounded-2xl p-6 shadow-2xl">
        {/* Screen */}
        <div className="bg-black rounded-lg overflow-hidden relative aspect-video">
          {/* Video Content */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/30">
            <div className="absolute inset-4 bg-background rounded-lg overflow-hidden">
              {/* Mock Course Interface */}
              <div className="p-4 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold">Introduction à React</h3>
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <span>12:34 / 45:67</span>
                  </div>
                </div>

                {/* Video Player Area */}
                <div className="flex-1 bg-muted rounded-lg relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"
                    animate={{
                      background: isPlaying
                        ? [
                            "linear-gradient(45deg, rgba(139,92,246,0.1), rgba(168,85,247,0.1))",
                            "linear-gradient(135deg, rgba(168,85,247,0.1), rgba(139,92,246,0.1))",
                          ]
                        : "linear-gradient(45deg, rgba(139,92,246,0.1), rgba(168,85,247,0.1))",
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Button
                        size="lg"
                        className="rounded-full w-16 h-16 bg-primary/90 hover:bg-primary"
                        onClick={() => setIsPlaying(!isPlaying)}
                      >
                        {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-1" />}
                      </Button>
                    </motion.div>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="ghost">
                      <Volume2 className="h-4 w-4" />
                    </Button>
                    <div className="w-20 h-1 bg-muted rounded-full">
                      <div className="w-3/4 h-full bg-primary rounded-full" />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-xs">
                    <span className="px-2 py-1 bg-primary/20 text-primary rounded">HD</span>
                    <span className="px-2 py-1 bg-muted rounded">1.5x</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Keyboard */}
        <div className="mt-4 h-20 bg-gray-700 rounded-lg relative">
          <div className="absolute inset-2 grid grid-cols-12 gap-1">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="bg-gray-600 rounded-sm" />
            ))}
          </div>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl -z-10 animate-pulse-glow" />
    </motion.div>
  )
}
