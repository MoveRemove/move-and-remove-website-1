"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { Trash2, Truck } from "lucide-react"

export default function BookPage() {
  const [serviceType, setServiceType] = useState<"junk" | "move" | null>(null)

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

              <form action="https://formspree.io/f/xvojlzlb" method="POST" className="space-y-6">
                <input type="hidden" name="_subject" value="🗑️ NEW JUNK REMOVAL BOOKING REQUEST" />
                <input type="hidden" name="service_type" value="Junk Removal" />

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
                    <Select name="preferred_time" required>
                      <SelectTrigger className="mt-2 border-sage-200 focus:border-sage-600 focus:ring-sage-600">
                        <SelectValue placeholder="Choose a time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Morning (9:00 AM - 11:00 AM)">Morning (9:00 AM - 11:00 AM)</SelectItem>
                        <SelectItem value="Midday (11:00 AM - 1:00 PM)">Midday (11:00 AM - 1:00 PM)</SelectItem>
                        <SelectItem value="Early Afternoon (1:00 PM - 3:00 PM)">
                          Early Afternoon (1:00 PM - 3:00 PM)
                        </SelectItem>
                        <SelectItem value="Late Afternoon (3:00 PM - 5:00 PM)">
                          Late Afternoon (3:00 PM - 5:00 PM)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="junk-details" className="text-charcoal font-semibold">
                    Items to Remove & Additional Details *
                  </Label>
                  <Textarea
                    name="details"
                    id="junk-details"
                    rows={6}
                    placeholder="Please describe what needs to be removed (furniture, appliances, etc.), approximate quantities, and any special considerations (stairs, tight spaces, etc.)"
                    required
                    className="mt-2 border-sage-200 focus:border-sage-600 focus:ring-sage-600"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-sage-600 hover:bg-sage-700 text-white py-3 text-lg font-semibold rounded-lg shadow-lg transition-all hover:shadow-xl"
                >
                  Submit Junk Removal Request
                </Button>
              </form>
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

              <form action="https://formspree.io/f/xvojlzlb" method="POST" className="space-y-6">
                <input type="hidden" name="_subject" value="🚚 NEW MOVING HELP BOOKING REQUEST" />
                <input type="hidden" name="service_type" value="Moving Help" />

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
                    <Select name="move_type" required>
                      <SelectTrigger className="mt-2 border-sage-200 focus:border-sage-600 focus:ring-sage-600">
                        <SelectValue placeholder="Select move type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Small Load Move (1-2 bedroom)">Small Load Move (1-2 bedroom)</SelectItem>
                        <SelectItem value="Studio/Apartment Move">Studio/Apartment Move</SelectItem>
                        <SelectItem value="In-Home Furniture Relocation">In-Home Furniture Relocation</SelectItem>
                        <SelectItem value="Single Item Move">Single Item Move</SelectItem>
                      </SelectContent>
                    </Select>
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
                    <Select name="preferred_time" required>
                      <SelectTrigger className="mt-2 border-sage-200 focus:border-sage-600 focus:ring-sage-600">
                        <SelectValue placeholder="Choose a time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Morning (9:00 AM - 11:00 AM)">Morning (9:00 AM - 11:00 AM)</SelectItem>
                        <SelectItem value="Midday (11:00 AM - 1:00 PM)">Midday (11:00 AM - 1:00 PM)</SelectItem>
                        <SelectItem value="Early Afternoon (1:00 PM - 3:00 PM)">
                          Early Afternoon (1:00 PM - 3:00 PM)
                        </SelectItem>
                        <SelectItem value="Late Afternoon (3:00 PM - 5:00 PM)">
                          Late Afternoon (3:00 PM - 5:00 PM)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="move-details" className="text-charcoal font-semibold">
                    Moving Details & Special Requirements *
                  </Label>
                  <Textarea
                    name="details"
                    id="move-details"
                    rows={6}
                    placeholder="Please describe what needs to be moved (furniture, boxes, appliances, etc.), approximate quantities, any stairs or tight spaces, and any special handling requirements"
                    required
                    className="mt-2 border-sage-200 focus:border-sage-600 focus:ring-sage-600"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-sage-600 hover:bg-sage-700 text-white py-3 text-lg font-semibold rounded-lg shadow-lg transition-all hover:shadow-xl"
                >
                  Submit Moving Help Request
                </Button>
              </form>
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
