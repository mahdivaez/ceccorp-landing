import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const products = [
  {
    name: "Hot-Melt Adhesives",
    description: "Fast-setting, thermoplastic adhesives ideal for packaging and product assembly.",
    applications: "Packaging, Wood Working, Electronics",
    industries: "Manufacturing, Automotive, Construction"
  },
  {
    name: "Cold Glue",
    description: "Versatile adhesives that bond at room temperature, perfect for porous materials.",
    applications: "Paper Bonding, Labeling, Woodworking",
    industries: "Printing, Packaging, Furniture"
  },
  {
    name: "Specialty Adhesives",
    description: "Engineered solutions for unique bonding challenges and extreme conditions.",
    applications: "Metal Bonding, Plastic Welding, High-Temperature Applications",
    industries: "Aerospace, Medical, Electronics"
  }
]

export default function ProductCategories() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">OUR INDUSTRIAL GLUE CATEGORIES</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover-effect">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="space-y-2 mb-4">
                  <p><strong>Applications:</strong> {product.applications}</p>
                  <p><strong>Industries:</strong> {product.industries}</p>
                </div>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

