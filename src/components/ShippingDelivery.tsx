import { Card, CardContent } from "@/components/ui/card"
import { Globe, Package, Truck } from 'lucide-react'

export default function ShippingDelivery() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">EFFICIENT SHIPPING AND DELIVERY</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover-effect">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Globe className="w-16 h-16 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-600">We deliver to industrial clients worldwide, ensuring your adhesives arrive on time, every time.</p>
            </CardContent>
          </Card>
          <Card className="hover-effect">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Package className="w-16 h-16 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Bulk Packaging</h3>
              <p className="text-gray-600">Our products are packaged in industrial-grade containers, optimized for easy handling and storage.</p>
            </CardContent>
          </Card>
          <Card className="hover-effect">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Truck className="w-16 h-16 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expedited Options</h3>
              <p className="text-gray-600">Need it fast? We offer expedited shipping for urgent orders to keep your production line running.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

