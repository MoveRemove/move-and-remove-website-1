import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Shield, DollarSign, Phone, ArrowRight, Star, CheckCircle, Truck, Home, Zap } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hidden SEO Content */}
      <div style={{ display: "none" }}>
        <p>
          Move and Remove Solutions provides professional junk removal Hanover PA services with next-day availability
          throughout York County and surrounding areas. Our licensed and insured team offers comprehensive moving help
          York County residents trust, including furniture pickup Gettysburg, appliance removal Westminster MD, and
          complete property cleanouts. We specialize in same-day junk hauling Hanover Pennsylvania, basement cleanout
          services York PA, garage cleaning Spring Grove, and estate cleanout Littlestown PA. Our affordable moving
          assistance covers small moves, furniture relocation, and labor-only services throughout Adams County and
          Carroll County Maryland. From refrigerator removal York County to couch pickup Hanover PA, we handle all types
          of unwanted items with professional care. Contact us for fast, reliable junk removal services near me,
          including attic cleanouts, storage unit clearing, and yard waste removal throughout the greater Hanover area.
          Our local team provides transparent pricing for all junk hauling and moving services in Pennsylvania and
          Maryland.
        </p>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src="/logo.png" alt="Move and Remove Solutions Logo" className="h-12" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Move & Remove Solutions</h1>
                <p className="text-sm text-gray-600">Licensed & Insured • Hanover, PA</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="tel:717-817-8363" className="flex items-center space-x-2 text-sage-600 hover:text-sage-700">
                <Phone className="h-4 w-4" />
                <span className="font-semibold">717-817-8363</span>
              </a>
              <Link href="/book">
                <Button className="bg-sage-600 hover:bg-sage-700 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all">
                  Get Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-sage-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center space-x-8 py-4">
            <Link href="/" className="text-white font-medium hover:text-sage-200 transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-white font-medium hover:text-sage-200 transition-colors">
              Services
            </Link>
            <Link href="/prices" className="text-white font-medium hover:text-sage-200 transition-colors">
              Pricing
            </Link>
            <Link href="/testimonials" className="text-white font-medium hover:text-sage-200 transition-colors">
              Testimonials
            </Link>
            <Link href="/about" className="text-white font-medium hover:text-sage-200 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-white font-medium hover:text-sage-200 transition-colors">
              Contact
            </Link>
            <Link href="/book" className="text-white font-medium hover:text-sage-200 transition-colors">
              Book Online
            </Link>
          </div>
        </div>
      </nav>

      {/* Simplified Hero Section */}
      <section className="bg-gradient-to-br from-sage-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Fast, Affordable
                <span className="text-sage-600 block">Junk Removal</span>
                <span className="text-gray-700">& Moving Help</span>
              </h1>
              <p className="text-xl text-gray-600 mb-4 leading-relaxed">
                <strong>Serving PA & MD</strong>
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Locally owned and operated — Licensed, Insured, and Always On Time. Next-day service available in
                Hanover and surrounding areas.
              </p>

              {/* Simplified Trust Badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border">
                  <Shield className="h-4 w-4 text-sage-600 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Licensed & Insured</span>
                </div>
                <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border">
                  <MapPin className="h-4 w-4 text-sage-600 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Locally Owned</span>
                </div>
                <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border">
                  <Clock className="h-4 w-4 text-sage-600 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Next-Day Service</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/book">
                  <Button className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all">
                    Get Free Quote Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Simplified Hero Content */}
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <img src="/logo.png" alt="Move and Remove Solutions Logo" className="w-full max-w-sm mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Service You Can Trust</h2>
                <p className="text-gray-700 text-lg">
                  Licensed, insured, and locally owned. We handle the heavy lifting so you don't have to.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Banner */}
      <section className="bg-sage-600 py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-white text-lg">
            <strong>Service Areas:</strong> Hanover, York, Gettysburg, Westminster, and surrounding communities in PA &
            MD
          </p>
        </div>
      </section>

      {/* Simplified Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Professional Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From single item pickup to full property cleanouts, we handle it all with professionalism and care.
            </p>
          </div>

          {/* Minimum Service Fee Badge */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-sage-100 border border-sage-200 rounded-lg px-6 py-3">
              <DollarSign className="h-5 w-5 text-orange-600 mr-2" />
              <span className="text-sage-800 font-semibold">Minimum Service Fee: $125</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Junk Removal */}
            <Card className="hover:shadow-lg transition-shadow bg-white border border-gray-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Home className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Junk Removal</h3>
                <p className="text-gray-600 mb-4">Complete household cleanouts, furniture, and unwanted items.</p>
                <p className="text-sage-600 font-bold text-lg mb-4">Starting at $125</p>
                <Link
                  href="/services"
                  className="text-sage-600 font-semibold hover:text-sage-700 flex items-center justify-center"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Furniture & Appliances */}
            <Card className="hover:shadow-lg transition-shadow bg-white border border-gray-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Furniture & Appliances</h3>
                <p className="text-gray-600 mb-4">Couches, beds, refrigerators, washers, and more.</p>
                <p className="text-sage-600 font-bold text-lg mb-4">$65-$75 + $25 per extra item</p>
                <Link
                  href="/services"
                  className="text-sage-600 font-semibold hover:text-sage-700 flex items-center justify-center"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Moving Help */}
            <Card className="hover:shadow-lg transition-shadow bg-white border border-gray-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Truck className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Moving Help</h3>
                <p className="text-gray-600 mb-4">Labor-only moving assistance for small moves.</p>
                <p className="text-sage-600 font-bold text-lg mb-4">$80-120/hour (2 movers)</p>
                <Link
                  href="/services"
                  className="text-sage-600 font-semibold hover:text-sage-700 flex items-center justify-center"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Yard Waste */}
            <Card className="hover:shadow-lg transition-shadow bg-white border border-gray-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <div className="text-2xl">🌿</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Yard Waste Cleanup</h3>
                <p className="text-gray-600 mb-4">Branches, leaves, soil, and outdoor debris.</p>
                <p className="text-sage-600 font-bold text-lg mb-4">$200-$400</p>
                <Link
                  href="/services"
                  className="text-sage-600 font-semibold hover:text-sage-700 flex items-center justify-center"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Cleanouts */}
            <Card className="hover:shadow-lg transition-shadow bg-white border border-gray-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <div className="text-2xl">🏠</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Basement & Garage Cleanouts</h3>
                <p className="text-gray-600 mb-4">Complete space decluttering and haul-away.</p>
                <p className="text-sage-600 font-bold text-lg mb-4">$150-$500</p>
                <Link
                  href="/services"
                  className="text-sage-600 font-semibold hover:text-sage-700 flex items-center justify-center"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Estate Services */}
            <Card className="hover:shadow-lg transition-shadow bg-white border border-gray-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <div className="text-2xl">🏡</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Estate & Storage Cleanouts</h3>
                <p className="text-gray-600 mb-4">Respectful estate and storage unit clearing.</p>
                <p className="text-sage-600 font-bold text-lg mb-4">Custom Quote</p>
                <Link
                  href="/services"
                  className="text-sage-600 font-semibold hover:text-sage-700 flex items-center justify-center"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Simplified Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-xl text-gray-600">Rated 5 stars by our satisfied customers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-50 shadow-md border-0">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  "Easy booking, fast service, great prices. Cleared years of junk in under 2 hours!"
                </p>
                <p className="font-semibold text-gray-900">Marcus J.</p>
                <p className="text-gray-500 text-sm">Spring Grove, PA</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 shadow-md border-0">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  "No hidden fees. Honest and hardworking guys. Highly recommend!"
                </p>
                <p className="font-semibold text-gray-900">Tom D.</p>
                <p className="text-gray-500 text-sm">Littlestown, PA</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 shadow-md border-0">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  "You can tell they care. Great local service. The move was quick and painless."
                </p>
                <p className="font-semibold text-gray-900">Jasmine K.</p>
                <p className="text-gray-500 text-sm">Hanover, PA</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Simplified CTA Section */}
      <section className="py-20 bg-sage-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-sage-100 mb-8">Get your free, no-obligation quote today. We'll handle the rest.</p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 rounded-lg p-6 text-left">
              <CheckCircle className="h-8 w-8 text-sage-200 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Free Quotes</h3>
              <p className="text-sage-100">No hidden fees or surprise charges</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 text-left">
              <Clock className="h-8 w-8 text-sage-200 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Next-Day Service</h3>
              <p className="text-sage-100">Often available when you need us most</p>
            </div>
          </div>

          <div className="flex justify-center">
            <Link href="/book">
              <Button className="bg-white text-sage-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all">
                Get Free Quote Online
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Simplified Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img src="/logo.png" alt="Move and Remove Solutions Logo" className="h-10" />
                <div>
                  <h3 className="text-xl font-bold">Move & Remove Solutions</h3>
                  <p className="text-gray-400">Licensed & Insured • Locally Owned</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Professional junk removal and moving help services throughout PA & MD. Fast, affordable, and reliable.
              </p>
              <div className="flex space-x-4">
                <a href="tel:717-817-8363" className="text-sage-400 hover:text-sage-300">
                  717-817-8363
                </a>
                <span className="text-gray-600">|</span>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=moveandremovesolutions@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sage-400 hover:text-sage-300"
                >
                  moveandremovesolutions@gmail.com
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/services" className="hover:text-white">
                    Junk Removal
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Moving Help
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Cleanouts
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Yard Waste
                  </Link>
                </li>
                <li>
                  <Link href="/prices" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Service Areas</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Hanover, PA</li>
                <li>York, PA</li>
                <li>Gettysburg, PA</li>
                <li>Westminster, MD</li>
                <li>Spring Grove, PA</li>
                <li>Littlestown, PA</li>
                <li>+ Surrounding Areas</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-center md:text-left">
                &copy; 2024 Move & Remove Solutions. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="/about" className="text-gray-400 hover:text-white text-sm">
                  About
                </Link>
                <Link href="/testimonials" className="text-gray-400 hover:text-white text-sm">
                  Reviews
                </Link>
                <Link href="/contact" className="text-gray-400 hover:text-white text-sm">
                  Contact
                </Link>
                <Link href="/book" className="text-gray-400 hover:text-white text-sm">
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
