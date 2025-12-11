"use client"

import { useState, useMemo, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, ArrowLeft, ExternalLink, Grid, List, X, MapPin, Users, Building, FileText, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ScrollProgress } from "@/components/scroll-progress"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

// Local government services data
const governmentServices = [
  {
    id: 1,
    title: "District Situation Room Application",
    category: " Emergency Management",
    image: "/images/dist.jpg",
    description: "App for district Real-time performance tracking and accountability insights",
    link: "https://gh.space.gov.rw/portal/apps/experiencebuilder/experience/?id=1c59d1e09b844e5b9d5d0763878fca1a",
    keywords: ["emergency", "management", "district", "coordination"],
  },
  {
    id: 2,
    title: "Rubavu Inspection Hub",
    category: "Building Inspection",
    image: "/images/Rubavu.png",
    description: "Digital platform for monitoring and inspecting illegal buildings in Rubavu district, ensuring compliance with building regulations and urban planning standards.",
    link: "https://gh.space.gov.rw/portal/apps/experiencebuilder/experience/?id=5957ad92854b4814abfa1195d7966779&views=Construction-Permit-Monitoring",
    keywords: ["inspection", "illegal buildings", "compliance", "urban planning", "rubavu", "monitoring"],
  },
  {
    id: 3,
    title: "Bugesera Inspection Hub",
    category: "Building Inspection",
    image: "/images/bugesera1.jpg",
    description: "Comprehensive building inspection system for Bugesera district to identify, track, and manage illegal construction activities and ensure proper urban development.",
    link: "https://gh.space.gov.rw/portal/apps/experiencebuilder/experience/?id=7934d3e5ad184ab6b0ce152b17b3b2b6&page=Bugesera-Inspection-Hub&views=Construction-Permit-Monitoring",
    keywords: ["inspection", "illegal buildings", "compliance", "urban planning", "bugesera", "construction"],
  },
  {
    id: 4,
    title: "Rwamagana Inspection Hub",
    category: "Building Inspection",
    image: "/images/rwamagana.jpg",
    description: "Comprehensive building inspection system for Kigali district to identify, track, and manage illegal construction activities and ensure proper urban development.",
    link: "https://gh.space.gov.rw/portal/apps/experiencebuilder/experience/?id=cd4306d6709f4e799e0208eefc144446&page=Bugesera-Inspection-Hub&views=Construction-Permit-Monitoring",
    keywords: ["inspection", "illegal buildings", "compliance", "urban planning", "kigali", "construction"],
  },
  
  
]

export default function LocalGovernmentPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'list'

  // Function to handle external link opening
  const handleOpenLink = useCallback((url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }, [])

  // Simplified search function - only searches titles/names
  const searchServices = useCallback((query: string) => {
    if (!query.trim()) return governmentServices

    const searchTerm = query.toLowerCase()
    
    return governmentServices.filter(service => 
      service.title.toLowerCase().includes(searchTerm)
    )
  }, [])

  // Memoized filtered services with title-only search
  const filteredServices = useMemo(() => {
    return searchServices(searchQuery)
  }, [searchQuery, searchServices])

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
          src="/images/loc-gov.jpg"
          alt="Local Government"
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Local Government</h1>
            <p className="text-xl text-slate-200 max-w-3xl">
              Access comprehensive digital government services designed to serve citizens, businesses, and communities across Rwanda's districts and sectors.
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
              <h2 className="text-3xl font-bold text-white mb-6">Local Government Applications</h2>
              <p className="text-lg text-slate-300 mb-6">
                Our local government applications help manage emergency situations, provide real-time data, and coordinate services for citizens and communities.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-slate-300"><MapPin className="h-5 w-5" /><span>Emergency Management</span></div>
                <div className="flex items-center gap-2 text-slate-300"><MapPin className="h-5 w-5" /><span>Coordination</span></div>
                <div className="flex items-center gap-2 text-slate-300"><MapPin className="h-5 w-5" /><span>Real-time Data</span></div>
                <div className="flex items-center gap-2 text-slate-300"><MapPin className="h-5 w-5" /><span>Community Services</span></div>
              </div>
            </div>
            <div className="relative">
              <Image src="/images/loc-gov.jpg" alt="Local Government" width={600} height={400} className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
        {/* Applications Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8">Available Applications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors flex flex-col h-full">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 text-xs font-medium bg-sky-500/20 text-sky-400 border border-sky-500/30 rounded-full">{service.category}</span>
                  </div>
                </div>
                <CardHeader className="flex-1">
                  <CardTitle className="text-white">{service.title}</CardTitle>
                  <CardDescription className="text-slate-300">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <Button asChild className="w-full bg-sky-600 hover:bg-sky-700">
                    <Link href={service.link} target="_blank" rel="noopener noreferrer">
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