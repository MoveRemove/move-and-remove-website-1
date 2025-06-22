import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Clock, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-sage-200">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center">
          <img src="/logo.png" alt="Move and Remove Solutions Logo" className="h-16 mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold text-charcoal">Contact Us</h1>
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
              className="px-4 py-2 text-white font-semibold hover:bg-sage-700 rounded transition-colors bg-sage-700"
            >
              Contact
            </Link>
            <Link
              href="/testimonials"
              className="px-4 py-2 text-white font-semibold hover:bg-sage-700 rounded transition-colors"
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
        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-sage-200 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Phone className="h-8 w-8 text-sage-600 mr-3" />
                <h3 className="text-xl font-semibold text-charcoal">Call Us</h3>
              </div>
              <p className="text-charcoal-light mb-2">Ready to book or have questions?</p>
              <p className="text-charcoal-light">
                <a
                  href="tel:717-817-8363"
                  className="text-sage-600 hover:text-sage-700 transition-colors text-2xl font-bold"
                >
                  717-817-8363
                </a>
              </p>
            </CardContent>
          </Card>

          <Card className="border-sage-200 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Mail className="h-8 w-8 text-sage-600 mr-3" />
                <h3 className="text-xl font-semibold text-charcoal">Email Us</h3>
              </div>
              <p className="text-charcoal-light mb-2">Send us your questions or requests:</p>
              <p className="text-charcoal-light">
                <a
                  href="mailto:moveandremovesolutions@gmail.com"
                  className="text-sage-600 hover:text-sage-700 transition-colors text-lg font-semibold break-all"
                >
                  moveandremovesolutions@gmail.com
                </a>
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Business Hours */}
        <Card className="border-sage-200 shadow-lg mb-12">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <Clock className="h-8 w-8 text-sage-600 mr-3" />
              <h3 className="text-2xl font-semibold text-charcoal">Business Hours</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-charcoal mb-3">Regular Hours</h4>
                <div className="text-charcoal-light space-y-2">
                  <p>
                    <strong>Monday - Saturday:</strong> 8:00 AM - 6:00 PM
                  </p>
                  <p>
                    <strong>Sunday:</strong> Closed
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-charcoal mb-3">Response Time</h4>
                <div className="text-charcoal-light space-y-2">
                  <p>
                    <strong>Phone calls:</strong> Answered during business hours
                  </p>
                  <p>
                    <strong>Emails:</strong> Responded to within 24 hours
                  </p>
                  <p>
                    <strong>Same-day service:</strong> Often available
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Service Area */}
        <Card className="border-sage-200 shadow-lg mb-12">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <MapPin className="h-8 w-8 text-sage-600 mr-3" />
              <h3 className="text-2xl font-semibold text-charcoal">Service Area</h3>
            </div>
            <p className="text-charcoal-light text-lg mb-4">
              <strong>Primary Service Area:</strong> Hanover, PA and surrounding communities
            </p>
            <p className="text-charcoal-light">
              We proudly serve residents and businesses throughout the greater Hanover area. Not sure if we service your
              location? Give us a call and we'll let you know!
            </p>
          </CardContent>
        </Card>

        {/* Special Offers */}
        <Card className="border-sage-200 shadow-lg bg-green-50 border-green-200 mb-12">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-charcoal mb-6 text-center">💰 Save Money with Our Special Offers</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                <h4 className="text-xl font-semibold text-green-700 mb-3">Cash Discount</h4>
                <p className="text-3xl font-bold text-green-600 mb-2">10% OFF</p>
                <p className="text-charcoal-light">when you pay with cash!</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                <h4 className="text-xl font-semibold text-green-700 mb-3">Referral Rewards</h4>
                <p className="text-3xl font-bold text-green-600 mb-2">$15 OFF</p>
                <p className="text-charcoal-light">for every customer you refer who uses our services!</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Booking CTA */}
        <Card className="border-sage-200 shadow-lg bg-sage-50">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-charcoal mb-4">Ready to Book Your Service?</h3>
            <p className="text-charcoal-light mb-6">
              Skip the phone call and book online for the fastest service. Get your free quote and schedule your
              appointment in just a few clicks!
            </p>
            <Link href="/book">
              <Button className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-4 text-xl font-semibold rounded-lg shadow-lg transition-all hover:shadow-xl">
                Book Online Now
              </Button>
            </Link>
            <p className="text-charcoal-light text-sm mt-4">
              Or call us at{" "}
              <a href="tel:717-817-8363" className="text-sage-600 hover:text-sage-700 font-semibold">
                717-817-8363
              </a>
            </p>
          </CardContent>
        </Card>
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
