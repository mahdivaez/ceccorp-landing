import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Product {
  name: string;
  description: string;
  strength: string;
  applications: string;
  industries: string;
}

const products: Product[] = [
  {
    name: "Hot-Melt Adhesives",
    description: "Fast-setting, thermoplastic adhesives ideal for packaging and product assembly.",
    strength: "High",
    applications: "Packaging, Wood Working, Electronics",
    industries: "Manufacturing, Automotive, Construction"
  },
  {
    name: "Cold Glue",
    description: "Versatile adhesives that bond at room temperature, perfect for porous materials.",
    strength: "Medium to High",
    applications: "Paper Bonding, Labeling, Woodworking",
    industries: "Printing, Packaging, Furniture"
  },
  {
    name: "Specialty Adhesives",
    description: "Engineered solutions for unique bonding challenges and extreme conditions.",
    strength: "Very High",
    applications: "Metal Bonding, Plastic Welding, High-Temperature Applications",
    industries: "Aerospace, Medical, Electronics"
  }
]

export default function ProductGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {products.map((product, index) => (
        <Card key={index}>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <ul className="space-y-2 mb-4">
              <li><strong>Strength:</strong> {product.strength}</li>
              <li><strong>Applications:</strong> {product.applications}</li>
              <li><strong>Industries:</strong> {product.industries}</li>
            </ul>
            <Button variant="outline" className="w-full">
              View Specifications
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

