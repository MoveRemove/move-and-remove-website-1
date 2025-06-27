"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MessageSquare, Clock, CheckCircle, ArrowRight } from "lucide-react"

export default function BookPage() {
  const generateEmailTemplate = (type: "junk" | "move") => {
    const subject = type === "junk" ? "🗑️ JUNK REMOVAL REQUEST" : "🚚 MOVING HELP REQUEST"
    const body =
      type === "junk"
        ? `Hello Move & Remove Solutions,

I would like to request junk removal service. Here are my details:

Full Name: [Your Name]
Email: [Your Email]
Phone: [Your Phone]
Service Address: [Your Address]
Preferred Date: [Date]
Preferred Time: [Time]

Items to Remove:
[Please describe what needs to be removed]

Additional Details:
[Any special requirements or notes]

Thank you!`
        : `Hello Move & Remove Solutions,

I would like to request moving help service. Here are my details:

Full Name: [Your Name]
Email: [Your Email]
Phone: [Your Phone]
Type of Move: [Move Type]
From Address: [From Address]
To Address: [To Address]
Preferred Date: [Date]
Preferred Time: [Time]

Moving Details:
[Please describe what needs to be moved]

Additional Requirements:
[Any special requirements or notes]

Thank you!`

    return { subject, body }
  }

  const openGmailCompose = (type: "junk" | "move") => {
    const { subject, body } = generateEmailTemplate(type)
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=moveandremovesolutions@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(gmailUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-sage-200">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center">
          <img src="/logo.png" alt="Move and Remove Solutions Logo" className="h-16 mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold text-charcoal">Contact Us for Service</h1>
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
              className="px-4 py-2 text-white font-semibold hover:bg-sage-700 rounded transition-colors bg-sage-700"
            >
              Book Online
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Main Contact Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-charcoal mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-charcoal-light mb-8 max-w-2xl mx-auto">
            Getting your free quote is easy! Simply call, text, or email us with your service needs and we'll get back
            to you quickly with pricing and availability.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Phone */}
          <Card className="border-sage-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-sage-600" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-3">Call Us</h3>
              <p className="text-charcoal-light mb-4">Fastest way to get a quote and schedule service</p>
              <a href="tel:717-817-8363">
                <Button className="bg-sage-600 hover:bg-sage-700 text-white px-6 py-3 text-lg font-semibold rounded-lg w-full">
                  717-817-8363
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Text */}
          <Card className="border-sage-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="h-8 w-8 text-sage-600" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-3">Text Us</h3>
              <p className="text-charcoal-light mb-4">Send us a quick text with your service needs</p>
              <a href="sms:717-817-8363">
                <Button className="bg-sage-600 hover:bg-sage-700 text-white px-6 py-3 text-lg font-semibold rounded-lg w-full">
                  Text: 717-817-8363
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Email */}
          <Card className="border-sage-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-sage-600" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-3">Email Us</h3>
              <p className="text-charcoal-light mb-4">Send detailed information about your project</p>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=moveandremovesolutions@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-sage-600 hover:bg-sage-700 text-white px-6 py-3 text-lg font-semibold rounded-lg w-full">
                  Send Email
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Service-Specific Email Templates */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-charcoal text-center mb-8">Quick Email Templates</h3>
          <p className="text-center text-charcoal-light mb-8">
            Click below to open a pre-filled email template for your specific service needs:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-sage-200 shadow-lg">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-charcoal mb-3">🗑️ Junk Removal Request</h4>
                <p className="text-charcoal-light mb-4">
                  For furniture, appliances, cleanouts, and general junk removal services.
                </p>
                <Button
                  onClick={() => openGmailCompose("junk")}
                  className="bg-sage-600 hover:bg-sage-700 text-white px-6 py-3 rounded-lg w-full"
                >
                  Email for Junk Removal
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-sage-200 shadow-lg">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-charcoal mb-3">🚚 Moving Help Request</h4>
                <p className="text-charcoal-light mb-4">
                  For labor-only moving assistance and furniture relocation services.
                </p>
                <Button
                  onClick={() => openGmailCompose("move")}
                  className="bg-sage-600 hover:bg-sage-700 text-white px-6 py-3 rounded-lg w-full"
                >
                  Email for Moving Help
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* What to Include */}
        <Card className="border-sage-200 shadow-lg bg-sage-50 mb-12">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-charcoal mb-6 text-center">📝 What to Include in Your Message</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-charcoal mb-3">Contact Information:</h4>
                <ul className="text-charcoal-light space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                    Your name and phone number
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                    Service address
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                    Preferred date and time
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-charcoal mb-3">Service Details:</h4>
                <ul className="text-charcoal-light space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                    What needs to be removed/moved
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                    Approximate quantities
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                    Any special considerations (stairs, etc.)
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Response Time */}
        <Card className="border-sage-200 shadow-lg bg-sage-50">
          <CardContent className="p-8 text-center">
            <Clock className="h-12 w-12 text-sage-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-charcoal mb-4">Quick Response Guaranteed</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-charcoal mb-2">Phone Calls</h4>
                <p className="text-charcoal-light">Answered during business hours</p>
              </div>
              <div>
                <h4 className="font-semibold text-charcoal mb-2">Text Messages</h4>
                <p className="text-charcoal-light">Replied to within 2-4 hours</p>
              </div>
              <div>
                <h4 className="font-semibold text-charcoal mb-2">Emails</h4>
                <p className="text-charcoal-light">Responded to within 24 hours</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white rounded-lg border border-sage-200">
              <p className="text-charcoal font-medium">
                <strong>Business Hours:</strong> Monday - Saturday, 8:00 AM - 6:00 PM
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-sage-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-lg">
            <strong>Call:</strong> 717-817-8363 | <strong>Text:</strong> 717-817-8363 | <strong>Email:</strong>{" "}
            moveandremovesolutions@gmail.com
          </p>
        </div>
      </footer>
    </div>
  )
}
