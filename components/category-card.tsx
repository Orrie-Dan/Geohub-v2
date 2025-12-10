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
  icon: string | any
  description: string
  color: string
  applications?: number
  image?: string
  path?: string
}

export default function CategoryCard({
  title,
  image,
  path,
}: CategoryCardProps) {
  // Function to create URL-friendly slugs
  const createSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-')
      .replace(/^-+|-+$/g, '')
  }

  // Use provided path or generate slug-based URL
  const href = path ? `/geohub${path}` : `/geohub/category/${createSlug(title)}`

  return (
    <Link href={href}>
      <div className="group relative flex flex-col overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-2xl w-full">
        <div className="relative w-full h-64 flex items-center justify-center">
          <Image
            src={image ? `/geohub${image}` : "/placeholder.svg?height=400&width=600"}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
            <h3 className="relative z-20 text-3xl font-bold text-white text-center px-4 py-2 drop-shadow-lg">
              {title}           </h3>
          </div>
          <ArrowRight className="absolute bottom-3 right-3 z-20 w-7 h-7 text-white drop-shadow-lg bg-black/40 rounded-full p-1" />
        </div>
      </div>
    </Link>
  )
}