"use client"

import { useState, useMemo, useCallback } from "react"
import { Search, ArrowLeft, ExternalLink, Grid, List, X, MapPin, Heart, Activity, Users, Stethoscope } from "lucide-react"
import Link from "next/link" 
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

// Health application data
const healthApps = [
  {
    id: 1,
    title: "Disease Outbreaks Reporting and Mapping App",
    category: "Public Health",
    image: "/images/disease2.jpg",
    description: "A comprehensive platform for reporting and mapping health facilities, hospitals, and clinics across Rwanda",
    keywords: ["disease", "outbreaks", "reporting", "mapping", "public health", "epidemiology"],
    link: "https://gh.space.gov.rw/portal/apps/dashboards/becaf96569284409af237aedb4fa5785",
  },
  {
    id: 2,
    title: "Health Emergency Management and Mapping App", 
    category: "Public Health",
    image: "/images/health4.jpg",
    description: "A tool for managing health emergencies and mapping disease outbreaks in real-time",
    keywords: ["health", "emergency", "management", "mapping", "disease outbreaks", "real-time"],
    link: "https://gh.space.gov.rw/portal/sharing/rest//oauth2/authorize?client_id=experienceBuilder&response_type=token&expiration=20160&redirect_uri=https%3A%2F%2Fgh.space.gov.rw%2Fportal%2Fapps%2Fexperiencebuilder%2Fjimu-core%2Foauth-callback.html%3FclientId%3DexperienceBuilder%26portal%3Dhttps%3A%2F%2Fgh.space.gov.rw%2Fportal%2Fsharing%2Frest%2F%26popup%3Dfalse%26isInPortal%3Dtrue%26isDevEdition%3Dfalse%26isOutOfExb%3Dfalse%26mountPath%3D%2Fportal%2Fapps%2Fexperiencebuilder%2F%26fromUrl%3Dhttps%253A%252F%252Fgh.space.gov.rw%252Fportal%252Fapps%252Fexperiencebuilder%252Fexperience%252F%253Fid%253D302e2ecb7f264c36970633871a5d0a84&state=experienceBuilder&locale=&showSignupOption=true&signupType=esri&force_login=false",
  },
  
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
          src="/images/health4.jpg"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredApps.map((app, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img src={app.image} alt={app.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 text-xs font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-full">{app.category}</span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{app.title}</CardTitle>
                  <CardDescription className="text-slate-300">{app.description}</CardDescription>
                </CardHeader>
                <CardContent>
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
        </div>
      </div>
    </div>
  )
}