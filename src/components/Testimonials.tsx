import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "CECCorp's bulk adhesive solutions have significantly improved our production efficiency.",
    author: "John Doe",
    position: "Production Manager",
    company: "XYZ Manufacturing",
  },
  {
    quote: "The quality and consistency of their industrial glues are unmatched in the market.",
    author: "Jane Smith",
    position: "Chief Engineer",
    company: "ABC Electronics",
  },
  {
    quote: "Their customer service and technical support are exceptional. Always there when we need them.",
    author: "Mike Johnson",
    position: "Procurement Director",
    company: "123 Packaging Solutions",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="transition-transform hover:scale-105 shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <p className="text-gray-700 italic mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                <p className="font-semibold text-gray-800">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.position}</p>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
