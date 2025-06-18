"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface SpaceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "cosmic" | "nebula" | "orbital"
  glow?: boolean
  hover?: boolean
  interactive?: boolean
}

const SpaceCard = React.forwardRef<HTMLDivElement, SpaceCardProps>(
  ({ className, variant = "default", glow = true, hover = true, interactive = false, children, ...props }, ref) => {
    const [isHovered, setIsHovered] = React.useState(false)

    const getVariantClasses = () => {
      switch (variant) {
        case "cosmic":
          return cn(
            "relative p-6 rounded-xl border-2 border-slate-700/50",
            "bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-md",
            "shadow-2xl shadow-slate-900/50",
            glow && "before:absolute before:inset-0 before:rounded-xl before:p-[2px]",
            glow && "before:bg-gradient-to-r before:from-sky-400 before:via-cyan-400 before:to-sky-400",
            glow && "before:-z-10 before:animate-pulse",
          )
        case "nebula":
          return cn(
            "relative p-6 rounded-xl border-2 border-purple-700/50",
            "bg-gradient-to-br from-purple-900/80 via-slate-900/80 to-blue-900/80 backdrop-blur-md",
            "shadow-2xl shadow-purple-900/50",
            glow && "before:absolute before:inset-0 before:rounded-xl before:p-[2px]",
            glow && "before:bg-gradient-to-r before:from-purple-400 before:via-pink-400 before:to-purple-400",
            glow && "before:-z-10 before:animate-pulse",
          )
        case "orbital":
          return cn(
            "relative p-6 rounded-xl border-2 border-slate-700/50",
            "bg-slate-900/60 backdrop-blur-md",
            "shadow-xl shadow-slate-900/30",
            glow && "before:absolute before:inset-0 before:rounded-xl before:p-[2px]",
            glow && "before:bg-gradient-to-r before:from-sky-400 before:via-cyan-400 before:to-sky-400",
            glow && "before:-z-10 before:animate-pulse",
          )
        default:
          return cn(
            "relative p-6 rounded-xl border border-slate-700/50",
            "bg-slate-900/50 backdrop-blur-sm",
            "shadow-lg shadow-slate-900/25",
          )
      }
    }

    const getHoverClasses = () => {
      if (!hover) return ""
      return cn(
        "transition-all duration-300",
        interactive && "cursor-pointer",
        "hover:border-slate-600/50",
        "hover:shadow-2xl hover:shadow-slate-900/50",
        "hover:-translate-y-1",
        variant === "cosmic" && "hover:shadow-sky-900/50",
        variant === "nebula" && "hover:shadow-purple-900/50",
      )
    }

    return (
      <div
        ref={ref}
        className={cn(getVariantClasses(), getHoverClasses(), className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        {/* Animated Stars Background */}
        {variant !== "default" && (
          <div className="absolute inset-0 overflow-hidden rounded-xl">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className={cn(
                  "absolute w-1 h-1 bg-white rounded-full",
                  isHovered ? "animate-star-twinkle" : "animate-pulse",
                )}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        )}

        {/* Content */}
        <div className="relative z-10">{children}</div>
      </div>
    )
  }
)

SpaceCard.displayName = "SpaceCard"

export { SpaceCard } 