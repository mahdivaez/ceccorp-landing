import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'

const educationalContent = [
  {
    title: "Choosing the Right Glue for Industrial Use",
    description: "Learn about different types of industrial adhesives and their ideal applications.",
    downloadLink: "#"
  },
  {
    title: "Maximizing Cost Efficiency with Bulk Orders",
    description: "Discover strategies to optimize your adhesive usage and reduce overall costs.",
    downloadLink: "#"
  },
  {
    title: "Best Practices for Adhesive Storage and Handling",
    description: "Ensure the longevity and effectiveness of your industrial adhesives with proper care.",
    downloadLink: "#"
  }
]

export default function EducationalContent() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">EDUCATIONAL RESOURCES</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {educationalContent.map((content, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{content.title}</h3>
                <p className="text-gray-600 mb-4">{content.description}</p>
                <Button variant="outline" className="w-full">
                  <Download className="mr-2 h-4 w-4" /> Download Guide
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

