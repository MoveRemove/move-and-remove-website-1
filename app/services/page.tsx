import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sofa, Zap, Leaf, Hammer, Truck, Home } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-sage-200">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center">
          <img src="/logo.png" alt="Move and Remove Solutions Logo" className="h-16 mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold text-charcoal">Our Services</h1>
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
              className="px-4 py-2 text-white font-semibold hover:bg-sage-700 rounded transition-colors bg-sage-700"
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
      <div className="max-w-6xl mx-auto px-4 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-charcoal text-center mb-12">Junk Removal Services</h2>

          {/* Residential Services */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-charcoal mb-6">🏠 Residential Services</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-sage-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Sofa className="h-8 w-8 text-sage-600 mr-3" />
                    <h4 className="text-xl font-semibold text-charcoal">Furniture Removal</h4>
                  </div>
                  <p className="text-charcoal-light mb-4">Couches, beds, dressers, desks, chairs, dining tables.</p>
                  <p className="text-sm text-charcoal-light">
                    We'll safely remove and dispose of your old furniture, handling all the heavy lifting for you.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-sage-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Zap className="h-8 w-8 text-sage-600 mr-3" />
                    <h4 className="text-xl font-semibold text-charcoal">Appliance Removal</h4>
                  </div>
                  <p className="text-charcoal-light mb-4">Refrigerators, stoves, washers/dryers, dishwashers.</p>
                  <p className="text-sm text-charcoal-light">
                    Professional appliance removal with proper disposal and recycling when possible.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-sage-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Home className="h-8 w-8 text-sage-600 mr-3" />
                    <h4 className="text-xl font-semibold text-charcoal">General Junk Removal</h4>
                  </div>
                  <p className="text-charcoal-light mb-4">Old furniture, appliances, electronics, mattresses, etc.</p>
                  <p className="text-sm text-charcoal-light">
                    Complete household junk removal for any unwanted items taking up space.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-sage-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Home className="h-8 w-8 text-sage-600 mr-3" />
                    <h4 className="text-xl font-semibold text-charcoal">Garage, Basement & Attic Cleanouts</h4>
                  </div>
                  <p className="text-charcoal-light mb-4">Full decluttering and haul-away.</p>
                  <p className="text-sm text-charcoal-light">
                    Complete space cleanouts to help you reclaim your storage areas.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Commercial Services */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-charcoal mb-6">🏢 Commercial Services</h3>
            <div className="grid md:grid-cols-1 gap-6 max-w-2xl mx-auto">
              <Card className="border-sage-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Hammer className="h-8 w-8 text-sage-600 mr-3" />
                    <h4 className="text-xl font-semibold text-charcoal">Commercial Junk Removal</h4>
                  </div>
                  <p className="text-charcoal-light mb-4">
                    Office cleanouts, cubicles, filing cabinets, printers, monitors.
                  </p>
                  <p className="text-sm text-charcoal-light">
                    Professional commercial cleanouts for offices and business spaces.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Yard Services */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-charcoal mb-6">🌿 Yard Services</h3>
            <div className="grid md:grid-cols-1 gap-6 max-w-2xl mx-auto">
              <Card className="border-sage-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Leaf className="h-8 w-8 text-sage-600 mr-3" />
                    <h4 className="text-xl font-semibold text-charcoal">Yard Waste Removal</h4>
                  </div>
                  <p className="text-charcoal-light mb-4">Branches, bushes, leaves, fencing, soil.</p>
                  <p className="text-sm text-charcoal-light">
                    Complete yard cleanup service to keep your outdoor space looking its best.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Specialty Services */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-charcoal mb-6">🚛 Specialty Services</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-sage-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-charcoal mb-3">Estate Cleanouts</h4>
                  <p className="text-sm text-charcoal-light">
                    Respectful estate cleanout services for families in transition.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-sage-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-charcoal mb-3">Storage Unit Cleanouts</h4>
                  <p className="text-sm text-charcoal-light">Quick and efficient storage unit clearing services.</p>
                </CardContent>
              </Card>

              <Card className="border-sage-200 shadow-lg hover:shadow-xl transition-shadow md:col-span-2">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-charcoal mb-3">Moving Prep Cleanouts</h4>
                  <p className="text-sm text-charcoal-light">
                    Pre-move junk removal to lighten your load and reduce moving costs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Eco-Friendly Services */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-charcoal mb-6">♻️ Eco-Friendly Services</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-sage-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-charcoal mb-3">Recycling & Donation Pickups</h4>
                  <p className="text-sm text-charcoal-light">
                    We separate reusable or recyclable items whenever possible.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-sage-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-charcoal mb-3">E-waste Disposal</h4>
                  <p className="text-sm text-charcoal-light">
                    TVs, computers, phones, batteries handled properly and responsibly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional Services */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-charcoal mb-6">💪 Additional Services</h3>
            <div className="grid md:grid-cols-1 gap-6 max-w-2xl mx-auto">
              <Card className="border-sage-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-charcoal mb-3">Labor-Only Services</h4>
                  <p className="text-sm text-charcoal-light">
                    Just help moving items around the house or into a truck.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Moving Help */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-charcoal text-center mb-12">Moving Help</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="border-sage-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Truck className="h-8 w-8 text-sage-600 mr-3" />
                  <h3 className="text-xl font-semibold text-charcoal">Small Load Moves</h3>
                </div>
                <p className="text-charcoal-light mb-4">Ideal for 1–2 bedroom apartments or studio moves.</p>
                <p className="text-sm text-charcoal-light">
                  Perfect for smaller moves where you need professional help but don't want to pay big company prices.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Home className="h-8 w-8 text-sage-600 mr-3" />
                  <h3 className="text-xl font-semibold text-charcoal">In-Home Item Relocation</h3>
                </div>
                <p className="text-charcoal-light mb-4">Moving heavy furniture around the house or yard.</p>
                <p className="text-sm text-charcoal-light">
                  Need to rearrange furniture or move items within your home? We've got you covered.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="border-sage-200 shadow-lg bg-sage-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-charcoal mb-4">Ready to Get Started?</h3>
              <p className="text-charcoal-light mb-6">
                Want a custom quote? We're here to help with all your junk removal and moving needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/prices">
                  <Button className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg transition-all hover:shadow-xl">
                    View Prices
                  </Button>
                </Link>
                <Link href="/book">
                  <Button
                    variant="outline"
                    className="border-sage-600 text-sage-600 hover:bg-sage-600 hover:text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all"
                  >
                    Book Online
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-sage-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-lg">
            Want a custom quote?{" "}
            <Link href="/book" className="text-sage-100 hover:text-white underline transition-colors">
              Book Online
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="text-sage-100 hover:text-white underline transition-colors">
              Contact Us
            </Link>{" "}
            today.
          </p>
        </div>
      </footer>
    </div>
  )
}
