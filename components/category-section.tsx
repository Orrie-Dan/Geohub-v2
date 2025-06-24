"use client"

import { useRef } from "react"
import { useRouter } from "next/navigation"
import FlippableCategoryCard from "@/components/flippable-category-card"
import CategoryCarousel from "@/components/category-carousel"

const categories = [
  {
    title: "Agriculture",
    icon: "plant",
    description: "Crop monitoring, soil analysis, and agricultural planning tools",
    color: "green",
    applications: 4,
    image: "/images/agr1.jpg",
    path: "/category/agriculture",
  },
  {
    title: "Infrastructure",
    icon: "building-2",
    description: "Urban planning, construction, and infrastructure management",
    color: "blue",
    applications:4,
    image: "/images/proj-2.jpeg",
    path: "/category/infrastructure",
  },
  {
    title: "Environment",
    icon: "globe",
    description: "Climate data, conservation, and environmental monitoring",
    color: "teal",
    applications: 4,
    image: "/images/prot-ar.jpg",
    path: "/category/environment",
  },
  {
    title: "Disaster Management",
    icon: "shield",
    description: "Early warning systems and disaster response planning",
    color: "red",
    applications: 6 ,
    image: "/images/dis.jpeg",
    path: "/category/disaster-management",
  },
  {
    title: "Health",
    icon: "activity",
    description: "Healthcare facility mapping and epidemic tracking",
    color: "pink",
    applications: 2,
    image: "/images/health4.jpg",
    path: "/category/health",
  },
  {
    title: "Education",
    icon: "book-open",
    description: "School mapping and educational resource distribution",
    color: "indigo",
    applications: 1,
    image: "/images/library.jpeg",
    path: "/category/education",
  },
  {
    title: "Land ",
    icon: "map-pin",
    description: "Land use planning and resource management",
    color: "amber",
    applications: 1,
    image: "/images/Land5.jpg",
    path: "/category/land",
  },
  {
    title: "Mining",
    icon: "hard-hat",
    description: "Mineral resource mapping and mining operations",
    color: "gray",
    applications: 1,
    image: "/images/mining1.jpg",
    path: "/category/mining",
  },
  {
    title: "Local Government",
    icon: "landmark",
    description: "Administrative boundaries and public service mapping",
    color: "purple",
    applications: 1,
    image: "/images/gov.jpg",
    path: "/category/local-government",
  },
  {
    title: "Population",
    icon: "user",
    description: "Demographic data and population distribution analysis",
    color: "orange",
    applications: 1,
    image: "/images/pop2.jpg",
    path: "/category/population",
  },
  {
    title: "Finance ",
    icon: "trending-up",
    description: "Financial services mapping",
    color: "yellow",
    applications: 1,
    image: "/images/finance.jpg",
    path: "/category/finance",
  },
  {
    title: "Trade",
    icon: "trending-up",
    description: "Market analysis and trade routes mapping",
    color: "yellow",
    applications: 1,
    image: "/images/market.png",
    path: "/category/trade",
  },
  
]

export default function CategorySection() {
  const router = useRouter()
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-slate-900/85 backdrop-blur-sm">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 drop-shadow-lg">Explore Categories</h2>
      <CategoryCarousel
        categories={categories}
        onCardClick={(path) => router.push(path)}
      />
    </div>
  )
}
