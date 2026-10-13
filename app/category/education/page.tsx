import { assetPath } from "@/lib/utils"
import { ArrowLeft, BookOpen, GraduationCap, Brain } from "lucide-react"
import Link from "next/link" 
import CategorySignIn from "@/components/category-sign-in"

export default function EducationApps() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={assetPath("/images/education.jpeg")}
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
              <img src={assetPath("/images/school.jpg")} alt="Education" width={600} height={400} className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
        <CategorySignIn slug="education" title="Education" />
      </div>
    </div>
  )
}