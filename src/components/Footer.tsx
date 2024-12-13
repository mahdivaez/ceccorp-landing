import Link from 'next/link'
import { Facebook, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">CECCorp</h3>
            <p className="text-gray-400">Your trusted partner for industrial adhesives.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="#products" className="text-gray-400 hover:text-white">Products</Link></li>
              <li><Link href="#bulk-orders" className="text-gray-400 hover:text-white">Bulk Orders</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">123 Adhesive St, Vancouver, BC V6B 1A1</p>
            <p className="text-gray-400">Phone: +1 604-457-2000</p>
            <p className="text-gray-400">Email: sales@ceccorp.ca</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; 2023 CECCorp. All rights reserved.</p>
          <div className="mt-2">
            <Link href="/privacy" className="text-gray-400 hover:text-white mr-4">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

