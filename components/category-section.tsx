"use client"

import { useRef, useState } from "react"
import { useRouter } from "next/navigation"
import FlippableCategoryCard from "@/components/flippable-category-card"
import CategoryCarousel from "@/components/category-carousel"
import CategoryCard from "@/components/category-card"
import { routePath } from "@/lib/utils"

const categories = [
  {
    title: "Agriculture",
    icon: "plant",
    description: "Crop monitoring, soil analysis, and agricultural planning tools",
    color: "green",
    image: "/images/agr1.jpg",
    path: "/category/agriculture",
  },
  {
    title: "Infrastructure",
    icon: "building-2",
    description: "Urban planning, construction, and infrastructure management",
    color: "blue",
    image: "/images/proj-2.jpeg",
    path: "/category/infrastructure",
  },
  {
    title: "Environment",
    icon: "globe",
    description: "Climate data, conservation, and environmental monitoring",
    color: "teal",
    image: "/images/prot-ar.jpg",
    path: "/category/environment",
  },
  {
    title: "Disaster Management",
    icon: "shield",
    description: "Early warning systems and disaster response planning",
    color: "red",
    image: "/images/dis.jpeg",
    path: "/category/disaster-management",
  },
  {
    title: "Health",
    icon: "activity",
    description: "Healthcare facility mapping and epidemic tracking",
    color: "pink",
    image: "/images/health-hub.png",
    path: "/category/health",
  },
  {
    title: "Education",
    icon: "book-open",
    description: "School mapping and educational resource distribution",
    color: "indigo",
    image: "/images/library.jpeg",
    path: "/category/education",
  },
  {
    title: "Land ",
    icon: "map-pin",
    description: "Land use planning and resource management",
    color: "amber",
    image: "/images/Land5.jpg",
    path: "/category/land",
  },
  {
    title: "Mining",
    icon: "hard-hat",
    description: "Mineral resource mapping and mining operations",
    color: "gray",
    image: "/images/mining1.jpg",
    path: "/category/mining",
  },
  {
    title: "Local Government",
    icon: "landmark",
    description: "Administrative boundaries and public service mapping",
    color: "purple",
    image: "/images/loc-gov.jpg",
    path: "/category/local-government",
  },
  {
    title: "Population",
    icon: "user",
    description: "Demographic data and population distribution analysis",
    color: "orange",
    image: "/images/population-infographic.jpeg",
    path: "/category/population",
  },
  {
    title: "Water Resources",
    icon: "droplets",
    description: "Lakes, rivers, wetlands and water supply mapping",
    color: "cyan",
    image: "/images/environment-alt.jpeg",
    path: "/category/water-resources",
  },
  {
    title: "Conservation",
    icon: "trees",
    description: "Protected areas and wildlife monitoring",
    color: "green",
    image: "/images/gorilla.jpg",
    path: "/category/conservation",
  },
  {
    title: "Trade",
    icon: "trending-up",
    description: "Market analysis and trade routes mapping",
    color: "yellow",
    image: "/images/market.png",
    path: "/category/trade",
  },
  
]

export default function CategorySection() {
  const router = useRouter()
  const [search, setSearch] = useState('')

  // Filter and sort categories A-Z
  const filteredCategories = categories.filter(category =>
    category.title.toLowerCase().includes(search.toLowerCase())
  )
  const sortedCategories = [...filteredCategories].sort((a, b) => a.title.localeCompare(b.title))

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-slate-900/85 backdrop-blur-sm">
      <CategoryCarousel
        categories={categories}
        onCardClick={(path) => router.push(routePath(path))}
      />
      {/* Category Cards Grid Below Carousel */}
      <div className="w-full mt-16 mb-8">
        <div className="flex justify-center w-full mb-4">
          <h3 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg text-center">Browse All Categories</h3>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center w-full max-w-2xl mx-auto mb-8 gap-2">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search category..."
            className="px-4 py-2 rounded-lg bg-slate-800 text-white placeholder-slate-400 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500 w-full max-w-xs"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
          {sortedCategories.map((category, idx) => (
            <CategoryCard key={idx} {...category} />
          ))}
        </div>
      </div>
    </div>
  )
}
