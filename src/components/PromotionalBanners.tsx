import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function PromotionalBanners() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-primary text-white overflow-hidden">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Free Shipping on Bulk Orders</h3>
              <p className="mb-4">Orders over $10,000 qualify for free shipping. Stock up and save!</p>
              <Button variant="secondary">Learn More</Button>
            </CardContent>
          </Card>
          <Card className="bg-secondary text-primary overflow-hidden">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">New Customer Discount</h3>
              <p className="mb-4">First-time bulk buyers get 10% off their initial order!</p>
              <Button variant="default">Claim Offer</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

