"use client"
import Link from "next/link"
import { useState, useMemo, useCallback } from "react"
import { Search, ArrowLeft, ExternalLink, Grid, List, X, MapPin } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

// Infrastructure application data with working images
const infrastructureApps = [
  {
    id: 1,
    title: "Rural settlement planning App",
    category: "Housing",
    image: "/images/informal.jpg",
    description: "Aids in the sustainable design and organization of rural communities by mapping infrastructure, land use, and development needs.",
    keywords: ["housing", "planning", "rural", "infrastructure"],
    url: "https://gh.space.gov.rw/portal/apps/dashboards/e7e0645fff854cc9960c4fb26605f0b2"
  },
  {
    id: 2,
    title: "Country Infrastructure Mapping App",
    category: "Infrastructure Management",
    image: "/images/infra.png",
    description: "Helps in the visualization, analysis, and management of national infrastructure to support effective planning and development.",
    keywords: ["infrastructure", "mapping", "management", "visualization", "analysis", "planning", "development"],
    url: "https://gh.space.gov.rw/portal/apps/experiencebuilder/experience/?id=ea6c3336fa594af7833ee3e422f225ef"
  },
  {
    id: 3,
    title: "Infrastructure Services Accessibility Mapping App",
    category: "Urban and Regional Planning",
    image: "/images/proj-2.jpeg",
    description: "Helps in the identification and visualization of disparities in access to essential services, enabling data-driven planning and equitable infrastructure development.",
    keywords: ["accessibility", "mapping", "services", "urban", "regional", "planning", "infrastructure"],
    url: "https://gh.space.gov.rw/portal/apps/dashboards/0a331d36df3f4e30998b23a027454e5d"
  },
  {
    id: 4,
    title: "Informal Settlement Mapping and Monitoring App",
    category: "Housing",
    image: "/images/informal3.jpg",
    description: "Supports the mapping and monitoring of informal settlements to inform urban development strategies and improve living conditions.",
    keywords: ["informal", "settlement", "mapping", "monitoring", "urban", "development", "infrastructure"],
    url: "https://gh.space.gov.rw/portal/apps/dashboards/7cc82c4014c4402c93bb3920e05f3d52"
  }
]

export default function InfrastructureApps() {
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'list'

  // Simplified search function - only searches titles/names
  const searchApps = useCallback((query: string) => {
    if (!query.trim()) return infrastructureApps

    const searchTerm = query.toLowerCase()
    
    return infrastructureApps.filter(app => 
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

  const handleLaunchApp = useCallback((app: { id: number; title: string; category: string; image: string; description: string; keywords: string[]; url: string }) => {
    // Open the application in a new tab
    window.open(app.url, '_blank', 'noopener,noreferrer')
  }, [])

  const handleCardClick = useCallback((app: { id: number; title: string; category: string; image: string; description: string; keywords: string[]; url: string }) => {
    // Make the entire card clickable - launches the app
    handleLaunchApp(app)
  }, [handleLaunchApp])

  const handleBackToHome = useCallback(() => {
    // Navigate back to home (replace with your routing logic)
    console.log('Navigate to home')
    window.history.back()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="relative h-64 overflow-hidden">
        <img
          src="/images/Infrastructure.jpg"
          alt="Infrastructure"
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Infrastructure</h1>
            <p className="text-xl text-slate-200 max-w-3xl">
              Advanced infrastructure management solutions to monitor, optimize, and maintain critical infrastructure systems across Rwanda's growing urban landscape.
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
              <h2 className="text-3xl font-bold text-white mb-6">Infrastructure Applications</h2>
              <p className="text-lg text-slate-300 mb-6">
                Our infrastructure applications help monitor, plan, and manage national and local infrastructure. Leverage GIS and real-time data for sustainable development.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-slate-300"><MapPin className="h-5 w-5" /><span>Planning</span></div>
                <div className="flex items-center gap-2 text-slate-300"><MapPin className="h-5 w-5" /><span>Monitoring</span></div>
                <div className="flex items-center gap-2 text-slate-300"><MapPin className="h-5 w-5" /><span>Management</span></div>
                <div className="flex items-center gap-2 text-slate-300"><MapPin className="h-5 w-5" /><span>Sustainability</span></div>
              </div>
            </div>
            <div className="relative">
              <img src="/images/proj-2.jpeg" alt="Infrastructure" width={600} height={400} className="rounded-lg shadow-2xl" />
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
                  <button onClick={() => handleLaunchApp(app)} className="w-full bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg flex items-center justify-center">
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