import { assetPath } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, MapPin, Calendar, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import CategorySignIn from "@/components/category-sign-in"

export default function ConservationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={assetPath("/images/gorilla.jpg")}
          alt="Conservation"
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Conservation</h1>
            <p className="text-xl text-slate-200 max-w-3xl">
              Protecting Rwanda's natural heritage through geospatial technology and wildlife monitoring
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
              <h2 className="text-3xl font-bold text-white mb-6">Conservation Applications</h2>
              <p className="text-lg text-slate-300 mb-6">
                Our conservation applications help protect Rwanda's rich biodiversity and natural resources. 
                From wildlife monitoring to protected area management, these tools provide essential data 
                for conservation efforts across the country.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-slate-300">
                  <MapPin className="h-5 w-5" />
                  <span>Wildlife Monitoring</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Calendar className="h-5 w-5" />
                  <span>Real-time Updates</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Users className="h-5 w-5" />
                  <span>Conservation Teams</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src={assetPath("/images/biodiversity.jpg")}
                alt="Conservation"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>

        <CategorySignIn slug="conservation" title="Conservation" />

        {/* Related Categories */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8">Related Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/category/environment">
              <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-2">🌍</div>
                  <h4 className="font-semibold text-white">Environment</h4>
                </CardContent>
              </Card>
            </Link>
            <Link href="/category/land">
              <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-2">🗺️</div>
                  <h4 className="font-semibold text-white">Land</h4>
                </CardContent>
              </Card>
            </Link>
            <Link href="/category/agriculture">
              <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-2">🌾</div>
                  <h4 className="font-semibold text-white">Agriculture</h4>
                </CardContent>
              </Card>
            </Link>
            <Link href="/category/disaster-management">
              <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-2">🛡️</div>
                  <h4 className="font-semibold text-white">Disaster Management</h4>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Need Help?</h3>
          <p className="text-slate-300 mb-6">
            Contact our conservation team for support with these applications
          </p>
          <Button asChild className="bg-sky-600 hover:bg-sky-700">
            <Link href="mailto:conservation@space.gov.rw">
              Contact Conservation Team
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 