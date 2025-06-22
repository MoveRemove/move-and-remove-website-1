import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Phone, Mail, Clock } from "lucide-react"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-sage-200">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center">
          <img src="/logo.png" alt="Move and Remove Solutions Logo" className="h-16 mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold text-charcoal">Thank You!</h1>
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
        {/* Main Thank You Message */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 rounded-full p-4">
              <CheckCircle className="h-16 w-16 text-green-600" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-charcoal mb-4">Your Request Has Been Submitted!</h2>
          <p className="text-lg text-charcoal-light leading-relaxed max-w-2xl mx-auto">
            Thank you for choosing Move and Remove Solutions. We've received your request and will get back to you
            within 24 hours with a free quote and to schedule your service.
          </p>
        </div>

        {/* What Happens Next */}
        <Card className="border-sage-200 shadow-lg mb-8">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-charcoal mb-6 text-center">What Happens Next?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-sage-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-sage-600 font-bold text-lg">1</span>
                </div>
                <h4 className="font-semibold text-charcoal mb-2">We Review Your Request</h4>
                <p className="text-charcoal-light text-sm">
                  Our team will review your submission and prepare a customized quote based on your specific needs.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-sage-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-sage-600 font-bold text-lg">2</span>
                </div>
                <h4 className="font-semibold text-charcoal mb-2">We Contact You</h4>
                <p className="text-charcoal-light text-sm">
                  We'll call or email you within 24 hours with your free quote and available time slots.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-sage-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-sage-600 font-bold text-lg">3</span>
                </div>
                <h4 className="font-semibold text-charcoal mb-2">We Get to Work</h4>
                <p className="text-charcoal-light text-sm">
                  Our professional team arrives on time and takes care of everything quickly and efficiently.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="border-sage-200 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Phone className="h-6 w-6 text-sage-600 mr-3" />
                <h4 className="font-semibold text-charcoal">Need to Reach Us?</h4>
              </div>
              <p className="text-charcoal-light mb-2">
                If you have any questions or need to make changes to your request, feel free to call us:
              </p>
              <p className="text-sage-600 font-semibold text-lg">
                <a href="tel:717-817-8363" className="hover:text-sage-700 transition-colors">
                  717-817-8363
                </a>
              </p>
            </CardContent>
          </Card>

          <Card className="border-sage-200 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-sage-600 mr-3" />
                <h4 className="font-semibold text-charcoal">Business Hours</h4>
              </div>
              <div className="text-charcoal-light space-y-1">
                <p>
                  <strong>Monday - Saturday:</strong> 8:00 AM - 6:00 PM
                </p>
                <p>
                  <strong>Sunday:</strong> Closed
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Email Confirmation */}
        <Card className="border-sage-200 shadow-lg bg-sage-50 mb-8">
          <CardContent className="p-6 text-center">
            <Mail className="h-8 w-8 text-sage-600 mx-auto mb-3" />
            <h4 className="font-semibold text-charcoal mb-2">Check Your Email</h4>
            <p className="text-charcoal-light">
              You should receive a confirmation email shortly. If you don't see it, please check your spam folder or
              contact us directly.
            </p>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg transition-all hover:shadow-xl">
                Return to Home
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="outline"
                className="border-sage-600 text-sage-600 hover:bg-sage-600 hover:text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all"
              >
                View Our Services
              </Button>
            </Link>
          </div>
          <p className="text-charcoal-light text-sm">
            Need another service?{" "}
            <Link href="/book" className="text-sage-600 hover:text-sage-700 underline transition-colors">
              Book another appointment
            </Link>
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-sage-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-lg mb-4">
            <strong>Email:</strong>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=moveandremovesolutions@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-sage-100 underline transition-colors ml-1"
            >
              moveandremovesolutions@gmail.com
            </a>{" "}
            | <strong>Phone:</strong> 717-817-8363
          </p>
          <p className="text-sage-100">Thank you for choosing Move and Remove Solutions!</p>
        </div>
      </footer>
    </div>
  )
}
