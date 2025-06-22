"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState, useEffect } from "react"
import { Trash2, Truck, AlertCircle, CheckCircle } from "lucide-react"

// EmailJS configuration
const EMAILJS_SERVICE_ID = "service_x30hhbp"
const EMAILJS_TEMPLATE_ID_JUNK = "template_y3prwme"
const EMAILJS_TEMPLATE_ID_MOVE = "template_a5ogr5k"
const EMAILJS_PUBLIC_KEY = "TJgeFdygqh8M1iPRU"

export default function BookPage() {
  const [serviceType, setServiceType] = useState<"junk" | "move" | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [emailJSLoaded, setEmailJSLoaded] = useState(false)

  // Load EmailJS script
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
    script.onload = () => {
      // Initialize EmailJS
      if (window.emailjs) {
        window.emailjs.init(EMAILJS_PUBLIC_KEY)
        setEmailJSLoaded(true)
      }
    }
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    const form = e.currentTarget
    const formData = new FormData(form)

    // Convert FormData to object
    const templateParams: Record<string, string> = {}
    formData.forEach((value, key) => {
      templateParams[key] = value.toString()
    })

    // Add current date and time
    templateParams.submission_date = new Date().toLocaleString()

    try {
      if (!emailJSLoaded || !window.emailjs) {
        throw new Error("EmailJS not loaded")
      }

      const templateId = serviceType === "junk" ? EMAILJS_TEMPLATE_ID_JUNK : EMAILJS_TEMPLATE_ID_MOVE

      const result = await window.emailjs.send(EMAILJS_SERVICE_ID, templateId, templateParams)

      if (result.status === 200) {
        setSubmitStatus("success")
        form.reset()
        // Redirect to thank you page after 2 seconds
        setTimeout(() => {
          window.location.href = "/thank-you"
        }, 2000)
      } else {
        throw new Error("EmailJS send failed")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

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
          <h1 className="text-3xl md:text-4xl font-bold text-charcoal">Book Your Service Online</h1>
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
        {/* Service Selection */}
        {!serviceType && (
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-charcoal mb-8">Choose Your Service Type</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <Card
                className="border-sage-200 shadow-lg hover:shadow-xl transition-all cursor-pointer hover:border-sage-400"
                onClick={() => setServiceType("junk")}
              >
                <CardContent className="p-8 text-center">
                  <Trash2 className="h-16 w-16 text-sage-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-charcoal mb-2">Junk Removal</h3>
                  <p className="text-charcoal-light">Furniture, appliances, yard waste, and more</p>
                </CardContent>
              </Card>

              <Card
                className="border-sage-200 shadow-lg hover:shadow-xl transition-all cursor-pointer hover:border-sage-400"
                onClick={() => setServiceType("move")}
              >
                <CardContent className="p-8 text-center">
                  <Truck className="h-16 w-16 text-sage-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-charcoal mb-2">Moving Help</h3>
                  <p className="text-charcoal-light">Small moves and furniture relocation</p>
                </CardContent>
              </Card>
            </div>

            {/* Alternative Contact Methods */}
            <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold text-charcoal mb-4">Prefer to Contact Us Directly?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:717-817-8363">
                  <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-lg font-semibold">
                    📞 Call: 717-817-8363
                  </Button>
                </a>
                <Button
                  onClick={() => openGmailCompose("junk")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg font-semibold"
                >
                  ✉️ Email for Junk Removal
                </Button>
                <Button
                  onClick={() => openGmailCompose("move")}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 text-lg font-semibold"
                >
                  ✉️ Email for Moving Help
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
            <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
            <span className="text-green-800">
              Success! Your request has been submitted. Redirecting to thank you page...
            </span>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center mb-2">
              <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
              <span className="text-red-800 font-semibold">Form submission failed</span>
            </div>
            <p className="text-red-700 text-sm mb-3">Don't worry! You can still reach us using the options below:</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <a href="tel:717-817-8363">
                <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                  📞 Call Us
                </Button>
              </a>
              <Button
                size="sm"
                onClick={() => openGmailCompose(serviceType!)}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                ✉️ Email Instead
              </Button>
            </div>
          </div>
        )}

        {/* Junk Removal Form */}
        {serviceType === "junk" && (
          <Card className="border-sage-200 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-charcoal">Junk Removal Booking</h2>
                <Button
                  variant="outline"
                  onClick={() => setServiceType(null)}
                  className="border-sage-600 text-sage-600 hover:bg-sage-600 hover:text-white"
                >
                  Change Service
                </Button>
              </div>

              <form className="space-y-6" onSubmit={handleFormSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="junk-name" className="text-charcoal font-semibold">
                      Full Name *
                    </Label>
                    <Input
                      type="text"
                      name="name"
                      id="junk-name"
                      required
                      className="mt-2 border-sage-200 focus:border-sage-600 focus:ring-sage-600"
                    />
                  </div>

                  <div>
                    <Label htmlFor="junk-email" className="text-charcoal font-semibold">
                      Email Address *
                    </Label>
                    <Input
                      type="email"
                      name="email"
                      id="junk-email"
                      required
                      className="mt-2 border-sage-200 focus:border-sage-600 focus:ring-sage-600"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="junk-phone" className="text-charcoal font-semibold">
                      Phone Number *
                    </Label>
                    <Input
                      type="tel"
                      name="phone"
                      id="junk-phone"
                      required
                      placeholder="(717) 123-4567"
                      className="mt-2 border-sage-200 focus:border-sage-600 focus:ring-sage-600"
                    />
                  </div>

                  <div>
                    <Label htmlFor="junk-address" className="text-charcoal font-semibold">
                      Service Address *
                    </Label>
                    <Input
                      type="text"
                      name="address"
                      id="junk-address"
                      required
                      placeholder="123 Main St, Hanover, PA"
                      className="mt-2 border-sage-200 focus:border-sage-600 focus:ring-sage-600"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="junk-date" className="text-charcoal font-semibold">
                      Preferred Date *
                    </Label>
                    <Input
                      type="date"
                      name="preferred_date"
                      id="junk-date"
                      required
                      min={new Date().toISOString().split("T")[0]}
                      className="mt-2 border-sage-200 focus:border-sage-600 focus:ring-sage-600"
                    />
                  </div>

                  <div>
                    <Label htmlFor="junk-time" className="text-charcoal font-semibold">
                      Preferred Time Slot *
                    </Label>
                    <select
                      name="preferred_time"
                      id="junk-time"
                      required
                      className="mt-2 w-full px-3 py-2 border border-sage-200 rounded-md focus:border-sage-600 focus:ring-sage-600"
                    >
                      <option value="">Choose a time</option>
                      <option value="Morning (9:00 AM - 11:00 AM)">Morning (9:00 AM - 11:00 AM)</option>
                      <option value="Midday (11:00 AM - 1:00 PM)">Midday (11:00 AM - 1:00 PM)</option>
                      <option value="Early Afternoon (1:00 PM - 3:00 PM)">Early Afternoon (1:00 PM - 3:00 PM)</option>
                      <option value="Late Afternoon (3:00 PM - 5:00 PM)">Late Afternoon (3:00 PM - 5:00 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="junk-details" className="text-charcoal font-semibold">
                    Items to Remove & Additional Details *
                  </Label>
                  <Textarea
                    name="message"
                    id="junk-details"
                    rows={6}
                    placeholder="Please describe what needs to be removed (furniture, appliances, etc.), approximate quantities, and any special considerations (stairs, tight spaces, etc.)"
                    required
                    className="mt-2 border-sage-200 focus:border-sage-600 focus:ring-sage-600"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || !emailJSLoaded}
                  className="w-full bg-sage-600 hover:bg-sage-700 text-white py-3 text-lg font-semibold rounded-lg shadow-lg transition-all hover:shadow-xl disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting Request..." : "Submit Junk Removal Request"}
                </Button>
              </form>

              {/* Backup Options */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg border">
                <p className="text-sm text-charcoal-light mb-3">
                  <strong>Having trouble with the form?</strong> Use these backup options:
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <a href="tel:717-817-8363">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                      📞 Call: 717-817-8363
                    </Button>
                  </a>
                  <Button
                    size="sm"
                    onClick={() => openGmailCompose("junk")}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    ✉️ Open Gmail
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Moving Help Form */}
        {serviceType === "move" && (
          <Card className="border-sage-200 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-charcoal">Moving Help Booking</h2>
                <Button
                  variant="outline"
                  onClick={() => setServiceType(null)}
                  className="border-sage-600 text-sage-600 hover:bg-sage-600 hover:text-white"
                >
                  Change Service
                </Button>
              </div>

              <form className="space-y-6" onSubmit={handleFormSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="move-name" className="text-charcoal font-semibold">
                      Full Name *
                    </Label>
                    <Input
                      type="text"
                      name="name"
                      id="move-name"
                      required
                      className="mt-2 border-sage-200 focus:border-sage-600 focus:ring-sage-600"
                    />
                  </div>

                  <div>
                    <Label htmlFor="move-email" className="text-charcoal font-semibold">
                      Email Address *
                    </Label>
                    <Input
                      type="email"
                      name="email"
                      id="move-email"
                      required
                      className="mt-2 border-sage-200 focus:border-sage-600 focus:ring-sage-600"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="move-phone" className="text-charcoal font-semibold">
                      Phone Number *
                    </Label>
                    <Input
                      type="tel"
                      name="phone"
                      id="move-phone"
                      required
                      placeholder="(717) 123-4567"
                      className="mt-2 border-sage-200 focus:border-sage-600 focus:ring-sage-600"
                    />
                  </div>

                  <div>
                    <Label htmlFor="move-type" className="text-charcoal font-semibold">
                      Type of Move *
                    </Label>
                    <select
                      name="move_type"
                      id="move-type"
                      required
                      className="mt-2 w-full px-3 py-2 border border-sage-200 rounded-md focus:border-sage-600 focus:ring-sage-600"
                    >
                      <option value="">Select move type</option>
                      <option value="Small Load Move (1-2 bedroom)">Small Load Move (1-2 bedroom)</option>
                      <option value="Studio/Apartment Move">Studio/Apartment Move</option>
                      <option value="In-Home Furniture Relocation">In-Home Furniture Relocation</option>
                      <option value="Single Item Move">Single Item Move</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="move-from" className="text-charcoal font-semibold">
                      Moving From Address *
                    </Label>
                    <Input
                      type="text"
                      name="from_address"
                      id="move-from"
                      required
                      placeholder="123 Main St, Hanover, PA"
                      className="mt-2 border-sage-200 focus:border-sage-600 focus:ring-sage-600"
                    />
                  </div>

                  <div>
                    <Label htmlFor="move-to" className="text-charcoal font-semibold">
                      Moving To Address *
                    </Label>
                    <Input
                      type="text"
                      name="to_address"
                      id="move-to"
                      required
                      placeholder="456 Oak Ave, Hanover, PA (or 'Same location' for in-home moves)"
                      className="mt-2 border-sage-200 focus:border-sage-600 focus:ring-sage-600"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="move-date" className="text-charcoal font-semibold">
                      Preferred Date *
                    </Label>
                    <Input
                      type="date"
                      name="preferred_date"
                      id="move-date"
                      required
                      min={new Date().toISOString().split("T")[0]}
                      className="mt-2 border-sage-200 focus:border-sage-600 focus:ring-sage-600"
                    />
                  </div>

                  <div>
                    <Label htmlFor="move-time" className="text-charcoal font-semibold">
                      Preferred Time Slot *
                    </Label>
                    <select
                      name="preferred_time"
                      id="move-time"
                      required
                      className="mt-2 w-full px-3 py-2 border border-sage-200 rounded-md focus:border-sage-600 focus:ring-sage-600"
                    >
                      <option value="">Choose a time</option>
                      <option value="Morning (9:00 AM - 11:00 AM)">Morning (9:00 AM - 11:00 AM)</option>
                      <option value="Midday (11:00 AM - 1:00 PM)">Midday (11:00 AM - 1:00 PM)</option>
                      <option value="Early Afternoon (1:00 PM - 3:00 PM)">Early Afternoon (1:00 PM - 3:00 PM)</option>
                      <option value="Late Afternoon (3:00 PM - 5:00 PM)">Late Afternoon (3:00 PM - 5:00 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="move-details" className="text-charcoal font-semibold">
                    Moving Details & Special Requirements *
                  </Label>
                  <Textarea
                    name="message"
                    id="move-details"
                    rows={6}
                    placeholder="Please describe what needs to be moved (furniture, boxes, appliances, etc.), approximate quantities, any stairs or tight spaces, and any special handling requirements"
                    required
                    className="mt-2 border-sage-200 focus:border-sage-600 focus:ring-sage-600"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || !emailJSLoaded}
                  className="w-full bg-sage-600 hover:bg-sage-700 text-white py-3 text-lg font-semibold rounded-lg shadow-lg transition-all hover:shadow-xl disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting Request..." : "Submit Moving Help Request"}
                </Button>
              </form>

              {/* Backup Options */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg border">
                <p className="text-sm text-charcoal-light mb-3">
                  <strong>Having trouble with the form?</strong> Use these backup options:
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <a href="tel:717-817-8363">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                      📞 Call Us
                    </Button>
                  </a>
                  <Button
                    size="sm"
                    onClick={() => openGmailCompose("move")}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    ✉️ Open Gmail
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
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

// Extend Window interface for TypeScript
declare global {
  interface Window {
    emailjs: any
  }
}
