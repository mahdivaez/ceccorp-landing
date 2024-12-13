"use client"
import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function PricingCalculator() {
  const [volume, setVolume] = useState('')
  const [estimatedPrice, setEstimatedPrice] = useState<string | null>(null)

  const calculatePrice = () => {
    const vol = parseFloat(volume)
    let price = 0
    if (vol >= 500) {
      price = vol * 8 * 0.8 // 20% discount
    } else if (vol >= 250) {
      price = vol * 8 * 0.85 // 15% discount
    } else if (vol >= 100) {
      price = vol * 8 * 0.9 // 10% discount
    } else {
      price = vol * 8 // base price
    }
    setEstimatedPrice(price.toFixed(2))
  }

  return (
    <section id="bulk-orders" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">BULK PRICING CALCULATOR</h2>
        <Card className="max-w-2xl mx-auto shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold mb-6">Estimate Your Savings</h3>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <Input
                type="number"
                placeholder="Enter volume in kg"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                className="flex-grow"
              />
              <Button onClick={calculatePrice} className="md:w-1/3">Calculate</Button>
            </div>
            {estimatedPrice && (
              <div className="bg-gray-100 p-4 rounded-md">
                <p className="text-lg">
                  Estimated Price: <strong className="text-primary text-2xl">${estimatedPrice}</strong>
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Note: This is an estimate. Contact sales for accurate pricing.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

