import { assetPath, routePath } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, MapPin } from "lucide-react"
import CategorySignIn from "@/components/category-sign-in"

export default function DisasterManagement() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={assetPath("/images/dis.jpeg")}
          alt="Disaster Management"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-4">
              <Link href={routePath("/")}>
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
              <Image src={assetPath("/images/storm2.jpg")} alt="Disaster Management" width={600} height={400} className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
        <CategorySignIn slug="disaster-management" title="Disaster Management" />
      </div>
    </div>
  )
}