import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="font-bold text-2xl text-primary">
            CECCorp
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="#products" className="text-gray-700 hover:text-primary font-semibold">Products</Link>
            <Link href="#bulk-orders" className="text-gray-700 hover:text-primary font-semibold">Bulk Orders</Link>
            <Link href="#contact" className="text-gray-700 hover:text-primary font-semibold">Contact Us</Link>
          </nav>
          <Button size="lg" className="hidden md:inline-flex">Get a Quote</Button>
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

