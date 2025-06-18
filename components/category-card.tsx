"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  TreesIcon as Plant,
  Building2,
  Globe,
  AlertTriangle,
  Activity,
  BookOpen,
  MapPin,
  Landmark,
  ArrowRight,
  type LucideIcon,
  ShieldEllipsisIcon,
  Shield,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface CategoryCardProps {
  title: string
  icon: string | LucideIcon // <-- allow both string and component
  description: string
  color: string
  applications?: number
  image?: string
  path?: string
}

export default function CategoryCard({
  title,
  icon,
  description,
  color,
  applications = Math.floor(Math.random() * 20) + 5,
  image,
  path, // Use the provided path if available
}: CategoryCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Function to create URL-friendly slugs
  const createSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/[^\w-]+/g, '') // Remove special characters
      .replace(/--+/g, '-') // Replace multiple hyphens with single hyphen
      .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
  }

  const getIcon = (): LucideIcon => {
    switch (icon) {
      case "plant":
        return Plant
      case "building-2":
        return Building2
      case "globe":
        return Globe
      case "Shield":
        return Shield
      case "activity":
        return Activity
      case "book-open":
        return BookOpen
      case "map-pin":
        return MapPin
      case "landmark":
        return Landmark
      default:
        return Globe
    }
  }

  const getColorClasses = () => {
    const colorMap: Record<string, { bg: string; text: string; hover: string; border: string; gradient: string }> = {
      green: {
        bg: "bg-green-500/10",
        text: "text-green-500",
        hover: "group-hover:bg-green-500/20",
        border: "border-green-500/20",
        gradient: "from-green-500/80 to-green-600/80",
      },
      blue: {
        bg: "bg-blue-500/10",
        text: "text-blue-500",
        hover: "group-hover:bg-blue-500/20",
        border: "border-blue-500/20",
        gradient: "from-blue-500/80 to-blue-600/80",
      },
      teal: {
        bg: "bg-teal-500/10",
        text: "text-teal-500",
        hover: "group-hover:bg-teal-500/20",
        border: "border-teal-500/20",
        gradient: "from-teal-500/80 to-teal-600/80",
      },
      red: {
        bg: "bg-red-500/10",
        text: "text-red-500",
        hover: "group-hover:bg-red-500/20",
        border: "border-red-500/20",
        gradient: "from-red-500/80 to-red-600/80",
      },
      pink: {
        bg: "bg-pink-500/10",
        text: "text-pink-500",
        hover: "group-hover:bg-pink-500/20",
        border: "border-pink-500/20",
        gradient: "from-pink-500/80 to-pink-600/80",
      },
      indigo: {
        bg: "bg-indigo-500/10",
        text: "text-indigo-500",
        hover: "group-hover:bg-indigo-500/20",
        border: "border-indigo-500/20",
        gradient: "from-indigo-500/80 to-indigo-600/80",
      },
      amber: {
        bg: "bg-amber-500/10",
        text: "text-amber-500",
        hover: "group-hover:bg-amber-500/20",
        border: "border-amber-500/20",
        gradient: "from-amber-500/80 to-amber-600/80",
      },
      purple: {
        bg: "bg-purple-500/10",
        text: "text-purple-500",
        hover: "group-hover:bg-purple-500/20",
        border: "border-purple-500/20",
        gradient: "from-purple-500/80 to-purple-600/80",
      },
      sky: {
        bg: "bg-sky-500/10",
        text: "text-sky-500",
        hover: "group-hover:bg-sky-500/20",
        border: "border-sky-500/20",
        gradient: "from-sky-500/80 to-sky-600/80",
      },
    }

    return colorMap[color] || colorMap.blue
  }

  const { bg, text, hover, border, gradient } = getColorClasses()

  let Icon: LucideIcon
  if (typeof icon === "string") {
    Icon = getIcon()
  } else {
    Icon = icon
  }

  // Use provided path or generate slug-based URL
  const href = path ? `/${path.replace('app/', '').replace('/page.tsx', '')}` : `/category/${createSlug(title)}`

  return (
    <Link href={href}>
      <div
        className={cn(
          "group relative h-[300px] rounded-xl border backdrop-blur-sm transition-all duration-500",
          "bg-slate-900/40 border-slate-700/50",
          isHovered ? "translate-y-[-5px] shadow-lg shadow-slate-900/50" : "shadow-md",
          "overflow-hidden",
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 transition-opacity duration-500"
          style={{ opacity: isHovered ? 0.9 : 0.3 }}
        >
          <Image
            src={image || "/placeholder.svg?height=400&width=600"}
            alt={title}
            fill
            className={cn("object-cover transition-transform duration-700", isHovered ? "scale-110" : "scale-100")}
          />
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br transition-opacity duration-500",
              gradient,
              isHovered ? "opacity-40" : "opacity-0",
            )}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-8 flex items-center justify-center h-full">
          <h3
            className={cn(
              "text-2xl font-bold transition-all duration-500 text-center",
              isHovered ? "text-white" : "text-white",
            )}
          >
            {title}
          </h3>
        </div>
        {/* Arrow Indicator */}
        <div className="absolute bottom-4 right-4 z-20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
          <ArrowRight className={cn("w-7 h-7", text, "bg-slate-900/70 rounded-full p-1 shadow-lg", isHovered ? "scale-110" : "scale-100")} />
        </div>
      </div>
    </Link>
  )
}