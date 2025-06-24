"use client"

import { useState, useMemo, useCallback } from "react"
import { Search, ArrowLeft, ExternalLink, Grid, List, X, MapPin, Star, Users, Camera, Map, Navigation } from "lucide-react"
import Image from "next/image"
import Link from "next/link" 
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

// Tourism application data
const tourismApps = [
  
  {
    id: 1,
    title: "Parcels Surveying and Mapping Application",
    category: "Land Management",
    image: "/images/Land5.jpg",
    description: "An advanced surveying and mapping application for land parcels, utilizing high-resolution satellite imagery and GIS technology.",
    keywords: ["land", "surveying", "mapping", "GIS"],
    link: "https://esrirw.rw/portal/apps/dashboards/9adc66199226432699552b4ee0346a72",
  }
]

export default function LandApps() {
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'list'

  // Function to handle launching applications
  const handleLaunchApp = useCallback((link: string) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer')
    }
  }, [])

  // Simplified search function - only searches titles/names
  const searchApps = useCallback((query: string) => {
    if (!query.trim()) return tourismApps

    const searchTerm = query.toLowerCase()
    
    return tourismApps.filter(app => 
      app.title.toLowerCase().includes(searchTerm)
    )
  }, [])

  // Memoized filtered applications with title-only search
  const filteredApps = useMemo(() => {
    return searchApps(searchQuery)
  }, [searchQuery, searchApps])

  const clearSearch = useCallback(() => {
    setSearchQuery('')
  }, [])

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src="/images/land3.jpg"
          alt="Land Management"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-4">
              <Link href="/">
                <button className="text-white hover:bg-white/10 flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </button>
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Land Management</h1>
            <p className="text-xl text-slate-200 max-w-3xl">
              Enhance land management in Rwanda with advanced geospatial tools for mapping, surveying, and sustainable development.
            </p>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Category Description */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Land Applications</h2>
              <p className="text-lg text-slate-300 mb-6">
                Our land management applications support surveying, mapping, and sustainable land use. Leverage GIS and satellite imagery for better decision-making.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-slate-300"><MapPin className="h-5 w-5" /><span>Surveying</span></div>
                <div className="flex items-center gap-2 text-slate-300"><MapPin className="h-5 w-5" /><span>Mapping</span></div>
                <div className="flex items-center gap-2 text-slate-300"><MapPin className="h-5 w-5" /><span>GIS Analysis</span></div>
                <div className="flex items-center gap-2 text-slate-300"><MapPin className="h-5 w-5" /><span>Sustainable Use</span></div>
              </div>
            </div>
            <div className="relative">
              <Image src="/images/land4.jpg" alt="Land" width={600} height={400} className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
        {/* Applications Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8">Available Applications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredApps.map((app, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img src={app.image} alt={app.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 text-xs font-medium bg-sky-500/20 text-sky-400 border border-sky-500/30 rounded-full">{app.category}</span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{app.title}</CardTitle>
                  <CardDescription className="text-slate-300">{app.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <button onClick={() => handleLaunchApp(app.link)} className="w-full bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg flex items-center justify-center">
                    <ExternalLink className="h-4 w-4 mr-2" />Open Application
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}