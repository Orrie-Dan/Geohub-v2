"use client"

import { useState, useMemo, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, ArrowLeft, ExternalLink, Grid, List, X, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ScrollProgress } from "@/components/scroll-progress"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

// Agricultural application data
const agriculturalApps = [
  {
    id: 1,
    title: "Agriculture Land Mapping App",
    category: "agriculture",
    image: "/images/agr1.jpg",
    description: "Agricultural parcels with land area statistics, parcel counts, size classifications and planned land use",
    keywords: ["agriculture", "mapping", "land use", "GIS", "Rwanda", "farming", "sustainability"],
    link: "https://gh.space.gov.rw/portal/apps/experiencebuilder/experience/?id=6efa04bfc78648729ff1c6332ea08a07"
  },
  {
    id: 2,
    title: "Soil Information Mapping App",
    category: "Soil Management",
    image: "/images/soil.jpg", 
    description: "Monitors Soil profile nutrients and properties across the country",
    keywords: ["soil", "health", "pH", "moisture", "nutrients", "monitoring", "farmland"],
    link: "https://gh.space.gov.rw/portal/apps/dashboards/f3f886a80baf4b649dd3bbff0db6cf83"
  },
  {
    id: 3,
    title: "Agriculture Land Profiling and Crops Suitability App",
    category: "Crop Management",
    image: "/images/agr.jpg",
    description: "Dive into agricultural land characteristics with soil suitability assessment, productivity potential and optimal farming zones",
    keywords: ["crop", "disease", "detection", "diagnosis", "AI", "image recognition", "agriculture"],
    link: "https://gh.space.gov.rw/portal/apps/dashboards/cbf25115208844b3ba46732a110e8ac1"
  },
  {
    id: 4,
    title: "Animal Resources Distribution Mapping App",
    category: "Animal Resources",
    image: "/images/cow.jpg",
    description: "Displays livestock populations and animal product outputs, production volumes and resource composition analysis",
    keywords: ["animal", "resources", "mapping", "distribution", "GIS", "Rwanda", "livestock"],
    link: "https://gh.space.gov.rw/portal/apps/dashboards/e03c654ba8134456a164fd78138055d2"
  }
]

export default function AgriculturalApps() {
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'list'

  // Enhanced function to handle launching applications with better error handling
  const handleLaunchApp = useCallback((url: string, appTitle: string) => {
    try {
      // Ensure URL is valid
      if (!url || url.trim() === '') {
        alert(`Sorry, the link for "${appTitle}" is not available yet.`)
        return
      }
      
      // Open in new tab with security features
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
      
      // Check if popup was blocked
      if (!newWindow) {
        alert('Popup blocked. Please allow popups for this site and try again.')
      }
    } catch (error) {
      console.error('Error opening application:', error)
      alert(`Error opening "${appTitle}". Please try again.`)
    }
  }, [])

  // Function to handle "Learn More" - could navigate to detail page or show modal
  const handleLearnMore = useCallback((app: typeof agriculturalApps[number]) => {
    // For now, just launch the app. You can modify this to show a detailed modal or navigate to a detail page
    handleLaunchApp(app.link, app.title)
  }, [handleLaunchApp])

  // Simplified search function - only searches titles/names
  const searchApps = useCallback((query: string) => {
    if (!query.trim()) return agriculturalApps

    const searchTerm = query.toLowerCase()
    
    return agriculturalApps.filter(app => 
      app.title.toLowerCase().includes(searchTerm) ||
      app.description.toLowerCase().includes(searchTerm) ||
      app.category.toLowerCase().includes(searchTerm)
    )
  }, [])

  // Memoized filtered applications with enhanced search
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
          src="/images/agr1.jpg"
          alt="Agriculture"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Agriculture</h1>
            <p className="text-xl text-slate-200 max-w-3xl">
              Discover cutting-edge agricultural technology solutions to optimize farming operations, increase productivity, and promote sustainable agriculture in Rwanda.
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
              <h2 className="text-3xl font-bold text-white mb-6">Agriculture Applications</h2>
              <p className="text-lg text-slate-300 mb-6">
                Our agriculture applications help optimize farming, monitor soil and crop health, and manage animal resources. These tools provide essential data for sustainable agriculture across Rwanda.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-slate-300">
                  <MapPin className="h-5 w-5" />
                  <span>Land Mapping</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <MapPin className="h-5 w-5" />
                  <span>Soil Monitoring</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <MapPin className="h-5 w-5" />
                  <span>Crop Management</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <MapPin className="h-5 w-5" />
                  <span>Animal Resources</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/agr.jpg"
                alt="Agriculture"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Applications Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8">Available Applications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredApps.map((app, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors flex flex-col h-full">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={app.image}
                    alt={app.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 text-xs font-medium bg-sky-500/20 text-sky-400 border border-sky-500/30 rounded-full">
                      {app.category}
                    </span>
                  </div>
                </div>
                <CardHeader className="flex-1">
                  <CardTitle className="text-white">{app.title}</CardTitle>
                  <CardDescription className="text-slate-300">
                    {app.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <Button 
                    asChild 
                    className="w-full bg-sky-600 hover:bg-sky-700"
                  >
                    <Link href={app.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Open Application
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}