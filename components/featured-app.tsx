"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface FeaturedAppProps {
  title: string
  category: string
  image: string
  description: string
  url: string;
}

export default function FeaturedApp({ title, category, image, description, url }: FeaturedAppProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleLaunch = (e?: React.MouseEvent | React.TouchEvent) => {
    e?.preventDefault()
    e?.stopPropagation()
    window.open(url, '_blank')
  }

  return (
    <div
      className="relative overflow-hidden rounded-xl bg-slate-800/50 border border-slate-700 transition-all duration-300 h-full cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleLaunch}
      onTouchEnd={handleLaunch}
      style={{
        transform: isHovered ? "translateY(-5px)" : "translateY(0)",
        boxShadow: isHovered ? "0 10px 25px -5px rgba(0, 0, 0, 0.3)" : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        cursor: 'pointer',
        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', // Remove tap highlight on iOS
      }}
    >
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={200}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
        />
        <div className="absolute top-0 left-0 m-2 sm:m-3">
          <Badge className="text-xs sm:text-sm bg-sky-600 hover:bg-sky-700">{category}</Badge>
        </div>
      </div>
      <div className="p-3 sm:p-4 md:p-5">
        <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">{title}</h3>
        <p className="text-sm sm:text-base text-slate-300 mb-3 sm:mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <Button 
            size="sm" 
            className="text-xs sm:text-sm bg-sky-600 hover:bg-sky-700" 
            onClick={handleLaunch}
          >
            <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" /> Explore App
          </Button>
        </div>
      </div>
    </div>
  )
}