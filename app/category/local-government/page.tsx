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
    description: "A digital platform for managing emergency situations at the district level, providing real-time data and coordination tools.",
    link: "https://gh.space.gov.rw/portal/apps/experiencebuilder/experience/?id=2563c3a878ea4771bb48d6da1e936fbe&page=Home",
    keywords: ["emergency", "management", "district", "coordination"],
  }
  
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
          src="/images/gov.jpg"
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
              <Image src="/images/gov.jpg" alt="Local Government" width={600} height={400} className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
        {/* Applications Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8">Available Applications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 text-xs font-medium bg-sky-500/20 text-sky-400 border border-sky-500/30 rounded-full">{service.category}</span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{service.title}</CardTitle>
                  <CardDescription className="text-slate-300">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
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