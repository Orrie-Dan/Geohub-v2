"use client"

import { useState, useMemo, useCallback } from "react"
import { Search, ArrowLeft, ExternalLink, Grid, List, X, MapPin, Heart, Activity, Users, Stethoscope } from "lucide-react"
import Link from "next/link" 
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Health application data
const healthApps = [
]

export default function HealthApps() {
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState('grid')
  const [imageErrors, setImageErrors] = useState(new Set())

  const handleImageError = useCallback((appId: number) => {
    setImageErrors(prev => new Set(prev).add(appId))
  }, [])

  const searchApps = useCallback((query: string) => {
    if (!query.trim()) return healthApps

    const searchTerm = query.toLowerCase()
    
    return healthApps.filter(app => 
      app.title.toLowerCase().includes(searchTerm)
    )
  }, [])

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
        <img
          src="/geohub/images/health4.jpg"
          alt="Health"
          className="w-full h-full object-cover"
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Health</h1>
            <p className="text-xl text-slate-200 max-w-3xl">
              Comprehensive health information systems to improve healthcare delivery, monitor public health, and support Rwanda's universal health coverage goals.
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
              <h2 className="text-3xl font-bold text-white mb-6">Health Applications</h2>
              <p className="text-lg text-slate-300 mb-6">
                Our health applications support disease monitoring, emergency management, and public health initiatives. Leverage real-time data and GIS for better healthcare outcomes.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-slate-300"><Stethoscope className="h-5 w-5" /><span>Disease Monitoring</span></div>
                <div className="flex items-center gap-2 text-slate-300"><Stethoscope className="h-5 w-5" /><span>Emergency Management</span></div>
                <div className="flex items-center gap-2 text-slate-300"><Stethoscope className="h-5 w-5" /><span>Public Health</span></div>
                <div className="flex items-center gap-2 text-slate-300"><Stethoscope className="h-5 w-5" /><span>Healthcare Access</span></div>
              </div>
            </div>
            <div className="relative">
              <img src="/images/disease.jpg" alt="Health" width={600} height={400} className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
        {/* Applications Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8">Available Applications</h3>
          {filteredApps.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredApps.map((app, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors flex flex-col h-full">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img src={app.image} alt={app.title} className="w-full h-full object-cover" />
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 text-xs font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-full">{app.category}</span>
                    </div>
                  </div>
                  <CardHeader className="flex-1">
                    <CardTitle className="text-white">{app.title}</CardTitle>
                    <CardDescription className="text-slate-300">{app.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <a
                      href={app.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg flex items-center justify-center"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Open Application
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 px-4">
              {/* Space-themed icon */}
              <div className="mb-6 text-6xl animate-pulse">🛰️</div>
              
              {/* Main message */}
              <h4 className="text-2xl font-bold text-white mb-4 text-center">
                Applications Coming Soon
              </h4>
              <p className="text-slate-300 text-center max-w-2xl mb-8">
                We're working on bringing you comprehensive health applications to improve healthcare delivery, 
                monitor public health, and support Rwanda's universal health coverage goals. Check back soon or explore other categories below.
              </p>
              
              {/* Related categories */}
              <div className="mb-8">
                <p className="text-slate-400 text-sm mb-4 text-center">Explore Related Categories:</p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Link href="/category/disaster-management">
                    <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white">
                      Disaster Management
                    </Button>
                  </Link>
                  <Link href="/category/environment">
                    <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white">
                      Environment
                    </Button>
                  </Link>
                  <Link href="/category/education">
                    <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white">
                      Education
                    </Button>
                  </Link>
                </div>
              </div>
              
              {/* Contact CTA */}
              <Button asChild className="bg-cyan-600 hover:bg-cyan-700">
                <Link href="mailto:info@space.gov.rw">
                  Contact Us
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}