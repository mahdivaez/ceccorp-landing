import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-2xl text-blue-600">
            CECCorp
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
              <li><Link href="#products" className="hover:text-blue-600">Products</Link></li>
              <li><Link href="#bulk-orders" className="hover:text-blue-600">Bulk Orders</Link></li>
              <li><Link href="#contact" className="hover:text-blue-600">Contact Us</Link></li>
            </ul>
          </nav>
          <Button>Get a Quote</Button>
        </div>
      </div>
    </header>
  )
}

