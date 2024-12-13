import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import ProductCategories from '@/components/ProductCategories'
import PricingCalculator from '@/components/PricingCalculator'
import InquiryForm from '@/components/InquiryForm'
import Testimonials from '@/components/Testimonials'
import PromotionalBanners from '@/components/PromotionalBanners'
import CertificationsQuality from '@/components/CertificationsQuality'
import ShippingDelivery from '@/components/ShippingDelivery'
import ContactSection from '@/components/ContactSection'
import EducationalContent from '@/components/EducationalContent'

export default function BulkGlueLanding() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <ProductCategories />
        <PricingCalculator />
        <InquiryForm />
        <Testimonials />
        <ShippingDelivery />
        <CertificationsQuality />
        <EducationalContent />
        <ContactSection />
        <PromotionalBanners />
      </main>

      <Footer />
    </div>
  )
}

