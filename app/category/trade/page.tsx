import { assetPath } from "@/lib/utils"
import Link from "next/link"
import { ArrowLeft, TrendingUp } from "lucide-react"
import CategorySignIn from "@/components/category-sign-in"

export default function TradeApps() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={assetPath("/images/market.png")}
          alt="Trade"
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Trade</h1>
            <p className="text-xl text-slate-200 max-w-3xl">
              Explore our collection of geospatial applications designed to enhance trade in Rwanda. These tools provide valuable insights and data to support business growth and economic development.
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
              <h2 className="text-3xl font-bold text-white mb-6">Trade Applications</h2>
              <p className="text-lg text-slate-300 mb-6">
                Our trade applications help map and profile trade centers and markets, providing business intelligence for Rwanda's economic development.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-slate-300"><TrendingUp className="h-5 w-5" /><span>Market Mapping</span></div>
                <div className="flex items-center gap-2 text-slate-300"><TrendingUp className="h-5 w-5" /><span>Business Intelligence</span></div>
                <div className="flex items-center gap-2 text-slate-300"><TrendingUp className="h-5 w-5" /><span>Trade Profiling</span></div>
                <div className="flex items-center gap-2 text-slate-300"><TrendingUp className="h-5 w-5" /><span>Economic Insights</span></div>
              </div>
            </div>
            <div className="relative">
              <img src={assetPath("/images/market.png")} alt="Trade" width={600} height={400} className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
        <CategorySignIn slug="trade" title="Trade" />
      </div>
    </div>
  )
}