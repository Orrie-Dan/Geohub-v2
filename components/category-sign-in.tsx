import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { categorySignInLinks, type CategorySlug } from "@/lib/category-links"

interface CategorySignInProps {
  slug: CategorySlug
  title: string
}

export default function CategorySignIn({ slug, title }: CategorySignInProps) {
  return (
    <div className="mb-12">
      <Card className="bg-slate-800/50 border-slate-700 max-w-2xl mx-auto text-center">
        <CardHeader>
          <CardTitle className="text-2xl text-white">Access the {title} App</CardTitle>
          <CardDescription className="text-slate-300">
            Sign in to the GeoHub portal to explore the {title.toLowerCase()} maps, dashboards and data.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700">
            <Link href={categorySignInLinks[slug]} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Sign in to the App
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
