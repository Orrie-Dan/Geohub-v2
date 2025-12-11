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

// Environmental application data
const environmentalApps = [
  {
    id: 1,
    title: "Protected Area Mapping and Monitoring App",
    category: "Protected Areas",
    image: "/images/prot-ar.jpg",
    description: "Platform for protected area monitoring with conservation zones, wildlife incident tracking and standardized reporting workflows",
    keywords: ["protected areas", "mapping", "monitoring", "satellite imagery", "field data", "Rwanda"],
    launchUrl: "https://gh.space.gov.rw/portal/apps/experiencebuilder/experience/?id=935a93ef47564c488f837e84b9777dd9", 
  },
  {
    id: 2,
    title: "Biodiversity Mapping App",
    category: "Biodiversity",
    image: "/images/biod.jpg",
    description: "Visualizes Rwanda's biodiversity with taxonomic classifications, species distribution, geographic data and conservation status",
    keywords: ["biodiversity", "mapping", "monitoring", "species distribution", "ecosystem health", "hotspots"],
    launchUrl: "https://gh.space.gov.rw/portal/apps/experiencebuilder/experience/?id=3ab8b6b4c4274eafa6cbfffddee3c338",  
  },
  {
    id: 3,
    title: "Air Quality and Pollution Mapping App",
    category: "Air Monitoring",
    image: "/images/poll.jpg",
    description: "Monitors and visualizes air pollutant levels and trend analysis across the country",
    features: ["Real-time Monitoring", "Pollution Mapping", "Health Index", "Source Identification"],
    keywords: ["air", "quality", "pollution", "monitoring", "health", "urban", "emissions"],
    launchUrl: "https://gh.space.gov.rw/portal/apps/experiencebuilder/experience/?id=9106a95a8cc34866b24940c607015d28", 
  },
]

export default function EnvironmentalApps() {
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'list'

  // Simplified search function - only searches titles/names
  const searchApps = useCallback((query: string) => {
    if (!query.trim()) return environmentalApps

    const searchTerm = query.toLowerCase()
    
    return environmentalApps.filter(app => 
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

  // Handle launch button click
  const handleLaunch = useCallback((app: { launchUrl: string; title: string }) => {
    if (app.launchUrl && app.launchUrl !== '#') {
      window.open(app.launchUrl, '_blank', 'noopener,noreferrer')
    } else {
      // Handle apps without URLs - you can show a message or redirect to a coming soon page
      alert(`${app.title} will be available soon!`)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src="/images/environment.jpeg"
          alt="Environment"
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Environment</h1>
            <p className="text-xl text-slate-200 max-w-3xl">
              Advanced environmental monitoring and conservation tools to protect Rwanda's natural resources, track ecosystem health, and support sustainable development initiatives.
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
              <h2 className="text-3xl font-bold text-white mb-6">Environmental Applications</h2>
              <p className="text-lg text-slate-300 mb-6">
                Our environmental applications help monitor biodiversity, air quality, and protected areas. Leverage real-time data and GIS for sustainable management.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-slate-300"><MapPin className="h-5 w-5" /><span>Biodiversity</span></div>
                <div className="flex items-center gap-2 text-slate-300"><MapPin className="h-5 w-5" /><span>Air Quality</span></div>
                <div className="flex items-center gap-2 text-slate-300"><MapPin className="h-5 w-5" /><span>Protected Areas</span></div>
                <div className="flex items-center gap-2 text-slate-300"><MapPin className="h-5 w-5" /><span>Conservation</span></div>
              </div>
            </div>
            <div className="relative">
              <Image src="/images/prot-ar.jpg" alt="Environment" width={600} height={400} className="rounded-lg shadow-2xl" />
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
                  <Image src={app.image} alt={app.title} fill className="object-cover" />
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 text-xs font-medium bg-sky-500/20 text-sky-400 border border-sky-500/30 rounded-full">{app.category}</span>
                  </div>
                </div>
                <CardHeader className="flex-1">
                  <CardTitle className="text-white">{app.title}</CardTitle>
                  <CardDescription className="text-slate-300">{app.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <Button asChild className="w-full bg-sky-600 hover:bg-sky-700">
                    <Link href={app.launchUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />Open Application
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