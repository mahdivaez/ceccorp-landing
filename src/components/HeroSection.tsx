import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="bg-primary text-white py-32 md:py-48">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            INDUSTRIAL GLUE SOLUTIONS FOR BULK ORDERS
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Premium quality adhesives at wholesale prices for your business needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-full transition-colors duration-300">
              Request Custom Quote
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent hover:bg-white hover:text-primary px-8 py-3 rounded-full transition-colors duration-300">
              Explore Products
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

