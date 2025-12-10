"use client"

import { useState, useMemo, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, ArrowLeft, ExternalLink, Grid, List, X, MapPin, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ScrollProgress } from "@/components/scroll-progress"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

// Finance application data
const financeTradeApps = [
]

export default function FinanceApps() {
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'list'

  // Function to handle launching applications
  const handleLaunchApp = useCallback((url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }, [])

  // Simplified search function - only searches titles/names
  const searchApps = useCallback((query: string) => {
    if (!query.trim()) return financeTradeApps

    const searchTerm = query.toLowerCase()
    
    return financeTradeApps.filter(app => 
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
          src="/geohub/images/finance.jpg"
          alt="Finance"
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Finance</h1>
            <p className="text-xl text-slate-200 max-w-3xl">
              Access powerful financial analytics and trade intelligence tools to monitor economic indicators, track market trends, and support strategic business decisions in Rwanda's growing economy.
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
              <h2 className="text-3xl font-bold text-white mb-6">Finance Applications</h2>
              <p className="text-lg text-slate-300 mb-6">
                Our finance applications help manage property tax, analyze economic indicators, and support business decisions. Leverage data for Rwanda's financial growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-slate-300"><TrendingUp className="h-5 w-5" /><span>Tax Management</span></div>
                <div className="flex items-center gap-2 text-slate-300"><TrendingUp className="h-5 w-5" /><span>Analytics</span></div>
                <div className="flex items-center gap-2 text-slate-300"><TrendingUp className="h-5 w-5" /><span>Market Trends</span></div>
                <div className="flex items-center gap-2 text-slate-300"><TrendingUp className="h-5 w-5" /><span>Business Intelligence</span></div>
              </div>
            </div>
            <div className="relative">
              <img src="/images/finance.jpg" alt="Finance" width={600} height={400} className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
        {/* Applications Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8">Available Applications</h3>
          {filteredApps.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredApps.map((app, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img src={app.image} alt={app.title} className="w-full h-full object-cover" />
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 text-xs font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full">{app.category}</span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white">{app.title}</CardTitle>
                    <CardDescription className="text-slate-300">{app.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <button onClick={() => handleLaunchApp(app.link)} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg flex items-center justify-center">
                      <ExternalLink className="h-4 w-4 mr-2" />Open Application
                    </button>
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
                We're working on bringing you powerful finance applications to monitor economic indicators, 
                track market trends, and support strategic business decisions. Check back soon or explore other categories below.
              </p>
              
              {/* Related categories */}
              <div className="mb-8">
                <p className="text-slate-400 text-sm mb-4 text-center">Explore Related Categories:</p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Link href="/category/trade">
                    <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white">
                      Trade
                    </Button>
                  </Link>
                  <Link href="/category/infrastructure">
                    <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white">
                      Infrastructure
                    </Button>
                  </Link>
                  <Link href="/category/local-government">
                    <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white">
                      Local Government
                    </Button>
                  </Link>
                </div>
              </div>
              
              {/* Contact CTA */}
              <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
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