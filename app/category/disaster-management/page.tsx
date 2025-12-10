"use client"

import { useState, useMemo, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, ArrowLeft, ExternalLink, Grid, List, X, MapPin, Shield } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

// Disaster management application data
const disasterApps = [
  {
    id: 1,
    title: "Landslides Profile Mapping App",
    category: "Monitoring and Alerts",
    image: "/images/landslide2.jpg",
    description: "Maps and analyzes landslide-prone areas, risk assessment and susceptibility zones",
    keywords: ["landslides", "monitoring", "alerts", "real-time", "risk assessment", "early warning"],
    Link: "https://gh.space.gov.rw/portal/apps/dashboards/bfc8d4a4492b4ad29f845edb2e41f6cb"
  },
  {
    id: 2,
    title: "Storms Profile Mapping App",
    category: "Emergency Response Coordination", 
    image: "/images/storm2.jpg",
    description: "Tracking tool on storm events with spatial distribution, temporal trends, damage assessments and event type classifications across country",
    keywords: ["storms", "emergency", "response", "coordination", "platform", "communication"],
    Link: "https://gh.space.gov.rw/portal/apps/dashboards/e89c802794114d7d97e4731351de612c"
  },
  {
    id: 3,
    title: "Floods Profile Mapping App",
    category: "Flood Risk Analysis",
    image: "/images/dis.jpeg",
    description: "Maps and analyzes flood-prone areas, risk assessment and susceptibility zones",
    keywords: ["flood", "mapping", "risk", "satellite", "topography", "vulnerability"],
    Link: "https://gh.space.gov.rw/portal/apps/dashboards/902b4a62d0f4420ab66be44e5ad8d40c"
  },
  {
    id: 4,
    title: "Earthquakes Profile Mapping App",
    category: "Crisis Management",
    image: "/images/earthquake.jpg",
    description: "Displays real-time earthquake activity with an interactive map, alerts and historical data analysis",
    keywords: ["earthquakes", "evacuation", "shelter", "planning", "crisis", "management", "response"],
    Link: "https://gh.space.gov.rw/portal/apps/dashboards/cd5411087b9b46b4ac356ae29fe6f3bf"
  },
  {
    id: 5,
    title: "Emergency Response Operations Mapping App",
    category: "Emergency Operations",
    image: "/images/emergency response.jpg",
    description: "Tool to report emergency incidents, analyze impact assessments and visualize response statistics",
    keywords: ["emergency", "response", "operations", "mapping", "resource allocation", "recovery planning"],
    Link: "https://gh.space.gov.rw/portal/apps/experiencebuilder/experience/?id=b686f37a06e0440496232917e76d01ae"
  },
  {
    id: 6,
    title: "Citizens Emergency Reporting App",
    category: "Reporting and Alerts",
    image: "/images/reporting2.jpg",
    description: "Public application enabling citizens to report emergencies with geolocation, instant notifications and response management",
    keywords: ["citizens", "emergency", "reporting", "application", "community", "hazards", "incidents"],
    Link: "https://citizensemergencyreportingapp.netlify.app/"
  }
  
]

export default function DisasterManagement() {
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState('grid')

  const searchApps = useCallback((query: string) => {
    if (!query.trim()) return disasterApps

    const searchTerm = query.toLowerCase()
    
    return disasterApps.filter(app => 
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

  const handleLaunchApp = useCallback((url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src="/geohub/images/dis.jpeg"
          alt="Disaster Management"
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Disaster Management</h1>
            <p className="text-xl text-slate-200 max-w-3xl">
              Comprehensive disaster preparedness, response, and recovery solutions to protect communities and build resilience across Rwanda through advanced technology and real-time monitoring.
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
              <h2 className="text-3xl font-bold text-white mb-6">Disaster Management Applications</h2>
              <p className="text-lg text-slate-300 mb-6">
                Our disaster management applications provide real-time monitoring, alerts, and coordination tools for emergency preparedness and response.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-slate-300"><MapPin className="h-5 w-5" /><span>Monitoring</span></div>
                <div className="flex items-center gap-2 text-slate-300"><MapPin className="h-5 w-5" /><span>Alerts</span></div>
                <div className="flex items-center gap-2 text-slate-300"><MapPin className="h-5 w-5" /><span>Emergency Response</span></div>
                <div className="flex items-center gap-2 text-slate-300"><MapPin className="h-5 w-5" /><span>Coordination</span></div>
              </div>
            </div>
            <div className="relative">
              <Image src="/images/storm2.jpg" alt="Disaster Management" width={600} height={400} className="rounded-lg shadow-2xl" />
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
                  <button onClick={() => handleLaunchApp(app.Link)} className="w-full bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg flex items-center justify-center">
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