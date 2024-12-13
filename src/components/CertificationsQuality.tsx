import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Award, CheckCircle } from 'lucide-react'

export default function CertificationsQuality() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">CERTIFIED QUALITY YOU CAN TRUST</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="hover-effect">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Shield className="w-16 h-16 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">ISO 9001:2015</h3>
              <p className="text-gray-600">Certified Quality Management System</p>
            </CardContent>
          </Card>
          <Card className="hover-effect">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Award className="w-16 h-16 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">ISO 14001:2015</h3>
              <p className="text-gray-600">Environmental Management Standard</p>
            </CardContent>
          </Card>
          <Card className="hover-effect">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <CheckCircle className="w-16 h-16 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Industry Compliant</h3>
              <p className="text-gray-600">REACH and RoHS Certified</p>
            </CardContent>
          </Card>
        </div>
        <div className="text-center">
          <Badge variant="secondary" className="text-lg py-2 px-4 text-primary bg-primary/10">
            Trusted by Professionals Worldwide
          </Badge>
        </div>
      </div>
    </section>
  )
}

