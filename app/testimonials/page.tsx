"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  { text: "Easy booking, fast service, great prices.", author: "Ben R." },
  { text: "Cleared years of junk in under 2 hours. Professional!", author: "Marcus J., Spring Grove" },
  { text: "Garage cleaned out in no time. Friendly and polite.", author: "Stephanie R., Hanover" },
  { text: "No hidden fees. Honest and hardworking guys.", author: "Tom D., Littlestown" },
  { text: "The move was quick and painless. Highly recommend.", author: "Olivia H." },
  { text: "I booked online, they showed up same-day. Efficient!", author: "Mark W." },
  { text: "Yard debris gone in an hour. Affordable and fast.", author: "Carla T." },
  { text: "Respectful crew, good communication throughout.", author: "Nate S." },
  { text: "Didn't overcharge, even helped move stuff inside.", author: "Dave M." },
  { text: "You can tell they care. Great local service.", author: "Jasmine K." },
]

export default function TestimonialsPage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-sage-200">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center">
          <img src="/logo.png" alt="Move and Remove Solutions Logo" className="h-16 mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold text-charcoal">Customer Testimonials</h1>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-sage-600 shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-1 py-3">
            <Link href="/" className="px-4 py-2 text-white font-semibold hover:bg-sage-700 rounded transition-colors">
              Home
            </Link>
            <Link
              href="/services"
              className="px-4 py-2 text-white font-semibold hover:bg-sage-700 rounded transition-colors"
            >
              Services
            </Link>
            <Link
              href="/prices"
              className="px-4 py-2 text-white font-semibold hover:bg-sage-700 rounded transition-colors"
            >
              Prices
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 text-white font-semibold hover:bg-sage-700 rounded transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 text-white font-semibold hover:bg-sage-700 rounded transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/testimonials"
              className="px-4 py-2 text-white font-semibold hover:bg-sage-700 rounded transition-colors bg-sage-700"
            >
              Testimonials
            </Link>
            <Link
              href="/book"
              className="px-4 py-2 text-white font-semibold hover:bg-sage-700 rounded transition-colors"
            >
              Book Online
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Testimonial Slider */}
        <Card className="border-sage-200 shadow-xl bg-white">
          <CardContent className="p-12 text-center">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>

            <div className="relative min-h-[120px] flex items-center justify-center">
              <blockquote className="text-xl md:text-2xl italic text-charcoal leading-relaxed max-w-2xl">
                "{testimonials[currentIndex].text}"
              </blockquote>
            </div>

            <div className="mt-8">
              <p className="text-lg font-semibold text-sage-600">— {testimonials[currentIndex].author}</p>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center mt-8 gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="border-sage-600 text-sage-600 hover:bg-sage-600 hover:text-white"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? "bg-sage-600" : "bg-sage-200"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="border-sage-600 text-sage-600 hover:bg-sage-600 hover:text-white"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="border-sage-200 shadow-lg bg-sage-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-charcoal mb-4">Ready to Join Our Happy Customers?</h3>
              <p className="text-charcoal-light mb-6">
                Experience the same professional, friendly service that our customers love.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/book">
                  <Button className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg transition-all hover:shadow-xl">
                    Book Your Service
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-sage-600 text-sage-600 hover:bg-sage-600 hover:text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all"
                  >
                    Get an In-Person Quote
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-sage-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-lg">
            <strong>Email:</strong> moveandremovesolutions@gmail.com | <strong>Phone:</strong> 717-817-8363
          </p>
        </div>
      </footer>
    </div>
  )
}
