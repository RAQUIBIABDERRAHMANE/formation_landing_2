import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "LearnPro - Formation en ligne moderne",
  description: "Plateforme de formation en ligne avec des cours interactifs et des outils d'apprentissage avancés",
  generator: "v0.app",
  keywords: "formation, cours en ligne, apprentissage, éducation, plateforme",
  authors: [{ name: "LearnPro" }],
  openGraph: {
    title: "LearnPro - Formation en ligne moderne",
    description: "Plateforme de formation en ligne avec des cours interactifs et des outils d'apprentissage avancés",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
