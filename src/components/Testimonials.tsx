import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote: "CECCorp's bulk adhesive solutions have significantly improved our production efficiency.",
    author: "John Doe",
    position: "Production Manager",
    company: "XYZ Manufacturing",
    image: "/john-doe.jpg"
  },
  {
    quote: "The quality and consistency of their industrial glues are unmatched in the market.",
    author: "Jane Smith",
    position: "Chief Engineer",
    company: "ABC Electronics",
    image: "/jane-smith.jpg"
  },
  {
    quote: "Their customer service and technical support are exceptional. Always there when we need them.",
    author: "Mike Johnson",
    position: "Procurement Director",
    company: "123 Packaging Solutions",
    image: "/mike-johnson.jpg"
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">WHAT OUR CLIENTS SAY</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-effect">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
                <p className="text-sm text-gray-500">{testimonial.company}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

