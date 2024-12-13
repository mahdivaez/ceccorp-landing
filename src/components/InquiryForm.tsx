import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function InquiryForm() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">REQUEST YOUR BULK ORDER QUOTE</h2>
        <Card className="max-w-2xl mx-auto shadow-lg">
          <CardContent className="p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block mb-2 font-semibold">Company Name</label>
                  <Input id="company" placeholder="Your company name" />
                </div>
                <div>
                  <label htmlFor="name" className="block mb-2 font-semibold">Contact Name</label>
                  <Input id="name" placeholder="Your full name" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-semibold">Email Address</label>
                <Input id="email" type="email" placeholder="you@company.com" />
              </div>
              <div>
                <label htmlFor="product" className="block mb-2 font-semibold">Product Type</label>
                <Input id="product" placeholder="e.g. Hot-melt adhesives" />
              </div>
              <div>
                <label htmlFor="volume" className="block mb-2 font-semibold">Estimated Volume (kg)</label>
                <Input id="volume" type="number" placeholder="500" />
              </div>
              <div>
                <label htmlFor="timeline" className="block mb-2 font-semibold">Delivery Timeline</label>
                <Input id="timeline" placeholder="e.g. Within 2 weeks" />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-semibold">Additional Comments</label>
                <Textarea id="message" placeholder="Any specific requirements or questions?" />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Submit Inquiry
              </Button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              By submitting this form, you agree to our privacy policy. We respect your data and will only use it to process your inquiry.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

