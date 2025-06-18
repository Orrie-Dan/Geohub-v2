"use client"

import { useState, useEffect } from "react"
import { OrbitLoader } from "./orbit-loader"
import { RocketLoader } from "./rocket-loader"
import { SatelliteLoader } from "./satellite-loader"
import { AstronautLoader } from "./astronaut-loader"
import { ProgressLoader } from "./progress-loader"
import { LoadingContainer } from "./loading-container"
import { cn } from "@/lib/utils"

interface SpaceLoaderProps {
  className?: string
  type?: "orbit" | "rocket" | "satellite" | "astronaut" | "blackhole" | "pulse"
  size?: "sm" | "md" | "lg"
  color?: "blue" | "cyan" | "white" | "purple"
  isLoading?: boolean
  fullScreen?: boolean
  text?: string
  progress?: number
  showPercentage?: boolean
  indeterminate?: boolean
}

export function SpaceLoader({
  className,
  type = "orbit",
  size = "md",
  color = "blue",
  isLoading = true,
  fullScreen = false,
  text,
  progress = 0,
  showPercentage = true,
  indeterminate = false,
}: SpaceLoaderProps) {
  const [randomTip, setRandomTip] = useState("")

  const spaceTips = [
    "Earth is approximately 93 million miles from the sun",
    "A day on Venus is longer than a year on Venus",
    "The Great Red Spot on Jupiter is a storm that has lasted over 300 years",
    "Saturn's rings are made mostly of ice and rock",
    "There are more stars in the universe than grains of sand on Earth",
    "Light from the Sun takes about 8 minutes to reach Earth",
    "The Milky Way galaxy is about 100,000 light-years across",
    "The International Space Station orbits Earth every 90 minutes",
    "Mars has the largest volcano in our solar system, Olympus Mons",
    "Space is completely silent as there is no air to carry sound waves",
  ]

  useEffect(() => {
    if (isLoading) {
      const randomIndex = Math.floor(Math.random() * spaceTips.length)
      setRandomTip(spaceTips[randomIndex])
    }
  }, [isLoading])

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  }

  const colorClasses = {
    blue: "text-sky-400",
    cyan: "text-cyan-400",
    white: "text-white",
    purple: "text-purple-400",
  }

  const renderLoader = () => {
    switch (type) {
      case "rocket":
        return (
          <div className={`relative ${sizeClasses[size]} ${colorClasses[color]}`}>
            <div className="absolute inset-0 animate-rocket-orbit">
              <svg
                className="w-full h-full transform rotate-45"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
              </svg>
            </div>
          </div>
        )

      case "satellite":
        return (
          <div className={`relative ${sizeClasses[size]} ${colorClasses[color]}`}>
            <div className="absolute inset-0 animate-satellite-orbit">
              <svg
                className="w-full h-full"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                <path d="M12 8v-2" />
                <path d="M12 18v-2" />
                <path d="M8 12H6" />
                <path d="M18 12h-2" />
                <path d="M12 6a6 6 0 0 0-6 6" />
                <path d="M12 18a6 6 0 0 1 6-6" />
              </svg>
            </div>
          </div>
        )

      case "blackhole":
        return (
          <div className={`relative ${sizeClasses[size]} ${colorClasses[color]}`}>
            <div className="absolute inset-0 animate-spin">
              <div className="w-full h-full rounded-full border-4 border-current border-t-transparent animate-pulse" />
            </div>
            <div className="absolute inset-0 animate-ping">
              <div className="w-full h-full rounded-full border-2 border-current opacity-75" />
            </div>
          </div>
        )

      case "astronaut":
        return (
          <div className={`relative ${sizeClasses[size]} ${colorClasses[color]}`}>
            <div className="absolute inset-0 animate-float">
              <svg
                className="w-full h-full"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M12 12v8" />
                <path d="M8 16h8" />
                <path d="M8 20h8" />
                <path d="M12 12a4 4 0 0 0-4-4" />
                <path d="M12 12a4 4 0 0 1 4-4" />
              </svg>
            </div>
          </div>
        )

      case "pulse":
        return (
          <div className={`relative ${sizeClasses[size]} ${colorClasses[color]}`}>
            <div className="absolute inset-0 animate-pulse">
              <div className="w-full h-full rounded-full bg-current opacity-20" />
            </div>
            <div className="absolute inset-0 animate-ping">
              <div className="w-full h-full rounded-full bg-current opacity-75" />
            </div>
          </div>
        )

      case "orbit":
      default:
        return (
          <div className={`relative ${sizeClasses[size]} ${colorClasses[color]}`}>
            <div className="absolute inset-0 animate-spin">
              <div className="w-full h-full rounded-full border-4 border-current border-t-transparent" />
            </div>
            <div className="absolute inset-0 animate-ping">
              <div className="w-full h-full rounded-full border-2 border-current opacity-75" />
            </div>
          </div>
        )
    }
  }

  if (!isLoading) return null

  return (
    <LoadingContainer isLoading={isLoading} fullScreen={fullScreen} className={className}>
      <div className="flex flex-col items-center justify-center space-y-6">
        {renderLoader()}

        {text && <div className="text-slate-300 font-medium text-center">{text}</div>}

        {fullScreen && (
          <div className="text-xs text-slate-400 max-w-xs text-center mt-8 animate-pulse">{randomTip}</div>
        )}
      </div>
    </LoadingContainer>
  )
}
