"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SpaceBackground } from "@/components/space-background"
import { SpaceCard } from "@/components/ui/space-card"
import { SpaceLoader } from "@/components/loading/space-loader"
import { SpaceButton } from "@/components/ui/space-button"

export default function SpaceThemeDemo() {
  const [loading, setLoading] = useState(false)
  const [selectedLoader, setSelectedLoader] = useState<"orbit" | "rocket" | "satellite" | "astronaut" | "blackhole" | "pulse">("orbit")

  const handleLoading = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <SpaceBackground enableParallax enableShootingStars enableNebula>
      <div className="min-h-screen p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link href="/" className="flex items-center text-sky-400 hover:text-sky-300 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl font-bold mb-2 space-text-glow">Space Theme Showcase</h1>
            <p className="text-slate-400 text-lg">
              Explore the cosmic design system with interactive elements and animations.
            </p>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <SpaceCard variant="cosmic" interactive>
              <h3 className="text-xl font-semibold mb-2 space-text-neon">Cosmic Card</h3>
              <p className="text-slate-400">A card with cosmic gradient and glowing effects.</p>
            </SpaceCard>

            <SpaceCard variant="nebula" interactive>
              <h3 className="text-xl font-semibold mb-2 space-text-cosmic">Nebula Card</h3>
              <p className="text-slate-400">A card with nebula-like colors and animations.</p>
            </SpaceCard>

            <SpaceCard variant="orbital" interactive>
              <h3 className="text-xl font-semibold mb-2 space-text-glow">Orbital Card</h3>
              <p className="text-slate-400">A card with orbital effects and subtle animations.</p>
            </SpaceCard>
          </div>

          {/* Loaders Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 space-text-glow">Loading Animations</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {["orbit", "rocket", "satellite", "astronaut", "blackhole", "pulse"].map((type) => (
                <SpaceCard
                  key={type}
                  variant="default"
                  interactive
                  onClick={() => setSelectedLoader(type as any)}
                  className={selectedLoader === type ? "ring-2 ring-sky-400" : ""}
                >
                  <div className="flex flex-col items-center space-y-4">
                    <SpaceLoader type={type as any} size="md" />
                    <span className="text-sm text-slate-400 capitalize">{type}</span>
                  </div>
                </SpaceCard>
              ))}
            </div>
          </div>

          {/* Interactive Demo */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 space-text-glow">Interactive Demo</h2>
            <SpaceCard variant="cosmic" className="p-8">
              <div className="flex flex-col items-center space-y-6">
                <SpaceLoader
                  type={selectedLoader}
                  size="lg"
                  color="cyan"
                  text="Loading..."
                  isLoading={loading}
                />
                <SpaceButton
                  variant="cosmic"
                  onClick={handleLoading}
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Trigger Loading"}
                </SpaceButton>
              </div>
            </SpaceCard>
          </div>

          {/* Typography Showcase */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 space-text-glow">Typography Effects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <SpaceCard variant="default">
                <h3 className="text-xl font-semibold mb-2 space-text-glow">Glowing Text</h3>
                <p className="text-slate-400">
                  Text with a subtle glow effect that adds depth and emphasis.
                </p>
              </SpaceCard>

              <SpaceCard variant="default">
                <h3 className="text-xl font-semibold mb-2 space-text-neon">Neon Text</h3>
                <p className="text-slate-400">
                  Text with a neon glow effect that creates a vibrant, energetic look.
                </p>
              </SpaceCard>

              <SpaceCard variant="default">
                <h3 className="text-xl font-semibold mb-2 space-text-cosmic">Cosmic Text</h3>
                <p className="text-slate-400">
                  Text with a cosmic gradient that shifts and flows like space itself.
                </p>
              </SpaceCard>
            </div>
          </div>
        </div>
      </div>
    </SpaceBackground>
  )
} 