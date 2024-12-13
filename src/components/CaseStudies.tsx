import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const caseStudies = [
  {
    title: "How CECCorp Helped XYZ Company Save 15% on Adhesives for Packaging",
    company: "XYZ Packaging Co.",
    description: "By switching to our bulk hot-melt adhesives, XYZ Company optimized their packaging line and reduced costs significantly.",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    title: "Improving Efficiency in Furniture Manufacturing with Cold Glue Solutions",
    company: "Comfort Furniture Inc.",
    description: "Our cold glue formulation helped Comfort Furniture increase production speed by 20% while maintaining bond strength.",
    image: "/placeholder.svg?height=100&width=100"
  }
]

export default function CaseStudies() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {caseStudies.map((study, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src={study.image}
                    alt={study.company}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <h3 className="text-xl font-semibold">{study.company}</h3>
                </div>
                <h4 className="text-lg font-semibold mb-2">{study.title}</h4>
                <p className="text-gray-600 mb-4">{study.description}</p>
                <Button variant="outline">Read Full Case Study</Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button size="lg">See More Success Stories</Button>
        </div>
      </div>
    </section>
  )
}

