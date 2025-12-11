import Link from "next/link"
import Image from "next/image"
import { ChevronRight, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import CategorySection from "@/components/category-section"
import HeroAnimation from "@/components/hero-animation"
import FeaturedApp from "@/components/featured-app"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ScrollProgress } from "@/components/scroll-progress"
import ScrollDownButton from "@/components/ScrollDownButton"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative">
      {/* Fixed Background */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/rw2.jpg"
          alt="Rwandan map"
          fill
          priority
          className="object-cover object-center"
          style={{
            objectPosition: "center center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/30 to-slate-950/60"></div>
        <HeroAnimation />
      </div>

      <ScrollProgress />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
          <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 mx-auto text-center">
            <ScrollReveal>
              <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-sky-400 tracking-tight drop-shadow-lg">
                  Explore {" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">
                    GeoSpatial Applications
                  </span>
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl text-white drop-shadow-md">Powered by the Rwanda Space Agency</p>
                <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto drop-shadow-sm">
                  Your central platform for geospatial applications across all sectors in Rwanda
                </p>
              </div>
            </ScrollReveal>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
        
        {/* Scroll Down Button */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <ScrollDownButton />
          </div>
        </section>
        {/* About Section */}
        <section id="about" className="relative bg-[#0B1622] text-white py-20">
          <div className="max-w-3xl mx-auto text-center px-6">
            <h2 className="text-4xl font-bold mb-4">About the GeoHub</h2>
            <p className="text-lg text-gray-300">
              GeoHub is Rwanda's premier platform for geospatial applications.
              Discover, analyze, and utilize spatial application to drive innovation
              and development across all sectors.
            </p>
          </div>
          {/* SVG divider for smooth transition */}
          <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
            <svg
              className="relative block w-full h-[100px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
            >
              <path
                fill="#0B1622"
                d="M0,64L60,80C120,96,240,128,360,154.7C480,181,600,203,720,213.3C840,224,960,224,1080,202.7C1200,181,1320,139,1380,117.3L1440,96V320H1380C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320H0Z"
              ></path>
            </svg>
          </div>
        </section>

        {/* Enhanced Category Section */}
        <section className="relative w-full min-h-screen flex flex-col justify-center items-center bg-slate-900/85 backdrop-blur-sm py-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 drop-shadow-lg text-center">Explore Categories</h2>
          <CategorySection />
        </section>

        {/* Featured Applications */}
        <section id="category" className="relative pt-4 pb-16 sm:pt-6 sm:pb-20 lg:pt-8 lg:pb-24">
          <div className="absolute inset-0 bg-slate-900/85 backdrop-blur-sm"></div>
          <div className="container relative z-10 px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="mb-8 sm:mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Applications</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-stretch">
              <ScrollReveal delay={100}>
                <FeaturedApp
                  title="Agriculture Land Profiling and Crops Suitability"
                  category="Agriculture"
                  image="/images/agr1.jpg"
                  description="Dive into agricultural land characteristics with soil suitability assessment, productivity potential and optimal farming zones"
                  url="https://gh.space.gov.rw/portal/apps/dashboards/cbf25115208844b3ba46732a110e8ac1"
                />
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <FeaturedApp
                  title="Floods Profile Mapping Application"
                  category="Disaster Management"
                  image="/images/dis.jpeg"
                  description="Maps and analyzes flood-prone areas, risk assessment and susceptibility zones"
                  url="https://gh.space.gov.rw/portal/apps/dashboards/72dd1ef9653c436392633b8e32c364d8"
                />
              </ScrollReveal>
            </div>
          </div>
        </section>

        
        

        {/* Footer */}
        <footer className="relative bg-slate-950/95 text-slate-400 py-8 sm:py-12 overflow-hidden">
          {/* Starfield background */}
          <div className="starfield absolute inset-0 z-0 pointer-events-none" aria-hidden="true"></div>
          
          <div className="container relative z-10 px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div>
                <h3 className="text-white text-lg font-semibold mb-4 flex items-center gap-2 glow-text">
                  <span className="planet-icon animate-spin-slow" aria-label="Planet">🪐</span> GeoHub
                </h3>
                <p className="text-sm">
                  A project of the Rwanda Space Agency providing geospatial applications for national
                  development.
                </p>
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold mb-4 flex items-center gap-2 glow-text">
                  <span className="rocket-icon animate-float" aria-label="Rocket">🚀</span> Quick Links
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="hover:text-sky-400 flex items-center gap-1">
                      <span className="star-icon animate-twinkle" aria-label="Star">✨</span> Home
                    </Link>
                  </li>
                  <li>
                    <Link href="#about" className="hover:text-sky-400 flex items-center gap-1">
                      <span className="star-icon animate-twinkle" aria-label="Star">✨</span> About
                    </Link>
                  </li>
                  <li>
                    <Link href="#category" className="hover:text-sky-400 flex items-center gap-1">
                      <span className="star-icon animate-twinkle" aria-label="Star">✨</span> Applications
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold mb-4 flex items-center gap-2 glow-text">
                  <span className="satellite-icon animate-orbit" aria-label="Satellite">🛰️</span> Categories
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="category/agriculture" className="hover:text-sky-400 flex items-center gap-1">
                      <span className="star-icon animate-twinkle" aria-label="Star">✨</span> Agriculture
                    </Link>
                  </li>
                  <li>
                    <Link href="category/infrastructure" className="hover:text-sky-400 flex items-center gap-1">
                      <span className="star-icon animate-twinkle" aria-label="Star">✨</span> Infrastructure
                    </Link>
                  </li>
                  <li>
                    <Link href="category/health" className="hover:text-sky-400 flex items-center gap-1">
                      <span className="star-icon animate-twinkle" aria-label="Star">✨</span> Health
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold mb-4 flex items-center gap-2 glow-text">
                  <span className="astronaut-icon animate-astronaut-hover" aria-label="Astronaut">👨‍🚀</span> Contact
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" /> Kigali, Rwanda
                  </li>
                  <li>
                    <Link href="mailto:info@space.gov.rw" className="hover:text-sky-400 flex items-center gap-1">
                      <span className="star-icon animate-twinkle" aria-label="Star">✨</span> info@space.gov.rw
                    </Link>
                  </li>
                </ul>
                <div className="mt-4 flex space-x-4">
                  <Link href="#" className="text-slate-400 hover:text-sky-400 social-icon" aria-label="Twitter">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </Link>
                  <Link href="#" className="text-slate-400 hover:text-sky-400 social-icon" aria-label="LinkedIn">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
              <p>© {new Date().getFullYear()} Rwanda Space Agency. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}