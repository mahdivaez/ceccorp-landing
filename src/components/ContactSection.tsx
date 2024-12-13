import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MessageSquare } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">GET IN TOUCH WITH OUR B2B EXPERTS</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="hover-effect">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Phone className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us Directly</h3>
              <p className="text-gray-600 mb-4">Speak with our sales team</p>
              <Button variant="outline">+1 604-457-2000</Button>
            </CardContent>
          </Card>
          <Card className="hover-effect">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Mail className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">For inquiries and support</p>
              <Button variant="outline">sales@ceccorp.ca</Button>
            </CardContent>
          </Card>
          <Card className="hover-effect">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <MessageSquare className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4">Get instant answers</p>
              <Button>Start Chat</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

