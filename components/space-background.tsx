"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Image from "next/image"

interface SpaceBackgroundProps {
  children: React.ReactNode
  variant?: "stars" | "moon" | "astronaut" | "moon-landing"
  fixed?: boolean
  overlay?: boolean
  enableParallax?: boolean
  enableShootingStars?: boolean
  enableNebula?: boolean
}

export function SpaceBackground({ 
  children, 
  variant = "stars", 
  fixed = false, 
  overlay = true,
  enableParallax = true,
  enableShootingStars = true,
  enableNebula = true 
}: SpaceBackgroundProps) {
  const [opacity, setOpacity] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setOpacity(1)
  }, [])

  useEffect(() => {
    if (!enableParallax) return

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const x = (clientX / window.innerWidth - 0.5) * 20
      const y = (clientY / window.innerHeight - 0.5) * 20
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [enableParallax])

  const getImageSrc = () => {
    switch (variant) {
      case "moon":
        return "/images/moon.jpg"
      case "astronaut":
        return "/images/astronaut.jpeg"
      case "moon-landing":
        return "/images/moon-landing.jpeg"
      case "stars":
      default:
        return "/images/moon.jpg"
    }
  }

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={`absolute inset-0 z-0 transition-opacity duration-1000 ${fixed ? "fixed" : ""}`}
        style={{ opacity }}
      >
        {/* Base Background Image */}
        <Image
          src={getImageSrc() || "/placeholder.svg"}
          alt="Space background"
          fill
          priority
          className="object-cover"
          style={enableParallax ? {
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.1s ease-out'
          } : {}}
        />

        {/* Nebula Gradient Overlay */}
        {enableNebula && (
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20 animate-gradient-shift" />
        )}

        {/* Shooting Stars */}
        {enableShootingStars && (
          <div className="absolute inset-0">
            {[...Array(3)].map((_, i) => (
              <div
                key={`shooting-star-${i}`}
                className="absolute w-1 h-1 bg-white rounded-full animate-shooting-star"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
        )}

        {/* Regular Stars */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={`star-${i}`}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Overlay */}
        {overlay && <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px]"></div>}
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
