"use client"

import { useState, useMemo, useCallback } from "react"
import { Search, ArrowLeft, ExternalLink, Grid, List, X, MapPin, Star, Users, BookOpen, GraduationCap, Brain } from "lucide-react"
import Link from "next/link" 
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"


// Education application data
const educationApps = [
  {
    id: 1,
    title: "Schools Distribution and Profiling Mapping Application",
    category: "Mapping",
    image: "/images/school.jpg",
    description: "Maps school locations and distribution analysis for educational planning",
    keywords: ["k12", "curriculum", "primary", "secondary", "learning", "education", "rwanda"],
    link: "https://gh.space.gov.rw/portal/apps/experiencebuilder/experience/?id=e94e1792f13a4f1082ab8ed16c82c3ff" 
  }
]

export default function EducationApps() {
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'list'

  // Handle back to home navigation
  const handleBackToHome = useCallback(() => {
    // For demo purposes, this could navigate back or go to a home page
    // In a real app, you might use router.back() or navigate to '/'
    window.history.back()
  }, [])

  // Handle opening external links
  const handleOpenLink = useCallback((url: string) => {
    if (url) { 
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }, [])

  // Simplified search function - only searches titles/names
  const searchApps = useCallback((query: string) => {
    if (!query.trim()) return educationApps

    const searchTerm = query.toLowerCase()
    
    return educationApps.filter(app => 
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
        <img
          src="/geohub/images/education.jpeg"
          alt="Education"
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Education</h1>
            <p className="text-xl text-slate-200 max-w-3xl">
              Empowering Rwanda's future through innovative digital education solutions, from early childhood to lifelong learning opportunities.
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
              <h2 className="text-3xl font-bold text-white mb-6">Education Applications</h2>
              <p className="text-lg text-slate-300 mb-6">
                Our education applications support digital learning, school mapping, and progress tracking. Leverage technology for better educational outcomes.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-slate-300"><GraduationCap className="h-5 w-5" /><span>Digital Learning</span></div>
                <div className="flex items-center gap-2 text-slate-300"><BookOpen className="h-5 w-5" /><span>School Mapping</span></div>
                <div className="flex items-center gap-2 text-slate-300"><Brain className="h-5 w-5" /><span>Progress Tracking</span></div>
                <div className="flex items-center gap-2 text-slate-300"><BookOpen className="h-5 w-5" /><span>Curriculum</span></div>
              </div>
            </div>
            <div className="relative">
              <img src="/images/school.jpg" alt="Education" width={600} height={400} className="rounded-lg shadow-2xl" />
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
                  <img src={app.image} alt={app.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 text-xs font-medium bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 rounded-full">{app.category}</span>
                  </div>
                </div>
                <CardHeader className="flex-1">
                  <CardTitle className="text-white">{app.title}</CardTitle>
                  <CardDescription className="text-slate-300">{app.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <button onClick={() => handleOpenLink(app.link)} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center justify-center">
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