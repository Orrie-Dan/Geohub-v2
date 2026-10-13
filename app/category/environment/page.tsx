import { assetPath, routePath } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import CategorySignIn from "@/components/category-sign-in"

export default function EnvironmentalApps() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={assetPath("/images/environment.jpeg")}
          alt="Environment"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-4">
              <Link href={routePath("/")}>
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
              <Image src={assetPath("/images/prot-ar.jpg")} alt="Environment" width={600} height={400} className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
        <CategorySignIn slug="environment" title="Environment" />
      </div>
    </div>
  )
}